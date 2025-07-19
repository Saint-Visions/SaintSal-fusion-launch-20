// SaintVisionAI™ Analytics & Performance Monitoring
import React from "react";

interface AnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

class SaintVisionAnalytics {
  private initialized = false;
  private userId: string | null = null;
  private sessionId: string;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.init();
  }

  private generateSessionId(): string {
    return `sv_${Date.now()}_${Math.random()
      .toString(36)
      .substr(2, 9)}`;
  }

  private init() {
    // Initialize analytics in production
    if (
      typeof window !== "undefined" &&
      process.env.NODE_ENV === "production"
    ) {
      this.setupGoogleAnalytics();
      this.setupPerformanceMonitoring();
      this.initialized = true;
    }
  }

  private setupGoogleAnalytics() {
    // Google Analytics 4 setup
    const GA_ID = process.env.VITE_GA_ID || "G-XXXXXXXXXX";

    // Load GA4 script
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(arguments);
    }
    (window as any).gtag = gtag;

    gtag("js", new Date());
    gtag("config", GA_ID, {
      page_title: "SaintVisionAI™",
      page_location: window.location.href,
      custom_map: {
        saintvision_user_type: "user_type",
        saintvision_plan: "subscription_plan",
        saintvision_feature: "feature_used",
      },
    });
  }

  private setupPerformanceMonitoring() {
    // Web Vitals tracking
    this.trackWebVitals();

    // Error tracking
    window.addEventListener("error", this.handleError.bind(this));
    window.addEventListener(
      "unhandledrejection",
      this.handlePromiseRejection.bind(this),
    );

    // Performance observer
    this.setupPerformanceObserver();
  }

  private trackWebVitals() {
    // Core Web Vitals
    if ("PerformanceObserver" in window) {
      // LCP (Largest Contentful Paint)
      new PerformanceObserver(list => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.track({
          event: "web_vital",
          category: "Performance",
          action: "LCP",
          value: Math.round(lastEntry.startTime),
          custom_parameters: {
            metric_value: lastEntry.startTime,
            session_id: this.sessionId,
          },
        });
      }).observe({ type: "largest-contentful-paint", buffered: true });

      // FID (First Input Delay)
      new PerformanceObserver(list => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          this.track({
            event: "web_vital",
            category: "Performance",
            action: "FID",
            value: Math.round(entry.processingStart - entry.startTime),
            custom_parameters: {
              metric_value: entry.processingStart - entry.startTime,
              session_id: this.sessionId,
            },
          });
        });
      }).observe({ type: "first-input", buffered: true });

      // CLS (Cumulative Layout Shift)
      let clsValue = 0;
      new PerformanceObserver(list => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        });

        this.track({
          event: "web_vital",
          category: "Performance",
          action: "CLS",
          value: Math.round(clsValue * 1000),
          custom_parameters: {
            metric_value: clsValue,
            session_id: this.sessionId,
          },
        });
      }).observe({ type: "layout-shift", buffered: true });
    }
  }

  private setupPerformanceObserver() {
    if ("PerformanceObserver" in window) {
      // Navigation timing
      new PerformanceObserver(list => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.entryType === "navigation") {
            const nav = entry as any;
            this.track({
              event: "page_load",
              category: "Performance",
              action: "Navigation",
              custom_parameters: {
                dom_content_loaded:
                  nav.domContentLoadedEventEnd - nav.domContentLoadedEventStart,
                load_complete: nav.loadEventEnd - nav.loadEventStart,
                ttfb: nav.responseStart - nav.requestStart,
                session_id: this.sessionId,
              },
            });
          }
        });
      }).observe({ type: "navigation", buffered: true });
    }
  }

  private handleError(event: ErrorEvent) {
    this.track({
      event: "javascript_error",
      category: "Error",
      action: "Runtime Error",
      label: event.message,
      custom_parameters: {
        error_message: event.message,
        error_filename: event.filename,
        error_line: event.lineno,
        error_column: event.colno,
        user_agent: navigator.userAgent,
        session_id: this.sessionId,
      },
    });
  }

  private handlePromiseRejection(event: PromiseRejectionEvent) {
    this.track({
      event: "promise_rejection",
      category: "Error",
      action: "Unhandled Promise Rejection",
      label: event.reason?.toString() || "Unknown",
      custom_parameters: {
        error_reason: event.reason?.toString(),
        session_id: this.sessionId,
      },
    });
  }

  // Public methods
  public setUserId(userId: string) {
    this.userId = userId;
    if (this.initialized && typeof window !== "undefined") {
      (window as any).gtag?.("config", process.env.VITE_GA_ID, {
        user_id: userId,
      });
    }
  }

  public track(event: AnalyticsEvent) {
    if (!this.initialized) return;

    // Add common parameters
    const enrichedEvent = {
      ...event,
      custom_parameters: {
        ...event.custom_parameters,
        user_id: this.userId,
        session_id: this.sessionId,
        timestamp: Date.now(),
        platform: "web",
        product: "SaintVisionAI",
      },
    };

    // Send to Google Analytics
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        ...enrichedEvent.custom_parameters,
      });
    }

    // Log in development
    if (process.env.NODE_ENV === "development") {
      console.log("📊 SaintVisionAI™ Analytics:", enrichedEvent);
    }
  }

  // Convenience methods for common events
  public trackPageView(page: string, title?: string) {
    this.track({
      event: "page_view",
      category: "Navigation",
      action: "Page View",
      label: page,
      custom_parameters: {
        page_title: title || document.title,
        page_path: page,
      },
    });

    // Update GA4 page view
    if (this.initialized && typeof window !== "undefined") {
      (window as any).gtag?.("config", process.env.VITE_GA_ID, {
        page_title: title,
        page_location: window.location.href,
      });
    }
  }

  public trackUserAction(
    action: string,
    category = "User",
    label?: string,
    value?: number,
  ) {
    this.track({
      event: "user_action",
      category,
      action,
      label,
      value,
    });
  }

  public trackFeatureUsage(feature: string, context?: string) {
    this.track({
      event: "feature_usage",
      category: "Product",
      action: "Feature Used",
      label: feature,
      custom_parameters: {
        feature_name: feature,
        feature_context: context,
      },
    });
  }

  public trackAIInteraction(
    model: string,
    query: string,
    responseTime?: number,
  ) {
    this.track({
      event: "ai_interaction",
      category: "AI",
      action: "Chat Message",
      label: model,
      value: responseTime,
      custom_parameters: {
        ai_model: model,
        query_length: query.length,
        response_time_ms: responseTime,
      },
    });
  }

  public trackConversion(type: string, value?: number) {
    this.track({
      event: "conversion",
      category: "Business",
      action: "Conversion",
      label: type,
      value,
      custom_parameters: {
        conversion_type: type,
        conversion_value: value,
      },
    });
  }

  public trackError(error: Error, context?: string) {
    this.track({
      event: "application_error",
      category: "Error",
      action: "Application Error",
      label: error.message,
      custom_parameters: {
        error_message: error.message,
        error_stack: error.stack,
        error_context: context,
      },
    });
  }
}

