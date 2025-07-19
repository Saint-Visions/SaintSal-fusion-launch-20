import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Navigation } from "@/components/ui/navigation";
import {
  Crown,
  Brain,
  Shield,
  Zap,
  Settings,
  Users,
  MessageSquare,
  Mic,
  Send,
  Plus,
  History,
  Star,
  ChevronRight,
  Activity,
  Database,
  Globe,
  Sparkles,
  ArrowUpRight,
  BarChart3,
  FileText,
  Phone,
  Mail,
} from "lucide-react";

export default function Console() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [consoleMode, setConsoleMode] = useState<"client" | "companion">(
    "companion",
  );
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      id: 1,
      type: "ai",
      content:
        "Console mode activated. I'm your enterprise-grade GOTTA GUY™ with full admin capabilities.",
      timestamp: new Date().toLocaleTimeString(),
      mode: "console",
    },
  ]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: chatHistory.length + 1,
      type: "user",
      content: message,
      timestamp: new Date().toLocaleTimeString(),
      mode: consoleMode,
    };

    setChatHistory([...chatHistory, newMessage]);
    setMessage("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: chatHistory.length + 2,
        type: "ai",
        content:
          consoleMode === "client"
            ? "Processing your client request with enterprise capabilities..."
            : "Companion mode: I'm analyzing this with full admin context and CRM integration.",
        timestamp: new Date().toLocaleTimeString(),
        mode: consoleMode,
      };
      setChatHistory(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const adminMetrics = [
    { label: "Active Users", value: "2,847", change: "+12%", icon: Users },
    {
      label: "API Calls Today",
      value: "48,291",
      change: "+8%",
      icon: Activity,
    },
    { label: "Revenue MTD", value: "$47,120", change: "+23%", icon: BarChart3 },
    {
      label: "Support Tickets",
      value: "12",
      change: "-15%",
      icon: MessageSquare,
    },
  ];

  const quickActions = [
    {
      title: "User Management",
      icon: Users,
      description: "Manage client accounts",
    },
    {
      title: "System Logs",
      icon: FileText,
      description: "View webhook & chat logs",
    },
    {
      title: "CRM Integration",
      icon: Globe,
      description: "GoHighLevel dashboard",
    },
    {
      title: "AI Model Config",
      icon: Brain,
      description: "GPT-4o & Azure settings",
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
                           url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2125&q=80')`,
        }}
      ></div>

      {/* Top Navigation */}
      <nav className="relative z-50 flex items-center justify-between p-6 lg:px-12 border-b border-white/10">
        <BrandLogo
          variant="header"
          size="md"
          showSubtitle={false}
          className="mr-4"
        />
        <div className="flex items-center space-x-2">
          <h1 className="text-lg font-bold saintvision-gradient-text">
            Console
          </h1>
          <p className="text-xs text-gold-300">SaintSal™ Enterprise</p>
        </div>

        <div className="flex items-center space-x-4">
          <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
            <Crown className="w-3 h-3 mr-1" />
            Admin Mode
          </Badge>
          <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Enterprise Active
          </Badge>
          <Avatar className="w-10 h-10">
            <AvatarFallback className="bg-gold-500 text-charcoal-900 font-bold">
              A
            </AvatarFallback>
          </Avatar>
          <Button
            variant="ghost"
            size="sm"
            className="text-white/70 hover:text-gold-300"
          >
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </nav>

      <div className="relative z-40 flex h-[calc(100vh-80px)]">
        {/* Admin Sidebar */}
        <div className="w-80 border-r border-white/10 glass-morphism p-6">
          <div
            className={`transform transition-all duration-1000 ${
              isLoaded
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            {/* Console Mode Toggle */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gold-300 mb-4 uppercase tracking-wider">
                Console Mode
              </h3>
              <div className="space-y-3">
                <Button
                  variant={consoleMode === "companion" ? "default" : "ghost"}
                  className={`w-full justify-start ${
                    consoleMode === "companion"
                      ? "bg-gold-500 text-charcoal-900 saintvision-glow"
                      : "text-white/70 hover:text-gold-300"
                  }`}
                  onClick={() => setConsoleMode("companion")}
                >
                  <Crown className="w-4 h-4 mr-2" />
                  Companion Mode
                  <Sparkles className="w-3 h-3 ml-auto" />
                </Button>
                <Button
                  variant={consoleMode === "client" ? "default" : "ghost"}
                  className={`w-full justify-start ${
                    consoleMode === "client"
                      ? "bg-blue-500 text-white"
                      : "text-white/70 hover:text-blue-300"
                  }`}
                  onClick={() => setConsoleMode("client")}
                >
                  <Users className="w-4 h-4 mr-2" />
                  Client Assistant
                  <Shield className="w-3 h-3 ml-auto" />
                </Button>
              </div>
            </div>

            {/* Admin Metrics */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gold-300 mb-4 uppercase tracking-wider">
                System Metrics
              </h3>
              <div className="space-y-4">
                {adminMetrics.map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <div key={index} className="glass-morphism p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Icon className="w-4 h-4 text-gold-300" />
                          <span className="text-sm font-medium">
                            {metric.label}
                          </span>
                        </div>
                        <span
                          className={`text-xs ${
                            metric.change.startsWith("+")
                              ? "text-green-300"
                              : "text-red-300"
                          }`}
                        >
                          {metric.change}
                        </span>
                      </div>
                      <p className="text-lg font-bold text-white">
                        {metric.value}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h3 className="text-sm font-semibold text-gold-300 mb-4 uppercase tracking-wider">
                Quick Actions
              </h3>
              <div className="space-y-2">
                {quickActions.map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <Button
                      key={index}
                      variant="ghost"
                      className="w-full justify-start text-white/70 hover:text-gold-300 h-auto p-3"
                    >
                      <Icon className="w-4 h-4 mr-3 flex-shrink-0" />
                      <div className="text-left flex-1">
                        <p className="font-medium text-sm">{action.title}</p>
                        <p className="text-xs text-white/50">
                          {action.description}
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Main Console Area */}
        <div className="flex-1 flex flex-col">
          {/* Console Header */}
          <div className="p-6 border-b border-white/10">
            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center saintvision-glow ${
                      consoleMode === "companion"
                        ? "bg-gradient-to-br from-gold-400 to-gold-600"
                        : "bg-gradient-to-br from-blue-500 to-blue-600"
                    }`}
                  >
                    {consoleMode === "companion" ? (
                      <Crown className="w-6 h-6 text-charcoal-900" />
                    ) : (
                      <Users className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">
                      {consoleMode === "companion"
                        ? "SaintSal™ Companion Console"
                        : "Client Assistant Mode"}
                    </h2>
                    <p className="text-sm text-gold-300">
                      {consoleMode === "companion"
                        ? "Enterprise-grade AI with full admin capabilities"
                        : "Client-focused assistance with security context"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                    {consoleMode === "companion"
                      ? "Companion Active"
                      : "Client Mode"}
                  </Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white/70 hover:text-gold-300"
                  >
                    <Mic className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <div
              className={`transform transition-all duration-1000 delay-500 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {chatHistory.map(chat => (
                <div
                  key={chat.id}
                  className={`flex ${
                    chat.type === "user" ? "justify-end" : "justify-start"
                  } mb-6`}
                >
                  {chat.type === "ai" && (
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${
                        consoleMode === "companion"
                          ? "bg-gold-500"
                          : "bg-blue-500"
                      }`}
                    >
                      {consoleMode === "companion" ? (
                        <Crown className="w-5 h-5 text-charcoal-900" />
                      ) : (
                        <Shield className="w-5 h-5 text-white" />
                      )}
                    </div>
                  )}
                  <div
                    className={`max-w-[70%] ${
                      chat.type === "user" ? "order-1" : ""
                    }`}
                  >
                    <div
                      className={`p-4 rounded-2xl ${
                        chat.type === "user"
                          ? "bg-gold-500/20 ml-auto"
                          : "glass-morphism"
                      }`}
                    >
                      <p className="text-white">{chat.content}</p>
                      <p className="text-xs text-gold-300 mt-2">
                        {consoleMode === "companion"
                          ? "Companion"
                          : "Client Assistant"}{" "}
                        • {chat.timestamp}
                      </p>
                    </div>
                  </div>
                  {chat.type === "user" && (
                    <Avatar className="w-10 h-10 ml-3 flex-shrink-0">
                      <AvatarFallback className="bg-charcoal-700 text-white">
                        A
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Message Input */}
          <div className="p-6 border-t border-white/10">
            <div
              className={`transform transition-all duration-1000 delay-700 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="flex items-end space-x-4">
                <div className="flex-1 relative">
                  <Textarea
                    placeholder={`Console command or query... (${consoleMode} mode)`}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    onKeyPress={e => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                    className="min-h-[60px] bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-gold-500 resize-none"
                    rows={2}
                  />
                </div>
                <Button
                  onClick={handleSendMessage}
                  className={`h-[60px] px-6 ${
                    consoleMode === "companion"
                      ? "bg-gold-500 text-charcoal-900 hover:bg-gold-400 saintvision-glow"
                      : "bg-blue-500 text-white hover:bg-blue-400"
                  }`}
                  disabled={!message.trim()}
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
              <div className="flex items-center justify-between mt-3">
                <p className="text-xs text-white/50">
                  {consoleMode === "companion"
                    ? "Enterprise Companion with full admin access • HACP™ Technology"
                    : "Client Assistant mode with security context • US Patent 10,290,222"}
                </p>
                <div className="flex items-center space-x-2 text-xs text-white/50">
                  <Zap className="w-3 h-3" />
                  <span>
                    {consoleMode === "companion" ? "Admin" : "Client"} Ready
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
