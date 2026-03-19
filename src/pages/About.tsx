import { motion } from 'motion/react';

export const About = () => {
  return (
    <div className="pb-16 relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-[30vh] md:h-[40vh] mb-2 md:mb-4 flex items-center justify-center">
        <div className="text-center text-primary max-w-4xl px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 md:mb-6 text-primary">About Us</h1>
          <p className="text-lg md:text-xl lg:text-2xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Your Dedicated Engineering Partner
          </p>
        </div>
      </div>
      
      <div className="section-padding relative z-10 pt-2">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-6 leading-tight">
              We aren't just an <span className="text-accent">outsourced coding factory</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              MVIZ Technologies operates as an extension of your core team. We understand that for CTOs and founders, code quality and communication are critical.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 md:mb-20">
            <div className="text-center p-8 bg-slate-50 rounded-2xl">
              <h3 className="text-4xl md:text-5xl font-black text-primary mb-2">2025</h3>
              <p className="text-slate-600 font-medium">Founded</p>
              <p className="text-sm text-slate-500 mt-2">Building tomorrow's solutions today</p>
            </div>
            <div className="text-center p-8 bg-slate-50 rounded-2xl">
              <h3 className="text-4xl md:text-5xl font-black text-primary mb-2">18+</h3>
              <p className="text-slate-600 font-medium">Projects Delivered</p>
              <p className="text-sm text-slate-500 mt-2">Enterprise solutions delivered</p>
            </div>
          </div>

          {/* Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-slate-200 rounded-2xl">
              <h4 className="text-xl font-black text-primary mb-2">Innovation</h4>
              <h5 className="text-lg font-black text-accent mb-2">Innovation First</h5>
              <p className="text-slate-600 text-sm mb-3">Cutting-edge solutions that push boundaries</p>
              <p className="text-slate-500 text-xs leading-relaxed">We leverage emerging technologies and creative problem-solving approaches to deliver breakthrough solutions that transform how businesses operate and compete in the digital landscape.</p>
            </div>
            <div className="text-center p-6 border border-slate-200 rounded-2xl">
              <h4 className="text-xl font-black text-primary mb-2">Team</h4>
              <h5 className="text-lg font-black text-accent mb-2">Expert Team</h5>
              <p className="text-slate-600 text-sm mb-3">Skilled professionals dedicated to your success</p>
              <p className="text-slate-500 text-xs leading-relaxed">Our multidisciplinary team brings deep expertise across technologies and industries, ensuring your projects benefit from diverse perspectives and proven methodologies.</p>
            </div>
            <div className="text-center p-6 border border-slate-200 rounded-2xl">
              <h4 className="text-xl font-black text-primary mb-2">Global</h4>
              <h5 className="text-lg font-black text-accent mb-2">Global Reach</h5>
              <p className="text-slate-600 text-sm mb-3">Serving clients worldwide with excellence</p>
              <p className="text-slate-500 text-xs leading-relaxed">With experience across international markets and diverse industries, we bring global best practices and local insights to every project we undertake.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
