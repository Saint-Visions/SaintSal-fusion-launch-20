import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Brain,
  Shield,
  Zap,
  Crown,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export default function Index() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-charcoal-900 text-white relative overflow-hidden">
      {/* Background Pattern - Parallax Layer 1 */}
      <div
        className="absolute inset-0 circuit-pattern opacity-5"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      ></div>

      {/* Hero Background Image - Parallax Layer 2 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(16, 22, 28, 0.95) 0%, rgba(16, 22, 28, 0.85) 100%), 
                           url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      ></div>

      {/* Additional Parallax Background Layer */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(ellipse at center, rgba(255, 215, 0, 0.1) 0%, transparent 70%)`,
          transform: `translateY(${scrollY * 0.2}px) scale(${1 + scrollY * 0.0001})`,
        }}
      ></div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between p-6 lg:px-12">
        <div className="flex items-center space-x-3">
          <div className="relative">
            {/* Main SaintVisionAI Logo */}
            <div className="flex items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F26e5b46954b5414f8dd87c2e3056f39d?format=webp&width=800"
                alt="SaintVisionAI Logo"
                className="w-14 h-14 object-contain saintvision-glow"
              />
            </div>
            {/* AI Indicator */}
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center animate-pulse">
              <div
                className="w-2 h-2 bg-white rounded-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage:
                    "url(https://cdn.builder.io/api/v1/assets/065997bd13e4442e888a08652fcd61ba/cookin-950b8e)",
                }}
              ></div>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold saintvision-gradient-text tracking-tight">
              SaintVisionAI™
            </h1>
            <p className="text-xs text-gold-300 -mt-1 font-medium">
              Cookin' Knowledge
            </p>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/dashboard"
            className="text-white/80 hover:text-gold-300 transition-colors"
          >
            Dashboard
          </Link>
          <Link
            to="/pricing"
            className="text-white/80 hover:text-gold-300 transition-colors"
          >
            Pricing
          </Link>
          <Link
            to="/help"
            className="text-white/80 hover:text-gold-300 transition-colors"
          >
            Help
          </Link>
          <Button
            variant="outline"
            className="border-gold-500 text-gold-300 hover:bg-gold-500 hover:text-charcoal-900"
          >
            Sign In
          </Button>
          <Button className="bg-gold-500 text-charcoal-900 hover:bg-gold-400 saintvision-glow">
            Start Cookin'
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className="relative z-40 flex flex-col items-center justify-center min-h-[80vh] text-center px-6"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      >
        <div
          className={`transform transition-all duration-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          {/* Main Logo/Brand */}
          <div className="mb-8">
            <div className="relative inline-block -mt-1 -mb-1">
              <div
                className="w-32 h-32 mx-auto mb-11 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage:
                    "url(https://cdn.builder.io/api/v1/assets/065997bd13e4442e888a08652fcd61ba/svt-sick-transparent-square-copy-54c1f3)",
                }}
              />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Hero Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            <span className="saintvision-gradient-text">SaintSal™</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gold-300 mb-6 font-medium">
            Cookin' Knowledge.
          </h2>

          {/* Hero Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl">
            AI doesn't just answer. It adapts. It empowers. It becomes
            <span className="text-gold-300 font-semibold">
              {" "}
              your GOTTA GUY™
            </span>
            .
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 mt-8">
            <Button
              size="lg"
              className="bg-gold-500 text-charcoal-900 hover:bg-gold-400 text-lg px-8 py-4 saintvision-glow group"
            >
              Start Cookin' Knowledge
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4 glass-morphism"
            >
              Try Console
            </Button>
          </div>
        </div>

        {/* Elite Technology Badge */}
        <div
          className={`transform transition-all duration-1000 delay-300 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="glass-morphism rounded-full px-6 py-3 mb-8">
            <p className="text-gold-300 font-semibold text-sm uppercase tracking-wider">
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Enterprise Ready
            </p>
          </div>
        </div>
      </div>

      {/* Features Preview */}
      <div
        className="relative z-40 px-6 pb-20"
        style={{
          transform: `translateY(${scrollY * 0.05}px)`,
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`transform transition-all duration-1000 delay-500 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h3 className="text-center text-gold-300 text-lg font-semibold mb-8">
              Dual AI systems handle your business operations while you focus on
              growth.
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div
                className="glass-morphism p-6 rounded-xl text-center group hover:saintvision-glow transition-all"
                style={{
                  transform: `translateY(${scrollY * 0.02}px)`,
                }}
              >
                <div className="w-16 h-16 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-500/30 transition-colors">
                  <Brain className="w-8 h-8 text-gold-300" />
                </div>
                <h4 className="text-xl font-semibold mb-2">AI Companion</h4>
                <p className="text-white/70">
                  GPT-4o + Azure cognitive services with emotional intelligence
                </p>
              </div>

              {/* Feature 2 */}
              <div
                className="glass-morphism p-6 rounded-xl text-center group hover:saintvision-glow transition-all"
                style={{
                  transform: `translateY(${scrollY * 0.03}px)`,
                }}
              >
                <div className="w-16 h-16 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-500/30 transition-colors">
                  <Shield className="w-8 h-8 text-gold-300" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Faith-Aligned</h4>
                <p className="text-white/70">
                  Secure, moral, and scalable with patented HACP™ technology
                </p>
              </div>

              {/* Feature 3 */}
              <div
                className="glass-morphism p-6 rounded-xl text-center group hover:saintvision-glow transition-all"
                style={{
                  transform: `translateY(${scrollY * 0.04}px)`,
                }}
              >
                <div className="w-16 h-16 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-500/30 transition-colors">
                  <Zap className="w-8 h-8 text-gold-300" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Real Integration</h4>
                <p className="text-white/70">
                  CRM, Stripe billing, voice commands, and enterprise tools
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div
        className="relative z-40 text-center pb-12"
        style={{
          transform: `translateY(${scrollY * 0.03}px)`,
        }}
      >
        <div
          className={`transform transition-all duration-1000 delay-700 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <p className="text-white/70 mb-4">Ready to meet your GOTTA GUY™?</p>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-gold-500 text-charcoal-900 hover:bg-gold-400 saintvision-glow"
            >
              <MessageSquare className="mr-2 w-5 h-5" />
              Start Your First Chat
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
