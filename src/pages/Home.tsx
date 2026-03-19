import { motion, useMotionValue, useSpring } from 'motion/react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  Code,
  Cpu,
  Smartphone,
  Cloud,
  Palette,
  Settings,
  Zap,
  ArrowRight,
  ArrowUpRight,
  Search,
  Layout as LayoutIcon,
  Layers,
  Rocket,
  Target,
  Users,
  BarChart3,
  Database,
  Server,
  Network,
  Monitor,
  Shield,
  CheckCircle2,
  Printer,
  Wrench
} from 'lucide-react';


const industries = [
  { name: "FinTech", icon: "https://img.icons8.com/color/96/bank-card-back.png" },
  { name: "Healthcare", icon: "https://img.icons8.com/color/96/hospital.png" },
  { name: "E-commerce", icon: "https://img.icons8.com/color/96/shopping-cart.png" },
  { name: "Logistics", icon: "https://img.icons8.com/color/96/delivery.png" },
  { name: "Education", icon: "https://img.icons8.com/color/96/graduation-cap.png" },
  { name: "SaaS", icon: "https://img.icons8.com/color/96/cloud-storage.png" },
];

const processSteps = [
  { 
    title: "Discover", 
    subtitle: "Understanding Your Vision",
    desc: "We dive deep into your business goals, user needs, and market landscape. Through comprehensive research, stakeholder interviews, and competitive analysis, we uncover insights that drive strategic decisions.",
    details: ["Stakeholder workshops", "Market research", "User persona development", "Requirement gathering"],
    icon: <img src="https://cdn-icons-png.flaticon.com/128/19013/19013955.png" alt="Discover" className="w-10 h-10" /> 
  },
  { 
    title: "Design", 
    subtitle: "Crafting Solutions",
    desc: "Our design team creates intuitive interfaces and robust architectures that align with your brand. We focus on user experience, visual appeal, and scalable design systems.",
    details: ["UX/UI design", "Wireframing & prototyping", "Design systems", "Architecture planning"],
    icon: <img src="https://cdn-icons-png.flaticon.com/128/14447/14447796.png" alt="Design" className="w-10 h-10" /> 
  },
  { 
    title: "Build", 
    subtitle: "Engineering Excellence",
    desc: "Our engineers bring designs to life using agile methodologies and clean, scalable code. We leverage modern technologies and best practices to build robust solutions.",
    details: ["Agile development", "Clean code practices", "CI/CD pipelines", "Quality assurance"],
    icon: <img src="https://cdn-icons-png.flaticon.com/128/15586/15586091.png" alt="Build" className="w-10 h-10" /> 
  },
  { 
    title: "Launch", 
    subtitle: "Go-Live Success",
    desc: "We ensure seamless deployment with rigorous testing and quality assurance. Our launch process minimizes risks and ensures your solution is production-ready.",
    details: ["Deployment strategy", "Performance testing", "Security audits", "Go-live support"],
    icon: <img src="https://cdn-icons-png.flaticon.com/128/14732/14732139.png" alt="Launch" className="w-10 h-10" /> 
  },
  { 
    title: "Scale", 
    subtitle: "Continuous Growth",
    desc: "Post-launch, we help you optimize performance, add features, and scale infrastructure. Our ongoing support ensures your digital products evolve with your business.",
    details: ["Performance optimization", "Feature enhancements", "Infrastructure scaling", "24/7 support"],
    icon: <img src="https://cdn-icons-png.flaticon.com/128/12417/12417266.png" alt="Scale" className="w-10 h-10" /> 
  },
];

const stats = [
  { label: "Projects Delivered", value: "18+", icon: "https://cdn-icons-png.flaticon.com/128/3234/3234972.png" },
  { label: "Happy Clients", value: "9+", icon: "https://cdn-icons-png.flaticon.com/128/9436/9436966.png" },
  { label: "Industries Served", value: "6", icon: "https://cdn-icons-png.flaticon.com/128/12361/12361537.png" },
  { label: "Engineers", value: "8", icon: "https://cdn-icons-png.flaticon.com/128/6010/6010054.png" },
];


