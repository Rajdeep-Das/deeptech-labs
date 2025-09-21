"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { trackAuditBooking, trackServiceView, trackContactInteraction } from "@/lib/analytics";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  CheckCircle,
  Zap,
  Cloud,
  Database,
  Lock,
  Activity,
  BarChart3,
} from "lucide-react";

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

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    servicesSection?.scrollIntoView({ behavior: "smooth" });
    trackServiceView('audit'); // Track when user actively seeks services
  };

  return (
    <main className="min-h-screen bg-white text-gray-100 font-sans">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-carbon-02 border-b border-gray-20"
            : "bg-white border-b border-gray-10"
        }`}
      >
        <div className="max-w-screen-lg mx-auto px-05 lg:px-06">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center cursor-pointer">
              {/* Carbon-compliant Logo Icon */}
              <div className="mr-03">
                <div className="w-8 h-8 bg-blue-60 rounded-md flex items-center justify-center relative">
                  {/* Clean network topology - thin lines, small nodes */}

                  {/* Central node - much smaller */}
                  <div className="w-1 h-1 bg-white rounded-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

                  {/* Satellite nodes - tiny clean dots */}
                  <div className="w-01 h-01 bg-white rounded-full absolute top-02 left-02"></div>
                  <div className="w-01 h-01 bg-white rounded-full absolute top-02 right-02"></div>
                  <div className="w-01 h-01 bg-white rounded-full absolute bottom-02 left-02"></div>
                  <div className="w-01 h-01 bg-white rounded-full absolute bottom-02 right-02"></div>

                  {/* Ultra-thin connection lines */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 32 32"
                  >
                    <g stroke="white" strokeWidth="0.3" opacity="0.5">
                      <line x1="16" y1="16" x2="8" y2="8" />
                      <line x1="16" y1="16" x2="24" y2="8" />
                      <line x1="16" y1="16" x2="8" y2="24" />
                      <line x1="16" y1="16" x2="24" y2="24" />
                    </g>
                  </svg>

                  {/* Minimal accent - single dot */}
                  <div className="w-01 h-01 bg-white opacity-30 absolute top-01 right-01"></div>
                </div>
              </div>

              {/* Carbon Typography */}
              <div className="text-heading-04 font-semibold text-gray-100">
                Deep<span className="text-blue-60">Tech</span>Labs
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-07">
              <a
                href="#services"
                className="text-body-01 text-gray-70 hover:text-gray-100 transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-60 after:transition-all hover:after:w-full"
              >
                Services
              </a>
              <a
                href="/case-studies"
                className="text-body-01 text-gray-70 hover:text-gray-100 transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-60 after:transition-all hover:after:w-full"
              >
                Case Studies
              </a>
              <a
                href="https://calendly.com/rajdeep-das/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-06 py-03 bg-blue-60 text-white hover:bg-blue-70 transition-all duration-200 text-body-compact-02 font-medium shadow-carbon-01 hover:shadow-carbon-02 focus:outline-none focus:ring-2 focus:ring-blue-60 focus:ring-offset-2 inline-block"
              >
                Book 30-min Call
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-03 hover:bg-gray-10 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-60 focus:ring-offset-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-70" />
              ) : (
                <Menu className="w-5 h-5 text-gray-70" />
              )}
            </button>
          </div>

          {/* Mobile Menu - Refined Layout */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-20 shadow-carbon-03">
              <div className="px-05 py-06">
                {/* Menu Items Container */}
                <div className="space-y-06">
                  {/* Navigation Links */}
                  <div className="border-l-2 border-blue-60 pl-04">
                    <a
                      href="#services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-body-02 text-gray-80 hover:text-blue-60 font-medium transition-colors tracking-tight"
                    >
                      Services
                    </a>
                  </div>
                  <div className="border-l-2 border-blue-60 pl-04">
                    <a
                      href="/case-studies"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-body-02 text-gray-80 hover:text-blue-60 font-medium transition-colors tracking-tight"
                    >
                      Case Studies
                    </a>
                  </div>

                  {/* CTA Button - Enhanced */}
                  <div className="pt-04">
                    <a
                      href="https://calendly.com/rajdeep-das/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-06 py-04 bg-blue-60 text-white hover:bg-blue-70 transition-colors text-body-compact-02 font-medium shadow-carbon-01 hover:shadow-carbon-02 focus:outline-none focus:ring-2 focus:ring-blue-60 focus:ring-offset-2 inline-block text-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Book 30-min Call
                    </a>
                  </div>
                </div>

                {/* Subtle Accent Line */}
                <div className="mt-06 pt-04 border-t border-gray-20">
                  <div className="flex justify-center">
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-60 to-transparent opacity-30 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-10 to-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-10/30 via-transparent to-transparent"></div>

        <div className="relative pt-24 pb-16 lg:pt-32 lg:pb-20">
          <div className="max-w-screen-lg mx-auto px-05 lg:px-06">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-08 lg:gap-10 items-center">
              {/* Main Content */}
              <div className="lg:col-span-8 text-center lg:text-left">
                <div className="mb-05">
                  <span className="inline-flex items-center px-04 py-02 bg-blue-10 text-blue-70 text-label-02 font-medium border-l-4 border-blue-60">
                    Startup Cloud Infrastructure
                  </span>
                </div>

                <h1 className="text-fluid-heading-05 lg:text-fluid-heading-06 font-semibold text-gray-100 mb-06 leading-tight tracking-tight">
                  Stop Burning Money & Time on Cloud That Doesn't Work
                </h1>

                <p className="text-body-02 text-gray-70 mb-08 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Already on AWS or Azure? Costs keep rising, integrations
                  break, and releases are slow. DeepTechLabs fixes this with
                  fixed-price audits, 2-week sprints, and production-ready SaaS
                  backends.
                  <strong className="text-gray-100">
                    No DevOps hire needed.
                  </strong>{" "}
                  Direct access to founders - no account managers.
                </p>

                <div className="flex flex-col sm:flex-row gap-04 mb-08 justify-center lg:justify-start">
                                    <a
                    href="https://calendly.com/rajdeep-das/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center px-06 py-04 bg-blue-60 text-white hover:bg-blue-70 transition-all duration-200 text-body-compact-02 font-medium shadow-carbon-02 hover:shadow-carbon-04 focus:outline-none focus:ring-2 focus:ring-blue-60 focus:ring-offset-2"
                    onClick={() => trackAuditBooking('hero-cta')}
                  >
                    <span>Book 7-Day Audit — US$300</span>
                  </a>
                  <a
                    href="/audit-report"
                    className="group inline-flex items-center justify-center px-06 py-04 border border-gray-30 text-gray-80 hover:bg-gray-10 hover:border-gray-40 transition-all duration-200 text-body-compact-02 font-medium shadow-carbon-01 hover:shadow-carbon-02 focus:outline-none focus:ring-2 focus:ring-gray-60 focus:ring-offset-2"
                    onClick={() => trackContactInteraction('form')}
                  >
                    <span>See Example Audit Report</span>
                    <ArrowRight className="ml-03 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Capacity limit text */}
                <div className="text-center lg:text-left mb-06">
                  <span className="text-caption-01 text-gray-60 font-medium">
                    Limited to 5 audits per month
                  </span>
                </div>

                {/* Trust indicators */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-04 max-w-xl mx-auto lg:mx-0">
                  <div className="flex items-center justify-center lg:justify-start p-04 bg-green-10/50 border-l-2 border-green-60">
                    <CheckCircle className="w-4 h-4 text-green-60 mr-03 flex-shrink-0" />
                    <span className="text-body-compact-01 text-gray-70 font-medium">
                      Recently helped 3 startups cut infrastructure costs
                    </span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start p-04 bg-blue-10/50 border-l-2 border-blue-60">
                    <CheckCircle className="w-4 h-4 text-blue-60 mr-03 flex-shrink-0" />
                    <span className="text-body-compact-01 text-gray-70 font-medium">
                      No long-term contracts required
                    </span>
                  </div>
                </div>
              </div>

              {/* Professional Illustration */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <div className="relative w-72 h-80">
                  {/* Clean Carbon-compliant dashboard */}
                  <div className="bg-white border border-gray-30 shadow-carbon-03 p-06 h-full">
                    {/* Header with IBM-style branding */}
                    <div className="flex items-center justify-between mb-05 pb-03 border-b border-gray-20">
                      <div className="flex items-center space-x-02">
                        <Cloud className="w-4 h-4 text-blue-60" />
                        <span className="text-label-02 font-semibold text-gray-100">
                          Cloud Health
                        </span>
                      </div>
                      <div className="flex items-center space-x-01">
                        <div className="w-2 h-2 bg-green-60"></div>
                        <span className="text-caption-01 text-gray-70">
                          Live
                        </span>
                      </div>
                    </div>

                    {/* Real ROI metrics with before/after */}
                    <div className="space-y-04 mb-06">
                      {/* AWS Cost Reduction */}
                      <div className="p-04 bg-gray-10 border-l-2 border-green-60">
                        <div className="flex items-center justify-between mb-02">
                          <span className="text-label-01 text-gray-70">
                            AWS Monthly Bill
                          </span>
                          <div className="flex items-center space-x-02">
                            <span className="text-caption-01 text-gray-50 line-through">
                              $5,200
                            </span>
                            <span className="text-heading-compact-02 font-semibold text-green-60">
                              $1,390
                            </span>
                          </div>
                        </div>
                        <div className="w-full h-01 bg-gray-20 mb-01">
                          <div className="w-1/4 h-full bg-green-60"></div>
                        </div>
                        <div className="text-caption-02 text-green-60 font-medium">
                          73% reduction
                        </div>
                      </div>

                      {/* Deploy Time Improvement */}
                      <div className="p-04 bg-gray-10 border-l-2 border-blue-60">
                        <div className="flex items-center justify-between mb-02">
                          <span className="text-label-01 text-gray-70">
                            Deploy Time
                          </span>
                          <div className="flex items-center space-x-02">
                            <span className="text-caption-01 text-gray-50 line-through">
                              65m
                            </span>
                            <span className="text-heading-compact-02 font-semibold text-blue-60">
                              12m
                            </span>
                          </div>
                        </div>
                        <div className="w-full h-01 bg-gray-20 mb-01">
                          <div className="w-1/5 h-full bg-blue-60"></div>
                        </div>
                        <div className="text-caption-02 text-blue-60 font-medium">
                          5.4x faster
                        </div>
                      </div>

                      {/* Uptime Improvement */}
                      <div className="p-04 bg-gray-10 border-l-2 border-gray-60">
                        <div className="flex items-center justify-between mb-02">
                          <span className="text-label-01 text-gray-70">
                            System Uptime
                          </span>
                          <div className="flex items-center space-x-02">
                            <span className="text-caption-01 text-gray-50 line-through">
                              94.2%
                            </span>
                            <span className="text-heading-compact-02 font-semibold text-gray-100">
                              99.8%
                            </span>
                          </div>
                        </div>
                        <div className="w-full h-01 bg-gray-20 mb-01">
                          <div className="w-full h-full bg-gray-60"></div>
                        </div>
                        <div className="text-caption-02 text-gray-70 font-medium">
                          60% fewer incidents
                        </div>
                      </div>
                    </div>

                    {/* Primary action */}
                    <div className="text-center pt-04 border-t border-gray-20">
                      <div className="mb-03">
                        <div className="text-heading-03 font-semibold text-gray-100 mb-01">
                          $300
                        </div>
                        <div className="text-caption-02 text-gray-70">
                          7-day audit
                        </div>
                      </div>
                      <div className="w-full h-09 bg-blue-60 flex items-center justify-center">
                        <span className="text-body-compact-02 font-medium text-white">
                          Start Analysis
                        </span>
                      </div>
                    </div>

                    {/* Status indicators */}
                    <div className="absolute top-04 right-04 flex space-x-02">
                      <div className="w-01 h-01 bg-green-60"></div>
                      <div className="w-01 h-01 bg-blue-60"></div>
                      <div className="w-01 h-01 bg-gray-40"></div>
                    </div>
                  </div>

                  {/* Minimal Carbon geometric accent */}
                  <div className="absolute -top-01 -right-01 w-03 h-03 bg-blue-60"></div>
                  <div className="absolute -bottom-01 -left-01 w-02 h-02 bg-gray-60"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator - hidden on mobile */}
        <div className="absolute bottom-05 left-1/2 transform -translate-x-1/2 hidden lg:block">
          <button
            onClick={scrollToServices}
            className="group p-03 hover:bg-white hover:shadow-carbon-02 transition-all duration-200 border border-gray-20 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-60 focus:ring-offset-2"
          >
            <ChevronDown className="w-5 h-5 text-gray-70 group-hover:text-blue-60 group-hover:translate-y-1 transition-all animate-bounce" />
          </button>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="relative py-12 lg:py-16 bg-gray-10/50">
        <div className="max-w-screen-lg mx-auto px-05 lg:px-06">
          <div className="text-center mb-10">
            <span className="inline-flex items-center px-04 py-02 bg-white text-gray-70 text-label-02 font-medium border-l-4 border-blue-60 shadow-carbon-01">
              Client Success
            </span>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-gray-20 shadow-carbon-03 p-07 lg:p-08">
              {/* Quote */}
              <blockquote className="text-body-02 text-gray-80 leading-relaxed mb-06">
                "DeepTechLabs helped us cut our AWS costs from $5,200 to $1,390
                per month — a 73% reduction. They also took full ownership of
                our AWS cloud and Kubernetes clusters, which freed our small
                team to focus on building AtomsLearning instead of firefighting
                infra issues. Their work was fast, reliable, and gave us peace
                of mind."
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center pt-05 border-t border-gray-20">
                <div className="flex items-center space-x-04">
                  {/* Professional avatar */}
                  <div className="w-12 h-12 relative overflow-hidden bg-blue-10 border border-blue-30">
                    <Image
                      src="/sb.jpg"
                      alt="Dr. Sushanta Bhanja - Founder of AtomsLearning"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                      priority={false}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Rw="
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const nextSibling = target.nextElementSibling as HTMLElement;
                        if (nextSibling) {
                          nextSibling.style.display = "flex";
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-blue-10 border border-blue-30 items-center justify-center hidden">
                      <span className="text-blue-60 font-semibold text-body-compact-02">
                        SB
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="text-body-01 font-semibold text-gray-100">
                      Dr. Sushanta Bhanja
                    </div>
                    <div className="text-caption-01 text-gray-70 font-medium">
                      Founder of AtomsLearning • Medical EdTech • India
                    </div>
                  </div>
                </div>

                {/* Results highlight */}
                <div className="ml-auto hidden lg:flex items-center space-x-06">
                  <div className="text-center">
                    <div className="text-heading-04 font-bold text-green-60">
                      73%
                    </div>
                    <div className="text-caption-01 text-gray-70">
                      Cost Reduction
                    </div>
                  </div>
                  <div className="w-px h-08 bg-gray-20"></div>
                  <div className="text-center">
                    <div className="text-heading-04 font-bold text-blue-60">
                      100%
                    </div>
                    <div className="text-caption-01 text-gray-70">
                      Peace of Mind
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="relative py-16 lg:py-20 bg-white">
        <div className="max-w-screen-lg mx-auto px-05 lg:px-06">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="mb-05">
              <span className="inline-flex items-center px-04 py-02 bg-blue-10 text-blue-70 text-label-02 font-medium border-l-4 border-blue-60">
                Success Story
              </span>
            </div>
            <h2 className="text-fluid-heading-05 font-semibold text-gray-100 mb-05 tracking-tight">
              Case Study: How a Medical EdTech Cut AWS Costs by 73% and Eliminated Downtime
            </h2>
            <p className="text-body-02 text-gray-70 max-w-2xl mx-auto leading-relaxed">
              AtomsLearning was facing spiraling cloud costs and unreliable deployments.
              Here's how we helped them scale their platform while reducing AWS spend from $5,200 to $1,390 per month.
            </p>
          </div>

          {/* Enhanced Stats Bar with Hover Effects */}
          <div className="bg-blue-60 text-white py-08 px-06 mb-12 lg:mb-16 relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>
            <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-04 lg:gap-06 text-center">
              <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-white/10 p-03 lg:p-04 rounded-md">
                <div className="text-heading-05 lg:text-heading-06 font-light mb-02 transition-all duration-300 group-hover:text-blue-20">
                  73%
                </div>
                <div className="text-caption-01 opacity-75 group-hover:opacity-100 transition-opacity duration-300 text-xs lg:text-sm">
                  Cost Reduction
                </div>
                <div className="w-0 h-0.5 bg-blue-20 mx-auto mt-02 transition-all duration-300 group-hover:w-6 lg:group-hover:w-8"></div>
              </div>
              <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-white/10 p-03 lg:p-04 rounded-md">
                <div className="text-heading-05 lg:text-heading-06 font-light mb-02 transition-all duration-300 group-hover:text-blue-20">
                  $3,810
                </div>
                <div className="text-caption-01 opacity-75 group-hover:opacity-100 transition-opacity duration-300 text-xs lg:text-sm">
                  Monthly Savings
                </div>
                <div className="w-0 h-0.5 bg-blue-20 mx-auto mt-02 transition-all duration-300 group-hover:w-6 lg:group-hover:w-8"></div>
              </div>
              <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-white/10 p-03 lg:p-04 rounded-md">
                <div className="text-heading-05 lg:text-heading-06 font-light mb-02 transition-all duration-300 group-hover:text-blue-20">
                  Zero
                </div>
                <div className="text-caption-01 opacity-75 group-hover:opacity-100 transition-opacity duration-300 text-xs lg:text-sm">
                  Service Disruptions
                </div>
                <div className="w-0 h-0.5 bg-blue-20 mx-auto mt-02 transition-all duration-300 group-hover:w-6 lg:group-hover:w-8"></div>
              </div>
              <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-white/10 p-03 lg:p-04 rounded-md">
                <div className="text-heading-05 lg:text-heading-06 font-light mb-02 transition-all duration-300 group-hover:text-blue-20">
                  100%
                </div>
                <div className="text-caption-01 opacity-75 group-hover:opacity-100 transition-opacity duration-300 text-xs lg:text-sm">
                  Exam Period Uptime
                </div>
                <div className="w-0 h-0.5 bg-blue-20 mx-auto mt-02 transition-all duration-300 group-hover:w-6 lg:group-hover:w-8"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Challenge & Solution Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-08 mb-12">
            {/* Challenge */}
            <div className="group bg-gray-10 border-l-4 border-red-50 p-06 transform transition-all duration-300 hover:shadow-carbon-03 hover:bg-red-10/20 relative overflow-hidden">
              {/* Subtle animated accent */}
              <div className="absolute top-0 left-0 w-1 h-0 bg-red-50 transition-all duration-500 group-hover:h-full"></div>
              <h3 className="text-heading-04 text-red-60 mb-05 transition-colors duration-300 group-hover:text-red-70">
                The Challenge
              </h3>
              <div className="space-y-04">
                <div className="transform transition-all duration-300 group-hover:translate-x-1">
                  <h4 className="text-heading-02 text-red-60 mb-02 transition-colors duration-300 group-hover:text-red-70">
                    Peak Traffic Overwhelm
                  </h4>
                  <p className="text-body-compact-01 text-gray-70 transition-colors duration-300 group-hover:text-gray-80">
                    MockExam microservices experienced severe performance
                    degradation during exam nights when student traffic surged
                    unpredictably.
                  </p>
                </div>
                <div className="transform transition-all duration-300 delay-75 group-hover:translate-x-1">
                  <h4 className="text-heading-02 text-red-60 mb-02 transition-colors duration-300 group-hover:text-red-70">
                    Infrastructure Rigidity
                  </h4>
                  <p className="text-body-compact-01 text-gray-70 transition-colors duration-300 group-hover:text-gray-80">
                    Static EC2 deployment couldn't scale elastically, leading to
                    over-provisioning during quiet periods.
                  </p>
                </div>
                <div className="transform transition-all duration-300 delay-150 group-hover:translate-x-1">
                  <h4 className="text-heading-02 text-red-60 mb-02 transition-colors duration-300 group-hover:text-red-70">
                    Cost Inefficiency
                  </h4>
                  <p className="text-body-compact-01 text-gray-70 transition-colors duration-300 group-hover:text-gray-80">
                    High fixed infrastructure costs maintained year-round
                    despite clear seasonal usage variations.
                  </p>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div className="group bg-gray-10 border-l-4 border-green-50 p-06 transform transition-all duration-300 hover:shadow-carbon-03 hover:bg-green-10/20 relative overflow-hidden">
              {/* Subtle animated accent */}
              <div className="absolute top-0 left-0 w-1 h-0 bg-green-50 transition-all duration-500 group-hover:h-full"></div>
              <h3 className="text-heading-04 text-green-60 mb-05 transition-colors duration-300 group-hover:text-green-70">
                Our Solution
              </h3>
              <div className="space-y-04">
                <div className="transform transition-all duration-300 group-hover:translate-x-1">
                  <h4 className="text-heading-02 text-green-60 mb-02 transition-colors duration-300 group-hover:text-green-70">
                    Dual-Mode Architecture
                  </h4>
                  <p className="text-body-compact-01 text-gray-70 transition-colors duration-300 group-hover:text-gray-80">
                    Amazon EKS for peak performance during exams, K3s on EC2 for
                    cost efficiency during preparation periods.
                  </p>
                </div>
                <div className="transform transition-all duration-300 delay-75 group-hover:translate-x-1">
                  <h4 className="text-heading-02 text-green-60 mb-02 transition-colors duration-300 group-hover:text-green-70">
                    Horizontal Pod Autoscaling
                  </h4>
                  <p className="text-body-compact-01 text-gray-70 transition-colors duration-300 group-hover:text-gray-80">
                    Automatic scaling based on CPU, memory, and custom
                    application metrics with instant adaptation.
                  </p>
                </div>
                <div className="transform transition-all duration-300 delay-150 group-hover:translate-x-1">
                  <h4 className="text-heading-02 text-green-60 mb-02 transition-colors duration-300 group-hover:text-green-70">
                    ARM Graviton2 Optimization
                  </h4>
                  <p className="text-body-compact-01 text-gray-70 transition-colors duration-300 group-hover:text-gray-80">
                    Cost-efficient compute infrastructure with 20% better
                    price-performance ratio.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Technology Stack */}
          <div className="bg-gray-10 p-06 mb-12">
            <div>
              <h3 className="text-heading-04 text-gray-100 mb-06 text-center">
                Technology Stack
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-04">
                <div className="group bg-white border border-gray-20 p-04 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-carbon-02 hover:border-blue-30 cursor-pointer">
                  <span className="text-body-02 font-medium transition-colors duration-300 group-hover:text-blue-60">
                    Amazon EKS
                  </span>
                  <div className="w-0 h-0.5 bg-blue-60 mx-auto mt-02 transition-all duration-300 group-hover:w-full"></div>
                </div>
                <div className="group bg-white border border-gray-20 p-04 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-carbon-02 hover:border-blue-30 cursor-pointer">
                  <span className="text-body-02 font-medium transition-colors duration-300 group-hover:text-blue-60">
                    K3s Kubernetes
                  </span>
                  <div className="w-0 h-0.5 bg-blue-60 mx-auto mt-02 transition-all duration-300 group-hover:w-full"></div>
                </div>
                <div className="group bg-white border border-gray-20 p-04 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-carbon-02 hover:border-blue-30 cursor-pointer">
                  <span className="text-body-02 font-medium transition-colors duration-300 group-hover:text-blue-60">
                    AWS Graviton2
                  </span>
                  <div className="w-0 h-0.5 bg-blue-60 mx-auto mt-02 transition-all duration-300 group-hover:w-full"></div>
                </div>
                <div className="group bg-white border border-gray-20 p-04 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-carbon-02 hover:border-blue-30 cursor-pointer">
                  <span className="text-body-02 font-medium transition-colors duration-300 group-hover:text-blue-60">
                    Horizontal Pod Autoscaler
                  </span>
                  <div className="w-0 h-0.5 bg-blue-60 mx-auto mt-02 transition-all duration-300 group-hover:w-full"></div>
                </div>
                <div className="group bg-white border border-gray-20 p-04 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-carbon-02 hover:border-blue-30 cursor-pointer">
                  <span className="text-body-02 font-medium transition-colors duration-300 group-hover:text-blue-60">
                    Container Registry
                  </span>
                  <div className="w-0 h-0.5 bg-blue-60 mx-auto mt-02 transition-all duration-300 group-hover:w-full"></div>
                </div>
                <div className="group bg-white border border-gray-20 p-04 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-carbon-02 hover:border-blue-30 cursor-pointer">
                  <span className="text-body-02 font-medium transition-colors duration-300 group-hover:text-blue-60">
                    Application Load Balancer
                  </span>
                  <div className="w-0 h-0.5 bg-blue-60 mx-auto mt-02 transition-all duration-300 group-hover:w-full"></div>
                </div>
                <div className="group bg-white border border-gray-20 p-04 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-carbon-02 hover:border-blue-30 cursor-pointer">
                  <span className="text-body-02 font-medium transition-colors duration-300 group-hover:text-blue-60">
                    CloudWatch Monitoring
                  </span>
                  <div className="w-0 h-0.5 bg-blue-60 mx-auto mt-02 transition-all duration-300 group-hover:w-full"></div>
                </div>
                <div className="group bg-white border border-gray-20 p-04 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-carbon-02 hover:border-blue-30 cursor-pointer">
                  <span className="text-body-02 font-medium transition-colors duration-300 group-hover:text-blue-60">
                    CI/CD Pipelines
                  </span>
                  <div className="w-0 h-0.5 bg-blue-60 mx-auto mt-02 transition-all duration-300 group-hover:w-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Results Grid - Non-repetitive metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-08 mb-12">
            <div className="group bg-white border border-gray-20 shadow-carbon-02 p-06 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-carbon-04 hover:border-blue-30 relative overflow-hidden cursor-pointer">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-10/0 to-blue-10/0 group-hover:from-blue-10/20 group-hover:to-blue-10/10 transition-all duration-300"></div>
              <div className="relative">
                <div className="text-heading-07 font-light text-blue-60 mb-03 transition-all duration-300 group-hover:text-blue-70 group-hover:scale-110">
                  5.4x
                </div>
                <h3 className="text-heading-04 text-gray-100 mb-03 transition-colors duration-300 group-hover:text-blue-70">
                  Faster Deployments
                </h3>
                <p className="text-body-01 text-gray-70 transition-colors duration-300 group-hover:text-gray-80">
                  Deploy time reduced from 65 minutes to 12 minutes
                </p>
                {/* Animated underline */}
                <div className="w-0 h-0.5 bg-blue-60 mx-auto mt-04 transition-all duration-500 group-hover:w-16"></div>
              </div>
            </div>
            <div className="group bg-white border border-gray-20 shadow-carbon-02 p-06 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-carbon-04 hover:border-gray-30 relative overflow-hidden cursor-pointer">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-10/0 to-gray-10/0 group-hover:from-gray-10/20 group-hover:to-gray-10/10 transition-all duration-300"></div>
              <div className="relative">
                <div className="text-heading-07 font-light text-gray-70 mb-03 transition-all duration-300 group-hover:text-gray-80 group-hover:scale-110">
                  99.8%
                </div>
                <h3 className="text-heading-04 text-gray-100 mb-03 transition-colors duration-300 group-hover:text-gray-80">
                  System Uptime
                </h3>
                <p className="text-body-01 text-gray-70 transition-colors duration-300 group-hover:text-gray-80">
                  Improved from 94.2% to 99.8% reliability during peak usage
                </p>
                {/* Animated underline */}
                <div className="w-0 h-0.5 bg-gray-70 mx-auto mt-04 transition-all duration-500 group-hover:w-16"></div>
              </div>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="bg-blue-60 text-white p-08 text-center">
            <blockquote className="text-heading-04 mb-06 max-w-3xl mx-auto font-light italic">
              "DeepTechLabs helped us cut costs and stabilize our platform at
              the same time. They took full ownership of our AWS & Kubernetes
              setup, which gave us confidence to grow without worrying about
              scaling issues."
            </blockquote>
            <cite className="text-body-02 opacity-75">
              — Dr. Sushanta Bhanja, Founder, AtomsLearning (Medical EdTech, India)
            </cite>
          </div>

          {/* Enhanced CTA Bridge */}
          <div className="text-center mt-12">
            <div className="mb-06">
              <h3 className="text-heading-04 text-gray-100 mb-03 font-semibold">
                Ready to Achieve Similar Results?
              </h3>
              <p className="text-body-02 text-gray-70">
                Start with a 7-Day Cloud Health Audit and get your roadmap to infrastructure optimization.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-04 justify-center">
              <a
                href="https://calendly.com/rajdeep-das/30min"                 target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-07 py-04 bg-blue-60 text-white hover:bg-blue-70 transition-all duration-200 text-body-compact-02 font-semibold shadow-carbon-02 hover:shadow-carbon-04 focus:outline-none focus:ring-2 focus:ring-blue-60 focus:ring-offset-2"
                onClick={() => trackAuditBooking('case-study-cta')}
              >
                <span>Pay & Start Audit — US$300</span>
                <ArrowRight className="ml-03 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://calendly.com/rajdeep-das/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-07 py-04 border border-gray-30 text-gray-80 hover:bg-gray-10 hover:border-gray-40 transition-all duration-200 text-body-compact-02 font-medium shadow-carbon-01 hover:shadow-carbon-02 focus:outline-none focus:ring-2 focus:ring-gray-60 focus:ring-offset-2"
              >
                <span>Book 30-min Call</span>
                <ArrowRight className="ml-03 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="mt-05">
              <span className="text-caption-01 text-gray-60 font-medium">
                100% money-back guarantee • No long-term contracts
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="relative py-16 lg:py-20 bg-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-10/30 to-transparent"></div>

        {/* Professional background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='37' cy='37' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        {/* Subtle geometric elements */}
        <div className="absolute top-10 left-10 w-32 h-32 border border-blue-20 transform rotate-12 hidden lg:block"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gray-10 transform -rotate-6 hidden lg:block"></div>
        <div className="absolute top-1/2 left-0 w-2 h-32 bg-gradient-to-b from-blue-60 to-transparent"></div>

        <div className="relative max-w-screen-lg mx-auto px-05 lg:px-06">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="mb-05">
              <span className="inline-flex items-center px-04 py-02 bg-gray-10 text-gray-70 text-label-02 font-medium border-l-4 border-gray-60">
                Fixed-Price Solutions
              </span>
            </div>
            <h2 className="text-fluid-heading-05 font-semibold text-gray-100 mb-05 tracking-tight">
              Our Fixed-Price Services
            </h2>
            <p className="text-body-02 text-gray-70 max-w-2xl mx-auto leading-relaxed mb-06">
              Transparent, scoped, and outcome-driven — no surprises.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-06 lg:gap-08">
            {/* Service Card 1 - Featured */}
            <div className="group relative bg-white border-2 border-blue-60 shadow-carbon-03 hover:shadow-carbon-05 transition-all duration-300 p-06 lg:p-07">
              <div className="absolute top-0 right-0 bg-blue-60 text-white px-03 py-01 text-caption-02 font-medium">
                Most Popular
              </div>

              {/* Professional service icon */}
              <div className="flex items-center mb-05">
                <div className="relative mr-04">
                  <div className="w-12 h-12 bg-blue-10 border border-blue-30 flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-blue-60" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-60 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">$</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-heading-04 font-semibold text-gray-100 leading-tight mb-01">
                    Cloud Health Audit
                  </h3>
                  <p className="text-body-01 text-gray-70 font-medium">
                    7 days · US$300 · 100% upfront
                  </p>
                </div>
              </div>

              <ul className="space-y-03 mb-06">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-60 mr-03 mt-01 flex-shrink-0" />
                  <span className="text-body-compact-01 text-gray-80">
                    Identify wasted spend (20–30% typical savings)
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-60 mr-03 mt-01 flex-shrink-0" />
                  <span className="text-body-compact-01 text-gray-80">
                    Spot security & compliance risks
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-60 mr-03 mt-01 flex-shrink-0" />
                  <span className="text-body-compact-01 text-gray-80">
                    Prioritized 30-day action plan
                  </span>
                </li>
              </ul>

              <a
                href="https://calendly.com/rajdeep-das/30min"                 target="_blank"
                rel="noopener noreferrer"
                className="group/btn w-full inline-flex items-center justify-center px-05 py-04 bg-blue-60 text-white hover:bg-blue-70 transition-all duration-200 text-body-compact-02 font-medium shadow-carbon-02 hover:shadow-carbon-04 focus:outline-none focus:ring-2 focus:ring-blue-60 focus:ring-offset-2"
                onClick={() => trackAuditBooking('services-audit-card')}
              >
                <span>Pay & Start Audit</span>
                <ArrowRight className="ml-02 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Service Card 2 */}
            <div className="group relative bg-white border border-gray-20 shadow-carbon-02 hover:shadow-carbon-04 hover:border-gray-30 transition-all duration-300 p-06 lg:p-07">
              {/* Professional service icon */}
              <div className="flex items-center mb-05">
                <div className="relative mr-04">
                  <div className="w-12 h-12 bg-gray-10 border border-gray-30 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-gray-70" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gray-90 flex items-center justify-center">
                    <Activity className="w-2 h-2 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-heading-04 font-semibold text-gray-100 leading-tight mb-01">
                    Integration Sprint
                  </h3>
                  <p className="text-body-01 text-gray-70 font-medium">
                    2 weeks · US$1,200 · 50% upfront
                  </p>
                </div>
              </div>

              <ul className="space-y-03 mb-06">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-60 mr-03 mt-01 flex-shrink-0" />
                  <span className="text-body-compact-01 text-gray-80">
                    Rebuild or stabilize one key integration
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-60 mr-03 mt-01 flex-shrink-0" />
                  <span className="text-body-compact-01 text-gray-80">
                    Add monitoring & error alerts
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-60 mr-03 mt-01 flex-shrink-0" />
                  <span className="text-body-compact-01 text-gray-80">
                    Delivered, tested, documented
                  </span>
                </li>
              </ul>

              <a
                href="https://calendly.com/rajdeep-das/30min"                 target="_blank"
                rel="noopener noreferrer"
                className="group/btn w-full inline-flex items-center justify-center px-05 py-04 bg-gray-100 text-white hover:bg-gray-90 transition-all duration-200 text-body-compact-02 font-medium shadow-carbon-02 hover:shadow-carbon-04 focus:outline-none focus:ring-2 focus:ring-gray-70 focus:ring-offset-2"
              >
                <span>Start Sprint</span>
                <ArrowRight className="ml-02 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Service Card 3 */}
            <div className="group relative bg-white border border-gray-20 shadow-carbon-02 hover:shadow-carbon-04 hover:border-gray-30 transition-all duration-300 p-06 lg:p-07">
              <div className="absolute top-0 right-0 bg-gray-90 text-white px-03 py-01 text-caption-02 font-medium">
                Enterprise
              </div>

              {/* Professional service icon */}
              <div className="flex items-center mb-05">
                <div className="relative mr-04">
                  <div className="w-12 h-12 bg-gray-10 border border-gray-30 flex items-center justify-center">
                    <Database className="w-6 h-6 text-gray-70" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gray-90 flex items-center justify-center">
                    <Lock className="w-2 h-2 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-heading-04 font-semibold text-gray-100 leading-tight mb-01">
                    SaaS Backend Starter
                  </h3>
                  <p className="text-body-01 text-gray-70 font-medium">
                    3–4 weeks · US$3,000 · 50% upfront
                  </p>
                </div>
              </div>

              <ul className="space-y-03 mb-06">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-60 mr-03 mt-01 flex-shrink-0" />
                  <span className="text-body-compact-01 text-gray-80">
                    Multi-tenant Auth, Billing, APIs
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-60 mr-03 mt-01 flex-shrink-0" />
                  <span className="text-body-compact-01 text-gray-80">
                    CI/CD pipelines & infra-as-code
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-60 mr-03 mt-01 flex-shrink-0" />
                  <span className="text-body-compact-01 text-gray-80">
                    Monitoring, logging, alerts
                  </span>
                </li>
              </ul>

              <a
                href="https://calendly.com/rajdeep-das/30min"                 target="_blank"
                rel="noopener noreferrer"
                className="group/btn w-full inline-flex items-center justify-center px-05 py-04 bg-gray-100 text-white hover:bg-gray-90 transition-all duration-200 text-body-compact-02 font-medium shadow-carbon-02 hover:shadow-carbon-04 focus:outline-none focus:ring-2 focus:ring-gray-70 focus:ring-offset-2"
              >
                <span>Start Project</span>
                <ArrowRight className="ml-02 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-16 lg:py-20 bg-gradient-to-b from-gray-90 to-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-90/15 via-transparent to-transparent"></div>

        <div className="relative max-w-screen-lg mx-auto px-05 lg:px-06">
          <div className="text-center">
            <div className="mb-06">
              <span className="inline-flex items-center px-04 py-02 bg-white/10 text-blue-20 text-label-02 font-medium border-l-4 border-blue-40 backdrop-blur-sm">
                Ready to Transform Your Cloud Infrastructure?
              </span>
            </div>

            <h2 className="text-fluid-heading-05 lg:text-fluid-heading-06 font-semibold text-white mb-06 leading-tight tracking-tight max-w-3xl mx-auto">
              Ready to cut cloud waste & fix fragile systems?
            </h2>

            <p className="text-body-02 text-blue-20 mb-10 max-w-2xl mx-auto leading-relaxed">
              Start with a 7-day Cloud Health Audit for US$300. Get a
              comprehensive roadmap in one week.
              <strong className="text-white">100% money-back guarantee.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-05 justify-center mb-10">
              <a
                href="https://calendly.com/rajdeep-das/30min"                 target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-07 py-04 bg-white text-gray-100 hover:bg-gray-10 transition-all duration-200 text-body-compact-02 font-semibold shadow-carbon-04 hover:shadow-carbon-05 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-90"
                onClick={() => trackAuditBooking('final-cta')}
              >
                <span>Pay & Start Audit</span>
                <ArrowRight className="ml-03 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://calendly.com/rajdeep-das/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-07 py-04 border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-200 text-body-compact-02 font-medium backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-90"
              >
                <span>Book a 30-min Call</span>
                <ArrowRight className="ml-03 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-06 max-w-3xl mx-auto">
              <div className="flex items-center justify-center p-04 bg-white/5 border-l-2 border-green-40 backdrop-blur-sm">
                <CheckCircle className="w-4 h-4 text-green-40 mr-03 flex-shrink-0" />
                <span className="text-body-compact-01 text-blue-20 font-medium">
                  No long-term contracts
                </span>
              </div>
              <div className="flex items-center justify-center p-04 bg-white/5 border-l-2 border-blue-40 backdrop-blur-sm">
                <CheckCircle className="w-4 h-4 text-blue-40 mr-03 flex-shrink-0" />
                <span className="text-body-compact-01 text-blue-20 font-medium">
                  100% satisfaction guarantee
                </span>
              </div>
              <div className="flex items-center justify-center p-04 bg-white/5 border-l-2 border-gray-40 backdrop-blur-sm">
                <CheckCircle className="w-4 h-4 text-gray-40 mr-03 flex-shrink-0" />
                <span className="text-body-compact-01 text-blue-20 font-medium">
                  Enterprise-grade security
                </span>
              </div>
            </div>

            {/* Subtle compliance note */}
            <div className="mt-10 pt-06 border-t border-white/10 text-center">
              <p className="text-caption-01 text-blue-30/80 font-medium">
                Enterprise compliance available when needed: HIPAA, SOC2 Type
                II, GDPR
              </p>
            </div>
          </div>
        </div>

        {/* Reduced background elements - keep only essential ones */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Subtle grid pattern with reduced opacity */}
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='m0 60h60v-60h-60v60zm30-30v30h30v-30h-30z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>

          {/* Minimal accent elements */}
          <div className="absolute top-16 right-16 w-20 h-20 border border-white/5 transform rotate-12 hidden lg:block"></div>
          <div className="absolute bottom-16 left-16 w-16 h-16 bg-white/3 transform -rotate-6 hidden lg:block"></div>
        </div>
      </section>
    </main>
  );
}
