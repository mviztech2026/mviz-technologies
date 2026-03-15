import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="pb-24 relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] mb-20">
        <img src="https://img.icons8.com/fluency/96/phone.png" alt="Contact" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80 flex items-center justify-center">
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter">Contact Us</h1>
        </div>
      </div>

      <div className="section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                Get in Touch
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-primary mb-10 tracking-tighter leading-none">
                Let's build the <span className="text-accent">future</span> together.
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed font-light max-w-xl">
                Whether you're a startup with a vision or an enterprise looking to modernize, our team is ready to help you engineer your next big success.
              </p>
            </motion.div>

            <div className="space-y-10">
              <div className="flex gap-8 items-start group">
                <div className="w-16 h-16 shrink-0 glass-card flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-xl">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-slate-400 mb-2 uppercase tracking-[0.3em]">Email Us</h4>
                  <p className="text-2xl font-black text-primary group-hover:text-accent transition-colors tracking-tight">alliance@mvizindia.com</p>
                  <p className="text-slate-400 text-sm font-medium mt-1">Response within 24 hours</p>
                </div>
              </div>
              
              <div className="flex gap-8 items-start group">
                <div className="w-16 h-16 shrink-0 glass-card flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-xl">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-slate-400 mb-2 uppercase tracking-[0.3em]">Call Us</h4>
                  <p className="text-2xl font-black text-primary group-hover:text-accent transition-colors tracking-tight">+91 9960925523</p>
                  <p className="text-slate-400 text-sm font-medium mt-1">Mon - Fri, 9am - 6pm IST</p>
                </div>
              </div>

              <div className="flex gap-8 items-start group cursor-pointer" onClick={() => window.open('https://maps.app.goo.gl/knmrM2BNLio8o4eK7', '_blank')}>
                <div className="w-16 h-16 shrink-0 glass-card flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-xl">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-slate-400 mb-2 uppercase tracking-[0.3em]">Visit Us</h4>
                  <p className="text-2xl font-black text-primary group-hover:text-accent transition-colors tracking-tight leading-tight">
                    Plot No 15, Diamond City,<br />Bandhgora, Pinda Joda, Bokaro
                  </p>
                  <p className="text-slate-400 text-sm font-medium mt-1">Jharkhand 827013</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card p-10 md:p-16 border-white/40 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            
            <h3 className="text-3xl font-black text-primary mb-10 tracking-tight relative z-10">Send us a message</h3>
            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-white/50 border border-slate-200 focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 outline-none transition-all font-medium"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com"
                    className="w-full px-6 py-4 rounded-2xl bg-white/50 border border-slate-200 focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 outline-none transition-all font-medium"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Service Interest</label>
                <select className="w-full px-6 py-4 rounded-2xl bg-white/50 border border-slate-200 focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 outline-none transition-all font-medium appearance-none cursor-pointer">
                  <option>Web Development</option>
                  <option>Mobile App Development</option>
                  <option>AI & Machine Learning</option>
                  <option>Cloud Solutions</option>
                  <option>UI/UX Design</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Project Details</label>
                <textarea 
                  rows={5}
                  placeholder="Tell us about your project, goals, and timeline..."
                  className="w-full px-6 py-4 rounded-2xl bg-white/50 border border-slate-200 focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 outline-none transition-all font-medium resize-none"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full py-5 text-lg uppercase tracking-widest font-black">
                Send Message
              </button>
              
              <p className="text-center text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-8">
                By submitting this form, you agree to our <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a>.
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Map Placeholder */}
      <section className="mt-32 px-6 max-w-7xl mx-auto mb-24">
        <a href="https://maps.app.goo.gl/knmrM2BNLio8o4eK7" target="_blank" rel="noopener noreferrer" className="block w-full h-[500px] glass-card border-white/40 overflow-hidden relative shadow-2xl group cursor-pointer">
          <div className="absolute inset-0 bg-slate-100 flex items-center justify-center text-slate-400 flex-col gap-6 group-hover:bg-slate-50 transition-colors duration-500">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-accent shadow-xl animate-bounce">
              <MapPin size={48} />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-black text-primary tracking-tight mb-2">Bokaro, Jharkhand</h3>
              <p className="text-slate-500 font-medium">Plot No 15, Diamond City, Bandhgora</p>
            </div>
          </div>
          <div className="absolute bottom-8 right-8 glass-card px-6 py-3 text-[10px] font-black uppercase tracking-widest text-primary border-white/40">
            Click to open in Google Maps
          </div>
        </a>
      </section>
    </div>
  );
};
