import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  MessageSquare,
  Crown,
  Brain,
  Zap,
  Settings,
  Mic,
  Send,
  Plus,
  History,
  Star,
  Shield,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

export default function Dashboard() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeChat, setActiveChat] = useState("gpt4o");
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      id: 1,
      type: "ai",
      content:
        "Welcome to SaintSal™! I'm your GOTTA GUY™ AI companion. How can I help you cook up some knowledge today?",
      timestamp: new Date().toLocaleTimeString(),
      model: "GPT-4o",
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
      model: "",
    };

    setChatHistory([...chatHistory, newMessage]);
    setMessage("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: chatHistory.length + 2,
        type: "ai",
        content:
          "I understand your query. Let me help you with that using our patented HACP™ technology...",
        timestamp: new Date().toLocaleTimeString(),
        model: activeChat === "gpt4o" ? "GPT-4o" : "Azure Cognitive",
      };
      setChatHistory((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-charcoal-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 circuit-pattern opacity-5"></div>

      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(16, 22, 28, 0.98) 0%, rgba(16, 22, 28, 0.95) 100%), 
                           url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')`,
        }}
      ></div>

      {/* Top Navigation */}
      <nav className="relative z-50 flex items-center justify-between p-6 lg:px-12 border-b border-white/10">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center">
            <span className="text-charcoal-900 font-bold">Sv.</span>
          </div>
          <div>
            <h1 className="text-lg font-bold saintvision-gradient-text">
              Dashboard
            </h1>
            <p className="text-xs text-gold-300 -mt-1">SaintSal™ Console</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Pro Active
          </Badge>
          <Avatar className="w-10 h-10">
            <AvatarFallback className="bg-gold-500 text-charcoal-900 font-bold">
              S
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
        {/* Sidebar */}
        <div className="w-80 border-r border-white/10 glass-morphism p-6">
          <div
            className={`transform transition-all duration-1000 ${isLoaded ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            {/* AI Model Selector */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gold-300 mb-4 uppercase tracking-wider">
                Dual AI System
              </h3>
              <div className="space-y-3">
                <Button
                  variant={activeChat === "gpt4o" ? "default" : "ghost"}
                  className={`w-full justify-start ${activeChat === "gpt4o" ? "bg-gold-500 text-charcoal-900 saintvision-glow" : "text-white/70 hover:text-gold-300"}`}
                  onClick={() => setActiveChat("gpt4o")}
                >
                  <Brain className="w-4 h-4 mr-2" />
                  <span className="text-blue-400 font-semibold">
                    GPT-4o
                  </span>{" "}
                  Primary
                  <Sparkles className="w-3 h-3 ml-auto" />
                </Button>
                <Button
                  variant={activeChat === "azure" ? "default" : "ghost"}
                  className={`w-full justify-start ${activeChat === "azure" ? "bg-blue-500 text-white" : "text-white/70 hover:text-blue-300"}`}
                  onClick={() => setActiveChat("azure")}
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Azure Cognitive
                  <Crown className="w-3 h-3 ml-auto" />
                </Button>
              </div>
            </div>

            {/* Chat History */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-gold-300 uppercase tracking-wider">
                  Recent Chats
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white/50 hover:text-gold-300"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <div className="space-y-2">
                <div className="p-3 glass-morphism rounded-lg cursor-pointer hover:bg-white/5 transition-colors">
                  <p className="text-sm font-medium">
                    Business Strategy Session
                  </p>
                  <p className="text-xs text-white/50">2 hours ago</p>
                </div>
                <div className="p-3 glass-morphism rounded-lg cursor-pointer hover:bg-white/5 transition-colors">
                  <p className="text-sm font-medium">CRM Integration Help</p>
                  <p className="text-xs text-white/50">Yesterday</p>
                </div>
                <div className="p-3 glass-morphism rounded-lg cursor-pointer hover:bg-white/5 transition-colors">
                  <p className="text-sm font-medium">Code Review Session</p>
                  <p className="text-xs text-white/50">3 days ago</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h3 className="text-sm font-semibold text-gold-300 mb-4 uppercase tracking-wider">
                Quick Actions
              </h3>
              <div className="space-y-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white/70 hover:text-gold-300"
                >
                  <History className="w-4 h-4 mr-2" />
                  View All Chats
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white/70 hover:text-gold-300"
                >
                  <Star className="w-4 h-4 mr-2" />
                  Favorite Responses
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white/70 hover:text-gold-300"
                >
                  <ArrowUpRight className="w-4 h-4 mr-2" />
                  Upgrade Plan
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-6 border-b border-white/10">
            <div
              className={`transform transition-all duration-1000 delay-300 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center saintvision-glow">
                    {activeChat === "gpt4o" ? (
                      <Brain className="w-6 h-6 text-charcoal-900" />
                    ) : (
                      <Shield className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">
                      {activeChat === "gpt4o"
                        ? "GPT-4o Assistant"
                        : "Azure Cognitive Services"}
                    </h2>
                    <p className="text-sm text-gold-300">
                      {activeChat === "gpt4o"
                        ? "Your GOTTA GUY™ Primary AI"
                        : "Enterprise Security & Analysis"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                    Online
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
              className={`transform transition-all duration-1000 delay-500 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              {chatHistory.map((chat) => (
                <div
                  key={chat.id}
                  className={`flex ${chat.type === "user" ? "justify-end" : "justify-start"} mb-6`}
                >
                  {chat.type === "ai" && (
                    <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Crown className="w-5 h-5 text-charcoal-900" />
                    </div>
                  )}
                  <div
                    className={`max-w-[70%] ${chat.type === "user" ? "order-1" : ""}`}
                  >
                    <div
                      className={`p-4 rounded-2xl ${chat.type === "user" ? "bg-gold-500/20 ml-auto" : "glass-morphism"}`}
                    >
                      <p className="text-white">{chat.content}</p>
                      {chat.model && (
                        <p className="text-xs text-gold-300 mt-2">
                          {chat.model} • {chat.timestamp}
                        </p>
                      )}
                    </div>
                  </div>
                  {chat.type === "user" && (
                    <Avatar className="w-10 h-10 ml-3 flex-shrink-0">
                      <AvatarFallback className="bg-charcoal-700 text-white">
                        U
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
              className={`transform transition-all duration-1000 delay-700 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="flex items-end space-x-4">
                <div className="flex-1 relative">
                  <Textarea
                    placeholder="Ask your GOTTA GUY™ anything..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => {
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
                  className="bg-gold-500 text-charcoal-900 hover:bg-gold-400 saintvision-glow h-[60px] px-6"
                  disabled={!message.trim()}
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
              <div className="flex items-center justify-between mt-3">
                <p className="text-xs text-white/50">
                  Powered by SaintSal™ HACP Technology • US Patent 10,290,222
                </p>
                <div className="flex items-center space-x-2 text-xs text-white/50">
                  <Zap className="w-3 h-3" />
                  <span>Enterprise Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
