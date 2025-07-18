import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Crown,
  Users,
  TrendingUp,
  Target,
  Phone,
  Mail,
  Calendar,
  BarChart3,
  Activity,
  Settings,
  ExternalLink,
  RefreshCw,
  ArrowUpRight,
  Filter,
  Search,
  Plus,
  Download,
  Sparkles,
  Shield,
  Zap,
} from "lucide-react";

export default function CRM() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [crmConnected, setCrmConnected] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 2000);
  };

  const crmMetrics = [
    {
      label: "Active Leads",
      value: "2,847",
      change: "+12%",
      icon: Users,
      color: "text-blue-300",
    },
    {
      label: "Conversion Rate",
      value: "23.4%",
      change: "+5.2%",
      icon: Target,
      color: "text-green-300",
    },
    {
      label: "Pipeline Value",
      value: "$147K",
      change: "+18%",
      icon: BarChart3,
      color: "text-gold-300",
    },
    {
      label: "Calls Today",
      value: "89",
      change: "+7%",
      icon: Phone,
      color: "text-purple-300",
    },
  ];

  const recentActivity = [
    {
      type: "Lead Created",
      contact: "Sarah Johnson",
      time: "2 minutes ago",
      status: "hot",
      icon: Plus,
    },
    {
      type: "Call Completed",
      contact: "Mike Chen",
      time: "15 minutes ago",
      status: "warm",
      icon: Phone,
    },
    {
      type: "Email Sent",
      contact: "Lisa Rodriguez",
      time: "1 hour ago",
      status: "cold",
      icon: Mail,
    },
    {
      type: "Meeting Scheduled",
      contact: "David Park",
      time: "2 hours ago",
      status: "hot",
      icon: Calendar,
    },
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
                           url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        }}
      ></div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between p-6 lg:px-12 border-b border-white/10">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center saintvision-glow">
            <Globe className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold saintvision-gradient-text">
              CRM Dashboard
            </h1>
            <p className="text-xs text-gold-300 -mt-1">
              GoHighLevel Integration
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {crmConnected ? (
            <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
              <Activity className="w-3 h-3 mr-1" />
              CRM Connected
            </Badge>
          ) : (
            <Badge className="bg-red-500/20 text-red-300 border-red-500/30">
              <Shield className="w-3 h-3 mr-1" />
              Disconnected
            </Badge>
          )}
          <Button
            variant="outline"
            size="sm"
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="border-white/20 text-white hover:bg-white/10"
          >
            <RefreshCw
              className={`w-4 h-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`}
            />
            Refresh
          </Button>
          <Button
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10"
          >
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </div>
      </nav>

      <div className="relative z-40 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div
            className={`mb-8 transform transition-all duration-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                  <span className="saintvision-gradient-text">CRM</span>
                  <br />
                  <span className="text-blue-300">Command Center</span>
                </h1>
                <p className="text-xl text-white/80 max-w-3xl">
                  Your complete GoHighLevel CRM integration with real-time data,
                  lead management, and pipeline insights.
                </p>
              </div>
              <Button className="bg-blue-500 text-white hover:bg-blue-400 saintvision-glow">
                <ExternalLink className="w-4 h-4 mr-2" />
                Open Full CRM
              </Button>
            </div>
          </div>

          {/* CRM Metrics */}
          <div
            className={`grid md:grid-cols-4 gap-6 mb-8 transform transition-all duration-1000 delay-300 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            {crmMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div
                  key={index}
                  className="glass-morphism p-6 rounded-xl hover:saintvision-glow transition-all group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <Icon className={`w-6 h-6 ${metric.color}`} />
                    <span
                      className={`text-sm font-semibold ${
                        metric.change.startsWith("+")
                          ? "text-green-300"
                          : "text-red-300"
                      }`}
                    >
                      {metric.change}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-white mb-1">
                    {metric.value}
                  </p>
                  <p className="text-white/70 text-sm">{metric.label}</p>
                </div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main CRM Embed */}
            <div className="lg:col-span-2">
              <div
                className={`transform transition-all duration-1000 delay-500 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                <div className="glass-morphism rounded-2xl overflow-hidden">
                  <div className="p-6 border-b border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                          <Globe className="w-5 h-5 text-blue-300" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold">GoHighLevel CRM</h3>
                          <p className="text-white/70 text-sm">
                            Live pipeline management
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-white/20 text-white hover:bg-white/10"
                        >
                          <Filter className="w-4 h-4 mr-2" />
                          Filter
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-white/20 text-white hover:bg-white/10"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Export
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* CRM Embed Area */}
                  <div className="h-[600px] bg-gradient-to-br from-charcoal-800 to-charcoal-900 flex items-center justify-center">
                    {crmConnected ? (
                      <div className="text-center p-8">
                        <div className="w-20 h-20 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                          <Globe className="w-10 h-10 text-blue-300" />
                        </div>
                        <h4 className="text-2xl font-bold mb-4">
                          GoHighLevel Integration
                        </h4>
                        <p className="text-white/70 mb-6 max-w-md">
                          Your CRM interface loads here. Connect your
                          GoHighLevel account to see live pipeline data,
                          contacts, and deal management.
                        </p>
                        <div className="space-y-4">
                          <div className="flex items-center justify-center space-x-4 text-sm text-white/60">
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                              <span>Live Data Sync</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                              <span>Real-time Updates</span>
                            </div>
                          </div>
                          <Button className="bg-blue-500 text-white hover:bg-blue-400 saintvision-glow">
                            <Settings className="w-4 h-4 mr-2" />
                            Configure Integration
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center p-8">
                        <div className="w-20 h-20 bg-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                          <Shield className="w-10 h-10 text-red-300" />
                        </div>
                        <h4 className="text-2xl font-bold mb-4">
                          CRM Not Connected
                        </h4>
                        <p className="text-white/70 mb-6 max-w-md">
                          Connect your GoHighLevel account to access your CRM
                          data and manage your sales pipeline.
                        </p>
                        <Button className="bg-gold-500 text-charcoal-900 hover:bg-gold-400 saintvision-glow">
                          <Globe className="w-4 h-4 mr-2" />
                          Connect GoHighLevel
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div
                className={`space-y-8 transform transition-all duration-1000 delay-700 ${isLoaded ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
              >
                {/* Recent Activity */}
                <div className="glass-morphism p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold">Recent Activity</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gold-300 hover:text-gold-200"
                    >
                      View All
                    </Button>
                  </div>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => {
                      const Icon = activity.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                        >
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              activity.status === "hot"
                                ? "bg-red-500/20"
                                : activity.status === "warm"
                                  ? "bg-yellow-500/20"
                                  : "bg-blue-500/20"
                            }`}
                          >
                            <Icon
                              className={`w-4 h-4 ${
                                activity.status === "hot"
                                  ? "text-red-300"
                                  : activity.status === "warm"
                                    ? "text-yellow-300"
                                    : "text-blue-300"
                              }`}
                            />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-sm">
                              {activity.type}
                            </p>
                            <p className="text-white/70 text-xs">
                              {activity.contact}
                            </p>
                          </div>
                          <span className="text-white/60 text-xs">
                            {activity.time}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="glass-morphism p-6 rounded-xl">
                  <h3 className="text-lg font-bold mb-6">Quick Actions</h3>
                  <div className="space-y-3">
                    <Button className="w-full justify-start bg-gold-500 text-charcoal-900 hover:bg-gold-400 saintvision-glow">
                      <Plus className="w-4 h-4 mr-2" />
                      Add New Lead
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-white/20 text-white hover:bg-white/10"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Call
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-white/20 text-white hover:bg-white/10"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-white/20 text-white hover:bg-white/10"
                    >
                      <BarChart3 className="w-4 h-4 mr-2" />
                      View Reports
                    </Button>
                  </div>
                </div>

                {/* Integration Status */}
                <div className="glass-morphism p-6 rounded-xl">
                  <h3 className="text-lg font-bold mb-6">Integration Status</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">GoHighLevel</span>
                      <span className="text-green-300">✓ Connected</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Twilio SMS</span>
                      <span className="text-green-300">✓ Active</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Email Sync</span>
                      <span className="text-green-300">✓ Live</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">AI Integration</span>
                      <span className="text-green-300">✓ Enabled</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
