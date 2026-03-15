import { motion } from 'motion/react';
import { ChevronRight, ArrowUpRight, Calendar, Users, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: "LogiTrack AI",
    category: "Logistics & Supply Chain",
    image: "/assets/logitrack.png",
    desc: "An enterprise-grade AI-powered logistics platform that revolutionizes route optimization, predictive maintenance, and supply chain visibility through real-time data analytics and machine learning algorithms.",
    tech: ["Python", "TensorFlow", "React", "AWS", "IoT Sensors"],
    results: [
      "35% reduction in fuel costs across fleet operations",
      "99.9% system uptime with redundant architecture",
      "Real-time tracking for 10,000+ vehicles nationwide",
      "50% decrease in delivery delays through predictive routing"
    ],
    duration: "8 months",
    team: "12 engineers",
    client: "Fortune 500 Logistics Company",
    challenge: "Inefficient route planning and lack of real-time visibility causing delayed deliveries and increased fuel consumption.",
    solution: "Implemented AI-driven route optimization with IoT-enabled fleet monitoring and predictive analytics dashboard."
  },
  {
    title: "FinFlow Mobile",
    category: "FinTech & Banking",
    image: "/assets/finflow.png",
    desc: "A next-generation mobile banking platform built with military-grade security, offering seamless digital transactions, AI-powered financial insights, and biometric authentication for modern banking experiences.",
    tech: ["React Native", "Node.js", "PostgreSQL", "Azure", "Blockchain"],
    results: [
      "1M+ active users within first 6 months of launch",
      "4.9/5 App Store rating with 50,000+ reviews",
      "Zero security breaches since 2022 launch",
      "3x increase in mobile transaction volume"
    ],
    duration: "12 months",
    team: "18 engineers",
    client: "Leading National Bank",
    challenge: "Legacy mobile app with poor UX, security vulnerabilities, and lack of modern features leading to customer churn.",
    solution: "Complete platform rebuild with zero-trust architecture, biometric security, and AI-driven personalized banking insights."
  },
  {
    title: "HealthPulse Dashboard",
    category: "Healthcare Analytics",
    image: "/assets/healthdashboard.png",
    desc: "A comprehensive predictive healthcare analytics platform that monitors patient vitals in real-time, identifies health risks early, and enables proactive intervention through AI-powered diagnostic support.",
    tech: ["Next.js", "D3.js", "Python", "Google Cloud", "FHIR"],
    results: [
      "20% improvement in patient outcome predictions",
      "Automated reporting saved 15 hours per week per clinician",
      "100% HIPAA compliant with end-to-end encryption",
      "30% reduction in emergency admissions through early alerts"
    ],
    duration: "10 months",
    team: "15 engineers",
    client: "Multi-Hospital Healthcare Network",
    challenge: "Fragmented patient data across systems delaying critical care decisions and manual reporting consuming clinical time.",
    solution: "Unified analytics platform integrating EHR systems with real-time vitals monitoring and automated compliance reporting."
  },
  {
    title: "EcoShop Global",
    category: "E-commerce Platform",
    image: "/assets/ecoshop.png",
    desc: "A high-performance headless e-commerce platform designed for global scale, featuring multi-currency support, AI-powered recommendations, and sub-second page loads across 50+ countries.",
    tech: ["Next.js", "Shopify Plus", "GraphQL", "Vercel", "Stripe"],
    results: [
      "45% increase in conversion rate post-launch",
      "Sub-second page load times globally",
      "Seamless multi-currency support in 25 currencies",
      "60% reduction in cart abandonment rate"
    ],
    duration: "6 months",
    team: "10 engineers",
    client: "Global Sustainable Fashion Brand",
    challenge: "Slow legacy platform with poor mobile experience, limited global reach, and high cart abandonment affecting revenue.",
    solution: "Headless commerce architecture with edge deployment, AI personalization engine, and seamless global payment processing."
  }
];

const stats = [
  { value: "50+", label: "Projects Delivered", icon: Target },
  { value: "98%", label: "Client Satisfaction", icon: Users },
  { value: "15+", label: "Industries Served", icon: Zap },
  { value: "5+", label: "Years Experience", icon: Calendar }
];

export const Projects = () => {
  return (
    <div className="pb-20 relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] mb-8">
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 text-white">Case Study Projects</h1>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto">
              Discover how we've helped leading organizations transform their digital infrastructure and achieve measurable business results.
            </p>
          </div>
        </div>
      </div>

      <div className="section-padding relative z-10 pt-0">
        <div className="space-y-24 md:space-y-32">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
            >
              {/* Image Section */}
              <div className={`relative group ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative z-10">
                  <div className="aspect-[4/3] bg-slate-100 rounded-3xl overflow-hidden shadow-2xl relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  {/* Tech Stack Badges */}
                  <div className="absolute -bottom-4 -right-4 md:-right-8 z-20 flex flex-wrap gap-2 max-w-[280px] justify-end">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg text-[10px] font-black uppercase tracking-wider text-primary shadow-lg border border-slate-100">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className={`absolute -top-8 -left-8 w-48 h-48 bg-accent/10 rounded-full blur-3xl -z-10 ${idx % 2 === 1 ? 'lg:-right-8 lg:left-auto' : ''}`} />
              </div>
              
              {/* Content Section */}
              <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                {/* Category & Meta */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-black uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-slate-400 text-sm">|</span>
                  <span className="text-slate-500 text-sm font-medium flex items-center gap-1">
                    <Calendar size={14} /> {project.duration}
                  </span>
                  <span className="text-slate-400 text-sm">|</span>
                  <span className="text-slate-500 text-sm font-medium flex items-center gap-1">
                    <Users size={14} /> {project.team}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-4 tracking-tighter leading-tight group-hover:text-accent transition-colors">
                  {project.title}
                </h2>
                
                {/* Client */}
                <p className="text-slate-500 font-medium mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Client: {project.client}
                </p>

                {/* Description */}
                <p className="text-slate-600 mb-8 leading-relaxed text-lg font-light">
                  {project.desc}
                </p>

                {/* Challenge & Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-slate-50 rounded-xl p-5 border-l-4 border-accent">
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider mb-2">Challenge</h4>
                    <p className="text-sm text-slate-700 leading-relaxed">{project.challenge}</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-5 border-l-4 border-primary">
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider mb-2">Solution</h4>
                    <p className="text-sm text-slate-700 leading-relaxed">{project.solution}</p>
                  </div>
                </div>
                
                {/* Business Impact */}
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-slate-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl -mr-16 -mt-16" />
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                    <Zap size={14} className="text-accent" />
                    Key Results & Business Impact
                  </h4>
                  <ul className="space-y-3 relative z-10">
                    {project.results.map((r, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-medium leading-relaxed">
                        <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                          <ChevronRight size={12} className="text-accent" />
                        </div>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Link */}
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 mt-6 text-accent font-black text-sm uppercase tracking-wider hover:gap-3 transition-all"
                >
                  Discuss Similar Project <ArrowUpRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/90 rounded-3xl" />
          <div className="relative p-12 md:p-20 text-center text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -mr-48 -mt-48" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-tight text-white">
                Ready to Build Your <span className="text-accent">Next Success Story?</span>
              </h2>
              <p className="text-white/80 text-lg md:text-xl mb-8 font-light">
                Let's discuss how our expertise in AI, cloud, and digital transformation can help you achieve similar exceptional results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary bg-accent hover:bg-accent-dark text-white border-0">
                  Start Your Project
                </Link>
                <Link to="/services" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold transition-all backdrop-blur-sm">
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};