const solutionIcons = [
  { title: "Enterprise Products", icon: <img src="https://cdn-icons-png.flaticon.com/128/15713/15713237.png" alt="Enterprise" className="w-12 h-12" /> },
  { title: "System Integration", icon: <img src="https://cdn-icons-png.flaticon.com/128/19034/19034747.png" alt="System Integration" className="w-12 h-12" /> },
  { title: "Application & Consultancy", icon: <img src="https://cdn-icons-png.flaticon.com/128/15579/15579160.png" alt="Application" className="w-12 h-12" /> },
  { title: "Cloud Solutions", icon: <img src="https://cdn-icons-png.flaticon.com/128/4149/4149691.png" alt="Cloud" className="w-12 h-12" /> },
  { title: "AI, IoT & Automation", icon: <img src="https://cdn-icons-png.flaticon.com/128/10398/10398522.png" alt="AI IoT" className="w-12 h-12" /> },

  { title: "DevOps & Automation", icon: <img src="https://cdn-icons-png.flaticon.com/128/8759/8759173.png" alt="DevOps" className="w-12 h-12" /> },
  { title: "Data Analytics & BI", icon: <img src="https://cdn-icons-png.flaticon.com/128/17904/17904741.png" alt="Data Analytics" className="w-12 h-12" /> },
  { title: "Managed IT Services", icon: <img src="https://cdn-icons-png.flaticon.com/128/18643/18643269.png" alt="Managed IT" className="w-12 h-12" /> },
  { title: "IT Infrastructure Consulting", icon: <img src="https://cdn-icons-png.flaticon.com/128/19014/19014236.png" alt="IT Infrastructure" className="w-12 h-12" /> },
  { title: "Cyber Security", icon: <img src="https://cdn-icons-png.flaticon.com/128/8722/8722568.png" alt="Cyber Security" className="w-12 h-12" /> },

  { title: "ELV & IBMS", icon: <img src="https://cdn-icons-png.flaticon.com/128/15902/15902549.png" alt="ELV IBMS" className="w-12 h-12" /> },
  { title: "OEM Licenses", icon: <img src="https://cdn-icons-png.flaticon.com/128/10690/10690664.png" alt="OEM" className="w-12 h-12" /> },
  { title: "PPS (PC, Print & Supplies)", icon: <img src="https://cdn-icons-png.flaticon.com/128/9820/9820042.png" alt="PPS" className="w-12 h-12" /> },
  { title: "Maintenance & Support", icon: <img src="https://cdn-icons-png.flaticon.com/128/15633/15633753.png" alt="Maintenance" className="w-12 h-12" /> },
  { title: "Contact us for more", icon: <img src="https://cdn-icons-png.flaticon.com/128/3095/3095583.png" alt="Contact" className="w-10 h-10" />, link: "/contact" }
];


