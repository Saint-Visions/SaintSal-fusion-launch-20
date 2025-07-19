// SaintVisionAI™ Service Worker
const CACHE_NAME = "saintvisionai-v1.0.0";
const STATIC_CACHE_NAME = "saintvisionai-static-v1.0.0";
const DYNAMIC_CACHE_NAME = "saintvisionai-dynamic-v1.0.0";

// Assets to cache immediately
const STATIC_ASSETS = [
  "/",
  "/dashboard",
  "/console",
  "/signin",
  "/signup",
  "/pricing",
  "/manifest.json",
  "https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F66fe1620bff64382adab8967dd63b6ff?format=webp&width=800",
  "https://cdn.builder.io/api/v1/assets/065997bd13e4442e888a08652fcd61ba/better-saintsal-transparent-d9c734",
  "https://fonts.googleapis.com/css2?family=D-DIN:wght@400;700&display=swap",
];

// API endpoints to cache
const API_CACHE_PATTERNS = ["/api/ping", "/api/demo", "/api/health"];

// Install event - cache static assets
self.addEventListener("install", event => {
  console.log("SaintVisionAI™ SW: Installing...");

  event.waitUntil(
    caches
      .open(STATIC_CACHE_NAME)
      .then(cache => {
        console.log("SaintVisionAI™ SW: Caching static assets");
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log("SaintVisionAI™ SW: Installation complete");
        return self.skipWaiting();
      })
      .catch(error => {
        console.error("SaintVisionAI™ SW: Installation failed", error);
      }),
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", event => {
  console.log("SaintVisionAI™ SW: Activating...");

  event.waitUntil(
    caches
      .keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(cacheName => {
              return (
                cacheName !== STATIC_CACHE_NAME &&
                cacheName !== DYNAMIC_CACHE_NAME
              );
            })
            .map(cacheName => {
              console.log("SaintVisionAI™ SW: Deleting old cache:", cacheName);
              return caches.delete(cacheName);
            }),
        );
      })
      .then(() => {
        console.log("SaintVisionAI™ SW: Activation complete");
        return self.clients.claim();
      }),
  );
});

// Fetch event - implement caching strategies
self.addEventListener("fetch", event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== "GET") {
    return;
  }

  // Handle different types of requests
  if (request.url.includes("/api/")) {
    // API requests - Network first, cache fallback
    event.respondWith(networkFirstStrategy(request));
  } else if (request.destination === "image") {
    // Images - Cache first, network fallback
    event.respondWith(cacheFirstStrategy(request));
  } else if (request.url.includes("fonts.googleapis.com")) {
    // Fonts - Cache first
    event.respondWith(cacheFirstStrategy(request));
  } else if (request.url.includes("cdn.builder.io")) {
    // Builder.io assets - Cache first
    event.respondWith(cacheFirstStrategy(request));
  } else {
    // HTML/JS/CSS - Stale while revalidate
    event.respondWith(staleWhileRevalidateStrategy(request));
  }
});

// Network first strategy (for API calls)
async function networkFirstStrategy(request) {
  try {
    const networkResponse = await fetch(request);

    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    console.log(
      "SaintVisionAI™ SW: Network failed, trying cache:",
      request.url,
    );
    const cachedResponse = await caches.match(request);

    if (cachedResponse) {
      return cachedResponse;
    }

    // Return offline page or error response
    return new Response(
      JSON.stringify({
        error: "Network unavailable",
        message: "SaintVisionAI™ is temporarily offline",
      }),
      {
        status: 503,
        statusText: "Service Unavailable",
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}

// Cache first strategy (for images and static assets)
async function cacheFirstStrategy(request) {
  const cachedResponse = await caches.match(request);

  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);

    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    console.log("SaintVisionAI™ SW: Failed to fetch:", request.url);

    // Return placeholder for images
    if (request.destination === "image") {
      return new Response(
        '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="#10161C"/><text x="100" y="100" text-anchor="middle" fill="#FFD700" font-family="Arial" font-size="12">SaintVisionAI™</text></svg>',
        { headers: { "Content-Type": "image/svg+xml" } },
      );
    }

    throw error;
  }
}

// Stale while revalidate strategy (for HTML/JS/CSS)
async function staleWhileRevalidateStrategy(request) {
  const cache = await caches.open(DYNAMIC_CACHE_NAME);
  const cachedResponse = await cache.match(request);

  const networkResponsePromise = fetch(request)
    .then(networkResponse => {
      if (networkResponse.ok) {
        cache.put(request, networkResponse.clone());
      }
      return networkResponse;
    })
    .catch(() => cachedResponse);

  return cachedResponse || networkResponsePromise;
}

// Background sync for offline actions
self.addEventListener("sync", event => {
  console.log("SaintVisionAI™ SW: Background sync:", event.tag);

  if (event.tag === "background-sync") {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // Handle offline actions when back online
  console.log("SaintVisionAI™ SW: Performing background sync");

  // Sync any pending chat messages, form submissions, etc.
  try {
    // Implementation for syncing offline data
    const pendingRequests = await getStoredRequests();

    for (const request of pendingRequests) {
      await fetch(request.url, request.options);
    }

    await clearStoredRequests();
  } catch (error) {
    console.error("SaintVisionAI™ SW: Background sync failed:", error);
  }
}

// Push notification handling
self.addEventListener("push", event => {
  console.log("SaintVisionAI™ SW: Push received");

  const options = {
    body: event.data ? event.data.text() : "New message from SaintVisionAI™",
    icon:
      "https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F66fe1620bff64382adab8967dd63b6ff?format=webp&width=192",
    badge:
      "https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F66fe1620bff64382adab8967dd63b6ff?format=webp&width=72",
    vibrate: [200, 100, 200],
    data: {
      url: "/",
    },
    actions: [
      {
        action: "open",
        title: "Open SaintVisionAI™",
        icon:
          "https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F66fe1620bff64382adab8967dd63b6ff?format=webp&width=72",
      },
    ],
  };

  event.waitUntil(
    self.registration.showNotification("SaintVisionAI™", options),
  );
});

// Notification click handling
self.addEventListener("notificationclick", event => {
  console.log("SaintVisionAI™ SW: Notification clicked");

  event.notification.close();

  event.waitUntil(clients.openWindow(event.notification.data.url || "/"));
});

// Helper functions for offline storage
async function getStoredRequests() {
  // Implementation to get stored offline requests
  return [];
}

async function clearStoredRequests() {
  // Implementation to clear stored offline requests
}

// Message handling for communication with main thread
self.addEventListener("message", event => {
  console.log("SaintVisionAI™ SW: Message received:", event.data);

  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }

  if (event.data && event.data.type === "GET_VERSION") {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});

console.log("SaintVisionAI™ Service Worker loaded successfully! 🚀");
