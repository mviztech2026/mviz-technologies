import { ReactNode, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, ChevronUp, Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
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
    <nav className="sticky top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-slate-100/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center pl-4 pr-2 py-3">
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/assets/logo.png" alt="MVIZ Technologies" className="h-14 w-auto group-hover:opacity-80 transition-opacity" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <div key={link.path} className="relative" onMouseEnter={() => link.dropdown && setServicesOpen(true)} onMouseLeave={() => link.dropdown && setServicesOpen(false)}>
                <Link 
                  to={link.path} 
                  className={`text-sm font-medium tracking-wide transition-all hover:text-accent relative group ${location.pathname === link.path ? 'text-accent' : 'text-slate-700'}`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`} />
                </Link>
                {link.dropdown && servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[500px] max-w-[90vw]">
                    <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 grid grid-cols-2 gap-2">
                      {link.dropdown.map(sub => (
                        <Link key={sub.path} to={sub.path} className="text-xs font-medium text-slate-600 hover:text-accent p-2 hover:bg-slate-50 rounded-xl transition-colors relative group">
                          {sub.name}
                          <span className="absolute bottom-1 left-2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-[calc(100%-16px)]" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link to="/contact" className="btn-primary py-2 px-4 text-xs font-medium">
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
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.3 }}
                >
                  <Link 
                    to={link.path} 
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium ${location.pathname === link.path ? 'text-accent' : 'text-slate-700'}`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <Link to="/contact" onClick={() => setIsOpen(false)} className="btn-primary w-full py-3 text-sm font-medium mt-2">
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-600 py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img src="/assets/logo.png" alt="MVIZ Technologies" className="h-32 w-auto" />
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              Engineering intelligent digital solutions for the world's most innovative companies. We turn complex ideas into seamless digital experiences.
            </p>
          </div>

          {/* Services - 2 columns on desktop */}
          <div className="md:col-span-2">
            <h4 className="font-black text-gray-900 mb-4 uppercase text-xs tracking-wider">Services</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
              {navLinks[1].dropdown?.map((sub) => (
                <li key={sub.path} className="list-none">
                  <Link to={sub.path} className="hover:text-accent transition-colors text-sm">{sub.name}</Link>
                </li>
              ))}
            </div>
          </div>

          {/* Company and Contact - stacked */}
          <div className="space-y-8">
            {/* Company */}
            <div>
              <h4 className="font-black text-gray-900 mb-4 uppercase text-xs tracking-wider">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                <li><Link to="/projects" className="hover:text-accent transition-colors">Case Studies</Link></li>
                <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
                <li><Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-black text-gray-900 mb-4 uppercase text-xs tracking-wider">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Mail size={14} className="text-accent mt-1 shrink-0" />
                  <span>support@mvizindia.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone size={14} className="text-accent mt-1 shrink-0" />
                  <span>+91 065422201234</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={14} className="text-accent mt-1 shrink-0" />
                  <span>A-1101, Mainland Valencia, Kesnand Road, Vagholi, Pune, Maharashtra 412207</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <div className="flex flex-col md:flex-row gap-2 md:gap-8">
              <span>&copy; 2026 MVIZ Technologies. All rights reserved.</span>
              <span className="hidden md:inline">|</span>
              <span>CIN: U46511PN2025PTC245816</span>
            </div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
            </div>
          </div>
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
      
      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-primary to-accent text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50"
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </motion.button>
    </div>
  );
};
