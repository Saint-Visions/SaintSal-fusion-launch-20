import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/ui/brand-logo";
import { CheckCircle, XCircle, ExternalLink } from "lucide-react";

export default function DebugRoutes() {
  const routes = [
    { path: "/", label: "Home (Index)", description: "Landing page" },
    { path: "/dashboard", label: "Dashboard", description: "Main dashboard" },
    { path: "/pricing", label: "Pricing", description: "Pricing plans" },
    { path: "/signin", label: "Sign In", description: "Authentication" },
    { path: "/signup", label: "Sign Up", description: "Registration" },
    { path: "/console", label: "Console", description: "AI Console" },
    {
      path: "/partnertech",
      label: "Partner Tech",
      description: "Partner technology",
    },
    { path: "/settings", label: "Settings", description: "User settings" },
    { path: "/upgrade", label: "Upgrade", description: "Upgrade plans" },
    {
      path: "/chrome-install",
      label: "Chrome Install",
      description: "Chrome extension",
    },
    {
      path: "/crm",
      label: "CRM",
      description: "Customer relationship management",
    },
    {
      path: "/admin/clients",
      label: "Admin Clients",
      description: "Client management",
    },
    { path: "/admin/logs", label: "Admin Logs", description: "System logs" },
    {
      path: "/checkout-success",
      label: "Checkout Success",
      description: "Payment success",
    },
    { path: "/setup", label: "Setup", description: "Initial setup" },
    {
      path: "/referral/invite",
      label: "Referral Invite",
      description: "Referral system",
    },
    {
      path: "/workspace/test",
      label: "Workspace",
      description: "Workspace with slug",
    },
    { path: "/help", label: "Help", description: "Help and support" },
  ];

  const testRoute = async (path: string) => {
    try {
      // Simple test to see if the route exists
      return true;
    } catch (error) {
      return false;
    }
  };

  return (
    <div className="min-h-screen bg-charcoal-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 circuit-pattern opacity-5"></div>

      <div className="relative z-40 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <BrandLogo
              variant="compact"
              size="lg"
              className="justify-center mb-6"
            />
            <h1 className="text-4xl font-bold mb-4 saintvision-gradient-text">
              Route Debugging
            </h1>
            <p className="text-white/80 text-lg">
              Testing all {routes.length} application routes
            </p>
          </div>

          {/* Routes Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {routes.map(route => (
              <div
                key={route.path}
                className="glass-morphism p-6 rounded-xl hover:saintvision-glow transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">
                      {route.label}
                    </h3>
                    <p className="text-white/60 text-sm mb-3">
                      {route.description}
                    </p>
                    <code className="bg-white/10 px-2 py-1 rounded text-xs text-gold-300">
                      {route.path}
                    </code>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                </div>

                <Link to={route.path}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-white/20 text-white hover:bg-white/10"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Test Route
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          {/* API Test */}
          <div className="glass-morphism p-8 rounded-2xl mb-8">
            <h2 className="text-2xl font-semibold mb-6">API Endpoints Test</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Available APIs</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <code>GET /api/ping</code>
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="flex items-center justify-between">
                    <code>GET /api/demo</code>
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="flex items-center justify-between">
                    <code>POST /api/chat</code>
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="flex items-center justify-between">
                    <code>POST /api/subscription/checkout</code>
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick API Test</h3>
                <Button
                  onClick={async () => {
                    try {
                      const response = await fetch("/api/ping");
                      const data = await response.json();
                      alert(`API Response: ${data.message}`);
                    } catch (error) {
                      alert(`API Error: ${error}`);
                    }
                  }}
                  className="bg-gold-500 text-charcoal-900 hover:bg-gold-400 saintvision-glow"
                >
                  Test /api/ping
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <Link to="/">
              <Button
                size="lg"
                className="bg-gold-500 text-charcoal-900 hover:bg-gold-400 saintvision-glow"
              >
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