export const Home = () => {

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };

  const blobX = useSpring(mouseX, springConfig);
  const blobY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);


  return (
    <div className="overflow-x-hidden">

      {/* HERO SECTION */}

      <section className="relative h-[calc(100vh-80px)] flex items-center overflow-hidden bg-slate-900">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover blur-[2px] scale-110"
        >
          <source src="/assets/homepage.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40" />

        <div className="section-padding w-full text-center relative z-10 -mt-10">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[0.95] mb-6"
          >
            Engineering <span className="italic font-serif font-normal">Future-Ready</span> Enterprise Solutions
          </motion.h1>

          <p className="text-base md:text-lg text-slate-200 mb-8 max-w-xl mx-auto">
            High-performance digital infrastructure, intelligent automation and enterprise software solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact" className="btn-primary px-8 py-4 text-base rounded-full border-2 border-accent/20 hover:border-accent/40 transition-all">
              Start a Project <ArrowRight className="inline ml-2" />
            </Link>
            <Link to="/projects" className="px-8 py-4 text-base rounded-full border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all">
              See our Projects <ArrowRight className="inline ml-2" />
            </Link>
          </div>

        </div>
      </section>



      {/* SERVICES OVERVIEW */}

      <section className="py-6 md:py-8 bg-slate-50 relative overflow-hidden">

        <div className="section-padding">

          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-4">
              Expertise
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-primary leading-tight">
              Solutions that drive <br />
              <span className="text-accent">digital transformation.</span>
            </h2>
          </div>


          {/* SERVICES GRID */}

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">

            {/* Show first 7 services on mobile, all on desktop */}
            {solutionIcons.slice(0, 7).map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                {service.link ? (
                  <Link to={service.link} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 group h-full">
                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-accent/10 group-hover:text-accent transition-all">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-black text-primary">{service.title}</h3>
                  </Link>
                ) : (
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 group h-full">
                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-accent/10 group-hover:text-accent transition-all">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-black text-primary">{service.title}</h3>
                  </div>
                )}
              </motion.div>
            ))}

            {/* View All Services - Mobile only (8th block) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 7 * 0.05 }}
              className="md:hidden"
            >
              <Link to="/services" className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 group h-full">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-accent/10 group-hover:text-accent transition-all">
                  <ArrowRight size={32} />
                </div>
                <h3 className="text-lg font-black text-primary">View All Services</h3>
              </Link>
            </motion.div>

            {/* Show remaining services on desktop only */}
            {solutionIcons.slice(7).map((service, idx) => (
              <motion.div
                key={idx + 7}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx + 7) * 0.05 }}
                className="hidden md:block"
              >
                {service.link ? (
                  <Link to={service.link} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 group h-full">
                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-accent/10 group-hover:text-accent transition-all">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-black text-primary">{service.title}</h3>
                  </Link>
                ) : (
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 group h-full">
                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-accent/10 group-hover:text-accent transition-all">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-black text-primary">{service.title}</h3>
                  </div>
                )}
              </motion.div>
            ))}

          </div>

        </div>
      </section>



      {/* STATS */}

      <section className="py-10 md:py-16 bg-primary text-white">

        <div className="section-padding grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          {stats.map((stat, idx) => (

            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <img src={stat.icon} alt={stat.label} className="w-16 h-16 mb-4" />
              <div className="text-5xl font-black">{stat.value}</div>
              <div className="text-sm uppercase tracking-widest mt-2 font-black">{stat.label}</div>

            </motion.div>

          ))}

        </div>
      </section>



      {/* PROCESS */}

      <section className="py-10 md:py-16 bg-gradient-to-b from-white to-slate-50">

        <div className="section-padding">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-6">
              Our Process
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-primary mb-4">What does mviz do?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From concept to scale, we guide you through every step of digital transformation
            </p>
          </div>

          <div className="space-y-8">
            {/* First row - 3 cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {processSteps.slice(0, 3).map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-xl hover:border-accent/30 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center group-hover:from-accent/30 group-hover:to-accent/10 transition-all">
                      {step.icon}
                    </div>
                    <div>
                      <span className="text-xs font-black text-accent uppercase tracking-widest">Step {idx + 1}</span>
                      <h4 className="text-2xl font-black text-primary">{step.title}</h4>
                    </div>
                  </div>

                  <h5 className="text-lg font-black text-slate-700 mb-3">{step.subtitle}</h5>
                  <p className="text-slate-600 mb-6 leading-relaxed">{step.desc}</p>

                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-slate-500">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Second row - 2 cards centered */}
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {processSteps.slice(3, 5).map((step, idx) => (
                <motion.div
                  key={idx + 3}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx + 3) * 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-xl hover:border-accent/30 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center group-hover:from-accent/30 group-hover:to-accent/10 transition-all">
                      {step.icon}
                    </div>
                    <div>
                      <span className="text-xs font-black text-accent uppercase tracking-widest">Step {idx + 4}</span>
                      <h4 className="text-2xl font-black text-primary">{step.title}</h4>
                    </div>
                  </div>

                  <h5 className="text-lg font-black text-slate-700 mb-3">{step.subtitle}</h5>
                  <p className="text-slate-600 mb-6 leading-relaxed">{step.desc}</p>

                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-slate-500">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>



      {/* CTA */}

      <section className="py-12 md:py-20 text-center">
        <div className="section-padding">
          <h2 className="text-4xl md:text-6xl font-black text-primary mb-6 tracking-tight">
            Waiting for your next project to be done?
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto">
            Why don't you try one of the services with flawless work
          </p>

          <Link to="/contact" className="inline-block bg-accent text-white font-black uppercase tracking-widest text-lg px-16 py-6 rounded-full hover:bg-accent/90 transition-all hover:scale-105 shadow-xl">
            Connect Now
          </Link>
        </div>
      </section>

    </div>
  );
};