import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Zap, ChevronDown, ArrowRight } from 'lucide-react';

const services = [
  { id: "enterprise-products", title: "Enterprise Products", desc: "Advanced IT products including servers, storage, networking equipment, and data center infrastructure.", icon: <img src="https://cdn-icons-png.flaticon.com/128/15713/15713237.png" alt="Enterprise" className="w-16 h-16" />, bgImage: "https://www.enterpriseproducts.com/media-library/epd/e6988dda-26b4-4efb-8dfc-67fde4e521a9.jpg" },
  { id: "system-integration", title: "System Integration", desc: "Full system integration services including network implementation, CCTV surveillance, and data center setup.", icon: <img src="https://cdn-icons-png.flaticon.com/128/19034/19034747.png" alt="System Integration" className="w-16 h-16" />, bgImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80" },
  { id: "application-consultancy", title: "Application & Consultancy", desc: "Digital platforms and enterprise software solutions including app development and ERP implementation.", icon: <img src="https://cdn-icons-png.flaticon.com/128/15579/15579160.png" alt="Application" className="w-16 h-16" />, bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" },
  { id: "cloud-solutions", title: "Cloud Solutions", desc: "Scale your infrastructure with modern cloud platforms. IAAS, SAAS, cloud migration, and managed cloud services for enterprises.", icon: <img src="https://cdn-icons-png.flaticon.com/128/4149/4149691.png" alt="Cloud" className="w-16 h-16" />, bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" },
  { id: "ai-iot-automation", title: "AI, IoT & Automation", desc: "Modernize operations using intelligent technologies. Plant automation, AI/IoT solutions, sensors, PLC systems, and industrial robotics.", icon: <img src="https://cdn-icons-png.flaticon.com/128/10398/10398522.png" alt="AI IoT" className="w-16 h-16" />, bgImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80" },
  { id: "devops-automation", title: "DevOps & Automation", desc: "Accelerate software delivery with CI/CD pipelines, infrastructure as code, container orchestration, and monitoring solutions.", icon: <img src="https://cdn-icons-png.flaticon.com/128/8759/8759173.png" alt="DevOps" className="w-16 h-16" />, bgImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80" },
  { id: "data-analytics", title: "Data Analytics & BI", desc: "Actionable insights through business intelligence, data warehousing, predictive analytics, big data solutions, and data visualization.", icon: <img src="https://cdn-icons-png.flaticon.com/128/17904/17904741.png" alt="Data Analytics" className="w-16 h-16" />, bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" },
  { id: "managed-it-services", title: "Managed IT Services", desc: "Proactive monitoring and expert technical support. Infrastructure monitoring, help desk, security management, and cloud operations.", icon: <img src="https://cdn-icons-png.flaticon.com/128/18643/18643269.png" alt="Managed IT" className="w-16 h-16" />, bgImage: "https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&q=80" },
  { id: "it-infrastructure-consulting", title: "IT Infrastructure Consulting", desc: "Design robust, scalable, and secure IT foundations. Network architecture, data center optimization, and infrastructure assessment.", icon: <img src="https://cdn-icons-png.flaticon.com/128/19014/19014236.png" alt="IT Infrastructure" className="w-16 h-16" />, bgImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80" },
  { id: "cyber-security", title: "Cyber Security", desc: "Protect infrastructure and data with antivirus, UTM/firewalls, intrusion prevention, security audits, and edge device protection.", icon: <img src="https://cdn-icons-png.flaticon.com/128/8722/8722568.png" alt="Cyber Security" className="w-16 h-16" />, bgImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80" },
  { id: "elv-ibms", title: "ELV & IBMS", desc: "Intelligent building management systems including access control, CCTV, fire detection, gas suppression, and data center infrastructure.", icon: <img src="https://cdn-icons-png.flaticon.com/128/15902/15902549.png" alt="ELV IBMS" className="w-16 h-16" />, bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" },
  { id: "oem-software", title: "OEM Software Licenses", desc: "Enterprise software licensing and subscription management for Microsoft, Oracle, RedHat, VMware, and leading software vendors.", icon: <img src="https://cdn-icons-png.flaticon.com/128/10690/10690664.png" alt="OEM" className="w-16 h-16" />, bgImage: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80" },
  { id: "pps", title: "PPS (PC, Print & Supplies)", desc: "Enterprise hardware and office IT equipment including PCs, laptops, printers, UPS systems, and presentation technology.", icon: <img src="https://cdn-icons-png.flaticon.com/128/9820/9820042.png" alt="PPS" className="w-16 h-16" />, bgImage: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&q=80" },
  { id: "maintenance-support", title: "Maintenance & Support", desc: "Reliable operation of IT infrastructure with AMC contracts, service center support, on-site engineers, and warranty services.", icon: <img src="https://cdn-icons-png.flaticon.com/128/15633/15633753.png" alt="Maintenance" className="w-16 h-16" />, bgImage: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&q=80" },
];

export const Services = () => {
  return (
    <div className="pb-16 overflow-hidden relative">
      {/* Hero Section */}
      <div className="relative w-full h-[25vh] md:h-[35vh] mb-2 md:mb-4 flex items-center justify-center">
        <div className="text-center text-primary max-w-4xl px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4 md:mb-6 text-primary">Our Capabilities</h1>
          <p className="text-base md:text-lg lg:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Comprehensive enterprise technology solutions from strategic consulting to deployment and ongoing optimization.
          </p>
        </div>
      </div>
      
      <div className="section-padding pt-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, idx) => (
            <Link 
              key={service.id} 
              to={`/services/${service.id}`}
              className="relative h-[200px] md:h-[280px] rounded-2xl overflow-hidden group cursor-pointer block md:pointer-events-auto"
            >
              {/* Background Image */}
              <img 
                src={service.bgImage} 
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500 md:group-hover:blur-md md:group-hover:scale-105"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50 md:group-hover:bg-black/70 transition-all duration-500" />
              
              {/* Default Content - Visible on mobile & desktop */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:group-hover:opacity-0 md:group-hover:pointer-events-none transition-all duration-500">
                <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight text-center mx-auto max-w-full">
                  {service.title}
                </h3>
              </div>
              
              {/* Hover Content - Desktop only */}
              <div className="hidden md:flex absolute inset-0 flex-col items-center justify-center text-center p-6 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-500">
                <img 
                  src={service.icon.props.src} 
                  alt={service.title}
                  className="w-16 h-16 object-contain mb-4 rounded-xl bg-white p-2"
                />
                <h4 className="text-2xl font-black text-white mb-2 text-center leading-tight">{service.title}</h4>
                <p className="text-white/90 text-base mb-4 leading-relaxed">
                  {service.desc}
                </p>
                <div className="flex gap-2">
                  <span 
                    className="px-6 py-3 bg-white text-primary text-base font-black rounded-full hover:bg-white/90 transition-all"
                  >
                    Read More
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-primary mb-4 tracking-tight">
              Frequently Asked <span className="text-accent">Questions</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Find answers to common questions about our services and solutions
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
              <button className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-black">01</span>
                  </div>
                  <h3 className="text-lg font-black text-primary">What industries do you serve?</h3>
                </div>
                <ChevronDown className="w-5 h-5 text-slate-400" />
              </button>
              <div className="px-6 pb-5 text-slate-600">
                We serve a wide range of industries including manufacturing, healthcare, education, retail, finance, and government sectors across India.
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
              <button className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-black">02</span>
                  </div>
                  <h3 className="text-lg font-black text-primary">Do you provide ongoing support?</h3>
                </div>
                <ChevronDown className="w-5 h-5 text-slate-400" />
              </button>
              <div className="px-6 pb-5 text-slate-600">
                Yes, we offer comprehensive maintenance and support services including 24/7 monitoring, AMC contracts, and dedicated technical support teams.
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
              <button className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-black">03</span>
                  </div>
                  <h3 className="text-lg font-black text-primary">What is your project timeline?</h3>
                </div>
                <ChevronDown className="w-5 h-5 text-slate-400" />
              </button>
              <div className="px-6 pb-5 text-slate-600">
                Project timelines vary based on scope and complexity. Typical projects range from 2-12 weeks, with enterprise solutions taking 3-6 months.
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
              <button className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-black">04</span>
                  </div>
                  <h3 className="text-lg font-black text-primary">Do you offer custom solutions?</h3>
                </div>
                <ChevronDown className="w-5 h-5 text-slate-400" />
              </button>
              <div className="px-6 pb-5 text-slate-600">
                Absolutely! We specialize in creating tailored solutions that meet your specific business requirements and integrate seamlessly with your existing infrastructure.
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
              <button className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-black">05</span>
                  </div>
                  <h3 className="text-lg font-black text-primary">What locations do you serve?</h3>
                </div>
                <ChevronDown className="w-5 h-5 text-slate-400" />
              </button>
              <div className="px-6 pb-5 text-slate-600">
                We serve clients across India with headquarters in Pune, Maharashtra and branch offices in Bokaro, Jharkhand. Our team can travel to any location for project deployment.
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-6">
              Still have questions? We're here to help!
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-black rounded-full hover:shadow-lg transition-all"
            >
              Contact Support
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
