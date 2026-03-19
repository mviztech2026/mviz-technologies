import { motion } from 'motion/react';
import { ChevronRight, ArrowUpRight, Calendar, Users, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: "Raska Mon",
    category: "Mental Health Platform",
    image: "/assets/raskamon.png",
    liveUrl: "https://raskamon.com/",
    desc: "A comprehensive mental wellness platform connecting users with licensed therapists, providing personalized support and confidential care to help individuals take control of their mental health journey.",
    tech: ["React", "Node.js", "PostgreSQL", "WebRTC", "HIPAA Compliance"],
    results: [
      "Connected thousands of users with licensed mental health professionals",
      "Implemented secure video sessions with end-to-end encryption",
      "Created personalized therapy matching algorithm",
      "Achieved 95% user satisfaction rate with therapeutic outcomes"
    ],
    duration: "8 months",
    team: "12 engineers",
    client: "Raska Mon Mental Health",
    challenge: "Need for accessible, confidential mental health support connecting users with qualified therapists while ensuring privacy and personalized care.",
    solution: "Built secure teletherapy platform with therapist matching, encrypted video sessions, and personalized mental health tracking tools."
  },
  {
    title: "Aerth Mobility",
    category: "EV Service Platform",
    image: "/assets/aerthmobility.png",
    liveUrl: "https://aerthmobility.com/",
    desc: "India's first integrated EV service & skill platform providing hyperlocal service network development, advanced technical expertise, and comprehensive EV parts aggregation for 2W & 3W electric vehicles.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Cloud APIs"],
    results: [
      "Built comprehensive EV service booking platform",
      "Implemented technician tracking and management system",
      "Created parts inventory management solution",
      "Developed skill development and certification modules"
    ],
    duration: "9 months",
    team: "14 engineers",
    client: "Aerth Mobility Pvt Ltd",
    challenge: "Fragmented EV service infrastructure and lack of skilled technicians hindering India's electric mobility transition.",
    solution: "Developed integrated digital platform connecting service centers, technicians, parts suppliers, and customers to streamline EV ecosystem."
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
    <div className="pb-16 relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-[25vh] md:h-[35vh] mb-6 md:mb-8 flex items-center justify-center">
        <div className="text-center text-primary max-w-4xl px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4 md:mb-6 text-primary">Case Studies</h1>
          <p className="text-base md:text-lg lg:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Discover how we've helped leading organizations transform their digital infrastructure and achieve measurable business results.
          </p>
        </div>
      </div>

      <div className="section-padding relative z-10 -mt-8 md:-mt-20">
        <div className="space-y-24 md:space-y-32">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start p-8 border border-slate-200 rounded-2xl bg-white shadow-sm"
            >
              {/* Content Section - Mobile First */}
              <div className={`${idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
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
                {project.title === "Raska Mon" ? (
                  <img src="/assets/raska-logo.png" alt="Raska Mon" className="h-16 md:h-20 w-auto mb-4 object-contain" />
                ) : project.title === "Aerth Mobility" ? (
                  <img src="/assets/aerth-logo.png" alt="Aerth Mobility" className="h-16 md:h-20 w-auto mb-4 object-contain" />
                ) : project.title === "HealthPulse Dashboard" ? (
                  <img src="/assets/health-logo.png" alt="HealthPulse Dashboard" className="h-16 md:h-20 w-auto mb-4 object-contain" />
                ) : project.title === "EcoShop Global" ? (
                  <img src="/assets/ecoshop-logo.png" alt="EcoShop Global" className="h-16 md:h-20 w-auto mb-4 object-contain" />
                ) : (
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-4 tracking-tighter leading-tight group-hover:text-accent transition-colors">
                    {project.title}
                  </h2>
                )}
                
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
              </div>

              {/* Image Section - Desktop First */}
              <div className={`relative group ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative z-10 space-y-6">
                  <div className="aspect-video bg-slate-100 rounded-3xl overflow-hidden shadow-2xl relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 bg-white"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg text-[10px] font-black uppercase tracking-wider text-primary shadow-lg border border-slate-100">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Business Impact */}
                  <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-100 relative overflow-hidden">
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                      <Zap size={14} className="text-accent" />
                      Key Results & Business Impact
                    </h4>
                    <ul className="space-y-2">
                      {project.results.slice(0, 3).map((r, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium leading-relaxed">
                          <ChevronRight size={12} className="text-accent shrink-0 mt-0.5" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Link */}
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 text-accent font-black text-sm uppercase tracking-wider hover:gap-3 transition-all"
                  >
                    Discuss Similar Project <ArrowUpRight size={18} />
                  </Link>
                  
                  {/* View Live Site */}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 ml-4 text-primary font-black text-sm uppercase tracking-wider hover:text-accent transition-all"
                    >
                      View Live Site <ArrowUpRight size={18} />
                    </a>
                  )}
                </div>

                {/* Decorative Elements */}
                <div className={`absolute -top-8 -left-8 w-48 h-48 bg-accent/10 rounded-full blur-3xl -z-10 ${idx % 2 === 1 ? 'lg:-right-8 lg:left-auto' : ''}`} />
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
                <Link to="/services" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-black transition-all backdrop-blur-sm">
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