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
    icon: <img src="https://cdn-icons-png.flaticon.com/128/2920/2920275.png" alt="Microsoft" className="w-10 h-10" />, 
    title: "Microsoft Licenses", 
    desc: "Enterprise licensing for Microsoft platforms and productivity solutions.",
    bullets: [
      "Windows Server licensing",
      "Office 365 subscriptions",
      "Azure service plans",
      "Volume licensing agreements",
      "License compliance management"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/3063/3063822.png" alt="Oracle" className="w-10 h-10" />, 
    title: "Oracle Software", 
    desc: "Comprehensive Oracle licensing for databases and applications.",
    bullets: [
      "Oracle Database licenses",
      "Middleware solutions",
      "Business applications",
      "License optimization",
      "Support renewals"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/10398/10398522.png" alt="RedHat" className="w-10 h-10" />, 
    title: "RedHat Enterprise", 
    desc: "Open-source enterprise OS and infrastructure solutions.",
    bullets: [
      "RHEL subscriptions",
      "JBoss middleware",
      "OpenShift licensing",
      "Satellite management",
      "Technical support"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/3135/3135766.png" alt="VMware" className="w-10 h-10" />, 
    title: "VMWare Virtualization", 
    desc: "Virtualization infrastructure for data center management.",
    bullets: [
      "vSphere licenses",
      "vCenter management",
      "Horizon desktop",
      "NSX networking",
      "Site Recovery Manager"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/2920/2920267.png" alt="Backup" className="w-10 h-10" />, 
    title: "Backup Software", 
    desc: "Enterprise backup platforms for data protection.",
    bullets: [
      "Veeam licenses",
      "Veritas NetBackup",
      "Commvault solutions",
      "Cloud backup options",
      "Disaster recovery"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/3063/3063198.png" alt="EMS" className="w-10 h-10" />, 
    title: "Management Platforms", 
    desc: "EMS, NMS & helpdesk software for IT operations.",
    bullets: [
      "ServiceNow licensing",
      "SolarWinds solutions",
      "Nagios monitoring",
      "Jira Service Desk",
      "AutoDesk licenses"
    ]
  },
];

const partners = [
  { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
  { name: "Oracle", logo: "https://logo.clearbit.com/oracle.com" },
  { name: "RedHat", logo: "https://logo.clearbit.com/redhat.com" },
  { name: "VMware", logo: "https://logo.clearbit.com/vmware.com" }
];

const industries = [
  "Enterprise IT Infrastructure",
  "Corporate Organizations",
  "Financial Institutions",
  "Education & Universities",
  "Government & Public Sector"
];

const faqs: FAQItem[] = [
  {
    question: "What types of software licenses do you provide?",
    answer: "We provide perpetual licenses, subscription licenses, volume licensing agreements, and cloud-based SaaS subscriptions. Our portfolio includes operating systems, productivity software, databases, security solutions, virtualization platforms, and specialized enterprise applications from leading OEM vendors."
  },
  {
    question: "How do you help with license compliance?",
    answer: "We conduct software audits, track license usage, manage renewal schedules, and ensure compliance with vendor agreements. Our team helps avoid over-licensing costs and under-licensing compliance risks through proper inventory management and usage optimization."
  },
  {
    question: "Can you assist with license migration and upgrades?",
    answer: "Yes, we manage license migrations when upgrading software versions, transitioning to cloud subscriptions, or consolidating license agreements. We ensure smooth transitions with minimal disruption to your operations while optimizing costs."
  },
  {
    question: "What is the advantage of purchasing through an authorized reseller?",
    answer: "As an authorized reseller, we provide genuine licenses with full vendor support, competitive pricing through volume agreements, consolidated billing, dedicated account management, and technical assistance with deployment and activation."
  },
  {
    question: "Do you offer volume discounts for large organizations?",
    answer: "Yes, we leverage our partnerships with major vendors to provide enterprise pricing, volume discounts, and customized licensing agreements for large deployments. We analyze your requirements to recommend the most cost-effective licensing models."
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

export const OemSoftware = () => {
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
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80" 
            alt="OEM Software Licenses" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter">OEM Software Licenses</h1>
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
          <span className="text-primary font-black text-xs md:text-base">OEM Software Licenses</span>
        </nav>
      </div>

      {/* Overview Paragraph */}
      <div className="section-padding pt-1 md:pt-2">
        <div className="mb-8 md:mb-16">
          <p className="text-base md:text-2xl text-slate-700 leading-relaxed font-normal">
            Welcome to the OEM Licenses Business Unit of Mviz Technologies. We specialize in providing ready-made software licenses and subscriptions for OEM (Original Equipment Manufacturer) products. Our dedicated team analyzes your requirements and recommends optimized licensing models that support your organization's daily IT operations. Mviz Technologies helps customers evaluate product capabilities, cost considerations, and compliance requirements to ensure the right software platforms power your enterprise infrastructure.
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
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=200&q=60" 
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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-6 mb-12 md:mb-20">
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
            At Mviz Technologies, we believe in providing clear answers to help you make informed decisions about your software licensing needs.
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
            Contact us today to discuss how our OEM Software Licenses can meet your enterprise software needs.
          </p>
          <Link to="/contact" className="inline-block bg-white text-primary font-black uppercase tracking-widest text-xs md:text-sm px-6 md:px-10 py-3 md:py-5 rounded-full hover:bg-white/90 transition-all hover:scale-105">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};