import React from "react";
import {
  X,
  Server,
  Activity,
  Database,
  Shield,
  Zap,
  Globe,
  Cpu,
} from "lucide-react";

const ChanelDeepDive = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-xl transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/5 backdrop-blur-md sticky top-0 z-10">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Project Pioneer
              </h2>
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs uppercase tracking-wider font-semibold">
                Global C360 Platform
              </span>
            </div>
            <p className="text-white/60 text-sm">
              Enterprise-grade distributed data architecture on Microsoft Azure
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 md:p-10 space-y-12 custom-scrollbar">
          {/* Executive Summary */}
          <section className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Globe className="text-cyan-400" size={20} />
                Global Architecture
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Architected and maintained a global{" "}
                <strong>Customer 360 (C360) data integration platform</strong>{" "}
                that consolidated customer records from 5 geographic regions
                (UK, EU, APAC, US, Japan) into a single golden source of truth.
                The system processed high-volume transactional data from 15+
                diverse touchpoints including POS systems, Salesforce, and
                e-commerce platforms.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "Azure Kubernetes Service",
                  "Logic Apps",
                  "Service Bus",
                  "Event Hubs",
                  "Cosmos DB",
                  "Redis",
                  "Terraform",
                ].map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-md bg-white/5 border border-white/5 text-xs text-white/70 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white/5 border border-white/5 rounded-xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Throughput</span>
                <span className="text-cyan-400 font-mono font-bold">
                  10k+ ops/hr
                </span>
              </div>
              <div className="h-[1px] bg-white/5" />
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Regions</span>
                <span className="text-white font-mono font-bold">
                  5 Global Zones
                </span>
              </div>
              <div className="h-[1px] bg-white/5" />
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Uptime SLA</span>
                <span className="text-green-400 font-mono font-bold">
                  99.95%
                </span>
              </div>
              <div className="h-[1px] bg-white/5" />
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Data Latency</span>
                <span className="text-purple-400 font-mono font-bold">
                  &lt; 200ms
                </span>
              </div>
            </div>
          </section>

          {/* Technical Implementation */}
          <section>
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Server className="text-purple-400" size={20} />
              Core Engineering Components
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Microservices */}
              <div className="group p-6 rounded-2xl bg-[#0F0F0F] border border-white/5 hover:border-purple-500/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 text-orange-400">
                  <Cpu size={20} />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Microservices on AKS
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Deployed 50+ auto-scaling microservices on Azure Kubernetes
                  Service (AKS) handling data transformation and enrichment.
                  Implemented <strong>circuit breakers</strong> and rolling
                  update strategies to ensure zero-downtime deployments during
                  peak retail hours.
                </p>
              </div>

              {/* Event Driven Architecture */}
              <div className="group p-6 rounded-2xl bg-[#0F0F0F] border border-white/5 hover:border-blue-500/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400">
                  <Zap size={20} />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Event-Driven Integration
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Built a reactive messaging backbone using{" "}
                  <strong>Azure Service Bus</strong> and{" "}
                  <strong>Event Hubs</strong>. Decoupled ingestion layers from
                  processing logic, allowing specific regions to buffer data
                  during downstream maintenance without data loss.
                </p>
              </div>

              {/* Data Pipeline */}
              <div className="group p-6 rounded-2xl bg-[#0F0F0F] border border-white/5 hover:border-green-500/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center mb-4 text-green-400">
                  <Database size={20} />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  ETL & Data Factory
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Engineered complex ADF pipelines for nightly batch processing
                  from legacy systems (UK POS, Japan Hybris). Utilized{" "}
                  <strong>Logic Apps</strong> for file detection and
                  orchestration, ensuring data integrity across timezone
                  boundaries.
                </p>
              </div>

              {/* Reliability */}
              <div className="group p-6 rounded-2xl bg-[#0F0F0F] border border-white/5 hover:border-red-500/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center mb-4 text-red-400">
                  <Shield size={20} />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Resilience & Recovery
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Implemented comprehensive disaster recovery protocols.
                  Successfully mitigated critical P1 incidents including{" "}
                  <strong>Cassandra node failures</strong> and API rate limiting
                  through automated fallback mechanisms and efficient resource
                  scaling.
                </p>
              </div>
            </div>
          </section>

          {/* Incident Management Highlights */}
          <section className="bg-white/5 rounded-2xl p-6 md:p-8 border border-white/5 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Activity className="text-red-400" size={20} />
                Operational Excellence
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <div>
                    <h5 className="text-white font-medium text-sm">
                      P1 Incident Resolution
                    </h5>
                    <p className="text-gray-400 text-sm mt-1">
                      Diagnosed and resolved a critical "Silent Customer Data
                      Loss" issue in the UK region caused by Salesforce
                      timestamp conflicts, restoring data integrity for 15,000+
                      affected profiles.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0" />
                  <div>
                    <h5 className="text-white font-medium text-sm">
                      Infrastructure Optimization
                    </h5>
                    <p className="text-gray-400 text-sm mt-1">
                      Identified and fixed intermittent Service Bus connection
                      failures in Azure WebJobs by optimizing TCP connection
                      pooling, stabilizing data flow for real-time POS updates.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                  <div>
                    <h5 className="text-white font-medium text-sm">
                      Monitoring Strategy
                    </h5>
                    <p className="text-gray-400 text-sm mt-1">
                      Deployed custom KQL queries in Azure Application Insights
                      to visualize transaction bottlenecks, reducing
                      mean-time-to-detection (MTTD) by 60%.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ChanelDeepDive;
