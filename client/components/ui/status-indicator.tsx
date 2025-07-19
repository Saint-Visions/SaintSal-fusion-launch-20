import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertCircle, XCircle, Clock, Zap } from "lucide-react";

interface StatusIndicatorProps {
  status: "online" | "offline" | "warning" | "maintenance" | "enterprise";
  label?: string;
  showIcon?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const statusConfig = {
  online: {
    color: "bg-green-500/20 text-green-300 border-green-500/30",
    icon: CheckCircle,
    defaultLabel: "Online",
    pulseColor: "bg-green-400",
  },
  offline: {
    color: "bg-red-500/20 text-red-300 border-red-500/30",
    icon: XCircle,
    defaultLabel: "Offline",
    pulseColor: "bg-red-400",
  },
  warning: {
    color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    icon: AlertCircle,
    defaultLabel: "Warning",
    pulseColor: "bg-yellow-400",
  },
  maintenance: {
    color: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    icon: Clock,
    defaultLabel: "Maintenance",
    pulseColor: "bg-blue-400",
  },
  enterprise: {
    color: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    icon: Zap,
    defaultLabel: "Enterprise",
    pulseColor: "bg-purple-400",
  },
};

export function StatusIndicator({
  status,
  label,
  showIcon = true,
  size = "md",
  className,
}: StatusIndicatorProps) {
  const config = statusConfig[status];
  const Icon = config.icon;

  const sizeClasses = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1",
    lg: "text-base px-4 py-2",
  };

  const iconSizes = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  return (
    <Badge
      className={cn(config.color, sizeClasses[size], "font-medium", className)}
    >
      <span
        className={cn(
          config.pulseColor,
          "w-2 h-2 rounded-full mr-2",
          status === "online" && "animate-pulse",
        )}
      ></span>
      {showIcon && <Icon className={cn(iconSizes[size], "mr-1")} />}
      {label || config.defaultLabel}
    </Badge>
  );
}

export function SystemStatus() {
  const [lastUpdated, setLastUpdated] = React.useState(new Date());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-morphism p-4 rounded-lg">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-white">System Status</h3>
        <div className="flex space-x-2">
          <StatusIndicator status="online" label="AI Services" size="sm" />
          <StatusIndicator status="enterprise" label="Enterprise" size="sm" />
        </div>
      </div>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between items-center text-white/70">
          <span>GPT-4o API</span>
          <StatusIndicator status="online" showIcon={false} size="sm" />
        </div>
        <div className="flex justify-between items-center text-white/70">
          <span>Azure Cognitive</span>
          <StatusIndicator status="online" showIcon={false} size="sm" />
        </div>
        <div className="flex justify-between items-center text-white/70">
          <span>CRM Integration</span>
          <StatusIndicator status="online" showIcon={false} size="sm" />
        </div>
        <div className="flex justify-between items-center text-white/70">
          <span>HACP™ Compliance</span>
          <StatusIndicator status="enterprise" showIcon={false} size="sm" />
        </div>
      </div>
      <div className="text-xs text-white/50 mt-3">
        Last updated: {lastUpdated.toLocaleTimeString()}
      </div>
    </div>
  );
}
