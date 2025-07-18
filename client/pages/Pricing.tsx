import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  Crown,
  Zap,
  Shield,
  Brain,
  Star,
  ArrowRight,
  Sparkles,
  Globe,
  CreditCard,
  MessageSquare,
  Users,
  Building,
  Infinity,
} from "lucide-react";

export default function Pricing() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly",
  );

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const plans = [
    {
      name: "Starter",
      subtitle: "Try the Cookin'",
      price: { monthly: 0, yearly: 0 },
      description: "Perfect for exploring SaintSal™ capabilities",
      features: [
        "100 AI conversations/month",
        "Basic GPT-4o access",
        "Community support",
        "Standard response time",
        "Web interface only",
      ],
      cta: "Start Free",
      popular: false,
      stripePriceId: process.env.VITE_STRIPE_FREE_PRICE_ID,
      icon: MessageSquare,
      gradient: "from-gray-500 to-gray-600",
    },
    {
      name: "Professional",
      subtitle: "Your GOTTA GUY™",
      price: { monthly: 27, yearly: 270 },
      description: "Everything you need to scale your business",
      features: [
        "Unlimited AI conversations",
        "Dual AI system (GPT-4o + Azure)",
        "Voice & SMS integration",
        "CRM connection (GHL)",
        "Priority support",
        "Chrome extension",
        "Custom AI memory",
        "API access",
      ],
      cta: "Go Pro",
      popular: true,
      stripePriceId: process.env.VITE_STRIPE_PRO_PRICE_ID,
      icon: Crown,
      gradient: "from-gold-400 to-gold-600",
    },
    {
      name: "Enterprise",
      subtitle: "Ultimate Scale",
      price: { monthly: 497, yearly: 4970 },
      description: "For teams and organizations ready to dominate",
      features: [
        "Everything in Professional",
        "White-label branding",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantees",
        "Advanced analytics",
        "Multi-user management",
        "Custom AI training",
        "Priority deployment",
      ],
      cta: "Contact Sales",
      popular: false,
      stripePriceId: process.env.VITE_STRIPE_CUSTOM_PRICE_ID,
      icon: Building,
      gradient: "from-purple-500 to-purple-700",
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
                           url('https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        }}
      ></div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between p-6 lg:px-12">
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center">
            <span className="text-charcoal-900 font-bold text-lg">Sv.</span>
          </div>
          <div>
            <h1 className="text-xl font-bold saintvision-gradient-text">
              SaintVisionAI™
            </h1>
            <p className="text-xs text-gold-300 -mt-1">Pricing Plans</p>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a
            href="/"
            className="text-white/80 hover:text-gold-300 transition-colors"
          >
            Home
          </a>
          <a
            href="/dashboard"
            className="text-white/80 hover:text-gold-300 transition-colors"
          >
            Dashboard
          </a>
          <a
            href="/help"
            className="text-white/80 hover:text-gold-300 transition-colors"
          >
            Help
          </a>
          <Button
            variant="outline"
            className="border-gold-500 text-gold-300 hover:bg-gold-500 hover:text-charcoal-900"
          >
            Sign In
          </Button>
        </div>
      </nav>

      <div className="relative z-40 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="mb-8">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center saintvision-glow-strong">
                <CreditCard className="w-10 h-10 text-charcoal-900" />
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="saintvision-gradient-text">Choose Your</span>
              <br />
              <span className="text-gold-300">GOTTA GUY™</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
              From startup to enterprise, SaintSal™ scales with your ambition.
              <br />
              <span className="text-gold-300 font-semibold">
                All plans include our patented HACP™ technology.
              </span>
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <span
                className={`font-medium ${billingCycle === "monthly" ? "text-gold-300" : "text-white/60"}`}
              >
                Monthly
              </span>
              <button
                onClick={() =>
                  setBillingCycle(
                    billingCycle === "monthly" ? "yearly" : "monthly",
                  )
                }
                className={`relative w-16 h-8 rounded-full transition-colors ${billingCycle === "yearly" ? "bg-gold-500" : "bg-white/20"}`}
              >
                <div
                  className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${billingCycle === "yearly" ? "translate-x-8" : "translate-x-1"}`}
                />
              </button>
              <span
                className={`font-medium ${billingCycle === "yearly" ? "text-gold-300" : "text-white/60"}`}
              >
                Yearly
              </span>
              {billingCycle === "yearly" && (
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30 ml-2">
                  Save 17%
                </Badge>
              )}
            </div>
          </div>

          {/* Pricing Cards */}
          <div
            className={`grid lg:grid-cols-3 gap-8 mb-16 transform transition-all duration-1000 delay-300 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              const price = plan.price[billingCycle];

              return (
                <div
                  key={plan.name}
                  className={`relative p-8 rounded-2xl border transition-all hover:scale-105 ${
                    plan.popular
                      ? "border-gold-500 glass-morphism saintvision-glow-strong"
                      : "border-white/20 glass-morphism hover:border-white/40"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gold-500 text-charcoal-900 font-bold px-4 py-1">
                        <Star className="w-3 h-3 mr-1" />
                        MOST POPULAR
                      </Badge>
                    </div>
                  )}

                  {/* Plan Icon */}
                  <div className="mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${plan.gradient} rounded-xl flex items-center justify-center mx-auto ${plan.popular ? "saintvision-glow" : ""}`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Plan Details */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gold-300 font-medium mb-4">
                      {plan.subtitle}
                    </p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">${price}</span>
                      <span className="text-white/60 ml-2">
                        /{billingCycle === "monthly" ? "month" : "year"}
                      </span>
                    </div>
                    <p className="text-white/70 text-sm">{plan.description}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start space-x-3"
                      >
                        <Check className="w-5 h-5 text-gold-300 flex-shrink-0 mt-0.5" />
                        <span className="text-white/90 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    className={`w-full text-lg py-6 ${
                      plan.popular
                        ? "bg-gold-500 text-charcoal-900 hover:bg-gold-400 saintvision-glow"
                        : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>

                  {plan.popular && (
                    <p className="text-center text-xs text-gold-300 mt-4">
                      Most businesses choose this plan
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Enterprise Contact */}
          <div
            className={`text-center mb-16 transform transition-all duration-1000 delay-500 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="glass-morphism rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">
                Need Something Custom?
              </h3>
              <p className="text-white/80 mb-6 text-lg">
                We build white-label solutions, custom integrations, and
                enterprise deployments.
                <br />
                <span className="text-gold-300">
                  Let's talk about your vision.
                </span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gold-500 text-charcoal-900 hover:bg-gold-400 saintvision-glow"
                >
                  <Users className="mr-2 w-5 h-5" />
                  Schedule a Call
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  <MessageSquare className="mr-2 w-5 h-5" />
                  Chat with Sales
                </Button>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div
            className={`mb-16 transform transition-all duration-1000 delay-700 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h3 className="text-3xl font-bold text-center mb-12">
              <span className="saintvision-gradient-text">Why SaintSal™?</span>
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 glass-morphism rounded-xl">
                <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-6 h-6 text-gold-300" />
                </div>
                <h4 className="font-semibold mb-2">HACP™ Technology</h4>
                <p className="text-white/70 text-sm">
                  Patented Human-AI Connection Protocol
                </p>
              </div>

              <div className="text-center p-6 glass-morphism rounded-xl">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-blue-300" />
                </div>
                <h4 className="font-semibold mb-2">Enterprise Security</h4>
                <p className="text-white/70 text-sm">
                  Azure-backed with SOC 2 compliance
                </p>
              </div>

              <div className="text-center p-6 glass-morphism rounded-xl">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-purple-300" />
                </div>
                <h4 className="font-semibold mb-2">Real Integrations</h4>
                <p className="text-white/70 text-sm">
                  CRM, billing, voice, and SMS ready
                </p>
              </div>

              <div className="text-center p-6 glass-morphism rounded-xl">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-green-300" />
                </div>
                <h4 className="font-semibold mb-2">Global Scale</h4>
                <p className="text-white/70 text-sm">
                  Multi-region deployment ready
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Preview */}
          <div
            className={`text-center transform transition-all duration-1000 delay-900 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="glass-morphism rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-white/80 mb-6">
                Our documentation covers everything, or chat with our support
                team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  className="border-gold-500 text-gold-300 hover:bg-gold-500 hover:text-charcoal-900"
                >
                  View Documentation
                </Button>
                <Button className="bg-gold-500 text-charcoal-900 hover:bg-gold-400 saintvision-glow">
                  <MessageSquare className="mr-2 w-4 h-4" />
                  Live Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="relative z-40 text-center py-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 text-white/60">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span className="text-sm">US Patent 10,290,222</span>
            </div>
            <div className="flex items-center space-x-2">
              <CreditCard className="w-4 h-4" />
              <span className="text-sm">Secure Stripe Billing</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">30-Day Money Back</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4" />
              <span className="text-sm">99.9% Uptime SLA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
