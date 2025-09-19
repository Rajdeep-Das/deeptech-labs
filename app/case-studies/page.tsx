import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies | DeepTechLabs - Cloud Infrastructure Success Stories",
  description: "Explore real-world cloud optimization success stories. See how DeepTechLabs helped companies reduce AWS costs by up to 73% while improving performance and reliability.",
  keywords: "case studies, cloud optimization, AWS cost reduction, infrastructure success stories, cloud migration, Kubernetes optimization",
  openGraph: {
    title: "Case Studies | DeepTechLabs - Cloud Infrastructure Success Stories",
    description: "Real-world cloud optimization success stories showing measurable cost reductions and performance improvements.",
    type: "website",
    url: "https://deepteachlabs.in/case-studies",
  },
};

const caseStudies = [
  {
    slug: "atomslearning",
    title: "AtomsLearning: 73% AWS Cost Reduction",
    industry: "Medical EdTech",
    location: "India",
    challenge: "Peak traffic scaling during exam periods",
    results: {
      costReduction: "73%",
      monthlySavings: "$3,810",
      downtime: "Zero",
      uptime: "100%"
    },
    description: "How we helped a medical EdTech platform scale infrastructure while cutting AWS costs from $5,200 to $1,390 per month through strategic dual-mode architecture.",
    technologies: ["Amazon EKS", "K3s Kubernetes", "AWS Graviton2", "CloudWatch"],
    featured: true
  }
  // Future case studies will be added here
];

