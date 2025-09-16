// app/page.tsx
"use client";

import { useState, useEffect } from "react";
import { Brain, Code, Sparkles, ChevronDown, Menu, X } from "lucide-react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToManifesto = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation - Mobile Responsive */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
              DeepTech Labs
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 transition-opacity">
                Book a 30-min Audit Kickoff Call
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-purple-400" />
              ) : (
                <Menu className="w-6 h-6 text-purple-400" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md py-4 border-t border-purple-500/20 mobile-menu-enter">
              <div className="container mx-auto px-4">
                <button className="w-full px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 transition-opacity">
                  Book a 30-min Audit Kickoff Call
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Mobile Optimized */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-blue-900/30" />
          <div className="neural-grid" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-tight fade-in-up">
              <span className="inline-block bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-400 text-transparent bg-clip-text animate-gradient">
                Cloud-Native Backends & Modern Integrations
              </span>
              <br />
              <span className="inline-block bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-400 text-transparent bg-clip-text animate-gradient-reverse">
                Built Fast, Secure, Cost-Aware
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-blue-200/90 mb-12 leading-relaxed max-w-3xl mx-auto px-4 fade-in-up fade-in-up-delay-1">
              We help startups and small businesses migrate legacy apps, integrate modern tools, and launch SaaS backends that scale. Fixed-price · Fast delivery · No surprises.
            </p>

            {/* CTA Buttons - Mobile Responsive */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12 px-4 fade-in-up fade-in-up-delay-2 justify-center">
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 transition-opacity text-lg font-semibold">
                Book a 30-min Audit Kickoff Call
              </button>
              <button className="px-8 py-4 rounded-full border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 transition-all text-lg font-semibold">
                Pay & Start Migration Audit (US$300)
              </button>
            </div>

            {/* Replace the existing ChevronDown with this new one */}
            <ChevronDown
              className="w-8 h-8 mx-auto text-purple-400 animate-bounce cursor-pointer"
              onClick={scrollToManifesto}
            />
          </div>
        </div>
      </section>

      {/* Manifesto Section - Mobile Optimized */}
      <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text px-4">
              Our Digital Atelier
            </h2>
            <div className="prose prose-invert mx-auto px-4">
              <p className="text-lg sm:text-xl text-gray-300 mb-6 leading-relaxed">
                Each project is a fusion of mathematical precision and artistic
                vision, where neural networks breathe life into data, and
                artificial intelligence dances on the edge of imagination.
              </p>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                In our digital atelier, we're not just building applications –
                we're crafting experiences that resonate at the intersection of
                art and innovation. Welcome to a space where bits become beauty,
                and technology transcends into artistry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Grid - Mobile Optimized */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-black via-purple-900/10 to-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {[
              "Neural Networks",
              "Computer Vision",
              "Deep Learning",
              "Data Science",
              "Cloud Architecture",
              "DevOps",
              "AI Research",
              "Creative Tech",
            ].map((tech) => (
              <div
                key={tech}
                className="px-4 sm:px-6 py-3 rounded-full bg-purple-900/20 border border-purple-500/20 
                         text-center text-sm text-gray-300 hover:border-purple-500/40 
                         hover:bg-purple-900/30 transition-all duration-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Card({
  icon,
  title,
  description,
  className = "",
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={`group p-6 rounded-2xl bg-gradient-to-b from-purple-900/20 to-transparent 
                    border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300
                    ${className}`}
    >
      <div className="inline-flex items-center justify-center w-10 h-10 mb-4 rounded-lg bg-purple-900/30">
        <div className="flex items-center justify-center w-full h-full text-purple-400 group-hover:text-purple-300 transition-colors">
          {icon}
        </div>
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-100">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors">
        {description}
      </p>
    </div>
  );
}
