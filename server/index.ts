import express from "express";
import cors from "cors";
import path from "path";
import { handleDemo } from "./routes/demo";
import { handleChat } from "./routes/chat";
import {
  createCheckoutSession,
  handleWebhook,
  getSubscription,
} from "./routes/subscription";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use("/api/webhook", express.raw({ type: "application/json" }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Health check
  app.get("/api/ping", (_req, res) => {
    res.json({ message: "SaintVisionAI API v50 - Production Ready!" });
  });

  // Demo route
  app.get("/api/demo", handleDemo);

  // Chat API
  app.post("/api/chat", handleChat);

  // Subscription APIs
  app.post("/api/subscription/checkout", createCheckoutSession);
  app.post("/api/webhook", handleWebhook);
  app.get("/api/subscription/:userId", getSubscription);

  // Serve static files in production
  if (process.env.NODE_ENV === "production") {
    const spaPath = path.join(process.cwd(), "dist/spa");
    app.use(express.static(spaPath));

    // SPA fallback: serve index.html for all non-API routes
    app.get("*", (req, res) => {
      // Skip API routes
      if (req.path.startsWith("/api/")) {
        return res.status(404).json({ error: "API endpoint not found" });
      }
      res.sendFile(path.join(spaPath, "index.html"));
    });
  }

  return app;
}
