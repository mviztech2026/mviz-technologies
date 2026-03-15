import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'motion/react';

interface FAQItem {
  question: string;
  answer: string;
}

const solutions = [
  { icon: <img src="https://cdn-icons-png.flaticon.com/128/1828/1828476.png" alt="Access Control" className="w-10 h-10" />, title: "Access Control Systems", desc: "Advanced access control systems that regulate and monitor entry points across enterprise facilities." },
  { icon: <img src="https://cdn-icons-png.flaticon.com/128/2964/2964514.png" alt="CCTV" className="w-10 h-10" />, title: "CCTV Surveillance", desc: "High-definition surveillance solutions for continuous monitoring and improved security management." },
  { icon: <img src="https://cdn-icons-png.flaticon.com/128/2519/2519116.png" alt="Rodent Control" className="w-10 h-10" />, title: "Rodent Control Systems", desc: "Infrastructure solutions to prevent and manage rodent-related risks within buildings and facilities." },
  { icon: <img src="https://cdn-icons-png.flaticon.com/128/2328/2328966.png" alt="Water Leak" className="w-10 h-10" />, title: "Water Leak Detection (WLD)", desc: "Early leak detection systems designed to protect critical infrastructure and data center environments." },
  { icon: <img src="https://cdn-icons-png.flaticon.com/128/8061/8061840.png" alt="Smoke Detection" className="w-10 h-10" />, title: "VESDA Smoke Detection", desc: "Very Early Smoke Detection Apparatus systems providing advanced fire safety monitoring." },
  { icon: <img src="https://cdn-icons-png.flaticon.com/128/2554/2554949.png" alt="Parking" className="w-10 h-10" />, title: "Parking Access Control (PAC/CAC)", desc: "Smart parking management systems controlling vehicle access and monitoring parking facilities." },
  { icon: <img src="https://cdn-icons-png.flaticon.com/128/702/702814.png" alt="Electrical" className="w-10 h-10" />, title: "Electrical Panels & Power Controls", desc: "Reliable electrical panel infrastructure for efficient power distribution and system control." },
  { icon: <img src="https://cdn-icons-png.flaticon.com/128/2956/2956381.png" alt="UPS" className="w-10 h-10" />, title: "UPS, DG & Power Backup", desc: "Uninterruptible power supply systems, diesel generators, and backup infrastructure for critical operations." },
  { icon: <img src="https://cdn-icons-png.flaticon.com/128/7855/7855898.png" alt="Fire Suppression" className="w-10 h-10" />, title: "Gas Suppression Systems", desc: "Advanced fire suppression technologies using gas-based systems to protect sensitive environments." },
  { icon: <img src="https://cdn-icons-png.flaticon.com/128/8061/8061840.png" alt="Fire Alarm" className="w-10 h-10" />, title: "Fire Detection & Alarm (FDA)", desc: "Comprehensive fire detection and alarm infrastructure ensuring quick emergency response." },
  { icon: <img src="https://cdn-icons-png.flaticon.com/128/2906/2906274.png" alt="Networking" className="w-10 h-10" />, title: "Passive & Active Networking", desc: "Complete networking infrastructure including structured cabling and active network devices." },
  { icon: <img src="https://cdn-icons-png.flaticon.com/128/1835/1835949.png" alt="Flooring" className="w-10 h-10" />, title: "False Flooring Infrastructure", desc: "Specialized flooring solutions designed to support data center and infrastructure cabling systems." },
  { icon: <img src="https://cdn-icons-png.flaticon.com/128/2933/2933245.png" alt="Server Rack" className="w-10 h-10" />, title: "Server Rack & Data Centre Infrastructure", desc: "Enterprise-grade server racks and data center infrastructure solutions." },
  { icon: <img src="https://cdn-icons-png.flaticon.com/128/2942/2942074.png" alt="Civil Work" className="w-10 h-10" />, title: "Civil Work for IT Infrastructure", desc: "Civil construction and facility preparation for implementing enterprise IT infrastructure." },
  { icon: <img src="https://cdn-icons-png.flaticon.com/128/2099/2099058.png" alt="Building" className="w-10 h-10" />, title: "Building Management & Automation", desc: "Integrated building automation systems managing HVAC, temperature control, power, and water systems." },
];

