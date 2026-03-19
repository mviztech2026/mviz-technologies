import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'motion/react';

interface FAQItem {
  question: string;
  answer: string;
}

const solutions = [
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/3063/3063822.png" alt="IAAS" className="w-10 h-10" />, 
    title: "IAAS", 
    desc: "Enterprise cloud infrastructure solutions using leading platforms such as Azure, GCP, and Oracle Cloud.",
    bullets: [
      "Virtual machine provisioning",
      "Scalable storage solutions",
      "Network infrastructure setup",
      "Load balancing & auto-scaling",
      "Disaster recovery architecture"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/2920/2920267.png" alt="SAAS" className="w-10 h-10" />, 
    title: "SAAS", 
    desc: "Cloud-based software solutions enabling access to enterprise applications from anywhere.",
    bullets: [
      "Office 365 & Google Workspace",
      "CRM & ERP cloud solutions",
      "Collaboration tools deployment",
      "Identity & access management",
      "SaaS integration services"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/4229/4229904.png" alt="Migration" className="w-10 h-10" />, 
    title: "Cloud Migration", 
    desc: "Seamless migration of applications and infrastructure to secure cloud platforms.",
    bullets: [
      "Lift & shift migration",
      "Re-platforming services",
      "Database cloud migration",
      "Hybrid cloud setup",
      "Migration risk assessment"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/1087/1087840.png" alt="MSP" className="w-10 h-10" />, 
    title: "Managed Cloud Services", 
    desc: "End-to-end cloud monitoring, maintenance, and optimization services.",
    bullets: [
      "24/7 infrastructure monitoring",
      "Cost optimization analysis",
      "Security patch management",
      "Performance tuning",
      "Backup & recovery management"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/3135/3135766.png" alt="Hybrid" className="w-10 h-10" />, 
    title: "Hybrid Cloud Solutions", 
    desc: "Integration of on-premise and cloud infrastructure for optimal flexibility.",
    bullets: [
      "Hybrid architecture design",
      "Cloud burst configuration",
      "VPN & Direct Connect setup",
      "Data synchronization",
      "Unified management console"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/3095/3095073.png" alt="Security" className="w-10 h-10" />, 
    title: "Cloud Security", 
    desc: "Comprehensive security solutions protecting cloud infrastructure and data.",
    bullets: [
      "Cloud security assessment",
      "IAM policy configuration",
      "Data encryption services",
      "Compliance monitoring",
      "Threat detection & response"
    ]
  },
];

const partners = [
  { name: "Microsoft Azure", logo: "https://logo.clearbit.com/azure.microsoft.com" },
  { name: "Google Cloud", logo: "https://logo.clearbit.com/cloud.google.com" },
  { name: "Oracle", logo: "https://logo.clearbit.com/oracle.com" },
  { name: "AWS", logo: "https://logo.clearbit.com/aws.amazon.com" },
  { name: "IBM Cloud", logo: "https://logo.clearbit.com/ibm.com" }
];

const industries = [
  "Enterprise IT Infrastructure",
  "Technology Startups",
  "Retail & E-commerce",
  "Logistics & Supply Chain",
  "Financial Services",
  "Healthcare Systems"
];

const faqs: FAQItem[] = [
  {
    question: "What is the difference between IaaS, PaaS, and SaaS?",
    answer: "IaaS (Infrastructure as a Service) provides virtualized computing resources like servers and storage. PaaS (Platform as a Service) offers a complete development and deployment environment. SaaS (Software as a Service) delivers fully functional applications over the internet. At Mviz Technologies, we help organizations choose and implement the right cloud service model based on their specific needs."
  },
  {
    question: "How do you ensure cloud migration is secure?",
    answer: "We follow a comprehensive migration methodology including pre-migration assessment, data encryption during transfer, phased migration approach, security compliance validation, and post-migration monitoring. We implement best practices for identity management, network security, and data protection throughout the migration process."
  },
  {
    question: "What cloud platforms do you specialize in?",
    answer: "We specialize in major cloud platforms including Microsoft Azure, Google Cloud Platform (GCP), Oracle Cloud, and Amazon Web Services (AWS). Our team is certified across these platforms and can design multi-cloud or hybrid cloud solutions based on organizational requirements."
  },
  {
    question: "What are managed cloud services?",
    answer: "Managed cloud services include 24/7 infrastructure monitoring, security management, cost optimization, backup and disaster recovery, performance tuning, and technical support. We act as your cloud operations team, ensuring your cloud environment remains secure, optimized, and aligned with business objectives."
  },
  {
    question: "How can cloud solutions reduce IT costs?",
    answer: "Cloud solutions eliminate capital expenditure on hardware, reduce operational costs through automation, enable pay-as-you-use pricing models, minimize maintenance overhead, and improve resource utilization. Organizations typically see 20-40% cost savings while gaining scalability and agility."
  }
];

const FAQItemComponent = ({ item, isOpen, onClick, key }: { item: FAQItem; isOpen: boolean; onClick: () => void; key?: number }) => {
  return (
    <div className="border-b border-slate-200">
      <button
        onClick={onClick}
        className="w-full py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors px-2"
      >
        <span className="text-lg font-semibold text-slate-800 pr-4">{item.question}</span>
        <span className="flex-shrink-0 text-slate-500">
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-slate-600 leading-relaxed px-2">
          {item.answer}
        </p>
      </motion.div>
    </div>
  );
};

export const CloudSolutions = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="pb-20">
      {/* Header Image - Freedom Block with margins */}
      <div className="section-padding pt-4 md:pt-8">
        <div className="relative w-full h-[35vh] md:h-[50vh] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" 
            alt="Cloud Solutions" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter">Cloud Solutions</h1>
          </div>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="section-padding py-3 md:py-4">
        <nav className="flex items-center gap-1.5 md:gap-2 text-sm md:text-base text-slate-500">
          <Link to="/" className="hover:text-primary transition-colors font-medium text-xs md:text-base">Home</Link>
          <span className="text-slate-400">/</span>
          <Link to="/services" className="hover:text-primary transition-colors font-medium text-xs md:text-base">Our Services</Link>
          <span className="text-slate-400">/</span>
          <span className="text-primary font-black text-xs md:text-base">Cloud Solutions</span>
        </nav>
      </div>

      {/* Overview Paragraph */}
      <div className="section-padding pt-1 md:pt-2">
        <div className="mb-8 md:mb-16">
          <p className="text-base md:text-2xl text-slate-700 leading-relaxed font-normal">
            Gain security, flexibility, and agility with cloud technology solutions from Mviz Technologies. Welcome to the Cloud Solution Business Unit of Mviz Technologies. In today's rapidly evolving digital landscape, organizations must leverage cloud technologies, IoT platforms, and AI-driven systems to expand operations beyond geographical boundaries. Our team provides expert guidance, migration support, and managed services to help businesses successfully adopt and manage cloud infrastructure and applications. We design scalable, secure, and cost-efficient cloud environments that empower organizations to innovate faster and operate more efficiently.
          </p>
        </div>

        {/* Solutions */}
        <h2 className="text-2xl md:text-4xl font-black text-primary mb-6 md:mb-12 tracking-tighter">Solutions Offered</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-20">
          {solutions.map((s, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl bg-white shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300">
              {/* Corner decorative image */}
              <div className="absolute -top-10 -right-10 w-32 h-32 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&q=60" 
                  alt="" 
                  className="w-full h-full object-cover rounded-full blur-sm"
                />
              </div>
              
              {/* Content */}
              <div className="relative p-5 md:p-8 text-center">
                <div className="flex flex-col items-center gap-3 md:gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-6 h-6 md:w-10 md:h-10">{s.icon}</div>
                  </div>
                  <div className="text-center">
                    <h4 className="text-sm md:text-lg font-black text-primary mb-1 md:mb-2 leading-tight">{s.title}</h4>
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
                
                {/* Bullet Points */}
                <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-4 text-center">
                  {s.bullets.map((bullet, bi) => (
                    <li key={bi} className="flex items-center gap-2 text-xs text-slate-600">
                      <span className="w-1 h-1 bg-accent rounded-full mt-1.5 shrink-0"></span>
                      <span className="leading-relaxed text-center">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Bottom gradient line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Partners */}
        <h2 className="text-2xl md:text-4xl font-black text-primary mb-6 md:mb-12 tracking-tighter">Technology Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6 mb-12 md:mb-20">
          {partners.map((partner, i) => (
            <div key={i} className="bg-white rounded-xl md:rounded-2xl p-3 md:p-6 flex items-center justify-center shadow-sm md:shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="max-h-6 md:max-h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                }}
                referrerPolicy="no-referrer"
              />
              <span className="hidden font-black text-primary text-xs md:text-sm text-center">{partner.name}</span>
            </div>
          ))}
        </div>

        {/* Industries */}
        <h2 className="text-2xl md:text-4xl font-black text-primary mb-6 md:mb-12 tracking-tighter">Industries Supported</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 mb-12 md:mb-20">
          {industries.map((industry, i) => (
            <div key={i} className="bg-slate-100 p-3 md:p-6 rounded-xl md:rounded-2xl text-center font-black text-primary text-xs md:text-base">
              {industry}
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mb-12 md:mb-20">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-black text-primary mb-2 tracking-tighter">
            How Can <span className="text-accent">We Help</span> (FAQs)
          </h2>
          <p className="text-slate-600 mb-4 md:mb-10 text-sm md:text-base">
            At Mviz Technologies, we believe in providing clear answers to help you make informed decisions about your cloud infrastructure needs.
          </p>
          
          <div className="bg-white rounded-xl md:rounded-2xl shadow-md md:shadow-lg p-4 md:p-8">
            {faqs.map((faq, index) => (
              <FAQItemComponent
                key={index}
                item={faq}
                isOpen={openFAQ === index}
                onClick={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl md:rounded-3xl p-6 md:p-12 lg:p-16 text-center text-white">
          <h2 className="text-xl md:text-3xl lg:text-5xl font-black mb-3 md:mb-6 tracking-tighter text-white">Ready to get started?</h2>
          <p className="text-sm md:text-lg lg:text-xl mb-4 md:mb-8 text-white/90 max-w-2xl mx-auto">
            Contact us today to discuss how our Cloud Solutions can transform your IT infrastructure.
          </p>
          <Link to="/contact" className="inline-block bg-white text-primary font-black uppercase tracking-widest text-xs md:text-sm px-6 md:px-10 py-3 md:py-5 rounded-full hover:bg-white/90 transition-all hover:scale-105">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};