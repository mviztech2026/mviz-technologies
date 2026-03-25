import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, ChevronDown, Building2, User, Briefcase, CheckCircle } from 'lucide-react';
import contactData from '../../content/contact.json';

const serviceOptions = [
  { value: "", label: "Select a Service", icon: Briefcase },
  { value: "enterprise-products", label: "Enterprise Products", icon: Building2 },
  { value: "system-integration", label: "System Integration", icon: Building2 },
  { value: "application-consultancy", label: "Application & Consultancy", icon: Briefcase },
  { value: "cloud-solutions", label: "Cloud Solutions", icon: Briefcase },
  { value: "ai-iot-automation", label: "AI, IoT & Automation", icon: Briefcase },
  { value: "devops-automation", label: "DevOps & Automation", icon: Briefcase },
  { value: "data-analytics", label: "Data Analytics & BI", icon: Briefcase },
  { value: "managed-it-services", label: "Managed IT Services", icon: Briefcase },
  { value: "it-infrastructure", label: "IT Infrastructure Consulting", icon: Building2 },
  { value: "cyber-security", label: "Cyber Security", icon: Briefcase },
  { value: "elv-ibms", label: "ELV & IBMS", icon: Building2 },
  { value: "oem-software", label: "OEM Software Licenses", icon: Briefcase },
  { value: "pps", label: "PPS (PC, Print & Supplies)", icon: Briefcase },
  { value: "maintenance-support", label: "Maintenance & Support", icon: Building2 },
];

const budgetOptions = [
  { value: "", label: "Select Budget Range" },
  { value: "under-50k", label: "Under ₹50,000" },
  { value: "50k-1l", label: "₹50,000 - ₹1,00,000" },
  { value: "1l-5l", label: "₹1,00,000 - ₹5,00,000" },
  { value: "5l-10l", label: "₹5,00,000 - ₹10,00,000" },
  { value: "10l-plus", label: "Above ₹10,00,000" },
  { value: "discuss", label: "Let's Discuss" },
];

