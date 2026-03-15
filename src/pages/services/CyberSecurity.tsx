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
    icon: <img src="https://cdn-icons-png.flaticon.com/128/3095/3095073.png" alt="Antivirus" className="w-10 h-10" />, 
    title: "Antivirus & Malware Protection", 
    desc: "Leading-edge protection from Cisco, Checkpoint, Fortigate, and McAfee.",
    bullets: [
      "Real-time threat detection",
      "Automatic virus scanning",
      "Ransomware protection",
      "Behavioral analysis",
      "Centralized management"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/3069/3069172.png" alt="Firewall" className="w-10 h-10" />, 
    title: "UTM & Firewall Implementation", 
    desc: "Robust Unified Threat Management to protect your network.",
    bullets: [
      "Next-gen firewall deployment",
      "Application control",
      "Web filtering & blocking",
      "VPN configuration",
      "Traffic monitoring"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/3209/3209997.png" alt="IPS" className="w-10 h-10" />, 
    title: "IPS (Intrusion Prevention)", 
    desc: "Active monitoring systems to detect and block malicious activities.",
    bullets: [
      "Signature-based detection",
      "Anomaly detection",
      "Automatic blocking",
      "Threat intelligence feeds",
      "24/7 monitoring"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/3064/3064830.png" alt="Cyber Tools" className="w-10 h-10" />, 
    title: "Cybersecurity Software & Tools", 
    desc: "Comprehensive toolkit to identify vulnerabilities and assess risks.",
    bullets: [
      "Vulnerability scanning",
      "Penetration testing",
      "Security assessments",
      "Compliance auditing",
      "Risk analysis"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/3063/3063822.png" alt="Audit" className="w-10 h-10" />, 
    title: "Cybersecurity Audit & Prevention", 
    desc: "Expert-led audits to assess security posture and develop strategies.",
    bullets: [
      "Security posture review",
      "Gap analysis",
      "Policy development",
      "Incident response planning",
      "Security awareness training"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/2955/2955406.png" alt="Edge Security" className="w-10 h-10" />, 
    title: "Secure Access for Edge Devices", 
    desc: "Ensuring IoT devices and remote endpoints are hardened.",
    bullets: [
      "IoT device security",
      "Endpoint protection",
      "Network segmentation",
      "Zero-trust access",
      "Remote access VPN"
    ]
  },
];

const partners = [
  { name: "Cisco", logo: "https://logo.clearbit.com/cisco.com" },
  { name: "Checkpoint", logo: "https://logo.clearbit.com/checkpoint.com" },
  { name: "Fortinet", logo: "https://logo.clearbit.com/fortinet.com" },
  { name: "Sophos", logo: "https://logo.clearbit.com/sophos.com" },
  { name: "McAfee", logo: "https://logo.clearbit.com/mcafee.com" },
  { name: "F-Secure", logo: "https://logo.clearbit.com/f-secure.com" },
  { name: "Symantec", logo: "https://logo.clearbit.com/symantec.com" }
];

const industries = [
  "Banking & Finance",
  "Healthcare",
  "Government Agencies",
  "IT Infrastructure",
  "Retail & E-commerce",
  "Manufacturing"
];

const faqs: FAQItem[] = [
  {
    question: "What is Unified Threat Management (UTM)?",
    answer: "UTM is a comprehensive security solution that combines multiple security features into a single platform, including firewall, antivirus, intrusion prevention, content filtering, and VPN capabilities. It provides centralized security management and simplifies protection against diverse cyber threats."
  },
  {
    question: "How do you protect against ransomware attacks?",
    answer: "We implement multi-layered ransomware protection including endpoint detection and response (EDR), email security filters, network segmentation, regular backups, user training, and intrusion prevention systems. Our approach combines technology, processes, and awareness to minimize ransomware risks."
  },
  {
    question: "What is included in a cybersecurity audit?",
    answer: "Our cybersecurity audits include vulnerability assessments, penetration testing, security policy reviews, compliance checks, network architecture analysis, and employee security awareness evaluation. We deliver detailed reports with prioritized recommendations to strengthen your security posture."
  },
  {
    question: "How do you secure remote and mobile workers?",
    answer: "We deploy secure access solutions including VPNs, endpoint protection, mobile device management (MDM), zero-trust architecture, and secure collaboration tools. This ensures remote workers can access corporate resources securely from any location or device."
  },
  {
    question: "What industries require the highest cybersecurity standards?",
    answer: "Banking and finance, healthcare, government, and critical infrastructure require the highest security standards due to sensitive data and regulatory requirements. These industries face advanced persistent threats and must comply with strict data protection regulations."
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

export const CyberSecurity = () => {
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
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" 
            alt="Cyber Security" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter">Cyber Security</h1>
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
          <span className="text-primary font-bold text-xs md:text-base">Cyber Security</span>
        </nav>
      </div>

      {/* Overview Paragraph */}
      <div className="section-padding pt-1 md:pt-2">
        <div className="mb-8 md:mb-16">
          <p className="text-base md:text-2xl text-slate-700 leading-relaxed font-normal">
            Secure your <strong>Work Environment</strong> with our high-end Cyber Security solutions. As technology advances through <strong>online transactions, remote monitoring, and cloud-based solutions</strong>, risks like cyber fraud and data breaches increase. We protect your infrastructure, applications, and information through a dedicated, comprehensive security business unit. Our team delivers enterprise-grade security solutions to safeguard your digital assets against evolving threats.
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
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&q=60" 
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
                    <h4 className="text-sm md:text-lg font-bold text-primary mb-1 md:mb-2 leading-tight">{s.title}</h4>
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
                
                {/* Bullet Points */}
                <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-4">
                  {s.bullets.map((bullet, bi) => (
                    <li key={bi} className="flex items-start gap-2 text-xs text-slate-600">
                      <span className="w-1 h-1 bg-accent rounded-full mt-1.5 shrink-0"></span>
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
            At Mviz Technologies, we believe in providing clear answers to help you make informed decisions about your cybersecurity needs.
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
            Contact us today to discuss how our Cyber Security solutions can protect your organization.
          </p>
          <Link to="/contact" className="inline-block bg-white text-primary font-black uppercase tracking-widest text-xs md:text-sm px-6 md:px-10 py-3 md:py-5 rounded-full hover:bg-white/90 transition-all hover:scale-105">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};