import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/ui/brand-logo";
import { cn } from "@/lib/utils";
import { Menu, X, Settings, User, LogOut, ChevronDown } from "lucide-react";

interface NavigationProps {
  variant?: "public" | "authenticated";
  className?: string;
}

export function Navigation({ variant = "public", className }: NavigationProps) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const publicNavItems = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/pricing", label: "Pricing" },
    { path: "/help", label: "Help" },
  ];

  const authenticatedNavItems = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/console", label: "Console" },
    { path: "/crm", label: "CRM" },
    { path: "/workspace", label: "Workspace" },
    { path: "/settings", label: "Settings" },
  ];

  const navItems =
    variant === "authenticated" ? authenticatedNavItems : publicNavItems;

  return (
    <nav
      className={cn(
        "relative z-50 flex items-center justify-between p-6 lg:px-12 border-b border-white/10",
        className,
      )}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <BrandLogo size="md" showAIIndicator={true} />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "text-white/80 hover:text-gold-300 transition-colors font-medium",
              location.pathname === item.path && "text-gold-300",
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Desktop Actions */}
      <div className="hidden md:flex items-center space-x-4">
        {variant === "public" ? (
          <>
            <Link to="/signin">
              <Button
                variant="outline"
                className="border-gold-500 text-gold-300 hover:bg-gold-500 hover:text-charcoal-900"
              >
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-gold-500 text-charcoal-900 hover:bg-gold-400 saintvision-glow">
                Start Cookin'
              </Button>
            </Link>
          </>
        ) : (
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2 text-white/80">
              <div className="w-8 h-8 bg-gold-500 rounded-lg flex items-center justify-center">
                <User className="w-4 h-4 text-charcoal-900" />
              </div>
              <span className="text-sm font-medium">Sal</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-charcoal-900/95 backdrop-blur-lg border-b border-white/10 md:hidden">
          <div className="p-6 space-y-4">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "block text-white/80 hover:text-gold-300 transition-colors font-medium py-2",
                  location.pathname === item.path && "text-gold-300",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {variant === "public" ? (
              <div className="pt-4 space-y-3">
                <Link to="/signin" onClick={() => setMobileMenuOpen(false)}>
                  <Button
                    variant="outline"
                    className="w-full border-gold-500 text-gold-300 hover:bg-gold-500 hover:text-charcoal-900"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-gold-500 text-charcoal-900 hover:bg-gold-400 saintvision-glow">
                    Start Cookin'
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center space-x-3 text-white/80 py-2">
                  <div className="w-8 h-8 bg-gold-500 rounded-lg flex items-center justify-center">
                    <User className="w-4 h-4 text-charcoal-900" />
                  </div>
                  <span className="font-medium">Sal</span>
                </div>
                <Link
                  to="/settings"
                  className="flex items-center space-x-2 text-white/60 hover:text-white/80 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Settings className="w-4 h-4" />
                  <span>Settings</span>
                </Link>
                <button className="flex items-center space-x-2 text-white/60 hover:text-white/80 py-2">
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
