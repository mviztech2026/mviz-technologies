import { ReactNode, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LayoutProps {
  children: ReactNode;
}

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services', dropdown: [
    { name: 'Enterprise Products', path: '/services/enterprise-products' },
    { name: 'System Integration', path: '/services/system-integration' },
    { name: 'Application & Consultancy', path: '/services/application-consultancy' },
    { name: 'Cloud Solutions', path: '/services/cloud-solutions' },
    { name: 'AI, IoT & Automation', path: '/services/ai-iot-automation' },
    { name: 'DevOps & Automation', path: '/services/devops-automation' },
    { name: 'Data Analytics & Business Intelligence', path: '/services/data-analytics' },
    { name: 'Managed IT Services', path: '/services/managed-it-services' },
    { name: 'IT Infrastructure Consulting', path: '/services/it-infrastructure-consulting' },
    { name: 'Cyber Security', path: '/services/cyber-security' },
    { name: 'ELV & IBMS', path: '/services/elv-ibms' },
    { name: 'OEM Licenses', path: '/services/oem-software' },
    { name: 'PPS (PC, Print & Supplies)', path: '/services/pps' },
    { name: 'Maintenance & Support', path: '/services/maintenance-support' },
  ]},
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 w-full z-50 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center pl-4 pr-2 py-4">
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/assets/logo.png" alt="MVIZ Technologies" className="h-14 w-auto group-hover:opacity-80 transition-opacity" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <div key={link.path} className="relative" onMouseEnter={() => link.dropdown && setServicesOpen(true)} onMouseLeave={() => link.dropdown && setServicesOpen(false)}>
                <Link 
                  to={link.path} 
                  className={`text-base font-bold uppercase tracking-widest transition-all hover:text-accent relative group ${location.pathname === link.path ? 'text-accent' : 'text-primary'}`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`} />
                </Link>
                {link.dropdown && servicesOpen && (
                  <div className="absolute top-full left-0 pt-4 w-[600px]">
                    <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 grid grid-cols-2 gap-2">
                      {link.dropdown.map(sub => (
                        <Link key={sub.path} to={sub.path} className="text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-accent p-3 hover:bg-slate-50 rounded-xl transition-colors relative group">
                          {sub.name}
                          <span className="absolute bottom-2 left-3 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-[calc(100%-24px)]" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link to="/contact" className="btn-primary py-2 px-4 text-sm uppercase tracking-widest">
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-slate-900 p-2 mr-4 hover:bg-slate-100 rounded-xl transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-6 right-6 mt-4 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/40 overflow-hidden md:hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-black tracking-tight ${location.pathname === link.path ? 'text-accent' : 'text-primary'}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsOpen(false)} className="btn-primary w-full py-4 text-lg">
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-30" />
      <div className="liquid-shape w-[600px] h-[600px] bg-accent/5 -bottom-48 -right-48 animate-morph" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 relative z-10">
        <div className="col-span-1 lg:col-span-1">
          <Link to="/" className="inline-block mb-10 group">
            <img src="/assets/logo.png" alt="MVIZ Technologies" className="h-32 w-auto group-hover:opacity-80 transition-opacity" />
          </Link>
          <p className="text-slate-400 mb-10 leading-relaxed text-base font-light max-w-xs">
            Engineering intelligent digital solutions for the world's most innovative companies. We turn complex ideas into seamless digital experiences.
          </p>
          <div className="flex gap-6">
            <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 hover:-translate-y-1"><Twitter size={20} /></a>
            <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 hover:-translate-y-1"><Linkedin size={20} /></a>
            <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 hover:-translate-y-1"><Github size={20} /></a>
          </div>
        </div>

        <div className="lg:order-1">
          <h4 className="text-white font-black mb-10 text-[10px] uppercase tracking-[0.3em]">Services</h4>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            {navLinks[1].dropdown?.map((sub, idx) => (
              <Link key={sub.path} to={sub.path} className="hover:text-accent transition-colors flex items-center gap-3 group text-sm font-medium py-1">
                <ChevronRight size={14} className="text-accent group-hover:translate-x-1 transition-transform shrink-0" /> 
                <span className="truncate">{sub.name}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="lg:order-2">
          <h4 className="text-white font-black mb-10 text-[10px] uppercase tracking-[0.3em]">Company</h4>
          <ul className="space-y-5 text-sm font-medium">
            <li><Link to="/about" className="hover:text-accent transition-colors flex items-center gap-3 group"><ChevronRight size={14} className="text-accent group-hover:translate-x-1 transition-transform" /> About Us</Link></li>
            <li><Link to="/projects" className="hover:text-accent transition-colors flex items-center gap-3 group"><ChevronRight size={14} className="text-accent group-hover:translate-x-1 transition-transform" /> Case Studies</Link></li>
            <li><Link to="/blog" className="hover:text-accent transition-colors flex items-center gap-3 group"><ChevronRight size={14} className="text-accent group-hover:translate-x-1 transition-transform" /> Insights</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors flex items-center gap-3 group"><ChevronRight size={14} className="text-accent group-hover:translate-x-1 transition-transform" /> Contact</Link></li>
          </ul>
          
          {/* Contact info under Company for mobile */}
          <div className="mt-10 lg:hidden">
            <h4 className="text-white font-black mb-6 text-[10px] uppercase tracking-[0.3em]">Contact Info</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center gap-4">
                <Mail size={14} className="text-accent" />
                <span>alliance@mvizindia.com</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={14} className="text-accent" />
                <span>+91 9960925523</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="hidden lg:block">
          <h4 className="text-white font-black mb-10 text-[10px] uppercase tracking-[0.3em]">Contact</h4>
          <ul className="space-y-6 text-sm font-medium">
            <li className="flex items-center gap-5 group cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-accent transition-all duration-300">
                <Mail size={16} className="text-accent group-hover:text-white" />
              </div>
              <span className="group-hover:text-accent transition-colors">alliance@mvizindia.com</span>
            </li>
            <li className="flex items-center gap-5 group cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-accent transition-all duration-300">
                <Phone size={16} className="text-accent group-hover:text-white" />
              </div>
              <span className="group-hover:text-accent transition-colors">+91 9960925523</span>
            </li>
            <li className="flex items-start gap-5 group cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-accent transition-all duration-300 mt-1">
                <MapPin size={16} className="text-accent group-hover:text-white" />
              </div>
              <span className="group-hover:text-accent transition-colors leading-relaxed">
                Plot No 15, Diamond City,<br />Bandhgora, Pinda Joda,<br />Bokaro, Jharkhand 827013
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/5 flex flex-col lg:flex-row justify-between items-end gap-12 relative z-10">
        <div className="w-full lg:w-auto relative">
          {/* Stylized Logo Background */}
          <div className="absolute -bottom-16 -left-16 opacity-[0.03] select-none pointer-events-none">
            <span className="text-[15rem] md:text-[30rem] font-black tracking-tighter leading-none block">MVIZ</span>
          </div>
          
          
          <div className="flex flex-col md:flex-row gap-10 text-[11px] font-black uppercase tracking-[0.3em] text-slate-500 relative z-10">
            <div className="flex flex-col">
              <span className="text-slate-400 mb-1">MVIZ TECHNOLOGIES PRIVATE LIMITED</span>
              <span>CIN : U46511PN2025PTC245816</span>
            </div>
            <div className="flex items-end">
              <span>© 2026 All rights reserved.</span>
            </div>
          </div>
        </div>
        
        <div className="flex gap-10 text-[11px] font-black uppercase tracking-widest text-slate-500">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
