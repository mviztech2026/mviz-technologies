import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface Solution {
  icon: ReactNode;
  title: string;
  desc: string;
}

interface ServicePageProps {
  title: string;
  overview: ReactNode;
  solutions: Solution[];
  partners: string[];
  industries: string[];
  image: string;
  hideBackButton?: boolean;
}

export const ServiceTemplate = ({ title, overview, solutions, partners, industries, image, hideBackButton }: ServicePageProps) => {
  return (
    <div className="pb-20">
      <div className="relative w-full h-[40vh] mb-20">
        <img src={image} alt={title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter text-center px-4">{title}</h1>
        </div>
      </div>
      <div className="section-padding">
        {!hideBackButton && (
          <Link to="/services" className="flex items-center gap-2 text-accent font-black uppercase tracking-widest text-xs mb-10 hover:translate-x-2 transition-transform">
            <ArrowLeft size={16} /> Back to Services
          </Link>
        )}
        <div className="mb-20">
          {typeof overview === 'string' ? (
            <p className="text-xl text-slate-600 leading-relaxed font-light">{overview}</p>
          ) : (
            overview
          )}
        </div>
        
        <h2 className="text-4xl font-black text-primary mb-12 tracking-tighter">Solutions Offered</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {solutions.map((s, i) => (
            <div key={i} className="glass-card p-8 border-white/40 group hover:border-accent/50 transition-all">
              <div className="text-accent mb-6 group-hover:scale-110 transition-transform">{s.icon}</div>
              <h4 className="text-xl font-bold text-primary mb-4">{s.title}</h4>
              <p className="text-slate-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-4xl font-black text-primary mb-12 tracking-tighter">Technology Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-20">
          {partners.map((partner, i) => (
            <div key={i} className="glass-card p-6 flex items-center justify-center font-black text-slate-400 hover:text-accent transition-colors">
              {partner.startsWith('http') ? (
                <img src={partner} alt="Partner Logo" className="max-h-12 object-contain" referrerPolicy="no-referrer" />
              ) : (
                partner
              )}
            </div>
          ))}
        </div>

        <h2 className="text-4xl font-black text-primary mb-12 tracking-tighter">Industries Supported</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
          {industries.map((industry, i) => (
            <div key={i} className="bg-slate-100 p-6 rounded-2xl text-center font-bold text-primary">
              {industry}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-12 md:p-16 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter text-white">Ready to get started?</h2>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Contact us today to discuss how our {title} solutions can help transform your business.
          </p>
          <Link to="/contact" className="inline-block bg-white text-primary font-black uppercase tracking-widest text-sm px-10 py-5 rounded-full hover:bg-white/90 transition-all hover:scale-105">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};
