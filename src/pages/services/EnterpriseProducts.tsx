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
    icon: <img src="https://cdn-icons-png.flaticon.com/128/2933/2933245.png" alt="Servers" className="w-10 h-10" />, 
    title: "Enterprise Servers", 
    desc: "Rack, tower & blade servers for business-critical workloads.",
    bullets: [
      "HPE ProLiant series",
      "Dell PowerEdge servers",
      "Cisco UCS platforms",
      "Virtualization ready",
      "Redundant power options"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/2906/2906274.png" alt="Storage" className="w-10 h-10" />, 
    title: "Storage Solutions", 
    desc: "NAS, SAN & enterprise storage infrastructure.",
    bullets: [
      "NetApp storage arrays",
      "Dell EMC solutions",
      "HPE 3PAR storage",
      "All-flash options",
      "Data deduplication"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/2915/2915839.png" alt="Wireless" className="w-10 h-10" />, 
    title: "Wireless Networking", 
    desc: "Enterprise WiFi solutions with centralized management.",
    bullets: [
      "Aruba wireless access points",
      "Cisco Meraki solutions",
      "Wireless controllers",
      "Guest access portals",
      "WiFi 6 ready"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/2910/2910791.png" alt="Routers" className="w-10 h-10" />, 
    title: "Enterprise Routers", 
    desc: "High-performance routing infrastructure.",
    bullets: [
      "Cisco ISR routers",
      "Juniper MX series",
      "SD-WAN solutions",
      "MPLS support",
      "High availability"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/2906/2906274.png" alt="Switches" className="w-10 h-10" />, 
    title: "Enterprise Switches", 
    desc: "Core, distribution & access layer switches.",
    bullets: [
      "Cisco Catalyst switches",
      "Aruba CX series",
      "PoE+ support",
      "10G/40G/100G options",
      "Stackable configurations"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/2964/2964514.png" alt="Video" className="w-10 h-10" />, 
    title: "Collaboration Tools", 
    desc: "Video conferencing & communication systems.",
    bullets: [
      "Poly video solutions",
      "Cisco Webex devices",
      "Zoom Room systems",
      "IP phone systems",
      "Conference room setup"
    ]
  },
];

const partners = [
  { name: "HPE", logo: "https://logo.clearbit.com/hpe.com" },
  { name: "Cisco", logo: "https://logo.clearbit.com/cisco.com" },
  { name: "Dell", logo: "https://logo.clearbit.com/dell.com" },
  { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
  { name: "Aruba", logo: "https://logo.clearbit.com/arubanetworks.com" },
  { name: "NetApp", logo: "https://logo.clearbit.com/netapp.com" },
  { name: "Poly", logo: "https://logo.clearbit.com/poly.com" },
  { name: "Oracle", logo: "https://logo.clearbit.com/oracle.com" },
  { name: "Samsung", logo: "https://logo.clearbit.com/samsung.com" },
  { name: "LG", logo: "https://logo.clearbit.com/lg.com" }
];

const industries = [
  "Government Infrastructure",
  "Public Sector Units (PSU)",
  "Corporate Enterprises",
  "Healthcare & Hospitals",
  "Educational Institutions",
  "Smart Infrastructure Projects"
];

const faqs: FAQItem[] = [
  {
    question: "What enterprise server options does Mviz Technologies offer?",
    answer: "We provide a comprehensive range of enterprise servers including rack-mounted, tower, and blade server configurations from leading OEMs like Microsoft, HPE, Dell, and Cisco. Our server solutions support virtualization, high-performance computing, database applications, and business-critical workloads with options for redundancy, hot-swappable components, and scalable storage expansion."
  },
  {
    question: "How do you design network infrastructure for large enterprises?",
    answer: "Our network design process begins with understanding your organization's current and future requirements. We architect solutions using enterprise-grade routers, switches, and wireless access points from Cisco, Aruba, and other leading vendors. The design includes core, distribution, and access layer configurations with proper segmentation, redundancy, and security policies to ensure high availability and performance."
  },
  {
    question: "What storage solutions are available for enterprise data management?",
    answer: "We offer diverse storage solutions including Network Attached Storage (NAS), Storage Area Networks (SAN), and hyper-converged infrastructure from vendors like NetApp, Dell EMC, and HPE. Solutions range from entry-level file sharing to enterprise-grade block storage with features like deduplication, compression, automated tiering, and disaster recovery capabilities."
  },
  {
    question: "How do video conferencing systems improve enterprise collaboration?",
    answer: "Modern video conferencing solutions from Poly and other partners enable HD video meetings, screen sharing, recording, and integration with productivity platforms. These systems reduce travel costs, accelerate decision-making, improve team connectivity across distributed locations, and support hybrid work environments with seamless remote participation."
  },
  {
    question: "What are the benefits of biometric attendance systems?",
    answer: "Biometric attendance systems eliminate buddy punching, provide accurate time tracking, and integrate with payroll systems. Using fingerprint, facial recognition, or iris scanning technologies, these systems enhance security while streamlining workforce management. They offer real-time attendance monitoring, automated reporting, and compliance with labor regulations."
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

export const EnterpriseProducts = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="pb-20">
      {/* Header Image - Freedom Block with margins */}
      <div className="section-padding pt-8">
        <div className="relative w-full h-[50vh] rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src="https://www.enterpriseproducts.com/media-library/epd/e6988dda-26b4-4efb-8dfc-67fde4e521a9.jpg" 
            alt="Enterprise Products & Services" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter">Enterprise Products & Services</h1>
          </div>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="section-padding py-4">
        <nav className="flex items-center gap-2 text-base text-slate-500">
          <Link to="/" className="hover:text-primary transition-colors font-medium">Home</Link>
          <span className="text-slate-400">/</span>
          <Link to="/services" className="hover:text-primary transition-colors font-medium">Our Services</Link>
          <span className="text-slate-400">/</span>
          <span className="text-primary font-black">Enterprise Products</span>
        </nav>
      </div>

      {/* Overview Paragraph */}
      <div className="section-padding pt-2">
        <div className="mb-16">
          <p className="text-base md:text-2xl text-slate-700 leading-relaxed font-normal">
            Welcome to the Enterprise Product and Services Business Unit of Mviz Technologies. We specialize in delivering enterprise-grade IT infrastructure solutions for government organizations, PSUs, and corporate customers. Our approach focuses on understanding each organization's pain points, operational challenges, and available resources in order to design the right technology architecture. Our team collaborates closely with OEM technical experts to deliver reliable, scalable, and cost-effective infrastructure solutions that support critical business applications and long-term digital transformation.
          </p>
        </div>

        {/* Solutions */}
        <h2 className="text-4xl font-black text-primary mb-12 tracking-tighter">Solutions Offered</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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
              <div className="relative p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {s.icon}
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-black text-primary mb-2 leading-tight">{s.title}</h4>
                    <p className="text-slate-600 text-base leading-relaxed">{s.desc}</p>
                  </div>
                </div>
                
                {/* Bullet Points */}
                <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
                  {s.bullets.map((bullet, bi) => (
                    <li key={bi} className="flex items-center justify-center gap-2 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0"></span>
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
        <h2 className="text-4xl font-black text-primary mb-12 tracking-tighter">Technology Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-9 gap-6 mb-20">
          {partners.map((partner, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 flex items-center justify-center shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="max-h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                }}
                referrerPolicy="no-referrer"
              />
              <span className="hidden font-black text-primary text-sm text-center">{partner.name}</span>
            </div>
          ))}
        </div>

        {/* Industries */}
        <h2 className="text-4xl font-black text-primary mb-12 tracking-tighter">Industries Supported</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
          {industries.map((industry, i) => (
            <div key={i} className="bg-slate-100 p-6 rounded-2xl text-center font-black text-primary">
              {industry}
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-black text-primary mb-2 tracking-tighter">
            How Can <span className="text-accent">We Help</span> (FAQs)
          </h2>
          <p className="text-slate-600 mb-10">
            At Mviz Technologies, we believe in providing clear answers to help you make informed decisions about your enterprise infrastructure needs.
          </p>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
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
        <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-12 md:p-16 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter text-white">Ready to get started?</h2>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Contact us today to discuss how our Enterprise Products & Services solutions can help transform your IT infrastructure.
          </p>
          <Link to="/contact" className="inline-block bg-white text-primary font-black uppercase tracking-widest text-sm px-10 py-5 rounded-full hover:bg-white/90 transition-all hover:scale-105">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};