export default function CaseStudiesIndex() {
  return (
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
            <span className="text-gray-100 font-medium">Case Studies</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-10 to-white py-12 lg:py-16">
        <div className="max-w-screen-lg mx-auto px-05 lg:px-06">
          <div className="text-center mb-12">
            <div className="mb-05">
              <span className="inline-flex items-center px-04 py-02 bg-blue-10 text-blue-70 text-label-02 font-medium border-l-4 border-blue-60">
                Success Stories
              </span>
            </div>
            <h1 className="text-fluid-heading-05 lg:text-fluid-heading-06 font-semibold text-gray-100 mb-06 leading-tight tracking-tight">
              Real Cloud Optimization Results
            </h1>
            <p className="text-body-02 text-gray-70 max-w-2xl mx-auto leading-relaxed">
              Discover how we've helped companies reduce infrastructure costs, improve performance, and scale efficiently through strategic cloud optimization.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-06 mb-12">
            <div className="text-center p-06 bg-white border border-gray-20 shadow-carbon-02">
              <div className="text-heading-05 font-bold text-green-60 mb-02">73%</div>
              <div className="text-caption-01 text-gray-70">Average Cost Reduction</div>
            </div>
            <div className="text-center p-06 bg-white border border-gray-20 shadow-carbon-02">
              <div className="text-heading-05 font-bold text-blue-60">$3,810</div>
              <div className="text-caption-01 text-gray-70">Monthly Savings</div>
            </div>
            <div className="text-center p-06 bg-white border border-gray-20 shadow-carbon-02">
              <div className="text-heading-05 font-bold text-gray-100">7</div>
              <div className="text-caption-01 text-gray-70">Days to Results</div>
            </div>
            <div className="text-center p-06 bg-white border border-gray-20 shadow-carbon-02">
              <div className="text-heading-05 font-bold text-green-60">100%</div>
              <div className="text-caption-01 text-gray-70">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-screen-lg mx-auto px-05 lg:px-06">
          <div className="grid grid-cols-1 gap-08">
            {caseStudies.map((study) => (
              <article
                key={study.slug}
                className={`group bg-white border shadow-carbon-03 hover:shadow-carbon-05 transition-all duration-300 p-08 ${
                  study.featured ? 'border-2 border-blue-60' : 'border border-gray-20'
                }`}
              >
                {study.featured && (
                  <div className="absolute top-0 right-0 bg-blue-60 text-white px-03 py-01 text-caption-02 font-medium">
                    Featured Case Study
                  </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-08">
                  {/* Content */}
                  <div className="lg:col-span-8">
                    <div className="mb-04">
                      <div className="flex items-center space-x-04 mb-03">
                        <span className="px-03 py-01 bg-blue-10 text-blue-70 text-caption-01 font-medium">
                          {study.industry}
                        </span>
                        <span className="text-caption-01 text-gray-70">{study.location}</span>
                      </div>
                      <h2 className="text-heading-04 text-gray-100 mb-03 group-hover:text-blue-60 transition-colors">
                        {study.title}
                      </h2>
                      <p className="text-body-02 text-gray-70 mb-04 leading-relaxed">
                        {study.description}
                      </p>
                    </div>

                    {/* Challenge */}
                    <div className="mb-06">
                      <h3 className="text-heading-02 text-gray-100 mb-02">Challenge</h3>
                      <p className="text-body-compact-01 text-gray-70">{study.challenge}</p>
                    </div>

                    {/* Technologies */}
                    <div className="mb-06">
                      <h3 className="text-heading-02 text-gray-100 mb-03">Technologies Used</h3>
                      <div className="flex flex-wrap gap-02">
                        {study.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-03 py-01 bg-gray-10 text-gray-70 text-caption-01 border border-gray-20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="group/btn inline-flex items-center text-blue-60 hover:text-blue-70 text-body-compact-02 font-medium transition-colors"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowRight className="ml-02 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Results */}
                  <div className="lg:col-span-4">
                    <div className="bg-gray-10 p-06">
                      <h3 className="text-heading-03 text-gray-100 mb-06 text-center">Key Results</h3>
                      <div className="grid grid-cols-2 gap-04">
                        <div className="text-center">
                          <div className="text-heading-04 font-bold text-green-60 mb-01">
                            {study.results.costReduction}
                          </div>
                          <div className="text-caption-01 text-gray-70">Cost Reduction</div>
                        </div>
                        <div className="text-center">
                          <div className="text-heading-04 font-bold text-blue-60 mb-01">
                            {study.results.monthlySavings}
                          </div>
                          <div className="text-caption-01 text-gray-70">Monthly Savings</div>
                        </div>
                        <div className="text-center">
                          <div className="text-heading-04 font-bold text-gray-100 mb-01">
                            {study.results.downtime}
                          </div>
                          <div className="text-caption-01 text-gray-70">Service Disruptions</div>
                        </div>
                        <div className="text-center">
                          <div className="text-heading-04 font-bold text-green-60 mb-01">
                            {study.results.uptime}
                          </div>
                          <div className="text-caption-01 text-gray-70">Exam Period Uptime</div>
                        </div>
                      </div>

                      <div className="mt-06 pt-04 border-t border-gray-20 text-center">
                        <Link
                          href={`/case-studies/${study.slug}`}
                          className="w-full inline-flex items-center justify-center px-05 py-03 bg-blue-60 text-white hover:bg-blue-70 transition-all duration-200 text-body-compact-02 font-medium shadow-carbon-02 hover:shadow-carbon-04 focus:outline-none focus:ring-2 focus:ring-blue-60 focus:ring-offset-2"
                        >
                          <span>View Details</span>
                          <ExternalLink className="ml-02 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Coming Soon */}
          <div className="mt-12 text-center p-08 bg-gray-10 border-2 border-dashed border-gray-30">
            <h3 className="text-heading-04 text-gray-100 mb-03">More Success Stories Coming Soon</h3>
            <p className="text-body-02 text-gray-70 mb-06">
              We're documenting additional case studies showcasing cloud optimization across different industries and use cases.
            </p>
            <Link
              href="/#services"
              className="inline-flex items-center px-06 py-04 bg-blue-60 text-white hover:bg-blue-70 transition-all duration-200 text-body-compact-02 font-medium shadow-carbon-02 hover:shadow-carbon-04 focus:outline-none focus:ring-2 focus:ring-blue-60 focus:ring-offset-2"
            >
              <span>Start Your Success Story</span>
              <ArrowRight className="ml-03 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 lg:py-16 bg-blue-60 text-white">
        <div className="max-w-screen-lg mx-auto px-05 lg:px-06 text-center">
          <h2 className="text-heading-05 mb-06">Ready to achieve similar results?</h2>
          <p className="text-body-02 mb-08 max-w-2xl mx-auto opacity-90">
            Start with a 7-day Cloud Health Audit for US$300. Get a comprehensive roadmap to optimize your infrastructure and reduce costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-04 justify-center">
            <Link
              href="/#services"
              className="group inline-flex items-center justify-center px-07 py-04 bg-white text-blue-60 hover:bg-gray-10 transition-all duration-200 text-body-compact-02 font-semibold shadow-carbon-02 hover:shadow-carbon-04 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-60"
            >
              <span>Start Your 7-Day Audit</span>
              <ArrowRight className="ml-03 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}