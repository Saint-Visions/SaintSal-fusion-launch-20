import React, { Component, ErrorInfo, ReactNode } from "react";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw, Home, Mail } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("SaintVisionAI™ Error Boundary:", error, errorInfo);

    this.setState({
      error,
      errorInfo,
    });

    // Log to error tracking service in production
    if (process.env.NODE_ENV === "production") {
      // Example: Sentry.captureException(error, { extra: errorInfo });
    }
  }

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = "/";
  };

  private handleContactSupport = () => {
    const subject = encodeURIComponent("SaintVisionAI™ Error Report");
    const body = encodeURIComponent(
      `Error Details:\n\n${this.state.error?.message}\n\nStack:\n${this.state.error?.stack}\n\nPlease describe what you were doing when this error occurred.`,
    );
    window.open(`mailto:sal@saintvisionai.com?subject=${subject}&body=${body}`);
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-charcoal-900 text-white flex items-center justify-center p-6">
          {/* Background Pattern */}
          <div className="absolute inset-0 circuit-pattern opacity-5"></div>

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            {/* Logo */}
            <div className="mb-8">
              <BrandLogo
                variant="icon-only"
                size="xl"
                showAIIndicator={false}
              />
            </div>

            {/* Error Icon */}
            <div className="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <AlertTriangle className="w-12 h-12 text-red-400" />
            </div>

            {/* Error Message */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 saintvision-gradient-text font-dialien">
              Oops! Something Went Wrong
            </h1>

            <p className="text-xl text-white/80 mb-8 max-w-lg mx-auto">
              Our AI encountered an unexpected error while cooking your
              knowledge. Don't worry, we're on it!
            </p>

            {/* Error Details (Development Only) */}
            {process.env.NODE_ENV === "development" && this.state.error && (
              <div className="glass-morphism p-6 rounded-xl mb-8 text-left">
                <h3 className="text-lg font-semibold mb-3 text-red-400">
                  Development Error Details:
                </h3>
                <pre className="text-sm text-white/70 overflow-auto">
                  {this.state.error.message}
                  {"\n\n"}
                  {this.state.error.stack}
                </pre>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                onClick={this.handleReload}
                className="bg-gold-500 text-charcoal-900 hover:bg-gold-400 saintvision-glow"
                size="lg"
              >
                <RefreshCw className="mr-2 w-5 h-5" />
                Try Again
              </Button>

              <Button
                onClick={this.handleGoHome}
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
                size="lg"
              >
                <Home className="mr-2 w-5 h-5" />
                Go Home
              </Button>

              <Button
                onClick={this.handleContactSupport}
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
                size="lg"
              >
                <Mail className="mr-2 w-5 h-5" />
                Contact Support
              </Button>
            </div>

            {/* Support Information */}
            <div className="glass-morphism p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3 saintvision-gradient-text">
                Need Help?
              </h3>
              <p className="text-white/70 mb-4">
                Our enterprise support team is available 24/7 to assist you.
              </p>
              <div className="space-y-2 text-sm text-white/60">
                <p>📧 sal@saintvisionai.com</p>
                <p>📞 +1 (949) 997-2097</p>
                <p>🏢 SaintVision Group</p>
              </div>
            </div>

            {/* Enterprise Assurance */}
            <div className="mt-8 text-center">
              <p className="text-white/50 text-sm">
                SaintVisionAI™ Enterprise AI Solutions
                <br />
                99.9% Uptime SLA • SOC 2 Type II Certified • HACP™ Compliant
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Functional error boundary hook for specific components
export function withErrorBoundary<T extends {}>(
  Component: React.ComponentType<T>,
  fallback?: React.ComponentType<{ error: Error; retry: () => void }>,
) {
  const WrappedComponent = (props: T) => {
    return (
      <ErrorBoundary>
        <Component {...props} />
      </ErrorBoundary>
    );
  };

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName ||
    Component.name})`;

  return WrappedComponent;
}
