import { motion } from 'motion/react';
import { Heart, Landmark, ShoppingCart, Truck, GraduationCap, Building2, Cloud, Zap } from 'lucide-react';

const industries = [
  {
    icon: <Heart />,
    title: "Healthcare",
    desc: "Building HIPAA-compliant platforms, patient portals, and data analytics tools for modern healthcare providers.",
    color: "bg-red-50",
    textColor: "text-red-600"
  },
  {
    icon: <Landmark />,
    title: "FinTech",
    desc: "Engineering secure banking apps, payment gateways, and automated financial reporting systems.",
    color: "bg-blue-50",
    textColor: "text-blue-600"
  },
  {
    icon: <ShoppingCart />,
    title: "E-commerce",
    desc: "Scaling retail brands with headless commerce architectures and high-conversion shopping experiences.",
    color: "bg-orange-50",
    textColor: "text-orange-600"
  },
  {
    icon: <Truck />,
    title: "Logistics",
    desc: "Optimizing supply chains with AI-powered route planning and real-time fleet management systems.",
    color: "bg-emerald-50",
    textColor: "text-emerald-600"
  },
  {
    icon: <GraduationCap />,
    title: "Education",
    desc: "Developing interactive LMS platforms and collaborative tools for the future of learning.",
    color: "bg-purple-50",
    textColor: "text-purple-600"
  },
  {
    icon: <Building2 />,
    title: "Government",
    desc: "Modernizing public services with secure, accessible, and efficient digital infrastructure.",
    color: "bg-slate-100",
    textColor: "text-slate-600"
  },
  {
    icon: <Cloud />,
    title: "SaaS Platforms",
    desc: "Helping software companies build, scale, and maintain multi-tenant cloud applications.",
    color: "bg-sky-50",
    textColor: "text-sky-600"
  }
];

export const Industries = () => {
  return (
    <div className="pt-24 pb-20 overflow-hidden">
      <div className="section-padding">
        <div className="max-w-3xl mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-6">
              Our Domain Expertise
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-8 tracking-tight">Industries <span className="text-accent">We Serve</span></h1>
            <p className="text-xl text-slate-600 leading-relaxed font-light">
              We bring deep domain expertise to every project, understanding the unique challenges and opportunities within your specific industry.
            </p>
          </motion.div>
          
          {/* Decorative Blob */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="p-12 rounded-[3.5rem] border border-slate-100 bg-white shadow-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-accent/10 transition-all" />
              
              <div className={`w-16 h-16 ${industry.color} ${industry.textColor} rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500`}>
                {industry.icon}
              </div>
              <h3 className="text-3xl font-bold text-primary mb-6">{industry.title}</h3>
              <p className="text-slate-600 leading-relaxed text-lg mb-10 font-light">{industry.desc}</p>
              <div className="flex items-center gap-3 text-accent font-bold text-xs uppercase tracking-[0.2em]">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" /> Domain Experts
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 p-12 md:p-20 bg-primary text-white rounded-[4rem] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full -mr-48 -mt-48 blur-[100px]" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Tailored Solutions for Every Sector</h2>
            <p className="text-slate-400 mb-10 text-lg leading-relaxed">
              We don't believe in one-size-fits-all. Our approach involves deep research into your industry's regulatory landscape, user behaviors, and competitive trends.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Regulatory Compliance",
                "Industry Security Standards",
                "Specialized Integrations",
                "User Behavior Analysis"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/90 font-medium">
                  <Zap size={18} className="text-accent" /> {item}
                </div>
              ))}
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video bg-white/5 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl transform rotate-2">
              <img 
                src="https://picsum.photos/seed/industry/1200/800" 
                alt="Industry Expertise" 
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Blob */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/30 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