const partners = [
  { name: "Honeywell", logo: "https://logo.clearbit.com/honeywell.com" },
  { name: "Siemens", logo: "https://logo.clearbit.com/siemens.com" },
  { name: "Schneider Electric", logo: "https://logo.clearbit.com/schneider-electric.com" },
  { name: "D-Link", logo: "https://logo.clearbit.com/dlink.com" },
  { name: "Vertiv", logo: "https://logo.clearbit.com/vertiv.com" },
  { name: "LG", logo: "https://logo.clearbit.com/lg.com" },
  { name: "Samsung", logo: "https://logo.clearbit.com/samsung.com" }
];

const industries = [
  "Commercial Real Estate",
  "Corporate Campuses",
  "Industrial Facilities",
  "Hospitals & Healthcare",
  "Hotels & Hospitality",
  "Government Infrastructure"
];

const faqs: FAQItem[] = [
  {
    question: "What is ELV and why is it important for modern buildings?",
    answer: "ELV (Extra Low Voltage) systems include security, communication, and automation infrastructure that operates at safe voltage levels. These systems are crucial for modern buildings as they ensure safety through surveillance and access control, enable efficient communication networks, and provide intelligent building automation for energy management and operational efficiency."
  },
  {
    question: "How does IBMS integrate different building systems?",
    answer: "Intelligent Building Management Systems (IBMS) integrate various subsystems like HVAC, lighting, power, security, and fire safety into a centralized platform. This integration allows for coordinated control, real-time monitoring, automated responses to events, and comprehensive data analytics to optimize building performance and reduce operational costs."
  },
  {
    question: "What are the benefits of implementing VESDA smoke detection?",
    answer: "Very Early Smoke Detection Apparatus (VESDA) provides continuous air sampling and can detect smoke at its earliest stages, often before visible smoke appears. Benefits include extremely early fire warning, reduced false alarms, protection of high-value assets in data centers and critical facilities, and integration with suppression systems for rapid response."
  },
  {
    question: "How do access control systems enhance building security?",
    answer: "Modern access control systems use advanced technologies like biometric authentication, smart cards, and mobile credentials to regulate entry. They provide detailed audit trails, real-time monitoring, time-based access restrictions, and integration with surveillance systems. This multi-layered approach prevents unauthorized access while maintaining convenient access for authorized personnel."
  },
  {
    question: "What infrastructure is needed for a smart building management system?",
    answer: "Smart building infrastructure requires robust networking (structured cabling and fiber), centralized control panels, sensors and actuators throughout the building, secure server rooms or cloud connectivity, user interface terminals, and integration gateways to connect various protocols and systems into a unified management platform."
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

export const ElvIbms = () => {
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
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" 
            alt="ELV & IBMS" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter">ELV & IBMS</h1>
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
          <span className="text-primary font-bold text-xs md:text-base">ELV & IBMS</span>
        </nav>
      </div>

      {/* Overview Paragraph */}
      <div className="section-padding pt-1 md:pt-2">
        <div className="mb-8 md:mb-16">
          <p className="text-base md:text-2xl text-slate-700 leading-relaxed font-normal">
            Welcome to the ELV & IBMS Business Unit of Mviz Technologies. We specialize in delivering advanced infrastructure solutions for modern buildings, campuses, and enterprise facilities. Our expertise covers LAN-WAN networking, IPBX systems, access control, surveillance infrastructure, and intelligent building management systems. As facilities grow more complex, organizations require centralized monitoring, automation, and reliable infrastructure management. Mviz Technologies provides end-to-end planning, design, implementation, and maintenance of ELV and IBMS infrastructure to ensure efficient facility operations, improved safety, and intelligent control of building environments.
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
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-6 h-6 md:w-10 md:h-10">{s.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm md:text-lg font-bold text-primary mb-1 md:mb-2 leading-tight">{s.title}</h4>
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
              
              {/* Bottom gradient line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Partners */}
        <h2 className="text-2xl md:text-4xl font-black text-primary mb-6 md:mb-12 tracking-tighter">Technology Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-6 mb-12 md:mb-20">
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
            At Mviz Technologies, we believe in providing clear answers to help you make informed decisions about your infrastructure needs.
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
            Contact us today to discuss how our ELV & IBMS solutions can help transform your building infrastructure.
          </p>
          <Link to="/contact" className="inline-block bg-white text-primary font-black uppercase tracking-widest text-xs md:text-sm px-6 md:px-10 py-3 md:py-5 rounded-full hover:bg-white/90 transition-all hover:scale-105">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};