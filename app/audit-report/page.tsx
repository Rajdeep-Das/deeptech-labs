"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Download,
  CheckCircle,
  AlertTriangle,
  TrendingDown,
  TrendingUp,
  Clock,
  DollarSign,
  Shield,
  Activity,
  Server,
  Database,
  Cloud,
  Settings,
  BarChart3,
  Zap,
  Target,
  FileText,
  Calendar,
  Globe,
} from "lucide-react";

export default function AuditReport() {
  const [currentDate] = useState(new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }));

  return (
    <main className="min-h-screen bg-white text-gray-100 font-sans">
      {/* Header Navigation */}
      <nav className="bg-white border-b border-gray-20 sticky top-0 z-50">
        <div className="max-w-screen-lg mx-auto px-05 lg:px-06">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center text-body-01 text-gray-70 hover:text-gray-100 transition-colors font-medium group"
            >
              <ArrowLeft className="w-4 h-4 mr-02 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>

            <div className="flex items-center space-x-04">
              <button className="inline-flex items-center px-04 py-02 border border-gray-30 text-gray-80 hover:bg-gray-10 hover:border-gray-40 transition-all duration-200 text-body-compact-01 font-medium">
                <Download className="w-4 h-4 mr-02" />
                Download PDF
              </button>
              <button className="px-06 py-02 bg-blue-60 text-white hover:bg-blue-70 transition-all duration-200 text-body-compact-01 font-medium">
                Book Implementation Sprint
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Report Container */}
      <div className="max-w-screen-lg mx-auto px-05 lg:px-06 py-08">
        {/* Report Header */}
        <div className="bg-white border border-gray-20 shadow-carbon-02 mb-06">
          {/* Header Bar */}
          <div className="bg-blue-60 text-white px-07 py-05">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-heading-05 font-semibold mb-02">
                  DeepTechLabs — Cloud Health Audit (Sample Report)
                </h1>
                <div className="flex items-center space-x-06 text-blue-20">
                  <div className="flex items-center">
                    <Globe className="w-4 h-4 mr-02" />
                    <span className="text-body-compact-01">Client (Sample): AtomsLearning — Medical EdTech Startup (India)</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-02" />
                    <span className="text-body-compact-01">Date: September 20, 2025</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="inline-flex items-center px-04 py-02 bg-white/10 border border-white/20 backdrop-blur-sm">
                  <FileText className="w-4 h-4 mr-02" />
                  <span className="text-body-compact-01 font-medium">Sample Report</span>
                </div>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="px-07 py-06">
            <div className="flex items-center mb-05">
              <div className="w-1 h-6 bg-blue-60 mr-04"></div>
              <h2 className="text-heading-04 font-semibold text-gray-100">1. Executive Summary</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-06 mb-06">
              <div className="lg:col-span-2">
                <p className="text-body-02 text-gray-80 leading-relaxed mb-05">
                  We reviewed AtomsLearning's AWS infrastructure over a 7-day audit window.
                  The platform was functional but over-provisioned in non-peak cycles and under-scaled
                  during exam periods, leading to unnecessary cost and risk of downtime.
                </p>

                <div className="bg-gray-10 border-l-4 border-blue-60 p-05">
                  <h3 className="text-heading-02 font-semibold text-gray-100 mb-03">Key Findings (Snapshot):</h3>
                  <ul className="space-y-02 text-body-compact-01 text-gray-80">
                    <li>Current monthly AWS spend: <strong className="text-red-60">US$5,200</strong></li>
                    <li>Estimated spend after optimizations: <strong className="text-green-60">US$1,390</strong></li>
                    <li>Projected savings: <strong className="text-green-60">~US$3,810 (73%)</strong></li>
                    <li>Downtime events during exam nights: Reduced from <strong className="text-red-60">frequent disruptions</strong> → <strong className="text-green-60">Zero downtime</strong></li>
                    <li>Deployment time: Reduced from <strong className="text-red-60">~60–65 mins</strong> → <strong className="text-green-60">10–12 mins</strong> after optimized scaling</li>
                  </ul>
                </div>
              </div>

              {/* Key Metrics Card */}
              <div className="bg-blue-10 border border-blue-30 p-05">
                <h3 className="text-heading-02 font-semibold text-blue-70 mb-04 flex items-center">
                  <BarChart3 className="w-4 h-4 mr-02" />
                  Impact Overview
                </h3>
                <div className="space-y-04">
                  <div className="flex items-center justify-between">
                    <span className="text-body-compact-01 text-gray-70">Cost Reduction</span>
                    <span className="text-heading-03 font-bold text-green-60">73%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-body-compact-01 text-gray-70">Monthly Savings</span>
                    <span className="text-heading-03 font-bold text-green-60">$3,810</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-body-compact-01 text-gray-70">Deploy Speed</span>
                    <span className="text-heading-03 font-bold text-blue-60">5.4x</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-body-compact-01 text-gray-70">Uptime Target</span>
                    <span className="text-heading-03 font-bold text-gray-70">99.8%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current State Analysis */}
        <div className="bg-white border border-gray-20 shadow-carbon-02 mb-06">
          <div className="px-07 py-06">
            <div className="flex items-center mb-05">
              <div className="w-1 h-6 bg-red-60 mr-04"></div>
              <h2 className="text-heading-04 font-semibold text-gray-100">2. Current State Analysis</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-08">
              {/* Infrastructure */}
              <div>
                <h3 className="text-heading-03 font-semibold text-gray-100 mb-04 flex items-center">
                  <Server className="w-5 h-5 mr-02 text-gray-70" />
                  Infrastructure
                </h3>
                <ul className="space-y-03 text-body-compact-01 text-gray-80">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-60 rounded-full mr-03 mt-02 flex-shrink-0"></div>
                    AWS EC2 instances running multiple microservices (MockExam, Auth, Payment).
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-60 rounded-full mr-03 mt-02 flex-shrink-0"></div>
                    Manual scaling during peak exam traffic.
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-60 rounded-full mr-03 mt-02 flex-shrink-0"></div>
                    No reserved/spot strategy for cost control.
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-60 rounded-full mr-03 mt-02 flex-shrink-0"></div>
                    Limited CI/CD automation → long deployments.
                  </li>
                </ul>
              </div>

              {/* Cost Profile */}
              <div>
                <h3 className="text-heading-03 font-semibold text-gray-100 mb-04 flex items-center">
                  <DollarSign className="w-5 h-5 mr-02 text-gray-70" />
                  Cost Profile (Top drivers last 3 months)
                </h3>
                <div className="space-y-03">
                  <div className="flex items-center justify-between p-03 bg-gray-10">
                    <span className="text-body-compact-01 text-gray-80">EC2 Compute</span>
                    <span className="text-body-compact-01 font-semibold text-gray-100">~65%</span>
                  </div>
                  <div className="flex items-center justify-between p-03 bg-gray-10">
                    <span className="text-body-compact-01 text-gray-80">RDS</span>
                    <span className="text-body-compact-01 font-semibold text-gray-100">~20%</span>
                  </div>
                  <div className="flex items-center justify-between p-03 bg-gray-10">
                    <span className="text-body-compact-01 text-gray-80">EBS/Storage</span>
                    <span className="text-body-compact-01 font-semibold text-gray-100">~8%</span>
                  </div>
                  <div className="flex items-center justify-between p-03 bg-gray-10">
                    <span className="text-body-compact-01 text-gray-80">Misc (NAT, Data Transfer, Support)</span>
                    <span className="text-body-compact-01 font-semibold text-gray-100">~7%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Risks Identified */}
            <div className="mt-08">
              <h3 className="text-heading-03 font-semibold text-gray-100 mb-04 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-02 text-red-60" />
                Risks Identified
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-05">
                <div className="bg-red-10 border-l-4 border-red-60 p-05">
                  <h4 className="text-heading-02 font-semibold text-red-60 mb-02">Compute over-provisioned</h4>
                  <p className="text-body-compact-01 text-gray-80">Outside peak exam cycles.</p>
                </div>
                <div className="bg-red-10 border-l-4 border-red-60 p-05">
                  <h4 className="text-heading-02 font-semibold text-red-60 mb-02">Lack of elasticity</h4>
                  <p className="text-body-compact-01 text-gray-80">Under peak load → service disruption risk.</p>
                </div>
                <div className="bg-red-10 border-l-4 border-red-60 p-05">
                  <h4 className="text-heading-02 font-semibold text-red-60 mb-02">Idle EBS volumes</h4>
                  <p className="text-body-compact-01 text-gray-80">Oversized instances inflating monthly bills.</p>
                </div>
                <div className="bg-red-10 border-l-4 border-red-60 p-05">
                  <h4 className="text-heading-02 font-semibold text-red-60 mb-02">Limited governance</h4>
                  <p className="text-body-compact-01 text-gray-80">Hard to track owner and usage per resource.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top 3 Recommendations */}
        <div className="bg-white border border-gray-20 shadow-carbon-02 mb-06">
          <div className="px-07 py-06">
            <div className="flex items-center mb-05">
              <div className="w-1 h-6 bg-green-60 mr-04"></div>
              <h2 className="text-heading-04 font-semibold text-gray-100">3. Top 3 Immediate Recommendations</h2>
            </div>

            <div className="space-y-06">
              {/* Recommendation 1 */}
              <div className="border border-green-30 bg-green-10/30 p-06">
                <div className="flex items-start mb-04">
                  <div className="w-8 h-8 bg-green-60 text-white rounded-full flex items-center justify-center mr-04 flex-shrink-0">
                    <span className="text-body-compact-02 font-semibold">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading-03 font-semibold text-green-70 mb-02">
                      Exam Season Scaling with Amazon EKS
                    </h3>
                    <p className="text-body-01 text-gray-80 mb-04">
                      Deploy MockExam microservices to Amazon EKS with Horizontal Pod Autoscaling (HPA).
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-04 text-body-compact-01">
                      <div>
                        <strong className="text-green-60">Benefits:</strong> Elastic scaling during unpredictable exam traffic, improved uptime.
                      </div>
                      <div>
                        <strong className="text-blue-60">Est. Impact:</strong> ~US$1,500 cost avoidance per exam cycle.
                      </div>
                      <div>
                        <strong className="text-gray-70">Effort:</strong> Medium (1 week).
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recommendation 2 */}
              <div className="border border-green-30 bg-green-10/30 p-06">
                <div className="flex items-start mb-04">
                  <div className="w-8 h-8 bg-green-60 text-white rounded-full flex items-center justify-center mr-04 flex-shrink-0">
                    <span className="text-body-compact-02 font-semibold">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading-03 font-semibold text-green-70 mb-02">
                      Baseline Cost Reduction with EC2 + K3s on Graviton2
                    </h3>
                    <p className="text-body-01 text-gray-80 mb-04">
                      Run baseline workloads on K3s cluster deployed over ARM-based Graviton2 EC2 instances.
                      Use Reserved + Spot Instances for further savings.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-04 text-body-compact-01">
                      <div>
                        <strong className="text-green-60">Benefits:</strong> ~60% cost reduction during non-peak cycles.
                      </div>
                      <div>
                        <strong className="text-blue-60">Est. Impact:</strong> US$2,000–2,500 monthly savings.
                      </div>
                      <div>
                        <strong className="text-gray-70">Effort:</strong> Low–Medium (1 week).
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recommendation 3 */}
              <div className="border border-green-30 bg-green-10/30 p-06">
                <div className="flex items-start mb-04">
                  <div className="w-8 h-8 bg-green-60 text-white rounded-full flex items-center justify-center mr-04 flex-shrink-0">
                    <span className="text-body-compact-02 font-semibold">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading-03 font-semibold text-green-70 mb-02">
                      Rightsizing & Storage Optimization
                    </h3>
                    <p className="text-body-01 text-gray-80 mb-04">
                      Downsize over-allocated instances, clean idle EBS volumes, enforce storage lifecycle policies.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-04 text-body-compact-01">
                      <div>
                        <strong className="text-green-60">Benefits:</strong> Immediate cost drop.
                      </div>
                      <div>
                        <strong className="text-blue-60">Est. Impact:</strong> US$500–800/month savings.
                      </div>
                      <div>
                        <strong className="text-gray-70">Effort:</strong> Low (2–3 days).
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-white border border-gray-20 shadow-carbon-02 mb-06">
          <div className="px-07 py-06">
            <div className="flex items-center mb-05">
              <div className="w-1 h-6 bg-blue-60 mr-04"></div>
              <h2 className="text-heading-04 font-semibold text-gray-100">4. Technology Stack (Recommended)</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-06">
              <div className="space-y-04">
                <div className="flex items-center p-04 bg-blue-10 border-l-4 border-blue-60">
                  <Cloud className="w-5 h-5 text-blue-60 mr-03" />
                  <span className="text-body-01 text-gray-80">Amazon EKS with HPA for exam traffic.</span>
                </div>
                <div className="flex items-center p-04 bg-gray-10 border-l-4 border-gray-60">
                  <Server className="w-5 h-5 text-gray-70 mr-03" />
                  <span className="text-body-01 text-gray-80">AWS EC2 + K3s on ARM Graviton2 for baseline workloads.</span>
                </div>
                <div className="flex items-center p-04 bg-gray-10 border-l-4 border-gray-60">
                  <Activity className="w-5 h-5 text-gray-70 mr-03" />
                  <span className="text-body-01 text-gray-80">CloudWatch dashboards for CPU/memory/network metrics.</span>
                </div>
              </div>
              <div className="space-y-04">
                <div className="flex items-center p-04 bg-gray-10 border-l-4 border-gray-60">
                  <Settings className="w-5 h-5 text-gray-70 mr-03" />
                  <span className="text-body-01 text-gray-80">Terraform / Infrastructure as Code for deployments.</span>
                </div>
                <div className="flex items-center p-04 bg-gray-10 border-l-4 border-gray-60">
                  <Zap className="w-5 h-5 text-gray-70 mr-03" />
                  <span className="text-body-01 text-gray-80">CI/CD pipelines integrated with GitHub Actions for automated rollouts.</span>
                </div>
                <div className="flex items-center p-04 bg-gray-10 border-l-4 border-gray-60">
                  <Target className="w-5 h-5 text-gray-70 mr-03" />
                  <span className="text-body-01 text-gray-80">Tagging & FinOps governance for cost accountability.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-white border border-gray-20 shadow-carbon-02 mb-06">
          <div className="px-07 py-06">
            <div className="flex items-center mb-05">
              <div className="w-1 h-6 bg-blue-60 mr-04"></div>
              <h2 className="text-heading-04 font-semibold text-gray-100">5. Next Steps (Phase 2 — Implementation Sprint)</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-08">
              <div>
                <h3 className="text-heading-03 font-semibold text-gray-100 mb-04">Scope:</h3>
                <ul className="space-y-02 text-body-compact-01 text-gray-80">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-60 mr-03 mt-01 flex-shrink-0" />
                    Implement top 3 quick wins (EKS migration, K3s baseline cluster, rightsizing/storage cleanup).
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-60 mr-03 mt-01 flex-shrink-0" />
                    Stage changes in non-prod, test with canary releases, and roll out to production.
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-60 mr-03 mt-01 flex-shrink-0" />
                    Deliver updated runbooks, rollback plan, and dashboards.
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-60 mr-03 mt-01 flex-shrink-0" />
                    Provide 2-week operations handover to ensure stability.
                  </li>
                </ul>
              </div>

              <div className="bg-blue-10 border border-blue-30 p-05">
                <div className="text-center mb-04">
                  <h3 className="text-heading-03 font-semibold text-blue-70 mb-02">Implementation Sprint</h3>
                  <div className="space-y-02">
                    <div>
                      <span className="text-body-compact-01 text-gray-70">Duration: </span>
                      <span className="text-body-compact-01 font-semibold text-gray-100">2 weeks</span>
                    </div>
                    <div>
                      <span className="text-body-compact-01 text-gray-70">Price: </span>
                      <span className="text-heading-04 font-bold text-blue-60">US$1,200</span>
                    </div>
                    <div>
                      <span className="text-body-compact-01 text-gray-70">Payment Terms: </span>
                      <span className="text-body-compact-01 text-gray-80">50% upfront, 50% on delivery</span>
                    </div>
                  </div>
                </div>

                <button className="w-full px-05 py-04 bg-blue-60 text-white hover:bg-blue-70 transition-all duration-200 text-body-compact-02 font-medium">
                  Start Implementation Sprint
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Deliverables */}
        <div className="bg-white border border-gray-20 shadow-carbon-02 mb-06">
          <div className="px-07 py-06">
            <div className="flex items-center mb-05">
              <div className="w-1 h-6 bg-gray-60 mr-04"></div>
              <h2 className="text-heading-04 font-semibold text-gray-100">6. Deliverables</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-05">
              <div className="flex items-center p-04 bg-gray-10 border border-gray-20">
                <FileText className="w-5 h-5 text-gray-70 mr-03" />
                <span className="text-body-01 text-gray-80">Audit Report PDF (this document).</span>
              </div>
              <div className="flex items-center p-04 bg-gray-10 border border-gray-20">
                <Activity className="w-5 h-5 text-gray-70 mr-03" />
                <span className="text-body-01 text-gray-80">Loom Video Walkthrough (~10 mins).</span>
              </div>
              <div className="flex items-center p-04 bg-gray-10 border border-gray-20">
                <Settings className="w-5 h-5 text-gray-70 mr-03" />
                <span className="text-body-01 text-gray-80">Terraform/Script bundle for automation.</span>
              </div>
              <div className="flex items-center p-04 bg-gray-10 border border-gray-20">
                <BarChart3 className="w-5 h-5 text-gray-70 mr-03" />
                <span className="text-body-01 text-gray-80">CloudWatch dashboards + tagging policies.</span>
              </div>
              <div className="flex items-center p-04 bg-gray-10 border border-gray-20">
                <Database className="w-5 h-5 text-gray-70 mr-03" />
                <span className="text-body-01 text-gray-80">Runbook & rollback plan for your team.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Expected Business Outcomes */}
        <div className="bg-white border border-gray-20 shadow-carbon-02 mb-06">
          <div className="px-07 py-06">
            <div className="flex items-center mb-05">
              <div className="w-1 h-6 bg-green-60 mr-04"></div>
              <h2 className="text-heading-04 font-semibold text-gray-100">7. Expected Business Outcomes</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-05">
              <div className="text-center p-05 bg-green-10 border border-green-30">
                <div className="flex items-center justify-center mb-03">
                  <TrendingDown className="w-6 h-6 text-green-60" />
                </div>
                <div className="text-heading-04 font-bold text-green-60 mb-02">73%</div>
                <div className="text-body-compact-01 text-gray-80">
                  <strong>Cost:</strong> reduction (from $5,200 → $1,390).
                </div>
              </div>

              <div className="text-center p-05 bg-blue-10 border border-blue-30">
                <div className="flex items-center justify-center mb-03">
                  <Shield className="w-6 h-6 text-blue-60" />
                </div>
                <div className="text-heading-04 font-bold text-blue-60 mb-02">Zero</div>
                <div className="text-body-compact-01 text-gray-80">
                  <strong>Resilience:</strong> downtime during exam traffic.
                </div>
              </div>

              <div className="text-center p-05 bg-gray-10 border border-gray-30">
                <div className="flex items-center justify-center mb-03">
                  <Clock className="w-6 h-6 text-gray-70" />
                </div>
                <div className="text-heading-04 font-bold text-gray-70 mb-02">10min</div>
                <div className="text-body-compact-01 text-gray-80">
                  <strong>Speed:</strong> Deployment cut from 60 mins → 10 mins.
                </div>
              </div>

              <div className="text-center p-05 bg-blue-10 border border-blue-30">
                <div className="flex items-center justify-center mb-03">
                  <Target className="w-6 h-6 text-blue-60" />
                </div>
                <div className="text-heading-04 font-bold text-blue-60 mb-02">100%</div>
                <div className="text-body-compact-01 text-gray-80">
                  <strong>Focus:</strong> Engineering team can prioritize product innovation over firefighting.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Note & CTA */}
        <div className="bg-blue-60 text-white p-07">
          <div className="text-center">
            <h2 className="text-heading-04 font-semibold mb-04">Final Note</h2>
            <p className="text-body-02 text-blue-20 mb-06 max-w-3xl mx-auto leading-relaxed">
              This sample demonstrates how DeepTechLabs identifies cloud waste, scaling risks, and fragile integrations —
              and translates them into actionable fixes with measurable business outcomes.
            </p>

            <div className="bg-white/10 border border-white/20 p-06 mb-06 backdrop-blur-sm">
              <h3 className="text-heading-03 font-semibold mb-04">Next Step: Approve the Implementation Sprint</h3>
              <p className="text-body-01 text-blue-20 mb-05">
                Realize these savings and stability gains in 2 weeks.
              </p>
              <div className="flex flex-col sm:flex-row gap-04 justify-center">
                <button className="px-07 py-04 bg-white text-blue-60 hover:bg-gray-10 transition-all duration-200 text-body-compact-02 font-semibold">
                  Start Implementation — US$1,200
                </button>
                <Link
                  href="/"
                  className="px-07 py-04 border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-200 text-body-compact-02 font-medium backdrop-blur-sm inline-flex items-center justify-center"
                >
                  Book 30-min Discussion
                </Link>
              </div>
            </div>

            <div className="text-center pt-05 border-t border-white/20">
              <p className="text-caption-01 text-blue-30/80">
                This is a sample report demonstrating our audit methodology and deliverable quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}