import React from "react";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface BrandLogoProps {
  variant?: "header" | "hero" | "compact" | "icon-only";
  size?: "sm" | "md" | "lg" | "xl";
  showSubtitle?: boolean;
  showAIIndicator?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: {
    logo: "w-6 h-6",
    text: "text-lg",
    subtitle: "text-xs",
    indicator: "w-4 h-4",
    indicatorIcon: "w-2 h-2",
  },
  md: {
    logo: "w-8 h-8",
    text: "text-xl",
    subtitle: "text-xs",
    indicator: "w-5 h-5",
    indicatorIcon: "w-2 h-2",
  },
  lg: {
    logo: "w-12 h-12",
    text: "text-2xl",
    subtitle: "text-sm",
    indicator: "w-6 h-6",
    indicatorIcon: "w-3 h-3",
  },
  xl: {
    logo: "w-24 h-24",
    text: "text-4xl",
    subtitle: "text-lg",
    indicator: "w-8 h-8",
    indicatorIcon: "w-4 h-4",
  },
};

export function BrandLogo({
  variant = "header",
  size = "md",
  showSubtitle = true,
  showAIIndicator = true,
  className,
}: BrandLogoProps) {
  const sizeClass = sizeClasses[size];

  if (variant === "icon-only") {
    return (
      <div className={cn("relative", className)}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F66fe1620bff64382adab8967dd63b6ff?format=webp&width=800"
          alt="SaintVisionAI Logo"
          className={cn(sizeClass.logo, "object-contain")}
        />
        {showAIIndicator && (
          <div
            className={cn(
              "absolute -top-1 -right-1 bg-blue-500 rounded-full flex items-center justify-center animate-pulse",
              sizeClass.indicator,
            )}
          >
            <Sparkles className={cn("text-white", sizeClass.indicatorIcon)} />
          </div>
        )}
      </div>
    );
  }

  if (variant === "hero") {
    return (
      <div className={cn("text-center", className)}>
        <div className="relative inline-block mb-8">
          <div
            className="mx-auto bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url(https://cdn.builder.io/api/v1/assets/065997bd13e4442e888a08652fcd61ba/better-saintsal-transparent-d9c734)",
              width: "188px",
              height: "188px",
            }}
          />
          {showAIIndicator && (
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
          )}
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          <span className="saintvision-gradient-text font-dialien">
            SaintSal™
          </span>
        </h1>
        {showSubtitle && (
          <h2 className="text-2xl md:text-3xl text-gold-300 mb-6 font-medium font-dropline">
            Cookin' Knowledge.
          </h2>
        )}
      </div>
    );
  }

  return (
    <div className={cn("flex items-center space-x-3", className)}>
      <div className="relative">
        <div className="flex items-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F66fe1620bff64382adab8967dd63b6ff?format=webp&width=800"
            alt="SaintVisionAI Logo"
            className={cn(sizeClass.logo, "object-contain mr-2")}
          />
        </div>
        {showAIIndicator && (
          <div
            className={cn(
              "absolute -top-1 -right-1 bg-blue-500 rounded-full flex items-center justify-center animate-pulse",
              sizeClass.indicator,
            )}
          >
            <div
              className={cn(
                "bg-white rounded-full bg-cover bg-center bg-no-repeat",
                sizeClass.indicatorIcon,
              )}
              style={{
                backgroundImage:
                  "url(https://cdn.builder.io/api/v1/assets/065997bd13e4442e888a08652fcd61ba/cookin-950b8e)",
              }}
            ></div>
          </div>
        )}
      </div>
      <div>
        <h1
          className={cn(
            "font-bold saintvision-gradient-text tracking-tight font-dialien",
            sizeClass.text,
          )}
        >
          {variant === "compact" ? "SaintVisionAI™" : "SaintVisionAI™"}
        </h1>
        {showSubtitle && (
          <p
            className={cn(
              "text-gold-300 -mt-1 font-medium",
              sizeClass.subtitle,
            )}
          >
            Cookin' Knowledge
          </p>
        )}
      </div>
    </div>
  );
}

export function BrandButton({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const baseClasses =
    "font-semibold transition-all duration-200 transform hover:scale-105";

  const variantClasses = {
    primary: "bg-gold-500 text-charcoal-900 hover:bg-gold-400 saintvision-glow",
    secondary:
      "bg-charcoal-800 text-white hover:bg-charcoal-700 border border-gold-500/20",
    outline:
      "border-2 border-gold-500 text-gold-300 hover:bg-gold-500 hover:text-charcoal-900 glass-morphism",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        "rounded-lg",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
