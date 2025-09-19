import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Download, Share2, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "AtomsLearning Case Study: 73% AWS Cost Reduction | DeepTechLabs",
  description: "Discover how DeepTechLabs helped AtomsLearning reduce AWS costs by 73% (from $5,200 to $1,390/month) while achieving zero downtime during peak exam periods. Complete medical EdTech infrastructure transformation case study.",
  keywords: "AWS cost reduction, Kubernetes optimization, medical EdTech, cloud cost optimization, EKS vs K3s, AtomsLearning, infrastructure scaling, exam platform optimization",
  openGraph: {
    title: "AtomsLearning: 73% AWS Cost Reduction Case Study",
    description: "Complete infrastructure transformation that cut AWS costs from $5,200 to $1,390/month while ensuring 100% uptime during critical exam periods.",
    type: "article",
    url: "https://deepteachlabs.in/case-studies/atomslearning",
    images: [
      {
        url: "/case-study-atomslearning-og.png",
        width: 1200,
        height: 630,
        alt: "AtomsLearning 73% AWS Cost Reduction Case Study",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AtomsLearning: 73% AWS Cost Reduction Case Study",
    description: "How we helped a medical EdTech platform scale infrastructure while cutting AWS costs by 73%",
    images: ["/case-study-atomslearning-og.png"],
  },
  alternates: {
    canonical: "https://deepteachlabs.in/case-studies/atomslearning",
  },
};

// Structured Data for Case Study
const structuredData = {
  "@context": "https://schema.org",
  "@type": "CaseStudy",
  "headline": "AtomsLearning: 73% AWS Cost Reduction Case Study",
  "description": "Complete infrastructure transformation that reduced AWS costs by 73% while ensuring zero downtime during peak exam periods",
  "author": {
    "@type": "Organization",
    "name": "DeepTechLabs",
    "url": "https://deepteachlabs.in"
  },
  "about": {
    "@type": "Organization",
    "name": "AtomsLearning",
    "description": "Medical EdTech platform for exam preparation"
  },
  "result": [
    {
      "@type": "QuantitativeValue",
      "name": "Cost Reduction",
      "value": "73",
      "unitText": "PERCENT"
    },
    {
      "@type": "MonetaryAmount",
      "name": "Monthly Savings",
      "value": "3810",
      "currency": "USD"
    },
    {
      "@type": "QuantitativeValue",
      "name": "Service Disruptions",
      "value": "0",
      "unitText": "COUNT"
    }
  ],
  "datePublished": "2024-01-15",
  "dateModified": "2024-01-15",
  "publisher": {
    "@type": "Organization",
    "name": "DeepTechLabs",
    "logo": {
      "@type": "ImageObject",
      "url": "https://deepteachlabs.in/logo.png"
    }
  }
};

export default function AtomsLearningCaseStudy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="min-h-screen bg-white text-gray-100 font-sans">
        {/* Breadcrumb Navigation */}
        <nav className="bg-gray-10 border-b border-gray-20 py-04">
          <div className="max-w-screen-lg mx-auto px-05 lg:px-06">
            <div className="flex items-center space-x-02 text-body-compact-01">
              <Link
                href="/"
                className="text-gray-70 hover:text-blue-60 transition-colors"
              >
                Home
              </Link>
              <span className="text-gray-50">/</span>
              <Link
                href="/case-studies"
                className="text-gray-70 hover:text-blue-60 transition-colors"
              >
                Case Studies
              </Link>
              <span className="text-gray-50">/</span>
              <span className="text-gray-100 font-medium">AtomsLearning</span>
            </div>
          </div>
        </nav>

        {/* Back Navigation */}
        <div className="bg-white border-b border-gray-20 py-04">
          <div className="max-w-screen-lg mx-auto px-05 lg:px-06">
            <Link
              href="/"
              className="inline-flex items-center text-body-compact-01 text-gray-70 hover:text-blue-60 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 mr-02 group-hover:-translate-x-1 transition-transform" />
              Back to DeepTechLabs
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-gray-10 to-white py-12 lg:py-16">
          <div className="max-w-screen-lg mx-auto px-05 lg:px-06">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-08 items-center">
              <div className="lg:col-span-8">
                <div className="mb-05">
                  <span className="inline-flex items-center px-04 py-02 bg-blue-10 text-blue-70 text-label-02 font-medium border-l-4 border-blue-60">
                    Success Story • Medical EdTech
                  </span>
                </div>

                <h1 className="text-fluid-heading-05 lg:text-fluid-heading-06 font-semibold text-gray-100 mb-06 leading-tight tracking-tight">
                  AtomsLearning: 73% AWS Cost Reduction
                </h1>

                <p className="text-body-02 text-gray-70 mb-08 leading-relaxed">
                  How we helped a medical EdTech platform scale infrastructure during peak exam periods while cutting AWS costs from <strong className="text-gray-100">$5,200 to $1,390 per month</strong> through strategic dual-mode architecture implementation.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-04 mb-08">
                  <div className="text-center p-04 bg-green-10/50 border-l-2 border-green-60">
                    <div className="text-heading-04 font-bold text-green-60">73%</div>
                    <div className="text-caption-01 text-gray-70">Cost Reduction</div>
                  </div>
                  <div className="text-center p-04 bg-blue-10/50 border-l-2 border-blue-60">
                    <div className="text-heading-04 font-bold text-blue-60">$3,810</div>
                    <div className="text-caption-01 text-gray-70">Monthly Savings</div>
                  </div>
                  <div className="text-center p-04 bg-gray-10 border-l-2 border-gray-60">
                    <div className="text-heading-04 font-bold text-gray-100">Zero</div>
                    <div className="text-caption-01 text-gray-70">Service Disruptions</div>
                  </div>
                  <div className="text-center p-04 bg-green-10/50 border-l-2 border-green-60">
                    <div className="text-heading-04 font-bold text-green-60">100%</div>
                    <div className="text-caption-01 text-gray-70">Exam Uptime</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-04">
                  <Link
                    href="/#services"
                    className="group inline-flex items-center justify-center px-06 py-04 bg-blue-60 text-white hover:bg-blue-70 transition-all duration-200 text-body-compact-02 font-medium shadow-carbon-02 hover:shadow-carbon-04 focus:outline-none focus:ring-2 focus:ring-blue-60 focus:ring-offset-2"
                  >
                    <span>Start Your 7-Day Audit — US$300</span>
                    <ArrowRight className="ml-03 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <button className="group inline-flex items-center justify-center px-06 py-04 border border-gray-30 text-gray-80 hover:bg-gray-10 hover:border-gray-40 transition-all duration-200 text-body-compact-02 font-medium shadow-carbon-01 hover:shadow-carbon-02 focus:outline-none focus:ring-2 focus:ring-gray-60 focus:ring-offset-2">
                    <Download className="mr-03 w-4 h-4" />
                    <span>Download PDF</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-4">
                {/* Company Info Card */}
                <div className="bg-white border border-gray-20 shadow-carbon-03 p-06">
                  <h3 className="text-heading-03 text-gray-100 mb-04">About AtomsLearning</h3>
                  <div className="space-y-03">
                    <div className="flex justify-between">
                      <span className="text-body-compact-01 text-gray-70">Industry:</span>
                      <span className="text-body-compact-01 text-gray-100 font-medium">Medical EdTech</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-body-compact-01 text-gray-70">Location:</span>
                      <span className="text-body-compact-01 text-gray-100 font-medium">India</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-body-compact-01 text-gray-70">Platform:</span>
                      <span className="text-body-compact-01 text-gray-100 font-medium">Exam Preparation</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-body-compact-01 text-gray-70">Challenge:</span>
                      <span className="text-body-compact-01 text-gray-100 font-medium">Peak Traffic Scaling</span>
                    </div>
                  </div>

                  <div className="mt-06 pt-04 border-t border-gray-20">
                    <div className="text-center">
                      <div className="text-heading-04 font-bold text-blue-60 mb-01">7 Days</div>
                      <div className="text-caption-01 text-gray-70">Implementation Time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Stats Bar with Hover Effects */}
        <section className="bg-blue-60 text-white py-08 px-06 relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>
          <div className="max-w-screen-lg mx-auto">
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
        </section>

        {/* Executive Summary */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-screen-lg mx-auto px-05 lg:px-06">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-08">
              <div className="lg:col-span-8">
                <h2 className="text-heading-05 text-gray-100 mb-06">Executive Summary</h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-body-02 text-gray-70 mb-06 leading-relaxed">
                    AtomsLearning faced a critical infrastructure challenge that many rapidly growing EdTech platforms encounter: balancing massive traffic spikes during exam periods while maintaining cost efficiency during quieter preparation cycles.
                  </p>

                  <p className="text-body-02 text-gray-70 mb-06 leading-relaxed">
                    The existing AWS EC2 infrastructure couldn't adapt to these dramatic usage patterns, resulting in poor performance during peak times and unnecessary costs during low-traffic periods.
                  </p>

                  <p className="text-body-02 text-gray-70 mb-06 leading-relaxed">
                    DeepTechLabs designed and implemented a <strong className="text-gray-100">dual-mode architecture</strong> that automatically transitions between high-performance EKS clusters during exams and cost-optimized K3s deployments during preparation periods.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="bg-white border border-gray-20 shadow-carbon-03 p-06">
                  <h3 className="text-heading-03 text-gray-100 mb-06 text-center">Monthly Infrastructure Investment</h3>
                  <div className="flex justify-center items-end space-x-08 mb-06" style={{height: "120px"}}>
                    <div className="text-center">
                      <div className="bg-red-50 w-16 mb-03" style={{height: "80px"}}></div>
                      <div className="text-body-compact-01 font-semibold text-gray-100">$5,200</div>
                      <div className="text-caption-01 text-gray-70">Before</div>
                    </div>
                    <div className="text-center">
                      <div className="bg-green-50 w-16 mb-03" style={{height: "22px"}}></div>
                      <div className="text-body-compact-01 font-semibold text-gray-100">$1,390</div>
                      <div className="text-caption-01 text-gray-70">After</div>
                    </div>
                  </div>
                  <p className="text-body-compact-01 text-center text-gray-70">73% reduction in monthly AWS spend</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Challenge & Solution Grid */}
        <section className="py-12 lg:py-16 bg-gray-10">
          <div className="max-w-screen-lg mx-auto px-05 lg:px-06">
            <div className="text-center mb-12">
              <h2 className="text-heading-05 text-gray-100 mb-05">The Challenge</h2>
              <p className="text-heading-03 text-gray-70 max-w-3xl mx-auto">Understanding the critical infrastructure pain points that were limiting platform growth</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-08 mb-12">
              {/* Challenge */}
              <div className="group bg-gray-10 border-l-4 border-red-50 p-06 transform transition-all duration-300 hover:shadow-carbon-03 hover:bg-red-10/20 relative overflow-hidden">
                {/* Subtle animated accent */}
                <div className="absolute top-0 left-0 w-1 h-0 bg-red-50 transition-all duration-500 group-hover:h-full"></div>
                <h3 className="text-heading-04 text-red-60 mb-05 transition-colors duration-300 group-hover:text-red-70">
                  Infrastructure Pain Points
                </h3>
                <div className="space-y-04">
                  <div className="transform transition-all duration-300 group-hover:translate-x-1">
                    <h4 className="text-heading-02 text-red-60 mb-02 transition-colors duration-300 group-hover:text-red-70">
                      Peak Traffic Overwhelm
                    </h4>
                    <p className="text-body-compact-01 text-gray-70 transition-colors duration-300 group-hover:text-gray-80">
                      MockExam microservices experienced severe performance degradation during exam nights when student traffic surged unpredictably.
                    </p>
                  </div>
                  <div className="transform transition-all duration-300 delay-75 group-hover:translate-x-1">
                    <h4 className="text-heading-02 text-red-60 mb-02 transition-colors duration-300 group-hover:text-red-70">
                      Infrastructure Rigidity
                    </h4>
                    <p className="text-body-compact-01 text-gray-70 transition-colors duration-300 group-hover:text-gray-80">
                      Static EC2 deployment couldn't scale elastically, leading to over-provisioning during quiet periods.
                    </p>
                  </div>
                  <div className="transform transition-all duration-300 delay-150 group-hover:translate-x-1">
                    <h4 className="text-heading-02 text-red-60 mb-02 transition-colors duration-300 group-hover:text-red-70">
                      Cost Inefficiency
                    </h4>
                    <p className="text-body-compact-01 text-gray-70 transition-colors duration-300 group-hover:text-gray-80">
                      High fixed infrastructure costs maintained year-round despite clear seasonal usage variations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Original Architecture Limitations */}
              <div className="bg-white border border-gray-20 shadow-carbon-02 p-06">
                <h3 className="text-heading-03 text-gray-100 mb-06 text-center">Original Architecture Limitations</h3>
                <div className="space-y-04">
                  <div className="bg-gray-10 p-04 border-l-2 border-red-50">
                    <h4 className="text-heading-02 text-red-60 mb-02">Static EC2 Instances</h4>
                    <p className="text-body-compact-01 text-gray-70">Fixed capacity allocation regardless of actual demand patterns</p>
                  </div>
                  <div className="bg-gray-10 p-04 border-l-2 border-red-50">
                    <h4 className="text-heading-02 text-red-60 mb-02">Manual Scaling Operations</h4>
                    <p className="text-body-compact-01 text-gray-70">Reactive responses to traffic spikes with significant lead times</p>
                  </div>
                  <div className="bg-gray-10 p-04 border-l-2 border-red-50">
                    <h4 className="text-heading-02 text-red-60 mb-02">Monolithic Deployment</h4>
                    <p className="text-body-compact-01 text-gray-70">Limited ability to scale individual service components independently</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Approach */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-screen-lg mx-auto px-05 lg:px-06">
            <div className="text-center mb-12">
              <h2 className="text-heading-05 text-gray-100 mb-05">Strategic Approach</h2>
              <p className="text-heading-03 text-gray-70 mb-08 max-w-3xl mx-auto">Designing a dual-mode architecture optimized for distinct operational patterns</p>
              <p className="text-body-02 text-gray-70 max-w-4xl mx-auto leading-relaxed">
                DeepTechLabs identified two critical operational modes requiring fundamentally different infrastructure approaches to optimize both performance and cost efficiency.
              </p>
            </div>

            <div className="bg-gray-10 p-08 mb-12">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-08">
                <div className="bg-white border border-gray-20 p-06 text-center lg:w-80">
                  <h3 className="text-heading-03 text-red-60 mb-04">Exam Season Mode</h3>
                  <p className="text-body-01 text-gray-70 mb-04">High traffic volumes with unpredictable usage spikes</p>
                  <p className="text-body-compact-01 text-gray-100"><strong>Requires:</strong> Maximum elasticity and performance</p>
                </div>

                <div className="text-blue-60 text-heading-04">→</div>

                <div className="bg-white border border-gray-20 p-06 text-center lg:w-80">
                  <h3 className="text-heading-03 text-green-60 mb-04">Preparation Cycles</h3>
                  <p className="text-body-01 text-gray-70 mb-04">Steady, predictable usage patterns</p>
                  <p className="text-body-compact-01 text-gray-100"><strong>Requires:</strong> Cost optimization and efficiency</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-10 border-l-4 border-blue-60 p-08">
              <h3 className="text-heading-03 text-blue-70 text-center mb-05">Key Strategic Insight</h3>
              <p className="text-body-02 text-gray-70 text-center max-w-4xl mx-auto leading-relaxed">
                Rather than building one infrastructure to handle all scenarios, we designed two complementary systems that automatically transition based on demand patterns and scheduling, delivering optimal performance and cost efficiency for each operational mode.
              </p>
            </div>
          </div>
        </section>

        {/* Solution Architecture */}
        <section className="py-12 lg:py-16 bg-gray-10">
          <div className="max-w-screen-lg mx-auto px-05 lg:px-06">
            <div className="text-center mb-12">
              <h2 className="text-heading-05 text-gray-100 mb-05">Solution Architecture</h2>
              <p className="text-heading-03 text-gray-70">Two-phase implementation delivering both peak performance and cost efficiency</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-08 mb-12">
              {/* Phase 1: EKS */}
              <div className="bg-white border border-gray-20 shadow-carbon-02 p-06">
                <div className="flex items-center mb-06">
                  <div className="w-10 h-10 bg-blue-60 text-white rounded-full flex items-center justify-center text-heading-02 font-semibold mr-04">1</div>
                  <h3 className="text-heading-04 text-blue-70">Amazon EKS for Peak Performance</h3>
                </div>

                <div className="space-y-04">
                  <div>
                    <h4 className="text-heading-02 text-gray-100 mb-02">Containerized Workloads</h4>
                    <p className="text-body-compact-01 text-gray-70">Complete microservices containerization enabling granular scaling and resource optimization</p>
                  </div>
                  <div>
                    <h4 className="text-heading-02 text-gray-100 mb-02">Horizontal Pod Autoscaling</h4>
                    <p className="text-body-compact-01 text-gray-70">Automatic scaling based on CPU, memory, and custom application metrics</p>
                  </div>
                  <div>
                    <h4 className="text-heading-02 text-gray-100 mb-02">CI/CD Integration</h4>
                    <p className="text-body-compact-01 text-gray-70">Seamless deployment pipelines with instant rollback capabilities for rapid iteration</p>
                  </div>
                </div>
              </div>

              {/* Phase 2: K3s */}
              <div className="bg-white border border-gray-20 shadow-carbon-02 p-06">
                <div className="flex items-center mb-06">
                  <div className="w-10 h-10 bg-green-60 text-white rounded-full flex items-center justify-center text-heading-02 font-semibold mr-04">2</div>
                  <h3 className="text-heading-04 text-green-70">K3s on EC2 for Cost Efficiency</h3>
                </div>

                <div className="space-y-04">
                  <div>
                    <h4 className="text-heading-02 text-gray-100 mb-02">Lightweight Kubernetes</h4>
                    <p className="text-body-compact-01 text-gray-70">K3s deployment reducing operational overhead by 60% while maintaining functionality</p>
                  </div>
                  <div>
                    <h4 className="text-heading-02 text-gray-100 mb-02">ARM Graviton2 Instances</h4>
                    <p className="text-body-compact-01 text-gray-70">Cost-efficient compute infrastructure with 20% better price-performance ratio</p>
                  </div>
                  <div>
                    <h4 className="text-heading-02 text-gray-100 mb-02">Demand-Aligned Scaling</h4>
                    <p className="text-body-compact-01 text-gray-70">Automated scaling policies precisely matching resource allocation to actual demand</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Technology Stack */}
            <div className="bg-gray-10 p-06 mb-12">
              <div>
                <h3 className="text-heading-04 text-gray-100 mb-06 text-center">Technology Stack</h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-04">
                  <div className="group bg-white border border-gray-20 p-04 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-carbon-02 hover:border-blue-30 cursor-pointer">
                    <span className="text-body-02 font-medium transition-colors duration-300 group-hover:text-blue-60">Amazon EKS</span>
                    <div className="w-0 h-0.5 bg-blue-60 mx-auto mt-02 transition-all duration-300 group-hover:w-full"></div>
                  </div>
                  <div className="group bg-white border border-gray-20 p-04 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-carbon-02 hover:border-blue-30 cursor-pointer">
                    <span className="text-body-02 font-medium transition-colors duration-300 group-hover:text-blue-60">K3s Kubernetes</span>
                    <div className="w-0 h-0.5 bg-blue-60 mx-auto mt-02 transition-all duration-300 group-hover:w-full"></div>
                  </div>
                  <div className="group bg-white border border-gray-20 p-04 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-carbon-02 hover:border-blue-30 cursor-pointer">
                    <span className="text-body-02 font-medium transition-colors duration-300 group-hover:text-blue-60">AWS Graviton2</span>
                    <div className="w-0 h-0.5 bg-blue-60 mx-auto mt-02 transition-all duration-300 group-hover:w-full"></div>
                  </div>
                  <div className="group bg-white border border-gray-20 p-04 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-carbon-02 hover:border-blue-30 cursor-pointer">
                    <span className="text-body-02 font-medium transition-colors duration-300 group-hover:text-blue-60">Horizontal Pod Autoscaler</span>
                    <div className="w-0 h-0.5 bg-blue-60 mx-auto mt-02 transition-all duration-300 group-hover:w-full"></div>
                  </div>
                  <div className="group bg-white border border-gray-20 p-04 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-carbon-02 hover:border-blue-30 cursor-pointer">
                    <span className="text-body-02 font-medium transition-colors duration-300 group-hover:text-blue-60">Container Registry</span>
                    <div className="w-0 h-0.5 bg-blue-60 mx-auto mt-02 transition-all duration-300 group-hover:w-full"></div>
                  </div>
                  <div className="group bg-white border border-gray-20 p-04 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-carbon-02 hover:border-blue-30 cursor-pointer">
                    <span className="text-body-02 font-medium transition-colors duration-300 group-hover:text-blue-60">Application Load Balancer</span>
                    <div className="w-0 h-0.5 bg-blue-60 mx-auto mt-02 transition-all duration-300 group-hover:w-full"></div>
                  </div>
                  <div className="group bg-white border border-gray-20 p-04 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-carbon-02 hover:border-blue-30 cursor-pointer">
                    <span className="text-body-02 font-medium transition-colors duration-300 group-hover:text-blue-60">CloudWatch Monitoring</span>
                    <div className="w-0 h-0.5 bg-blue-60 mx-auto mt-02 transition-all duration-300 group-hover:w-full"></div>
                  </div>
                  <div className="group bg-white border border-gray-20 p-04 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-carbon-02 hover:border-blue-30 cursor-pointer">
                    <span className="text-body-02 font-medium transition-colors duration-300 group-hover:text-blue-60">CI/CD Pipelines</span>
                    <div className="w-0 h-0.5 bg-blue-60 mx-auto mt-02 transition-all duration-300 group-hover:w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Measurable Impact */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-screen-lg mx-auto px-05 lg:px-06">
            <div className="text-center mb-12">
              <h2 className="text-heading-05 text-gray-100 mb-05">Measurable Impact</h2>
              <p className="text-heading-03 text-gray-70">Quantified improvements across cost, performance, and operational efficiency</p>
            </div>

            {/* Enhanced Results Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-08 mb-12">
              <div className="group bg-white border border-gray-20 shadow-carbon-02 p-06 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-carbon-04 hover:border-green-30 relative overflow-hidden cursor-pointer">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-10/0 to-green-10/0 group-hover:from-green-10/20 group-hover:to-green-10/10 transition-all duration-300"></div>
                <div className="relative">
                  <div className="text-heading-07 font-light text-green-60 mb-03 transition-all duration-300 group-hover:text-green-70 group-hover:scale-110">73%</div>
                  <h3 className="text-heading-04 text-gray-100 mb-03 transition-colors duration-300 group-hover:text-green-70">Cost Reduction</h3>
                  <p className="text-body-01 text-gray-70 transition-colors duration-300 group-hover:text-gray-80">Monthly AWS spend decreased from $5,200 to $1,390</p>
                  {/* Animated underline */}
                  <div className="w-0 h-0.5 bg-green-60 mx-auto mt-04 transition-all duration-500 group-hover:w-16"></div>
                </div>
              </div>
              <div className="group bg-white border border-gray-20 shadow-carbon-02 p-06 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-carbon-04 hover:border-green-30 relative overflow-hidden cursor-pointer">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-10/0 to-green-10/0 group-hover:from-green-10/20 group-hover:to-green-10/10 transition-all duration-300"></div>
                <div className="relative">
                  <div className="text-heading-07 font-light text-green-60 mb-03 transition-all duration-300 group-hover:text-green-70 group-hover:scale-110">0</div>
                  <h3 className="text-heading-04 text-gray-100 mb-03 transition-colors duration-300 group-hover:text-green-70">Downtime Events</h3>
                  <p className="text-body-01 text-gray-70 transition-colors duration-300 group-hover:text-gray-80">Complete elimination of service disruptions during peak exam periods</p>
                  {/* Animated underline */}
                  <div className="w-0 h-0.5 bg-green-60 mx-auto mt-04 transition-all duration-500 group-hover:w-16"></div>
                </div>
              </div>
            </div>

            {/* Additional Impact Metrics */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-06 bg-gray-10 p-08">
              <div className="text-center">
                <h3 className="text-heading-03 text-green-60 font-semibold mb-03">Elastic Scaling</h3>
                <p className="text-body-01 text-gray-70">Automatic adaptation to traffic patterns without manual intervention or service degradation</p>
              </div>
              <div className="text-center">
                <h3 className="text-heading-03 text-green-60 font-semibold mb-03">Simplified Operations</h3>
                <p className="text-body-01 text-gray-70">Streamlined infrastructure management during non-peak periods with reduced operational complexity</p>
              </div>
              <div className="text-center">
                <h3 className="text-heading-03 text-green-60 font-semibold mb-03">Growth Enablement</h3>
                <p className="text-body-01 text-gray-70">Confidence to scale user base without infrastructure limitations or performance concerns</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="bg-blue-60 text-white py-12 lg:py-16">
          <div className="max-w-screen-lg mx-auto px-05 lg:px-06 text-center">
            <blockquote className="text-heading-04 mb-06 max-w-4xl mx-auto font-light italic leading-relaxed">
              "DeepTechLabs helped us cut costs and stabilize our platform at the same time. They took full ownership of our AWS & Kubernetes setup, which gave us confidence to grow without worrying about scaling issues."
            </blockquote>
            <cite className="text-body-02 opacity-75">
              — Founder, AtomsLearning (Medical EdTech, India)
            </cite>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-screen-lg mx-auto px-05 lg:px-06 text-center">
            <h2 className="text-heading-05 text-gray-100 mb-06">Ready to optimize your infrastructure like AtomsLearning?</h2>
            <p className="text-body-02 text-gray-70 mb-08 max-w-2xl mx-auto">
              Start with a 7-day Cloud Health Audit for US$300. Get a comprehensive roadmap in one week with <strong className="text-gray-100">100% money-back guarantee.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-04 justify-center mb-08">
              <Link
                href="/#services"
                className="group inline-flex items-center justify-center px-07 py-04 bg-blue-60 text-white hover:bg-blue-70 transition-all duration-200 text-body-compact-02 font-semibold shadow-carbon-02 hover:shadow-carbon-04 focus:outline-none focus:ring-2 focus:ring-blue-60 focus:ring-offset-2"
              >
                <span>Start Your 7-Day Audit — US$300</span>
                <ArrowRight className="ml-03 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="group inline-flex items-center justify-center px-07 py-04 border border-gray-30 text-gray-80 hover:bg-gray-10 hover:border-gray-40 transition-all duration-200 text-body-compact-02 font-medium shadow-carbon-01 hover:shadow-carbon-02 focus:outline-none focus:ring-2 focus:ring-gray-60 focus:ring-offset-2">
                <Share2 className="mr-03 w-4 h-4" />
                <span>Share This Case Study</span>
              </button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-06 max-w-3xl mx-auto">
              <div className="flex items-center justify-center p-04 bg-green-10/50 border-l-2 border-green-60">
                <span className="text-body-compact-01 text-gray-70 font-medium">No long-term contracts</span>
              </div>
              <div className="flex items-center justify-center p-04 bg-blue-10/50 border-l-2 border-blue-60">
                <span className="text-body-compact-01 text-gray-70 font-medium">100% satisfaction guarantee</span>
              </div>
              <div className="flex items-center justify-center p-04 bg-gray-10 border-l-2 border-gray-60">
                <span className="text-body-compact-01 text-gray-70 font-medium">Enterprise-grade security</span>
              </div>
            </div>
          </div>
        </section>

        {/* Related Content */}
        <section className="py-12 lg:py-16 bg-gray-10">
          <div className="max-w-screen-lg mx-auto px-05 lg:px-06">
            <div className="text-center mb-12">
              <h2 className="text-heading-05 text-gray-100 mb-05">Related Resources</h2>
              <p className="text-body-02 text-gray-70">Explore more insights on cloud optimization and infrastructure scaling</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-06">
              <Link href="/#services" className="group bg-white border border-gray-20 shadow-carbon-02 hover:shadow-carbon-04 transition-all duration-300 p-06">
                <h3 className="text-heading-03 text-gray-100 mb-03 group-hover:text-blue-60 transition-colors">Cloud Health Audit</h3>
                <p className="text-body-compact-01 text-gray-70 mb-04">7-day comprehensive analysis to identify cost savings and optimization opportunities</p>
                <div className="flex items-center text-blue-60 text-body-compact-01 font-medium">
                  <span>Learn more</span>
                  <ArrowRight className="ml-02 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link href="/#services" className="group bg-white border border-gray-20 shadow-carbon-02 hover:shadow-carbon-04 transition-all duration-300 p-06">
                <h3 className="text-heading-03 text-gray-100 mb-03 group-hover:text-blue-60 transition-colors">Integration Sprint</h3>
                <p className="text-body-compact-01 text-gray-70 mb-04">2-week focused implementation to rebuild or stabilize critical integrations</p>
                <div className="flex items-center text-blue-60 text-body-compact-01 font-medium">
                  <span>Learn more</span>
                  <ArrowRight className="ml-02 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link href="/#services" className="group bg-white border border-gray-20 shadow-carbon-02 hover:shadow-carbon-04 transition-all duration-300 p-06">
                <h3 className="text-heading-03 text-gray-100 mb-03 group-hover:text-blue-60 transition-colors">SaaS Backend Starter</h3>
                <p className="text-body-compact-01 text-gray-70 mb-04">Complete production-ready backend with auth, billing, and monitoring</p>
                <div className="flex items-center text-blue-60 text-body-compact-01 font-medium">
                  <span>Learn more</span>
                  <ArrowRight className="ml-02 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}