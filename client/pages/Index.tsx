import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Navigation } from "@/components/ui/navigation";
import {
  ArrowRight,
  Brain,
  Shield,
  Zap,
  Crown,
  MessageSquare,
  Sparkles,
  Play,
  CheckCircle,
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
                                                      url('https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F317f7c64793d47ab90d506bd066bedbb?format=webp&width=800')`,
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      ></div>

      {/* Additional Parallax Background Layer */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(ellipse at center, rgba(255, 215, 0, 0.1) 0%, transparent 70%)`,
          transform: `translateY(${scrollY * 0.2}px) scale(${1 +
            scrollY * 0.0001})`,
        }}
      ></div>

      {/* SaintVisionAI Branding Overlay */}
      <div
        className="absolute inset-0 flex items-center justify-center opacity-30"
        style={{
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
      >
        <div className="text-center">
          <h2 className="text-6xl font-bold text-gold-400 mb-2 saintvision-glow tracking-wider font-dialien">
            SaintVisionAI
          </h2>
          <p className="text-xl text-gold-300 font-medium tracking-wide">
            Enterprise AI Solutions
          </p>
        </div>
      </div>

      {/* Navigation */}
      <Navigation variant="public" />

      {/* Hero Section */}
      <div
        className="relative z-40 flex flex-col items-center justify-center min-h-[80vh] text-center px-6"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      >
        <div
          className={`transform transition-all duration-1000 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Main Logo/Brand */}
          <BrandLogo variant="hero" showAIIndicator={true} className="mb-4" />

          {/* Hero Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-4xl mx-auto leading-relaxed">
            AI doesn't just answer. It{" "}
            <span className="text-blue-400 font-medium">adapts</span>. It{" "}
            <span className="text-purple-400 font-medium">empowers</span>. It
            becomes
            <span className="text-gold-300 font-semibold">
              {" "}
              your enterprise companion
            </span>
            .
          </p>

          {/* Key Value Propositions */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 mt-6">
            <div className="flex items-center text-green-400 text-sm font-medium">
              <CheckCircle className="w-4 h-4 mr-2" />
              Enterprise-Grade Security
            </div>
            <div className="flex items-center text-blue-400 text-sm font-medium">
              <CheckCircle className="w-4 h-4 mr-2" />
              GPT-4o + Azure Integration
            </div>
            <div className="flex items-center text-purple-400 text-sm font-medium">
              <CheckCircle className="w-4 h-4 mr-2" />
              HACP™ Compliance
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 mt-8">
            <Link to="/signup">
              <Button
                size="lg"
                className="bg-gold-500 text-charcoal-900 hover:bg-gold-400 text-lg px-8 py-4 saintvision-glow group transform hover:scale-105 transition-all"
              >
                Start Cookin' Knowledge
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/console">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4 glass-morphism group"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Try Console
              </Button>
            </Link>
          </div>
        </div>

        {/* Elite Technology Badge */}
        <div
          className={`transform transition-all duration-1000 delay-300 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
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
            className={`transform transition-all duration-1000 delay-500 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h3 className="text-center text-white/80 text-lg font-semibold mb-8">
              <span className="text-blue-400">Dual AI systems</span> handle your
              business operations while you focus on
              <span className="text-green-400 font-medium"> growth</span>.
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
                <h4 className="text-xl font-semibold mb-2 flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                  AI Companion
                </h4>
                <p className="text-white/70">
                  <span className="text-blue-400 font-medium">GPT-4o</span> +{" "}
                  <span className="text-purple-400">
                    Azure cognitive services
                  </span>{" "}
                  with emotional intelligence
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
                <h4 className="text-xl font-semibold mb-2 flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  Faith-Aligned
                </h4>
                <p className="text-white/70">
                  <span className="text-green-400 font-medium">Secure</span>,
                  moral, and scalable with patented{" "}
                  <span className="text-yellow-400 font-semibold">HACP™</span>{" "}
                  technology
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
                <h4 className="text-xl font-semibold mb-2 flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                  Real Integration
                </h4>
                <p className="text-white/70">
                  <span className="text-blue-400">CRM</span>,{" "}
                  <span className="text-green-400">Stripe billing</span>, voice
                  commands, and{" "}
                  <span className="text-purple-400 font-medium">
                    enterprise tools
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Demo Section */}
      <div
        className="relative z-40 px-6 pb-16"
        style={{
          transform: `translateY(${scrollY * 0.04}px)`,
        }}
      >
        <div className="max-w-4xl mx-auto">
          <div
            className={`transform transition-all duration-1000 delay-600 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="saintvision-gradient-text font-dialien">
                  See SaintSal™ in Action
                </span>
              </h3>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Watch how our AI transforms from conversation to enterprise
                action
              </p>
            </div>

            {/* Demo Video Placeholder */}
            <div className="relative aspect-video bg-charcoal-800/50 rounded-2xl overflow-hidden glass-morphism group cursor-pointer hover:saintvision-glow transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 to-blue-500/20 opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-gold-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform saintvision-glow">
                  <Play className="w-8 h-8 text-charcoal-900 ml-1" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="text-xl font-semibold mb-2">
                  Enterprise AI Demo
                </h4>
                <p className="text-white/70 text-sm">
                  3 minutes • See real CRM integration & automated workflows
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof Section */}
      <div
        className="relative z-40 px-6 pb-16"
        style={{
          transform: `translateY(${scrollY * 0.05}px)`,
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`transform transition-all duration-1000 delay-700 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="text-white/90">Trusted by</span>{" "}
                <span className="saintvision-gradient-text">
                  Enterprise Leaders
                </span>
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-gold-300 mb-2">
                  99.9%
                </div>
                <p className="text-white/70">Uptime SLA</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">
                  <span className="text-gold-300">SOC 2</span>
                </div>
                <p className="text-white/70">Type II Certified</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">
                  Enterprise
                </div>
                <p className="text-white/70">Ready Day One</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div
        className="relative z-40 text-center pb-16"
        style={{
          transform: `translateY(${scrollY * 0.03}px)`,
        }}
      >
        <div
          className={`transform transition-all duration-1000 delay-800 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="glass-morphism rounded-3xl p-12 max-w-4xl mx-auto mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="saintvision-gradient-text font-dialien">
                Ready to meet your GOTTA GUY™?
              </span>
            </h3>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of enterprises already cooking knowledge with
              SaintSal™
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button
                  size="lg"
                  className="bg-gold-500 text-charcoal-900 hover:bg-gold-400 saintvision-glow text-lg px-8 py-4 group"
                >
                  <MessageSquare className="mr-2 w-5 h-5" />
                  Start Your First Chat
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-gold-500/50 text-gold-300 hover:bg-gold-500/10 text-lg px-8 py-4"
                >
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-white/50 text-sm">
            <p>
              © 2024 SaintVisionAI™. All rights reserved. |{" "}
              <span className="text-gold-300">Enterprise AI Solutions</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