const timelineOptions = [
  { value: "", label: "Select Timeline" },
  { value: "immediate", label: "Immediate (ASAP)" },
  { value: "1-month", label: "Within 1 Month" },
  { value: "3-months", label: "Within 3 Months" },
  { value: "6-months", label: "Within 6 Months" },
  { value: "1-year", label: "Within 1 Year" },
  { value: "flexible", label: "Flexible Timeline" },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [content, setContent] = useState(contactData);

  useEffect(() => {
    // Check for admin updates in localStorage (for preview during editing)
    const saved = localStorage.getItem('mviz_site_data');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.contact) {
        setContent(parsed.contact);
      }
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pb-24 relative overflow-hidden bg-gradient-to-br from-slate-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-from)_0%,_transparent_50%)] from-primary/10" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,_var(--tw-gradient-from)_0%,_transparent_50%)] from-accent/10" />
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[15vh] md:h-[20vh] mb-2 md:mb-4 flex items-center justify-center pt-20 md:pt-24">
        <div className="text-center text-primary max-w-4xl px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-2 md:mb-3 text-primary">Contact Us</h1>
          <p className="text-lg md:text-xl lg:text-2xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can help transform your business with technology
          </p>
        </div>
      </div>

      <div className="section-padding relative z-10 px-6 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-12 lg:gap-16 items-start">
          {/* Left Side - Contact Info */}
          <div className="lg:col-span-2 space-y-3 md:space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-4xl font-black text-primary mb-2 md:mb-4 tracking-tight">
                Let's Start a <span className="text-accent">Conversation</span>
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-2 md:mb-8">
                Whether you're looking for IT infrastructure solutions, cloud migration, or managed services, our team is ready to help you achieve your goals.
              </p>
            </motion.div>

            <div className="space-y-3 md:space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex gap-3 md:gap-5 items-start group p-3 md:p-5 rounded-2xl bg-white shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-10 h-10 md:w-14 md:h-14 shrink-0 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-lg">
                  <img src="https://cdn-icons-png.flaticon.com/128/15582/15582668.png" alt="Email" className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email Us</h4>
                  <p className="text-lg md:text-xl font-bold text-primary">{content.email}</p>
                  <p className="text-slate-500 text-xs md:text-sm mt-1">Response within 24 hours</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex gap-3 md:gap-5 items-start group p-3 md:p-5 rounded-2xl bg-white shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-10 h-10 md:w-14 md:h-14 shrink-0 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-lg">
                  <img src="https://cdn-icons-png.flaticon.com/128/15579/15579182.png" alt="Phone" className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Call Us</h4>
                  <p className="text-lg md:text-xl font-bold text-primary">{content.phone}</p>
                  <p className="text-slate-500 text-xs md:text-sm mt-1">{content.hours}</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex gap-3 md:gap-5 items-start group p-3 md:p-5 rounded-2xl bg-white shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => window.open(content.headquarters.mapsLink, '_blank')}
              >
                <div className="w-10 h-10 md:w-14 md:h-14 shrink-0 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-lg">
                  <img src="https://cdn-icons-png.flaticon.com/128/11237/11237480.png" alt="Location" className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Visit Us</h4>
                  <p className="text-base md:text-lg font-bold text-primary leading-snug">
                    {content.headquarters.line1},<br />
                    {content.headquarters.line2}
                  </p>
                  <p className="text-slate-500 text-xs md:text-sm mt-1">{content.headquarters.city}, {content.headquarters.state} {content.headquarters.pincode}</p>
                </div>
              </motion.div>
            </div>

            {/* Location Info Cards */}
            <div className="mt-4 md:mt-10 space-y-2 md:space-y-4">
              <h3 className="text-base md:text-lg font-bold text-slate-800 uppercase tracking-wider mb-1 md:mb-4">Our Locations</h3>
              
              {/* Headquarters */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex gap-4 items-start group p-4 rounded-2xl bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => window.open(content.headquarters.mapsLink, '_blank')}
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-md">
                  <img src="https://cdn-icons-png.flaticon.com/128/1790/1790211.png" alt="HQ" className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-1">Headquarters</h4>
                  <p className="text-slate-700 text-sm font-medium leading-relaxed">
                    {content.headquarters.line1},<br />
                    {content.headquarters.line2},<br />
                    {content.headquarters.city}, {content.headquarters.state} {content.headquarters.pincode}
                  </p>
                </div>
              </motion.div>

              {/* Branch Office */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex gap-4 items-start group p-4 rounded-2xl bg-gradient-to-r from-accent/5 to-accent/10 border border-accent/20 hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => window.open(content.branch.mapsLink, '_blank')}
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-md">
                  <img src="https://cdn-icons-png.flaticon.com/128/1790/1790211.png" alt="Branch" className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-accent uppercase tracking-wider mb-1">Branch Office</h4>
                  <p className="text-slate-700 text-sm font-medium leading-relaxed">
                    {content.branch.line1},<br />
                    {content.branch.line2},<br />
                    {content.branch.city}, {content.branch.state} {content.branch.pincode}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl p-4 md:p-10 shadow-2xl border border-slate-100 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full -mr-20 -mt-20 blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full -ml-16 -mb-16 blur-2xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3 md:mb-8">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
                    <Send size={16} className="md:size-24" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg md:text-2xl font-black text-primary tracking-tight">Send us a message</h3>
                    <p className="text-slate-500 text-xs md:text-sm">Fill out the form below and we'll get back to you shortly</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3 md:space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wide flex items-center gap-2">
                        <img src="https://cdn-icons-png.flaticon.com/128/15582/15582668.png" alt="User" className="w-4 h-4" />
                        Full Name <span className="text-accent">*</span>
                      </label>
                      <input 
                        type="text" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        className="w-full px-3 md:px-5 py-3 md:py-4 rounded-xl bg-slate-50 border-2 border-slate-200 focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 outline-none transition-all font-medium text-slate-700 placeholder:text-slate-400 text-sm md:text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wide flex items-center gap-2">
                        <img src="https://cdn-icons-png.flaticon.com/128/15582/15582668.png" alt="Email" className="w-4 h-4" />
                        Email Address <span className="text-accent">*</span>
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        required
                        className="w-full px-3 md:px-5 py-3 md:py-4 rounded-xl bg-slate-50 border-2 border-slate-200 focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 outline-none transition-all font-medium text-slate-700 placeholder:text-slate-400 text-sm md:text-base"
                      />
                    </div>
                  </div>

                  {/* Phone & Company Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wide flex items-center gap-2">
                        <img src="https://cdn-icons-png.flaticon.com/128/15579/15579182.png" alt="Phone" className="w-4 h-4" />
                        Phone Number
                      </label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="w-full px-3 md:px-5 py-3 md:py-4 rounded-xl bg-slate-50 border-2 border-slate-200 focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 outline-none transition-all font-medium text-slate-700 placeholder:text-slate-400 text-sm md:text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wide flex items-center gap-2">
                        <img src="https://cdn-icons-png.flaticon.com/128/1790/1790211.png" alt="Company" className="w-4 h-4" />
                        Company Name
                      </label>
                      <input 
                        type="text" 
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Enter your company name"
                        className="w-full px-3 md:px-5 py-3 md:py-4 rounded-xl bg-slate-50 border-2 border-slate-200 focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 outline-none transition-all font-medium text-slate-700 placeholder:text-slate-400 text-sm md:text-base"
                      />
                    </div>
                  </div>

                  {/* Service Dropdown */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wide flex items-center gap-2">
                      <img src="https://cdn-icons-png.flaticon.com/128/1790/1790211.png" alt="Service" className="w-4 h-4" />
                      Service Interested In <span className="text-accent">*</span>
                    </label>
                    <div className="relative">
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-slate-200 focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 outline-none transition-all font-medium text-slate-700 appearance-none cursor-pointer"
                      >
                        {serviceOptions.map((option) => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                      <ChevronDown size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Budget & Timeline Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">
                        Budget Range
                      </label>
                      <div className="relative">
                        <select 
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-slate-200 focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 outline-none transition-all font-medium text-slate-700 appearance-none cursor-pointer"
                        >
                          {budgetOptions.map((option) => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                          ))}
                        </select>
                        <ChevronDown size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">
                        Expected Timeline
                      </label>
                      <div className="relative">
                        <select 
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-slate-200 focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 outline-none transition-all font-medium text-slate-700 appearance-none cursor-pointer"
                        >
                          {timelineOptions.map((option) => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                          ))}
                        </select>
                        <ChevronDown size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wide flex items-center gap-2">
                      <img src="https://cdn-icons-png.flaticon.com/128/11237/11237480.png" alt="Message" className="w-4 h-4" />
                      Project Details <span className="text-accent">*</span>
                    </label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      placeholder="Tell us about your project, requirements, and any specific needs..."
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-slate-200 focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 outline-none transition-all font-medium text-slate-700 placeholder:text-slate-400 resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 px-8 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold text-lg uppercase tracking-wider hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : submitted ? (
                      <>
                        <CheckCircle size={20} />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                  
                  <p className="text-center text-slate-400 text-xs font-medium">
                    By submitting this form, you agree to our <a href="/privacy" className="text-accent hover:underline font-bold">Privacy Policy</a> and <a href="/terms" className="text-accent hover:underline font-bold">Terms of Service</a>.
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Map Section */}
      <section className="mt-8 md:mt-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black text-primary mb-4 md:mb-8 tracking-tight text-center">
            Our <span className="text-accent">Locations</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Headquarters - Pune */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
              <div className="bg-gradient-to-r from-primary to-accent p-4 md:p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <img src="https://cdn-icons-png.flaticon.com/128/11237/11237480.png" alt="Location" className="w-7 h-7" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">Headquarters</h3>
                    <p className="text-white/80 text-sm font-medium">{content.headquarters.city}, {content.headquarters.state}</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.086233170493!2d73.9479!3d18.5934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1c8f33c4e1f%3A0x2c7c7e4f0e7e4a3e!2sMainland%20Valencia%2C%20Kesnand%20Road%2C%20Vagholi%2C%20Pune!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%" 
                  height="350" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
              <div className="p-6 bg-slate-50">
                <p className="text-slate-700 font-medium leading-relaxed">
                  {content.headquarters.line1},<br />
                  {content.headquarters.line2},<br />
                  {content.headquarters.city}, {content.headquarters.state},<br />
                  India, {content.headquarters.pincode}
                </p>
                <a 
                  href={content.headquarters.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-full bg-primary text-white font-bold text-sm hover:bg-primary/90 transition-colors"
                >
                  <MapPin size={16} />
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* Branch Office - Bokaro */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
              <div className="bg-gradient-to-r from-accent to-primary p-4 md:p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <img src="https://cdn-icons-png.flaticon.com/128/11237/11237480.png" alt="Location" className="w-7 h-7" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">Branch Office</h3>
                    <p className="text-white/80 text-sm font-medium">{content.branch.city}, {content.branch.state}</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.476812345678!2d86.0877!3d23.6834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6a1b1b1b1b1b1%3A0x1c1c1c1c1c1c1c1c!2sDiamond%20City%2C%20Bandhgora%2C%20Bokaro!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%" 
                  height="350" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
              <div className="p-6 bg-slate-50">
                <p className="text-slate-700 font-medium leading-relaxed">
                  {content.branch.line1},<br />
                  {content.branch.line2},<br />
                  {content.branch.city}, {content.branch.state},<br />
                  India, {content.branch.pincode}
                </p>
                <a 
                  href={content.branch.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-full bg-accent text-white font-bold text-sm hover:bg-accent/90 transition-colors"
                >
                  <MapPin size={16} />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};