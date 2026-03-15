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
    icon: <img src="https://cdn-icons-png.flaticon.com/128/10398/10398522.png" alt="Plant Automation" className="w-10 h-10" />, 
    title: "Plant & Process Automation", 
    desc: "Implement advanced automation systems to streamline industrial processes and reduce manual intervention.",
    bullets: [
      "PLC & SCADA system integration",
      "DCS control architecture design",
      "Batch process automation",
      "Real-time production monitoring",
      "MES integration for smart factories"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/10398/10398522.png" alt="AI IoT" className="w-10 h-10" />, 
    title: "AI & IoT Solutions", 
    desc: "Leverage AI-driven analytics and IoT connected devices to enable predictive maintenance and real-time insights.",
    bullets: [
      "Industrial IoT sensor deployment",
      "Machine learning model development",
      "Edge computing architecture",
      "Digital twin implementation",
      "Cloud-based analytics dashboards"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/10398/10398522.png" alt="Sensors" className="w-10 h-10" />, 
    title: "Sensors & Controllers", 
    desc: "Deploy intelligent sensors and industrial controllers for real-time data capture and environmental monitoring.",
    bullets: [
      "Temperature & pressure sensors",
      "Flow & level measurement systems",
      "Vibration analysis sensors",
      "Smart motor controllers",
      "Wireless sensor networks"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/10398/10398522.png" alt="PLC" className="w-10 h-10" />, 
    title: "PLC Systems", 
    desc: "Industrial-grade PLC systems designed to automate machinery and deliver precise operational control.",
    bullets: [
      "Siemens S7 & TIA Portal programming",
      "Allen-Bradley ControlLogix systems",
      "Schneider Modicon integration",
      "Safety PLC implementation",
      "Legacy PLC modernization"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/10398/10398522.png" alt="AI ML" className="w-10 h-10" />, 
    title: "AI & Machine Learning Software", 
    desc: "Utilize advanced AI and ML platforms to analyze industrial data and enable intelligent automation.",
    bullets: [
      "Predictive maintenance algorithms",
      "Quality defect detection models",
      "Production optimization AI",
      "Energy consumption forecasting",
      "Anomaly detection systems"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/10398/10398522.png" alt="Robotics" className="w-10 h-10" />, 
    title: "Industrial Robotics", 
    desc: "Deploy collaborative and industrial robots to automate repetitive tasks and improve precision manufacturing.",
    bullets: [
      "Cobot implementation & programming",
      "Pick & place automation",
      "Welding robot integration",
      "AGV & AMR deployment",
      "Vision-guided robotics systems"
    ]
  },
];

const partners = [
  { name: "Siemens", logo: "https://logo.clearbit.com/siemens.com" },
  { name: "Schneider Electric", logo: "https://logo.clearbit.com/schneider-electric.com" },
  { name: "Honeywell", logo: "https://logo.clearbit.com/honeywell.com" },
  { name: "Rockwell Automation", logo: "https://logo.clearbit.com/rockwellautomation.com" },
  { name: "ABB", logo: "https://logo.clearbit.com/abb.com" },
  { name: "Mitsubishi Electric", logo: "https://logo.clearbit.com/mitsubishielectric.com" }
];

const industries = [
  "Manufacturing & Smart Factories",
  "Energy & Utilities",
  "Smart Cities & Infrastructure",
  "Agriculture & AgriTech",
  "Logistics & Supply Chain",
  "Industrial Automation"
];

const faqs: FAQItem[] = [
  {
    question: "How does AI improve industrial automation?",
    answer: "AI enhances industrial automation by enabling predictive maintenance, optimizing production schedules, detecting anomalies in real-time, and making intelligent decisions without human intervention. Machine learning algorithms analyze historical data to predict equipment failures, reduce downtime, and improve overall equipment effectiveness (OEE)."
  },
  {
    question: "What are the benefits of IoT in manufacturing?",
    answer: "IoT in manufacturing provides real-time visibility into operations, enables remote monitoring of equipment, facilitates predictive maintenance, improves supply chain transparency, enhances worker safety, and supports data-driven decision-making. Connected sensors collect data on temperature, vibration, energy consumption, and production metrics."
  },
  {
    question: "How do PLC systems control industrial processes?",
    answer: "Programmable Logic Controllers (PLCs) are industrial computers designed to automate electromechanical processes. They read inputs from sensors, execute programmed logic based on those inputs, and control outputs to machinery. PLCs are rugged, reliable, and capable of operating in harsh industrial environments with real-time response requirements."
  },
  {
    question: "What industries benefit most from AI and IoT automation?",
    answer: "Manufacturing, energy & utilities, smart cities, agriculture, and logistics sectors benefit most. These industries see improvements in operational efficiency, reduced downtime, better resource management, enhanced safety, and significant cost savings through intelligent automation and data-driven insights."
  },
  {
    question: "How can sensors and controllers optimize plant performance?",
    answer: "Intelligent sensors continuously monitor temperature, pressure, flow, vibration, and other critical parameters. Controllers process this data to adjust operations in real-time, optimize energy usage, prevent equipment failures, maintain product quality, and ensure safety compliance while maximizing throughput."
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

export const AiIoTAutomation = () => {
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
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80" 
            alt="AI, IoT & Automation" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter">AI, IoT & Automation</h1>
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
          <span className="text-primary font-bold text-xs md:text-base">AI, IoT & Automation</span>
        </nav>
      </div>

      {/* Overview Paragraph */}
      <div className="section-padding pt-1 md:pt-2">
        <div className="mb-8 md:mb-16">
          <p className="text-base md:text-2xl text-slate-700 leading-relaxed font-normal">
            Welcome to the AI, IoT & Automation Business Unit of Mviz Technologies. We are dedicated to meeting the needs of organizations seeking to implement modern technologies in Artificial Intelligence (AI), Internet of Things (IoT), and industrial automation. Our focus is on leveraging intelligent systems, sensors, controllers, and machine learning technologies to enhance plant operations, process monitoring, and operational efficiency. By combining AI, IoT connectivity, and automation, we help organizations achieve real-time visibility, predictive maintenance, intelligent decision-making, and optimized operational performance.
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
            At Mviz Technologies, we believe in providing clear answers to help you make informed decisions about your AI, IoT & automation needs.
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
            Contact us today to discuss how our AI, IoT & Automation solutions can transform your operations.
          </p>
          <Link to="/contact" className="inline-block bg-white text-primary font-black uppercase tracking-widest text-xs md:text-sm px-6 md:px-10 py-3 md:py-5 rounded-full hover:bg-white/90 transition-all hover:scale-105">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};