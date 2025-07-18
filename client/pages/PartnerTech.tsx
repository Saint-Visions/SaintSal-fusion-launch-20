import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Crown,
  Brain,
  Shield,
  Zap,
  Chrome,
  Globe,
  Users,
  MessageSquare,
  Phone,
  Mail,
  Settings,
  BarChart3,
  TrendingUp,
  Activity,
  Target,
  Sparkles,
  ArrowUpRight,
  Download,
  ExternalLink,
  PlayCircle,
  FileText,
  Calendar,
  Clock,
} from "lucide-react";

export default function PartnerTech() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("crm");
  const [chromeInstalled, setChromeInstalled] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    // Check if Chrome extension is installed
    if (typeof window !== "undefined") {
      // Simulate Chrome extension check
      setTimeout(() => setChromeInstalled(Math.random() > 0.5), 1000);
    }
  }, []);

  const aiTools = [
    {
      name: "Lead Analyzer",
      description: "AI-powered lead qualification and scoring",
      icon: Target,
      status: "active",
      usage: "847 leads processed",
    },
    {
      name: "Email Generator",
      description: "Generate personalized email sequences",
      icon: Mail,
      status: "active",
      usage: "2,341 emails sent",
    },
    {
      name: "Call Script AI",
      description: "Dynamic call scripts based on lead data",
      icon: Phone,
      status: "active",
      usage: "156 calls optimized",
    },
    {
      name: "Pipeline Predictor",
      description: "Forecast deal closure probability",
      icon: TrendingUp,
      status: "premium",
      usage: "94% accuracy rate",
    },
  ];

  const crmMetrics = [
    { label: "Active Leads", value: "2,847", change: "+12%", icon: Users },
    { label: "Conversion Rate", value: "23.4%", change: "+5.2%", icon: Target },
    {
      label: "Pipeline Value",
      value: "$147K",
      change: "+18%",
      icon: BarChart3,
    },
    { label: "Calls Today", value: "89", change: "+7%", icon: Phone },
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
                           url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80')`,
        }}
      ></div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between p-6 lg:px-12 border-b border-white/10">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center saintvision-glow">
            <Crown className="w-6 h-6 text-charcoal-900" />
          </div>
          <div>
            <h1 className="text-xl font-bold saintvision-gradient-text">
              PartnerTech
            </h1>
            <p className="text-xs text-gold-300 -mt-1">SaintSal™ Pro Suite</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
            <Crown className="w-3 h-3 mr-1" />
            Pro Plan
          </Badge>
          <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            CRM Connected
          </Badge>
          <Button
            variant="ghost"
            size="sm"
            className="text-white/70 hover:text-gold-300"
          >
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </nav>

      <div className="relative z-40 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div
            className={`mb-8 transform transition-all duration-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              <span className="saintvision-gradient-text">PartnerTech</span>
              <br />
              <span className="text-gold-300">Command Center</span>
            </h1>
            <p className="text-xl text-white/80 mb-6 max-w-3xl">
              Your complete business automation suite with CRM integration, AI
              tools, and Chrome extension power.
            </p>

            {/* Tab Navigation */}
            <div className="flex space-x-2 mb-8">
              {[
                { id: "crm", label: "CRM Dashboard", icon: Globe },
                { id: "ai-tools", label: "AI Tools", icon: Brain },
                { id: "chrome", label: "Chrome Extension", icon: Chrome },
                { id: "analytics", label: "Analytics", icon: BarChart3 },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <Button
                    key={tab.id}
                    variant={activeTab === tab.id ? "default" : "ghost"}
                    onClick={() => setActiveTab(tab.id)}
                    className={`${
                      activeTab === tab.id
                        ? "bg-gold-500 text-charcoal-900 saintvision-glow"
                        : "text-white/70 hover:text-gold-300"
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {tab.label}
                  </Button>
                );
              })}
            </div>
          </div>

          {/* CRM Dashboard Tab */}
          {activeTab === "crm" && (
            <div
              className={`transform transition-all duration-1000 delay-300 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              {/* CRM Metrics */}
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                {crmMetrics.map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <div
                      key={index}
                      className="glass-morphism p-6 rounded-xl hover:saintvision-glow transition-all"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <Icon className="w-6 h-6 text-gold-300" />
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

              {/* GoHighLevel CRM Embed */}
              <div className="glass-morphism rounded-2xl overflow-hidden mb-8">
                <div className="p-6 border-b border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <Globe className="w-5 h-5 text-blue-300" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">
                          GoHighLevel CRM Integration
                        </h3>
                        <p className="text-white/70 text-sm">
                          Live pipeline management
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white/20 text-white hover:bg-white/10"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Open Full CRM
                    </Button>
                  </div>
                </div>
                <div className="h-96 bg-charcoal-800 flex items-center justify-center">
                  <div className="text-center">
                    <Globe className="w-16 h-16 text-gold-300 mx-auto mb-4" />
                    <h4 className="text-xl font-bold mb-2">
                      GoHighLevel CRM Embed
                    </h4>
                    <p className="text-white/70 mb-4 max-w-md">
                      Your complete CRM interface will load here. Connect your
                      GoHighLevel account to see live pipeline data.
                    </p>
                    <Button className="bg-gold-500 text-charcoal-900 hover:bg-gold-400 saintvision-glow">
                      <Settings className="w-4 h-4 mr-2" />
                      Configure CRM
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* AI Tools Tab */}
          {activeTab === "ai-tools" && (
            <div
              className={`transform transition-all duration-1000 delay-300 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="grid md:grid-cols-2 gap-8">
                {aiTools.map((tool, index) => {
                  const Icon = tool.icon;
                  return (
                    <div
                      key={index}
                      className="glass-morphism p-6 rounded-xl hover:saintvision-glow transition-all group"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gold-500/20 rounded-xl flex items-center justify-center group-hover:bg-gold-500/30 transition-colors">
                            <Icon className="w-6 h-6 text-gold-300" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold">{tool.name}</h3>
                            <p className="text-white/70 text-sm">
                              {tool.description}
                            </p>
                          </div>
                        </div>
                        <Badge
                          className={
                            tool.status === "active"
                              ? "bg-green-500/20 text-green-300 border-green-500/30"
                              : "bg-gold-500/20 text-gold-300 border-gold-500/30"
                          }
                        >
                          {tool.status}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-white/60 text-sm">{tool.usage}</p>
                        <Button
                          size="sm"
                          className="bg-gold-500 text-charcoal-900 hover:bg-gold-400"
                        >
                          <PlayCircle className="w-4 h-4 mr-2" />
                          Launch
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* AI Configuration */}
              <div className="glass-morphism rounded-2xl p-8 mt-8">
                <h3 className="text-2xl font-bold mb-6">
                  <span className="saintvision-gradient-text">
                    AI Configuration
                  </span>
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4 text-gold-300">
                      Model Settings
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                        <div>
                          <p className="font-medium">GPT-4o Primary</p>
                          <p className="text-white/60 text-sm">
                            Main conversation model
                          </p>
                        </div>
                        <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                          Active
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                        <div>
                          <p className="font-medium">Azure Cognitive</p>
                          <p className="text-white/60 text-sm">
                            Fallback & analysis
                          </p>
                        </div>
                        <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                          Standby
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4 text-gold-300">
                      Integration Status
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-white/80">CRM Sync</span>
                        <span className="text-green-300">✓ Connected</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/80">Twilio SMS</span>
                        <span className="text-green-300">✓ Active</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/80">Stripe Billing</span>
                        <span className="text-green-300">✓ Live</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/80">Builder.io CMS</span>
                        <span className="text-green-300">✓ Synced</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Chrome Extension Tab */}
          {activeTab === "chrome" && (
            <div
              className={`transform transition-all duration-1000 delay-300 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="glass-morphism rounded-2xl p-8">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center saintvision-glow-strong">
                    <Chrome className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">
                    <span className="saintvision-gradient-text">
                      Chrome Extension
                    </span>
                  </h3>
                  <p className="text-white/80 text-lg max-w-2xl mx-auto">
                    Bring SaintSal™ AI power to any website. Analyze prospects,
                    generate content, and manage leads directly from your
                    browser.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4 text-gold-300">
                      Extension Status
                    </h4>
                    <div className="space-y-4">
                      <div
                        className={`p-4 rounded-lg border ${
                          chromeInstalled
                            ? "bg-green-500/10 border-green-500/30"
                            : "bg-orange-500/10 border-orange-500/30"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-3 h-3 rounded-full ${
                              chromeInstalled ? "bg-green-400" : "bg-orange-400"
                            } animate-pulse`}
                          ></div>
                          <span className="font-medium">
                            {chromeInstalled
                              ? "Extension Installed"
                              : "Extension Not Detected"}
                          </span>
                        </div>
                        <p className="text-white/70 text-sm mt-2">
                          {chromeInstalled
                            ? "SaintSal™ Chrome Extension is active and ready"
                            : "Install the extension to unlock browser integration"}
                        </p>
                      </div>

                      {!chromeInstalled && (
                        <Button className="w-full bg-blue-500 text-white hover:bg-blue-400">
                          <Download className="w-4 h-4 mr-2" />
                          Install Chrome Extension
                        </Button>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4 text-gold-300">
                      Extension Features
                    </h4>
                    <div className="space-y-3">
                      {[
                        "Prospect analysis on LinkedIn",
                        "Email generation assistance",
                        "CRM data overlay",
                        "AI-powered content suggestions",
                        "Lead capture automation",
                        "Real-time notifications",
                      ].map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3"
                        >
                          <Sparkles className="w-4 h-4 text-gold-300" />
                          <span className="text-white/90">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {chromeInstalled && (
                  <div className="mt-8 pt-8 border-t border-white/10">
                    <h4 className="font-semibold mb-4 text-gold-300">
                      Quick Actions
                    </h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <Button
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10"
                      >
                        <Settings className="w-4 h-4 mr-2" />
                        Configure
                      </Button>
                      <Button
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10"
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        View Logs
                      </Button>
                      <Button
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Open Popup
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === "analytics" && (
            <div
              className={`transform transition-all duration-1000 delay-300 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="glass-morphism p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-6">
                    Performance Analytics
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                      <div>
                        <p className="font-medium">AI Interactions</p>
                        <p className="text-white/60 text-sm">Last 30 days</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gold-300">
                          12,847
                        </p>
                        <p className="text-green-300 text-sm">+24%</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                      <div>
                        <p className="font-medium">Leads Generated</p>
                        <p className="text-white/60 text-sm">This month</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-blue-300">
                          2,341
                        </p>
                        <p className="text-green-300 text-sm">+18%</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                      <div>
                        <p className="font-medium">Revenue Impact</p>
                        <p className="text-white/60 text-sm">Attributed</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-purple-300">
                          $89K
                        </p>
                        <p className="text-green-300 text-sm">+31%</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-morphism p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-6">Recent Activity</h3>
                  <div className="space-y-4">
                    {[
                      {
                        action: "Lead scored via AI",
                        time: "2 minutes ago",
                        icon: Target,
                      },
                      {
                        action: "Email sequence triggered",
                        time: "15 minutes ago",
                        icon: Mail,
                      },
                      {
                        action: "CRM data synchronized",
                        time: "1 hour ago",
                        icon: Globe,
                      },
                      {
                        action: "Chrome extension used",
                        time: "2 hours ago",
                        icon: Chrome,
                      },
                      {
                        action: "Pipeline updated",
                        time: "3 hours ago",
                        icon: BarChart3,
                      },
                    ].map((activity, index) => {
                      const Icon = activity.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg"
                        >
                          <Icon className="w-5 h-5 text-gold-300" />
                          <div className="flex-1">
                            <p className="font-medium text-sm">
                              {activity.action}
                            </p>
                            <p className="text-white/60 text-xs">
                              {activity.time}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
