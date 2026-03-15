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
    icon: <img src="https://cdn-icons-png.flaticon.com/128/3063/3063822.png" alt="Network" className="w-10 h-10" />, 
    title: "Network Implementation", 
    desc: "Enterprise networking infrastructure including LAN, WAN, SDWAN solutions.",
    bullets: [
      "LAN/WAN architecture",
      "SD-WAN deployment",
      "Wireless connectivity",
      "Network security",
      "Performance optimization"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/3069/3069172.png" alt="CCTV" className="w-10 h-10" />, 
    title: "CCTV Surveillance", 
    desc: "Advanced surveillance infrastructure for security management.",
    bullets: [
      "IP camera systems",
      "Video analytics",
      "Centralized monitoring",
      "Storage solutions",
      "Remote access setup"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/2920/2920267.png" alt="Data Center" className="w-10 h-10" />, 
    title: "Data Centre Implementation", 
    desc: "End-to-end IT and non-IT data center infrastructure.",
    bullets: [
      "Server rack installation",
      "Power infrastructure",
      "Cooling systems",
      "Cable management",
      "Environmental monitoring"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/3601/3601638.png" alt="Map" className="w-10 h-10" />, 
    title: "Statewide Deployment", 
    desc: "Large-scale technology deployments across multiple locations.",
    bullets: [
      "Multi-site coordination",
      "Standardized deployment",
      "Logistics management",
      "Quality assurance",
      "Timeline management"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/4229/4229904.png" alt="Documents" className="w-10 h-10" />, 
    title: "Document Management", 
    desc: "Digital document management platforms for efficient records.",
    bullets: [
      "DMS implementation",
      "Workflow automation",
      "Version control",
      "Access management",
      "Integration services"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/10398/10398522.png" alt="Database" className="w-10 h-10" />, 
    title: "DC-DR Setup", 
    desc: "Data Center and Disaster Recovery architecture.",
    bullets: [
      "Primary DC setup",
      "DR site configuration",
      "Replication solutions",
      "Failover testing",
      "Business continuity"
    ]
  },
];

const partners = [
  { name: "Cisco", logo: "https://logo.clearbit.com/cisco.com" },
  { name: "Honeywell", logo: "https://logo.clearbit.com/honeywell.com" },
  { name: "Schneider Electric", logo: "https://logo.clearbit.com/schneider-electric.com" },
  { name: "Siemens", logo: "https://logo.clearbit.com/siemens.com" },
  { name: "Dell", logo: "https://logo.clearbit.com/dell.com" },
  { name: "Canon", logo: "https://logo.clearbit.com/canon.com" },
  { name: "Oracle", logo: "https://logo.clearbit.com/oracle.com" },
  { name: "HP", logo: "https://logo.clearbit.com/hp.com" }
];

const industries = [
  "Government Infrastructure",
  "Statewide Technology Projects",
  "Data Centers",
  "Transportation & Airports",
  "Smart Cities",
  "Enterprise Infrastructure"
];

const faqs: FAQItem[] = [
  {
    question: "What is a turnkey project in system integration?",
    answer: "A turnkey project is a complete solution delivered ready for immediate use. We handle everything from design, procurement, installation, configuration, testing, and commissioning. The client simply 'turns the key' to start operations. This approach reduces project complexity and ensures single-point accountability."
  },
  {
    question: "How do you handle large-scale statewide deployments?",
    answer: "Our statewide deployment methodology includes centralized project management, regional coordination hubs, standardized implementation procedures, trained local teams, logistics optimization, and real-time progress tracking. We've successfully executed projects across hundreds of locations with consistent quality and timelines."
  },
  {
    question: "What is involved in data center implementation?",
    answer: "Data center implementation includes site assessment, architectural design, power and cooling infrastructure, rack and cable management, network backbone setup, security systems, monitoring tools, and commissioning. We ensure compliance with Tier standards and industry best practices for reliability and efficiency."
  },
  {
    question: "How do you ensure project quality and timely delivery?",
    answer: "We implement rigorous project management methodologies including detailed planning, milestone tracking, quality checkpoints, vendor management, risk mitigation, and regular client reporting. Our experienced project managers and certified engineers ensure delivery within scope, budget, and timeline."
  },
  {
    question: "Do you provide post-implementation support?",
    answer: "Yes, we offer comprehensive post-implementation support including training, documentation, warranty services, AMC options, help desk support, and ongoing maintenance. Our support ensures your integrated systems continue operating optimally throughout their lifecycle."
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

export const SystemIntegration = () => {
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
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80" 
            alt="System Integration & Turnkey Projects" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter">System Integration</h1>
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
          <span className="text-primary font-bold text-xs md:text-base">System Integration</span>
        </nav>
      </div>

      {/* Overview Paragraph */}
      <div className="section-padding pt-1 md:pt-2">
        <div className="mb-8 md:mb-16">
          <p className="text-base md:text-2xl text-slate-700 leading-relaxed font-normal">
            Everything you need for System Integration & Turnkey Projects can be found at Mviz Technologies. With extensive experience in supply, deployment, and support services, we deliver reliable solutions ranging from basic IT infrastructure to enterprise-scale digital transformation projects. Our consultants and engineers work closely with organizations to design, integrate, and implement complex infrastructure environments that deliver measurable operational results.
          </p>
        </div>

        {/* Solutions */}
        <h2 className="text-2xl md:text-4xl font-black text-primary mb-6 md:mb-12 tracking-tighter">Solutions Offered</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-20">
          {solutions.map((s, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl bg-white shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300">
              {/* Corner decorative image */}
              <div className="absolute -top-10 -right-10 w-32 h-32 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&q=60" 
                  alt="" 
                  className="w-full h-full object-cover rounded-full blur-sm"
                />
              </div>
              
              {/* Content */}
              <div className="relative p-5 md:p-8">
                <div className="flex items-start gap-3 md:gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-6 h-6 md:w-10 md:h-10">{s.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base md:text-xl font-bold text-primary mb-1 md:mb-2 leading-tight">{s.title}</h4>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">{s.desc}</p>
                  </div>
                </div>
                
                {/* Bullet Points */}
                <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-4">
                  {s.bullets.map((bullet, bi) => (
                    <li key={bi} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0"></span>
                      <span className="leading-relaxed">{bullet}</span>
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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-6 mb-12 md:mb-20">
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
              <span className="hidden font-bold text-primary text-xs md:text-sm text-center">{partner.name}</span>
            </div>
          ))}
        </div>

        {/* Industries */}
        <h2 className="text-2xl md:text-4xl font-black text-primary mb-6 md:mb-12 tracking-tighter">Industries Supported</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 mb-12 md:mb-20">
          {industries.map((industry, i) => (
            <div key={i} className="bg-slate-100 p-3 md:p-6 rounded-xl md:rounded-2xl text-center font-bold text-primary text-xs md:text-base">
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
            At Mviz Technologies, we believe in providing clear answers to help you make informed decisions about your system integration needs.
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
            Contact us today to discuss how our System Integration solutions can transform your infrastructure.
          </p>
          <Link to="/contact" className="inline-block bg-white text-primary font-black uppercase tracking-widest text-xs md:text-sm px-6 md:px-10 py-3 md:py-5 rounded-full hover:bg-white/90 transition-all hover:scale-105">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};