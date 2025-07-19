// Production configuration for SaintVisionAI
export const PRODUCTION_CONFIG = {
  // Brand Configuration
  BRAND: {
    name: "SaintVisionAI™",
    tagline: "Cookin' Knowledge",
    companyName: "SaintVision Group",

    // Logo URLs
    logos: {
      main:
        "https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F66fe1620bff64382adab8967dd63b6ff?format=webp&width=800",
      hero:
        "https://cdn.builder.io/api/v1/assets/065997bd13e4442e888a08652fcd61ba/better-saintsal-transparent-d9c734",
      favicon:
        "https://cdn.builder.io/api/v1/assets/065997bd13e4442e888a08652fcd61ba/cookin-950b8e",
    },

    // Background Images
    backgrounds: {
      hero:
        "https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F317f7c64793d47ab90d506bd066bedbb?format=webp&width=800",
      auth:
        "https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F318002d06a1a43ddab311553a42ce777?format=webp&width=800",
    },
  },

  // API Configuration
  API: {
    baseUrl: process.env.VITE_API_BASE_URL || "/api",
    timeout: 30000,
    retryAttempts: 3,
  },

  // Feature Flags
  FEATURES: {
    enableChat: true,
    enableCRM: true,
    enableConsole: true,
    enableAnalytics: true,
    enableVoiceCommands: true,
    enableMultiModal: true,
  },

  // AI Services
  AI: {
    models: {
      primary: "gpt-4o",
      fallback: "gpt-4",
      vision: "gpt-4-vision-preview",
    },
    maxTokens: 4096,
    temperature: 0.7,
  },

  // Enterprise Features
  ENTERPRISE: {
    compliance: {
      hacp: true,
      soc2: true,
      gdpr: true,
      hipaa: false, // Enable as needed
    },
    sla: {
      uptime: "99.9%",
      responseTime: "< 200ms",
      support: "24/7",
    },
  },

  // Performance
  PERFORMANCE: {
    enableLazyLoading: true,
    enableCaching: true,
    enableCompression: true,
    enablePWA: true,
  },

  // SEO and Meta
  SEO: {
    title: "SaintVisionAI™ - Enterprise AI Solutions",
    description:
      "Advanced artificial intelligence platform for enterprise deployment. Secure, scalable, and compliant AI infrastructure.",
    keywords:
      "enterprise AI, artificial intelligence, SaintVisionAI, GPT-4, business automation",
    ogImage:
      "https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F317f7c64793d47ab90d506bd066bedbb?format=webp&width=1200",
  },

  // Contact Information
  CONTACT: {
    email: "sal@saintvisionai.com",
    phone: "+1 (949) 997-2097",
    company: "SaintVision Group",
    address: {
      street: "",
      city: "",
      state: "",
      zip: "",
      country: "USA",
    },
  },

  // Social Links
  SOCIAL: {
    twitter: "",
    linkedin: "",
    github: "",
    discord: "",
  },

  // Analytics
  ANALYTICS: {
    googleAnalyticsId: "", // Add GA4 ID
    enableHotjar: false,
    enableMixpanel: false,
  },

  // Security
  SECURITY: {
    enableCSP: true,
    enableHSTS: true,
    enableRateLimiting: true,
    sessionTimeout: 3600000, // 1 hour
  },
} as const;

export type ProductionConfig = typeof PRODUCTION_CONFIG;
