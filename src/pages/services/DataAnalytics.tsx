import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const solutions = [
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/3135/3135766.png" alt="Analytics" className="w-10 h-10" />, 
    title: "Business Intelligence & Reporting", 
    desc: "Transform your data into actionable insights with our BI and reporting solutions.",
    bullets: [
      "Interactive dashboard development",
      "KPI tracking & monitoring",
      "Automated report generation",
      "Self-service analytics portals",
      "Real-time business metrics"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/2920/2920267.png" alt="Data Warehouse" className="w-10 h-10" />, 
    title: "Data Warehousing & ETL", 
    desc: "Build robust data infrastructure with our data warehousing and ETL services.",
    bullets: [
      "Cloud data warehouse setup",
      "ETL pipeline development",
      "Data lake implementation",
      "Data integration solutions",
      "Warehouse performance tuning"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/3659/3659898.png" alt="Predictive" className="w-10 h-10" />, 
    title: "Predictive Analytics & ML", 
    desc: "Leverage advanced analytics and ML algorithms to forecast trends and predict outcomes.",
    bullets: [
      "Predictive model development",
      "Customer churn prediction",
      "Demand forecasting systems",
      "Anomaly detection algorithms",
      "Recommendation engines"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/3063/3063822.png" alt="Big Data" className="w-10 h-10" />, 
    title: "Big Data Solutions", 
    desc: "Handle massive data volumes with our big data solutions and distributed computing.",
    bullets: [
      "Hadoop & Spark deployment",
      "Real-time data streaming",
      "Big data architecture design",
      "Data lakehouse solutions",
      "Scalable processing frameworks"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/10398/10398522.png" alt="Visualization" className="w-10 h-10" />, 
    title: "Data Visualization", 
    desc: "Create compelling visual stories from your data with interactive dashboards.",
    bullets: [
      "Tableau & Power BI solutions",
      "Custom chart development",
      "Real-time visualization",
      "Mobile-friendly dashboards",
      "Collaborative analytics"
    ]
  },
  { 
    icon: <img src="https://cdn-icons-png.flaticon.com/128/3063/3063198.png" alt="Governance" className="w-10 h-10" />, 
    title: "Data Governance & Quality", 
    desc: "Establish data governance frameworks that ensure data accuracy and compliance.",
    bullets: [
      "Data quality frameworks",
      "Master data management",
      "Data catalog implementation",
      "Compliance & privacy controls",
      "Data lineage tracking"
    ]
  },
];

const partners = [
  { name: "Tableau", logo: "https://logo.clearbit.com/tableau.com" },
  { name: "Power BI", logo: "https://logo.clearbit.com/powerbi.microsoft.com" },
  { name: "SAP", logo: "https://logo.clearbit.com/sap.com" },
  { name: "Oracle", logo: "https://logo.clearbit.com/oracle.com" },
  { name: "Snowflake", logo: "https://logo.clearbit.com/snowflake.com" },
  { name: "Databricks", logo: "https://logo.clearbit.com/databricks.com" }
];

const industries = [
  "Financial Services",
  "Retail & E-commerce",
  "Healthcare",
  "Manufacturing",
  "Telecommunications",
  "Government"
];

const faqs: FAQItem[] = [
  {
    question: "What is Business Intelligence and how can it help my organization?",
    answer: "Business Intelligence (BI) refers to technologies, applications, and practices that transform raw data into meaningful insights. It helps organizations make informed decisions by providing dashboards, reports, and visualizations. BI improves operational efficiency, identifies growth opportunities, and enables data-driven strategy across all departments."
  },
  {
    question: "How do you approach data warehousing projects?",
    answer: "Our data warehousing approach includes requirements analysis, architecture design, data modeling, ETL pipeline development, and implementation. We consider data volume, velocity, variety, and veracity to design scalable solutions that support both current needs and future growth. We also ensure data quality, security, and governance throughout the process."
  },
  {
    question: "What predictive analytics capabilities do you offer?",
    answer: "We offer predictive modeling, forecasting, customer segmentation, churn prediction, demand forecasting, and anomaly detection. Using machine learning algorithms and statistical techniques, we help organizations anticipate future outcomes, identify risks, and optimize business processes based on data-driven predictions."
  },
  {
    question: "How do you ensure data security and compliance in analytics solutions?",
    answer: "We implement role-based access controls, data encryption, audit trails, and compliance frameworks (GDPR, HIPAA, SOX) in all analytics solutions. Data governance policies ensure proper handling, classification, and protection of sensitive information while enabling authorized analytics access."
  },
  {
    question: "What industries benefit most from data analytics?",
    answer: "While all industries benefit, financial services, retail, healthcare, manufacturing, and telecommunications see significant ROI. These sectors leverage analytics for risk management, customer insights, operational optimization, supply chain management, and regulatory compliance."
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

export const DataAnalytics = () => {
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
            alt="Data Analytics & Business Intelligence" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter">Data Analytics & BI</h1>
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
          <span className="text-primary font-black text-xs md:text-base">Data Analytics & BI</span>
        </nav>
      </div>

      {/* Overview Paragraph */}
      <div className="section-padding pt-1 md:pt-2">
        <div className="mb-8 md:mb-16">
          <p className="text-base md:text-2xl text-slate-700 leading-relaxed font-normal">
            Unlock the power of your data with our comprehensive Data Analytics and Business Intelligence solutions. At Mviz Technologies, we help organizations transform raw data into actionable insights that drive strategic decision-making and operational excellence. From data warehousing and ETL processes to advanced analytics and machine learning, we provide end-to-end solutions that enable you to understand your business, predict trends, and optimize performance. Our team combines technical expertise with business acumen to deliver analytics solutions that create real competitive advantage.
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
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&q=60" 
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
            At Mviz Technologies, we believe in providing clear answers to help you make informed decisions about your data analytics needs.
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
            Contact us today to discuss how our Data Analytics & BI solutions can unlock insights from your data.
          </p>
          <Link to="/contact" className="inline-block bg-white text-primary font-black uppercase tracking-widest text-xs md:text-sm px-6 md:px-10 py-3 md:py-5 rounded-full hover:bg-white/90 transition-all hover:scale-105">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};
