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
    icon: <img src="https://cdn-icons-png.flaticon.com/128/2920/2920277.png" alt="PC" className="w-10 h-10" />, 
    title: "PC & Workstation", 
    desc: "High-performance computing systems for enterprise productivity.",
    bullets: [
      "Desktop computers",
      "Laptop solutions",
      "Mobile workstations",
      "Peripheral accessories",
      "Warranty & support"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/3601/3601638.png" alt="Tablet" className="w-10 h-10" />, 
    title: "Mobile Devices", 
    desc: "Mobile technology for remote work and field operations.",
    bullets: [
      "Tablet devices",
      "Smartphone solutions",
      "Handheld scanners",
      "Mobile accessories",
      "Device management"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/3659/3659898.png" alt="Plotter" className="w-10 h-10" />, 
    title: "Printing Solutions", 
    desc: "Enterprise printing and scanning infrastructure.",
    bullets: [
      "Laser printers",
      "Large format plotters",
      "Document scanners",
      "Multifunction devices",
      "Print management"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/2956/2956381.png" alt="UPS" className="w-10 h-10" />, 
    title: "Power Solutions", 
    desc: "UPS and power backup for critical IT infrastructure.",
    bullets: [
      "Online UPS systems",
      "Line-interactive UPS",
      "External battery packs",
      "Power distribution",
      "Surge protection"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/2964/2964514.png" alt="Projector" className="w-10 h-10" />, 
    title: "Presentation Systems", 
    desc: "Projectors, displays and collaboration technology.",
    bullets: [
      "LCD projectors",
      "Interactive displays",
      "Digital whiteboards",
      "Video walls",
      "Mounting solutions"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/4229/4229904.png" alt="Toner" className="w-10 h-10" />, 
    title: "Printer Supplies", 
    desc: "Genuine supplies ensuring reliable printer performance.",
    bullets: [
      "Toner cartridges",
      "Ink cartridges",
      "Drum units",
      "Maintenance kits",
      "Paper supplies"
    ]
  },
];

const partners = [
  { name: "HP", logo: "https://logo.clearbit.com/hp.com" },
  { name: "Dell", logo: "https://logo.clearbit.com/dell.com" },
  { name: "Acer", logo: "https://logo.clearbit.com/acer.com" },
  { name: "Canon", logo: "https://logo.clearbit.com/canon.com" },
  { name: "Vertiv", logo: "https://logo.clearbit.com/vertiv.com" },
  { name: "Samsung", logo: "https://logo.clearbit.com/samsung.com" },
  { name: "Eaton", logo: "https://logo.clearbit.com/eaton.com" }
];

const industries = [
  "Education & Universities",
  "Corporate Enterprises",
  "Retail Businesses",
  "Government Organizations",
  "Healthcare Institutions"
];

const faqs: FAQItem[] = [
  {
    question: "What products are included in PPS (PC+Print+Supplies)?",
    answer: "Our PPS offerings include desktop computers, laptops, workstations, tablets, printers, scanners, multifunction devices, plotters, projectors, interactive boards, UPS systems, and genuine printer supplies. We provide end-to-end hardware solutions for your office technology needs."
  },
  {
    question: "Do you offer managed print services?",
    answer: "Yes, our Managed Print Services (MPS) include printer fleet assessment, supply management, maintenance, cost optimization, and usage monitoring. We help reduce printing costs, improve efficiency, and ensure your printing infrastructure operates reliably."
  },
  {
    question: "Can you provide bulk orders for large organizations?",
    answer: "Absolutely. We specialize in bulk procurement for enterprises, educational institutions, and government organizations. Our volume pricing, centralized deployment, and coordinated delivery ensure cost-effective and efficient hardware rollouts."
  },
  {
    question: "What brands do you supply?",
    answer: "We are authorized partners for leading brands including HP, Dell, Acer, Canon, Samsung, Vertiv, and Eaton. This ensures you receive genuine products with full manufacturer warranties and support."
  },
  {
    question: "Do you provide installation and support for hardware?",
    answer: "Yes, we offer professional installation, configuration, and ongoing support for all hardware we supply. Our technical team ensures your equipment is properly set up and provides maintenance services throughout the product lifecycle."
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

export const Pps = () => {
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
            src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&q=80" 
            alt="PPS (PC, Print & Supplies)" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter">PPS (PC, Print & Supplies)</h1>
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
          <span className="text-primary font-black text-xs md:text-base">PPS</span>
        </nav>
      </div>

      {/* Overview Paragraph */}
      <div className="section-padding pt-1 md:pt-2">
        <div className="mb-8 md:mb-16">
          <p className="text-base md:text-2xl text-slate-700 leading-relaxed font-normal">
            Introducing PPS (PC+Print+Supplies) Sales & Services. Welcome to Mviz Technologies's PPS Business Unit. Every organization begins its IT journey with essential computing hardware, printing systems, and technology infrastructure. Mviz Technologies provides reliable enterprise-grade hardware solutions and IT equipment that empower organizations to operate efficiently and productively. From computing devices and printing systems to power backup and presentation technologies, PPS delivers trusted products backed by leading OEM partnerships.
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
                  src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=200&q=60" 
                  alt="" 
                  className="w-full h-full object-cover rounded-full blur-sm"
                />
              </div>
              
              {/* Content */}
              <div className="relative p-5 md:p-8 text-center">
                <div className="flex flex-col items-center gap-3 md:gap-4 mb-4">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-6 h-6 md:w-10 md:h-10">{s.icon}</div>
                  </div>
                  <div className="text-center">
                    <h4 className="text-base md:text-xl font-black text-primary mb-1 md:mb-2 leading-tight">{s.title}</h4>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">{s.desc}</p>
                  </div>
                </div>
                
                {/* Bullet Points */}
                <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-4 text-center">
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
            At Mviz Technologies, we believe in providing clear answers to help you make informed decisions about your PC, Print & Supplies needs.
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
            Contact us today to discuss how our PPS solutions can meet your hardware and supplies needs.
          </p>
          <Link to="/contact" className="inline-block bg-white text-primary font-black uppercase tracking-widest text-xs md:text-sm px-6 md:px-10 py-3 md:py-5 rounded-full hover:bg-white/90 transition-all hover:scale-105">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};