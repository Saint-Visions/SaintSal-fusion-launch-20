import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createServer } from "./server";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isDev = command === "serve";

  return {
    server: {
      host: "::",
      port: 8080,
    },
    build: {
      outDir: "dist/spa",
      sourcemap: false,
      chunkSizeWarningLimit: 1000,
    },
    plugins: [
      react(),
      ...(isDev ? [expressPlugin()] : []), // Only apply express in dev mode
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./client"),
        "@shared": path.resolve(__dirname, "./shared"),
      },
    },
  };
});

// Express plugin for local dev
function expressPlugin(): Plugin {
  return {
    name: "express-dev-plugin",
    apply: "serve",
    configureServer(server) {
      const app = createServer();
      // Mount express app for API routes only during development
      server.middlewares.use((req, res, next) => {
        if (req.url?.startsWith("/api/")) {
          app(req, res, next);
        } else {
          // Let Vite handle all other routes (SPA fallback)
          next();
        }
      });
    },
  };
}
