import { motion } from 'motion/react';

export const About = () => {
  return (
    <div className="pb-16 relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] mb-8">
        <img src="https://img.icons8.com/fluency/96/organization.png" alt="About" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80 flex items-center justify-center">
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter">About Us</h1>
        </div>
      </div>
      
      <div className="section-padding relative z-10">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              Our Story
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-primary mb-10 tracking-tighter leading-none">
              Engineering the <span className="text-accent">Digital Future</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed font-light">
              Founded in Pune, India, MVIZ Technologies was born from a simple vision: to bridge the gap between complex technology and business success.
            </p>
            <p className="text-slate-600 mb-12 leading-relaxed font-light text-lg">
              We are a team of engineers, designers, and strategists who believe that technology, when applied intelligently, can solve the world's most pressing challenges. We don't just build software; we engineer competitive advantages.
            </p>
            <div className="grid grid-cols-2 gap-12 pt-12 border-t border-slate-200">
              <div className="flex items-center gap-4">
                <img src="https://img.icons8.com/fluency/96/calendar.png" alt="Founded" className="w-12 h-12" />
                <div>
                  <p className="text-5xl font-black text-primary mb-1 tracking-tighter">2025</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-[0.4em] font-black">Founded</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src="https://img.icons8.com/fluency/96/project.png" alt="Projects" className="w-12 h-12" />
                <div>
                  <p className="text-5xl font-black text-primary mb-1 tracking-tighter">18+</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-[0.4em] font-black">Projects Done</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="relative z-10">
              {/* Icon Grid instead of Images */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-lg">
                  <img src="https://img.icons8.com/fluency/96/company.png" alt="Company" className="w-20 h-20 mb-4" />
                  <p className="text-accent font-black text-lg">Innovation First</p>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-lg">
                  <img src="https://img.icons8.com/fluency/96/conference-call.png" alt="Team" className="w-20 h-20 mb-4" />
                  <p className="text-primary font-black text-lg">Expert Team</p>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-lg">
                  <img src="https://cdn-icons-png.flaticon.com/128/2758/2758724.png" alt="Global" className="w-20 h-20 mb-4" />
                  <p className="text-primary font-black text-lg">Global Reach</p>
                </div>
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-lg">
                  <img src="https://img.icons8.com/fluency/96/rocket.png" alt="Growth" className="w-20 h-20 mb-4" />
                  <p className="text-accent font-black text-lg">Rapid Growth</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission & Values */}
        <section className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              Our DNA
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-primary mb-8 tracking-tighter">Our Core Values</h2>
            <p className="text-xl text-slate-600 font-light leading-relaxed">These principles guide every decision we make and every line of code we write.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: "https://img.icons8.com/fluency/96/goal.png", title: "Precision Engineering", desc: "We obsess over the details, ensuring every product we deliver is robust, scalable, and performant." },
              { icon: "https://img.icons8.com/fluency/96/groups.png", title: "Human-Centric Design", desc: "Technology should serve people. We prioritize user experience and accessibility in everything we build." },
              { icon: "https://img.icons8.com/fluency/96/lightning-bolt.png", title: "Continuous Innovation", desc: "We stay ahead of the curve, constantly exploring new technologies to give our clients an edge." }
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-12 text-center group border-white/40 hover:border-accent/50 transition-all duration-500"
              >
                <div className="w-24 h-24 bg-accent/5 rounded-[2rem] flex items-center justify-center mx-auto mb-10 group-hover:bg-accent group-hover:text-white transition-all duration-500 group-hover:rotate-12 shadow-xl">
                  <img src={value.icon} alt={value.title} className="w-14 h-14" />
                </div>
                <h4 className="text-3xl font-black text-primary mb-6 tracking-tight">{value.title}</h4>
                <p className="text-slate-600 text-base leading-relaxed font-light">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Leadership */}
        <section className="mb-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              The Team
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-primary mb-8 tracking-tighter">Our Leadership</h2>
            <p className="text-xl text-slate-600 font-light">The visionaries behind MVIZ Technologies.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { name: "Name 1", role: "CEO & Founder", img: "https://img.icons8.com/fluency/400/user-male.png" },
              { name: "Name 2", role: "CTO", img: "https://img.icons8.com/fluency/400/user-female.png" },
              { name: "Name 3", role: "Head of Design", img: "https://img.icons8.com/fluency/400/user-male.png" },
              { name: "Name 4", role: "Head of Operations", img: "https://img.icons8.com/fluency/400/user-female.png" }
            ].map((member, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group text-center"
              >
                <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden mb-8 bg-slate-100 shadow-2xl flex items-center justify-center">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-40 h-40 object-contain opacity-60 group-hover:opacity-80 transition-opacity duration-500" 
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-3xl font-black text-primary tracking-tight mb-2">{member.name}</h4>
                <p className="text-accent font-black text-[10px] uppercase tracking-[0.4em]">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
