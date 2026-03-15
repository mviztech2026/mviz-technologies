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
    icon: <img src="https://cdn-icons-png.flaticon.com/128/2920/2920277.png" alt="Application Development" className="w-10 h-10" />, 
    title: "Application Development", 
    desc: "Comprehensive application development services designed to meet specific business requirements.",
    bullets: [
      "Custom web application development",
      "Enterprise software solutions",
      "API development & integration",
      "Legacy system modernization",
      "Microservices architecture"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/4229/4229904.png" alt="Migration Services" className="w-10 h-10" />, 
    title: "Migration Services", 
    desc: "Smooth migration of applications and enterprise data to modern platforms and cloud environments.",
    bullets: [
      "Cloud migration strategy",
      "Database migration services",
      "Legacy to modern platform shift",
      "Data integrity validation",
      "Zero-downtime migration"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/2920/2920277.png" alt="Web Portals" className="w-10 h-10" />, 
    title: "Web Portals & Website Development", 
    desc: "Interactive web portals and enterprise websites designed for digital transformation.",
    bullets: [
      "Corporate website development",
      "Customer portal solutions",
      "E-commerce platforms",
      "Content management systems",
      "Progressive web applications"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/3601/3601638.png" alt="Mobile App" className="w-10 h-10" />, 
    title: "Mobile App Development", 
    desc: "Custom mobile applications across Android, iOS, and cross-platform technologies.",
    bullets: [
      "iOS & Android native apps",
      "React Native development",
      "Flutter cross-platform apps",
      "Mobile app UI/UX design",
      "App store deployment"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/3063/3063822.png" alt="ERP" className="w-10 h-10" />, 
    title: "ERP Implementation", 
    desc: "Implementation and support services for enterprise ERP platforms including SAP and Oracle.",
    bullets: [
      "SAP S/4HANA implementation",
      "Oracle NetSuite deployment",
      "Microsoft Dynamics 365",
      "ERP customization & integration",
      "User training & support"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/3063/3063822.png" alt="Custom ERP" className="w-10 h-10" />, 
    title: "Customized ERP Development", 
    desc: "Tailor-made ERP systems built specifically for organizational workflows.",
    bullets: [
      "Bespoke ERP design",
      "Module development",
      "Workflow automation",
      "Third-party integrations",
      "Ongoing maintenance"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="Training" className="w-10 h-10" />, 
    title: "Corporate Training", 
    desc: "Professional training programs enhancing workforce capabilities across enterprise software.",
    bullets: [
      "End-user training programs",
      "Technical skill development",
      "Certification preparation",
      "Custom training modules",
      "Virtual & on-site sessions"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/2920/2920266.png" alt="Consultancy" className="w-10 h-10" />, 
    title: "Consultancy & IT Audit", 
    desc: "Technology consulting and system audits to identify performance gaps and risks.",
    bullets: [
      "IT infrastructure assessment",
      "Security vulnerability audit",
      "Compliance review",
      "Process optimization",
      "Digital transformation roadmap"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/2920/2920291.png" alt="Facility" className="w-10 h-10" />, 
    title: "Facility Management Services", 
    desc: "Efficient management of enterprise IT infrastructure ensuring reliability and uptime.",
    bullets: [
      "Data center management",
      "Network operations",
      "Server maintenance",
      "Disaster recovery planning",
      "24/7 monitoring services"
    ]
  },
];

const partners = [
  { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
  { name: "Oracle", logo: "https://logo.clearbit.com/oracle.com" },
  { name: "SAP", logo: "https://logo.clearbit.com/sap.com" },
  { name: "Salesforce", logo: "https://logo.clearbit.com/salesforce.com" },
  { name: "AWS", logo: "https://logo.clearbit.com/aws.amazon.com" },
  { name: "IBM", logo: "https://logo.clearbit.com/ibm.com" }
];

const industries = [
  "Corporate Enterprises",
  "Education & Universities",
  "Healthcare & Hospitals",
  "Financial Services",
  "Government & Public Sector",
  "Technology Startups"
];

const faqs: FAQItem[] = [
  {
    question: "What is the application development process at Mviz Technologies?",
    answer: "Our application development process follows a structured approach: requirements gathering and analysis, solution architecture design, UI/UX prototyping, agile development with regular iterations, quality assurance testing, deployment, and ongoing support. We work closely with clients throughout to ensure the final product meets business objectives and user expectations."
  },
  {
    question: "How do you handle legacy application migration?",
    answer: "We conduct comprehensive assessments of existing systems, identify dependencies and risks, develop migration strategies (rehost, refactor, rearchitect, or rebuild), and execute phased migrations with minimal downtime. Our approach ensures data integrity, business continuity, and optimized performance on modern platforms."
  },
  {
    question: "What ERP platforms do you specialize in?",
    answer: "We specialize in implementing and customizing major ERP platforms including SAP S/4HANA, Oracle NetSuite, Microsoft Dynamics, and Salesforce. Additionally, we develop custom ERP solutions tailored to unique organizational workflows when off-the-shelf solutions don't fit specific requirements."
  },
  {
    question: "What is included in your IT audit services?",
    answer: "Our IT audit services include infrastructure assessment, security vulnerability analysis, compliance review, performance benchmarking, process documentation, and detailed recommendations. We identify gaps, risks, and opportunities for optimization to help organizations improve their technology posture."
  },
  {
    question: "How do managed services benefit organizations?",
    answer: "Managed services allow organizations to offload IT operations to experts, reduce operational costs, improve system reliability, access specialized skills, and focus internal resources on core business activities. We provide 24/7 monitoring, proactive maintenance, rapid issue resolution, and regular performance reporting."
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

export const ApplicationConsultancy = () => {
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
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" 
            alt="Application & Consultancy" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter">Application & Consultancy</h1>
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
          <span className="text-primary font-bold text-xs md:text-base">Application & Consultancy</span>
        </nav>
      </div>

      {/* Overview Paragraph */}
      <div className="section-padding pt-1 md:pt-2">
        <div className="mb-8 md:mb-16">
          <p className="text-base md:text-2xl text-slate-700 leading-relaxed font-normal">
            Welcome to the Application & Consultancy Business Unit of Mviz Technologies. We understand the challenges organizations face when trying to achieve the desired outcomes from their applications. Often there is a significant gap between required solutions and available expertise in the market. Coordinating multiple vendors and agencies to deliver successful digital systems can be complex and costly. Our team bridges this gap by providing end-to-end consulting, development, and management services that deliver cost-effective, scalable, and reliable technology solutions tailored to each organization's needs.
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6 mb-12 md:mb-20">
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
            At Mviz Technologies, we believe in providing clear answers to help you make informed decisions about your application and consultancy needs.
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
            Contact us today to discuss how our Application & Consultancy solutions can transform your digital presence.
          </p>
          <Link to="/contact" className="inline-block bg-white text-primary font-black uppercase tracking-widest text-xs md:text-sm px-6 md:px-10 py-3 md:py-5 rounded-full hover:bg-white/90 transition-all hover:scale-105">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};