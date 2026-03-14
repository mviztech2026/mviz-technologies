import { motion } from 'motion/react';
import { ChevronRight, Layers, Cpu, Globe, Smartphone } from 'lucide-react';

const projects = [
  {
    title: "LogiTrack AI",
    category: "Logistics",
    image: "/src/assets/logitrack.png",
    desc: "An AI-powered logistics platform that optimizes route efficiency and predicts supply chain disruptions using real-time data.",
    tech: ["Python", "TensorFlow", "React", "AWS"],
    results: ["35% reduction in fuel costs", "99.9% uptime", "Real-time tracking for 10k+ vehicles"]
  },
  {
    title: "FinFlow Mobile",
    category: "FinTech",
    image: "/src/assets/finflow.png",
    desc: "A secure, high-performance mobile banking application designed for the next generation of digital-native users.",
    tech: ["React Native", "Node.js", "PostgreSQL", "Azure"],
    results: ["1M+ active users", "4.9/5 App Store rating", "Zero security breaches since launch"]
  },
  {
    title: "HealthPulse Dashboard",
    category: "Healthcare",
    image: "/src/assets/healthdashboard.png",
    desc: "A comprehensive data analytics dashboard for hospitals to monitor patient vitals and predict potential health risks.",
    tech: ["Next.js", "D3.js", "Python", "Google Cloud"],
    results: ["20% improvement in patient outcomes", "Automated reporting saved 15hrs/week", "HIPAA compliant architecture"]
  },
  {
    title: "EcoShop Global",
    category: "E-commerce",
    image: "/src/assets/ecoshop.png",
    desc: "A headless e-commerce platform built for a global sustainable fashion brand, focusing on speed and conversion.",
    tech: ["Next.js", "Shopify Plus", "GraphQL", "Vercel"],
    results: ["45% increase in conversion rate", "Sub-second page load times", "Seamless multi-currency support"]
  }
];

export const Projects = () => {
  return (
    <div className="pb-20 relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] mb-8">
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop&q=80&w=1200&h=800format&fit=crop" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter">Case Study Projects</h1>
        </div>
      </div>

      <div className="section-padding relative z-10">
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`relative group ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                {/* Image Composition */}
                <div className="relative z-10">
                  <div className="aspect-[4/3] bg-slate-100 rounded-[3rem] overflow-hidden shadow-2xl relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Floating Tech Badges */}
                  <div className="absolute -bottom-6 -right-6 md:-right-12 z-20 flex flex-wrap gap-2 max-w-[240px] justify-end">
                    {project.tech.slice(0, 3).map((t, i) => (
                      <span key={i} className="px-4 py-2 glass-card text-[10px] font-black uppercase tracking-widest text-primary shadow-xl">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className={`absolute -top-12 -left-12 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10 animate-pulse ${idx % 2 === 1 ? 'lg:-right-12 lg:left-auto' : ''}`} />
                <div className={`absolute -bottom-12 -right-12 w-48 h-48 bg-primary/10 rounded-full blur-2xl -z-10 animate-pulse ${idx % 2 === 1 ? 'lg:-left-12 lg:right-auto' : ''}`} style={{ animationDelay: '-2s' }} />
              </div>
              
              <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                  {project.category}
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-primary mb-10 tracking-tighter leading-none group-hover:text-accent transition-colors">
                  {project.title}
                </h2>
                <p className="text-slate-600 mb-12 leading-relaxed text-xl font-light">
                  {project.desc}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-10 glass-card border-white/40 relative overflow-hidden group/card hover:bg-white/80 transition-all duration-500">
                    <h4 className="text-[10px] font-black text-slate-400 mb-8 uppercase tracking-[0.3em] relative z-10">Business Impact</h4>
                    <ul className="space-y-5 relative z-10">
                      {project.results.map((r, i) => (
                        <li key={i} className="flex items-start gap-4 text-sm text-slate-700 font-bold leading-tight">
                          <ChevronRight size={16} className="text-accent shrink-0 mt-0.5" /> {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-48 relative">
          <div className="absolute inset-0 bg-accent/5 rounded-[4rem] -z-10 animate-pulse" />
          <div className="p-16 md:p-32 glass-card-dark bg-slate-950 text-center overflow-hidden relative">
            <div className="liquid-shape w-[400px] h-[400px] bg-accent/10 -top-48 -left-48 animate-morph" />
            <div className="relative z-10">
              <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none">
                Have a vision for your <span className="text-accent">next project?</span>
              </h2>
              <p className="text-slate-400 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light">
                Let's discuss how we can apply our expertise to help you achieve similar results.
              </p>
              <button className="btn-primary py-6 px-12 text-lg">Start a Conversation</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
