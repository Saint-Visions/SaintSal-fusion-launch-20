import React from "react";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Sparkles, Zap, Brain } from "lucide-react";

interface LoadingScreenProps {
  message?: string;
  showProgress?: boolean;
}

export function LoadingScreen({
  message = "Loading SaintSal™...",
  showProgress = true,
}: LoadingScreenProps) {
  return (
    <div className="fixed inset-0 bg-charcoal-900 z-50 flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 circuit-pattern opacity-5"></div>

      {/* Loading Content */}
      <div className="relative z-10 text-center">
        {/* Logo */}
        <div className="mb-8">
          <BrandLogo variant="icon-only" size="xl" showAIIndicator={true} />
        </div>

        {/* Loading Animation */}
        <div className="mb-6">
          <div className="flex justify-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-gold-400 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-150"></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-300"></div>
          </div>
          <p className="text-white/80 text-lg font-medium">{message}</p>
        </div>

        {/* Progress Bar */}
        {showProgress && (
          <div className="w-64 mx-auto">
            <div className="h-2 bg-charcoal-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-gold-400 to-gold-600 rounded-full animate-pulse"></div>
            </div>
          </div>
        )}

        {/* Feature Icons */}
        <div className="flex justify-center space-x-6 mt-8 opacity-60">
          <div className="text-center">
            <Brain className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <p className="text-xs text-white/60">AI Processing</p>
          </div>
          <div className="text-center">
            <Zap className="w-6 h-6 text-gold-400 mx-auto mb-2" />
            <p className="text-xs text-white/60">Enterprise</p>
          </div>
          <div className="text-center">
            <Sparkles className="w-6 h-6 text-purple-400 mx-auto mb-2" />
            <p className="text-xs text-white/60">HACP™</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PageLoadingSpinner({
  size = "md",
  className,
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`${sizeClasses[size]} border-2 border-gold-400 border-t-transparent rounded-full animate-spin`}
      ></div>
    </div>
  );
}
