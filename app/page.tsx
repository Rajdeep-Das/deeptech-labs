"use client";

import { useState, useEffect } from "react";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  CheckCircle,
  Shield,
  Zap,
  Settings,
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
            <div className="flex items-center group cursor-pointer">
              {/* Logo Icon */}
              <div className="relative mr-03 group-hover:scale-105 transition-transform duration-200">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-60 to-blue-80 rounded-md flex items-center justify-center shadow-carbon-01">
                  {/* Network pattern */}
                  <div className="relative">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="absolute -top-1 -left-1 w-1 h-1 bg-blue-30 rounded-full opacity-60"></div>
                    <div className="absolute -bottom-1 -right-1 w-1 h-1 bg-blue-30 rounded-full opacity-60"></div>
                    <div className="absolute top-0 -right-2 w-0.5 h-0.5 bg-blue-20 rounded-full opacity-40"></div>
                  </div>
                </div>
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-blue-60 rounded-md opacity-20 blur-sm group-hover:opacity-30 transition-opacity"></div>
              </div>

              {/* Logo Text */}
              <div className="text-heading-04 font-semibold text-gray-100 tracking-tight">
                <span className="relative">
                  Deep
                  <span className="text-blue-60 font-bold">Tech</span>
                  <span className="text-gray-80 font-normal tracking-wide">Labs</span>
                  {/* Subtle accent line */}
                  <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-60 to-transparent opacity-40"></div>
                </span>
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
              <button className="px-06 py-03 bg-blue-60 text-white hover:bg-blue-70 transition-all duration-200 text-body-compact-02 font-medium shadow-carbon-01 hover:shadow-carbon-02 focus:outline-none focus:ring-2 focus:ring-blue-60 focus:ring-offset-2">
                Book 30-min Call
              </button>
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

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-20 py-05 shadow-carbon-03">
              <div className="space-y-04">
                <a
                  href="#services"
                  className="block text-body-01 text-gray-70 hover:text-gray-100 py-02 font-medium"
                >
                  Services
                </a>
                <button className="w-full px-05 py-03 bg-blue-60 text-white hover:bg-blue-70 transition-colors text-body-compact-02 font-medium shadow-carbon-01">
                  Book 30-min Call
                </button>
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
                    href="<!-- STRIPE_PAYMENT_LINK -->"
                    className="group inline-flex items-center justify-center px-06 py-04 bg-blue-60 text-white hover:bg-blue-70 transition-all duration-200 text-body-compact-02 font-medium shadow-carbon-02 hover:shadow-carbon-04 focus:outline-none focus:ring-2 focus:ring-blue-60 focus:ring-offset-2"
                  >
                    <span>Book 7-Day Audit — US$300</span>
                  </a>
                  <a
                    href="<!-- SAMPLE_REPORT_LINK -->"
                    className="group inline-flex items-center justify-center px-06 py-04 border border-gray-30 text-gray-80 hover:bg-gray-10 hover:border-gray-40 transition-all duration-200 text-body-compact-02 font-medium shadow-carbon-01 hover:shadow-carbon-02 focus:outline-none focus:ring-2 focus:ring-gray-60 focus:ring-offset-2"
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
                "DeepTechLabs helped us cut our AWS costs from $5,200 to $1,390 per month — a 73% reduction. They also took full ownership of our AWS cloud and Kubernetes clusters, which freed our small team to focus on building AtomsLearning instead of firefighting infra issues. Their work was fast, reliable, and gave us peace of mind."
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center pt-05 border-t border-gray-20">
                <div className="flex items-center space-x-04">
                  {/* Professional avatar */}
                  <div className="w-12 h-12 relative overflow-hidden bg-blue-10 border border-blue-30">
                    <img
                      src="/sb.jpg"
                      alt="Dr. Sushanta Bhanja"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling.style.display = 'flex';
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
                    <div className="text-heading-04 font-bold text-green-60">73%</div>
                    <div className="text-caption-01 text-gray-70">Cost Reduction</div>
                  </div>
                  <div className="w-px h-08 bg-gray-20"></div>
                  <div className="text-center">
                    <div className="text-heading-04 font-bold text-blue-60">100%</div>
                    <div className="text-caption-01 text-gray-70">Peace of Mind</div>
                  </div>
                </div>
              </div>
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
                href="<!-- STRIPE_PAYMENT_LINK -->"
                className="group/btn w-full inline-flex items-center justify-center px-05 py-04 bg-blue-60 text-white hover:bg-blue-70 transition-all duration-200 text-body-compact-02 font-medium shadow-carbon-02 hover:shadow-carbon-04 focus:outline-none focus:ring-2 focus:ring-blue-60 focus:ring-offset-2"
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
                href="<!-- CONTACT_LINK -->"
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
                href="<!-- CONTACT_LINK -->"
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
                href="<!-- STRIPE_PAYMENT_LINK -->"
                className="group inline-flex items-center justify-center px-07 py-04 bg-white text-gray-100 hover:bg-gray-10 transition-all duration-200 text-body-compact-02 font-semibold shadow-carbon-04 hover:shadow-carbon-05 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-90"
              >
                <span>Pay & Start Audit</span>
                <ArrowRight className="ml-03 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="<!-- CALENDLY_LINK -->"
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
                Enterprise compliance available when needed: HIPAA, SOC2 Type II, GDPR
              </p>
            </div>
          </div>
        </div>

        {/* Reduced background elements - keep only essential ones */}
        <div className="absolute inset-0 overflow-hidden">
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
