import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

const services = [
  { id: "enterprise-products", title: "Enterprise Products", desc: "Advanced enterprise-grade IT products and infrastructure.", icon: <img src="https://cdn-icons-png.flaticon.com/128/15713/15713237.png" alt="Enterprise" className="w-12 h-12" /> },
  { id: "system-integration", title: "System Integration", desc: "Full lifecycle system integration and turnkey projects.", icon: <img src="https://cdn-icons-png.flaticon.com/128/19034/19034747.png" alt="System Integration" className="w-12 h-12" /> },
  { id: "application-consultancy", title: "Application & Consultancy", desc: "Digital platforms and enterprise software solutions.", icon: <img src="https://cdn-icons-png.flaticon.com/128/15579/15579160.png" alt="Application" className="w-12 h-12" /> },
  { id: "cloud-solutions", title: "Cloud Solutions", desc: "Scale infrastructure with modern cloud platforms.", icon: <img src="https://cdn-icons-png.flaticon.com/128/4149/4149691.png" alt="Cloud" className="w-12 h-12" /> },
  { id: "ai-iot-automation", title: "AI, IoT & Automation", desc: "Modernize operations using intelligent technologies.", icon: <img src="https://cdn-icons-png.flaticon.com/128/10398/10398522.png" alt="AI IoT" className="w-12 h-12" /> },
  { id: "devops-automation", title: "DevOps & Automation", desc: "Accelerate software delivery and operational efficiency.", icon: <img src="https://cdn-icons-png.flaticon.com/128/8759/8759173.png" alt="DevOps" className="w-12 h-12" /> },
  { id: "data-analytics", title: "Data Analytics & BI", desc: "Actionable insights through data-driven intelligence.", icon: <img src="https://cdn-icons-png.flaticon.com/128/17904/17904741.png" alt="Data Analytics" className="w-12 h-12" /> },
  { id: "managed-it-services", title: "Managed IT Services", desc: "Proactive monitoring and expert technical support.", icon: <img src="https://cdn-icons-png.flaticon.com/128/18643/18643269.png" alt="Managed IT" className="w-12 h-12" /> },
  { id: "it-infrastructure-consulting", title: "IT Infrastructure Consulting", desc: "Design robust, scalable, and secure IT foundations.", icon: <img src="https://cdn-icons-png.flaticon.com/128/19014/19014236.png" alt="IT Infrastructure" className="w-12 h-12" /> },
  { id: "cyber-security", title: "Cyber Security", desc: "Protect infrastructure and data from cyber threats.", icon: <img src="https://cdn-icons-png.flaticon.com/128/8722/8722568.png" alt="Cyber Security" className="w-12 h-12" /> },
  { id: "elv-ibms", title: "ELV & IBMS", desc: "Intelligent building management systems.", icon: <img src="https://cdn-icons-png.flaticon.com/128/15902/15902549.png" alt="ELV IBMS" className="w-12 h-12" /> },
  { id: "oem-software", title: "OEM Software Licenses", desc: "Enterprise software licensing and subscription management.", icon: <img src="https://cdn-icons-png.flaticon.com/128/10690/10690664.png" alt="OEM" className="w-12 h-12" /> },
  { id: "pps", title: "PPS (PC, Print & Supplies)", desc: "Enterprise hardware and office IT equipment.", icon: <img src="https://cdn-icons-png.flaticon.com/128/9820/9820042.png" alt="PPS" className="w-12 h-12" /> },
  { id: "maintenance-support", title: "Maintenance & Support", desc: "Reliable operation of IT infrastructure.", icon: <img src="https://cdn-icons-png.flaticon.com/128/15633/15633753.png" alt="Maintenance" className="w-12 h-12" /> },
];

export const Services = () => {
  return (
    <div className="pb-16 overflow-hidden relative">
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] mb-8">
        <img src="https://cdn-icons-png.flaticon.com/128/15713/15713237.png" alt="Services" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80 flex items-center justify-center">
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">Our Services</h1>
        </div>
      </div>
      
      <div className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((service, idx) => (
            <Link key={service.id} to={`/services/${service.id}`} className="glass-card p-10 border-white/40 hover:border-accent/50 transition-all group">
              <div className="text-accent mb-6 group-hover:scale-110 transition-transform group-hover:drop-shadow-[0_0_8px_rgba(251,146,60,0.6)]">{service.icon}</div>
              <h3 className="text-2xl font-black text-primary mb-4 tracking-tight group-hover:text-accent transition-colors">{service.title}</h3>
              <p className="text-slate-600 text-sm font-light">{service.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
