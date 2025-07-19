import React from "react";
import { Navigation } from "@/components/ui/navigation";
import { StatusIndicator } from "@/components/ui/status-indicator";
import { BrandLogo } from "@/components/ui/brand-logo";

interface AppLayoutProps {
  children: React.ReactNode;
  variant?: "public" | "authenticated";
  showStatusBar?: boolean;
  title?: string;
  subtitle?: string;
  className?: string;
}

export function AppLayout({
  children,
  variant = "public",
  showStatusBar = true,
  title,
  subtitle,
  className,
}: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-charcoal-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 circuit-pattern opacity-5"></div>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(16, 22, 28, 0.98) 0%, rgba(16, 22, 28, 0.95) 100%),
                           url('https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F317f7c64793d47ab90d506bd066bedbb?format=webp&width=800')`,
        }}
      ></div>

      {/* Navigation */}
      <Navigation variant={variant} />

      {/* Status Bar */}
      {showStatusBar && (
        <div className="relative z-40 border-b border-white/10">
          <div className="px-6 lg:px-12 py-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {title && (
                  <div>
                    <h1 className="text-sm font-semibold text-white">
                      {title}
                    </h1>
                    {subtitle && (
                      <p className="text-xs text-white/60">{subtitle}</p>
                    )}
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-2">
                <StatusIndicator status="online" size="sm" />
                <StatusIndicator status="enterprise" size="sm" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className={`relative z-40 ${className}`}>{children}</main>

      {/* Footer */}
      <footer className="relative z-40 border-t border-white/10 mt-auto">
        <div className="px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <BrandLogo
                variant="icon-only"
                size="sm"
                showAIIndicator={false}
              />
              <div className="text-xs text-white/60">
                © 2024 SaintVisionAI™. Enterprise AI Solutions.
              </div>
            </div>
            <div className="flex items-center space-x-4 text-xs text-white/50">
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Terms of Service</span>
              <span>•</span>
              <span>Support</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function PageHeader({
  title,
  subtitle,
  actions,
  icon,
  className,
}: {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mb-8 ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {icon && (
            <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center saintvision-glow">
              {icon}
            </div>
          )}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold saintvision-gradient-text font-dialien">
              {title}
            </h1>
            {subtitle && (
              <p className="text-white/70 text-lg mt-1">{subtitle}</p>
            )}
          </div>
        </div>
        {actions && (
          <div className="flex items-center space-x-3">{actions}</div>
        )}
      </div>
    </div>
  );
}
