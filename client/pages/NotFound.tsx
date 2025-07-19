import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/ui/brand-logo";
import { ArrowLeft, Home, Search, HelpCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  const popularPages = [
    { path: "/", label: "Home", icon: Home },
    { path: "/dashboard", label: "Dashboard", icon: Search },
    { path: "/pricing", label: "Pricing", icon: Search },
    { path: "/help", label: "Help", icon: HelpCircle },
  ];

  return (
    <div className="min-h-screen bg-charcoal-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 circuit-pattern opacity-5"></div>

      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(16, 22, 28, 0.98) 0%, rgba(16, 22, 28, 0.95) 100%),
                           url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')`,
        }}
      ></div>

      <div className="relative z-40 min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-2xl mx-auto">
          {/* Logo */}
          <BrandLogo
            variant="compact"
            size="lg"
            className="justify-center mb-8"
          />

          {/* 404 Error */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold saintvision-gradient-text mb-4 font-dialien">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Page Not Found
            </h2>
            <p className="text-white/70 text-lg mb-2">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <p className="text-white/50 text-sm">
              Attempted route:{" "}
              <code className="bg-white/10 px-2 py-1 rounded text-gold-300">
                {location.pathname}
              </code>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/">
              <Button
                size="lg"
                className="bg-gold-500 text-charcoal-900 hover:bg-gold-400 saintvision-glow"
              >
                <Home className="mr-2 w-5 h-5" />
                Return Home
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Go Back
            </Button>
          </div>

          {/* Popular Pages */}
          <div className="glass-morphism rounded-2xl p-8">
            <h3 className="text-lg font-semibold mb-6 text-gold-300">
              Popular Pages
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {popularPages.map(page => {
                const Icon = page.icon;
                return (
                  <Link
                    key={page.path}
                    to={page.path}
                    className="flex flex-col items-center p-4 hover:bg-white/5 rounded-lg transition-colors"
                  >
                    <Icon className="w-8 h-8 text-gold-300 mb-2" />
                    <span className="text-sm text-white/80">{page.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Help Text */}
          <div className="mt-8 text-center">
            <p className="text-white/50 text-sm">
              If you believe this is an error, please{" "}
              <Link
                to="/help"
                className="text-gold-300 hover:text-gold-200 underline"
              >
                contact support
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
