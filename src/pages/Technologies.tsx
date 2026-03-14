import { motion } from 'motion/react';
import { Code, Smartphone, Cpu, Cloud, Palette, Database, Zap, Shield, CheckCircle } from 'lucide-react';

const techStack = [
  {
    category: "Frontend",
    icon: <Code />,
    techs: [
      { name: "React", level: "Expert", desc: "Building dynamic and responsive user interfaces." },
      { name: "Next.js", level: "Expert", desc: "Server-side rendering and static site generation." },
      { name: "Vue.js", level: "Advanced", desc: "Progressive JavaScript framework for modern apps." },
      { name: "TypeScript", level: "Expert", desc: "Type-safe development for scalable codebases." }
    ]
  },
  {
    category: "Backend",
    icon: <Database />,
    techs: [
      { name: "Node.js", level: "Expert", desc: "High-performance server-side JavaScript." },
      { name: "Python", level: "Expert", desc: "Versatile language for AI, data, and web." },
      { name: "Go", level: "Advanced", desc: "Efficient and concurrent systems programming." },
      { name: "Java", level: "Advanced", desc: "Robust enterprise-grade application development." }
    ]
  },
  {
    category: "Mobile",
    icon: <Smartphone />,
    techs: [
      { name: "React Native", level: "Expert", desc: "Cross-platform mobile apps with native feel." },
      { name: "Flutter", level: "Expert", desc: "Fast UI development for multiple platforms." },
      { name: "Swift", level: "Expert", desc: "Native iOS development for Apple ecosystem." },
      { name: "Kotlin", level: "Expert", desc: "Modern native Android development." }
    ]
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud />,
    techs: [
      { name: "AWS", level: "Expert", desc: "Comprehensive cloud infrastructure services." },
      { name: "Google Cloud", level: "Expert", desc: "Data analytics and machine learning focus." },
      { name: "Docker", level: "Expert", desc: "Containerization for consistent environments." },
      { name: "Kubernetes", level: "Advanced", desc: "Orchestration for scalable microservices." }
    ]
  },
  {
    category: "AI & Data",
    icon: <Cpu />,
    techs: [
      { name: "TensorFlow", level: "Expert", desc: "End-to-end open source machine learning platform." },
      { name: "PyTorch", level: "Expert", desc: "Flexible deep learning research and production." },
      { name: "OpenCV", level: "Advanced", desc: "Real-time computer vision library." },
      { name: "PostgreSQL", level: "Expert", desc: "Advanced relational database management." }
    ]
  }
];

export const Technologies = () => {
  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="liquid-shape w-[800px] h-[800px] bg-accent/5 -top-96 -right-96 animate-morph" />
      <div className="liquid-shape w-[600px] h-[600px] bg-primary/5 -bottom-48 -left-48 animate-morph" style={{ animationDelay: '-5s' }} />

      <div className="section-padding relative z-10">
        <div className="max-w-4xl mb-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              Our Capabilities
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-primary mb-10 tracking-tighter leading-none">
              Our <span className="text-accent">Tech Stack</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light max-w-2xl">
              We stay at the forefront of innovation, selecting the most robust and scalable technologies to build future-proof digital products.
            </p>
          </motion.div>
        </div>

        <div className="space-y-32 md:space-y-48">
          {techStack.map((group, gIdx) => (
            <div key={gIdx} className="relative">
              <div className="flex items-center gap-8 mb-16">
                <div className="w-20 h-20 glass-card flex items-center justify-center text-accent shadow-xl">
                  {group.icon}
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tighter leading-none">{group.category}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {group.techs.map((tech, tIdx) => (
                  <motion.div
                    key={tIdx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: tIdx * 0.05 }}
                    className="p-10 glass-card border-white/40 hover:bg-white/80 transition-all duration-500 group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full -mr-12 -mt-12 blur-2xl group-hover:bg-accent/10 transition-all" />
                    
                    <div className="flex justify-between items-start mb-8 relative z-10">
                      <h3 className="text-2xl font-black text-primary group-hover:text-accent transition-colors tracking-tight">{tech.name}</h3>
                      <span className="px-3 py-1 bg-accent/10 text-accent text-[9px] font-black uppercase rounded-full tracking-widest">
                        {tech.level}
                      </span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium relative z-10">{tech.desc}</p>
                    
                    <div className="mt-8 pt-8 border-t border-slate-100 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-accent transition-colors relative z-10">
                      <CheckCircle size={14} className="text-accent" />
                      Verified Expertise
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Partners */}
        <div className="mt-48 pt-24 border-t border-slate-200 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-16">Certified Partners & Ecosystem</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-32 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            <span className="text-2xl md:text-4xl font-black tracking-tighter">AWS Partner</span>
            <span className="text-2xl md:text-4xl font-black tracking-tighter">Google Cloud</span>
            <span className="text-2xl md:text-4xl font-black tracking-tighter">Microsoft Azure</span>
            <span className="text-2xl md:text-4xl font-black tracking-tighter">Stripe</span>
            <span className="text-2xl md:text-4xl font-black tracking-tighter">Shopify Plus</span>
          </div>
        </div>
      </div>
    </div>
  );
};