// Create singleton instance
export const analytics = new SaintVisionAnalytics();

// React hook for analytics
export function useAnalytics() {
  return {
    track: analytics.track.bind(analytics),
    trackPageView: analytics.trackPageView.bind(analytics),
    trackUserAction: analytics.trackUserAction.bind(analytics),
    trackFeatureUsage: analytics.trackFeatureUsage.bind(analytics),
    trackAIInteraction: analytics.trackAIInteraction.bind(analytics),
    trackConversion: analytics.trackConversion.bind(analytics),
    trackError: analytics.trackError.bind(analytics),
    setUserId: analytics.setUserId.bind(analytics),
  };
}

// Performance monitoring utilities
export class PerformanceMonitor {
  static measureComponent(name: string) {
    return function<T extends {}>(Component: React.ComponentType<T>) {
      const WrappedComponent = (props: T) => {
        React.useEffect(() => {
          const startTime = performance.now();

          return () => {
            const endTime = performance.now();
            analytics.track({
              event: "component_render",
              category: "Performance",
              action: "Component Render Time",
              label: name,
              value: Math.round(endTime - startTime),
              custom_parameters: {
                component_name: name,
                render_time_ms: endTime - startTime,
              },
            });
          };
        }, []);

        return React.createElement(Component, props);
      };

      WrappedComponent.displayName = `PerformanceMonitor(${Component.displayName ||
        Component.name})`;
      return WrappedComponent;
    };
  }

  static measureAsyncOperation(name: string, operation: () => Promise<any>) {
    const startTime = performance.now();

    return operation()
      .then(result => {
        const endTime = performance.now();
        analytics.track({
          event: "async_operation",
          category: "Performance",
          action: "Async Operation",
          label: name,
          value: Math.round(endTime - startTime),
          custom_parameters: {
            operation_name: name,
            duration_ms: endTime - startTime,
            success: true,
          },
        });
        return result;
      })
      .catch(error => {
        const endTime = performance.now();
        analytics.track({
          event: "async_operation",
          category: "Performance",
          action: "Async Operation",
          label: name,
          value: Math.round(endTime - startTime),
          custom_parameters: {
            operation_name: name,
            duration_ms: endTime - startTime,
            success: false,
            error_message: error.message,
          },
        });
        throw error;
      });
  }
}
