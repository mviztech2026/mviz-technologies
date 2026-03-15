import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

const services = [
  { id: "enterprise-products", title: "Enterprise Products", desc: "Advanced enterprise-grade IT products and infrastructure.", icon: <img src="https://cdn-icons-png.flaticon.com/128/15713/15713237.png" alt="Enterprise" className="w-12 h-12" />, bgImage: "https://www.enterpriseproducts.com/media-library/epd/e6988dda-26b4-4efb-8dfc-67fde4e521a9.jpg" },
  { id: "system-integration", title: "System Integration", desc: "Full lifecycle system integration and turnkey projects.", icon: <img src="https://cdn-icons-png.flaticon.com/128/19034/19034747.png" alt="System Integration" className="w-12 h-12" />, bgImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80" },
  { id: "application-consultancy", title: "Application & Consultancy", desc: "Digital platforms and enterprise software solutions.", icon: <img src="https://cdn-icons-png.flaticon.com/128/15579/15579160.png" alt="Application" className="w-12 h-12" />, bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" },
  { id: "cloud-solutions", title: "Cloud Solutions", desc: "Scale infrastructure with modern cloud platforms.", icon: <img src="https://cdn-icons-png.flaticon.com/128/4149/4149691.png" alt="Cloud" className="w-12 h-12" />, bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" },
  { id: "ai-iot-automation", title: "AI, IoT & Automation", desc: "Modernize operations using intelligent technologies.", icon: <img src="https://cdn-icons-png.flaticon.com/128/10398/10398522.png" alt="AI IoT" className="w-12 h-12" />, bgImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80" },
  { id: "devops-automation", title: "DevOps & Automation", desc: "Accelerate software delivery and operational efficiency.", icon: <img src="https://cdn-icons-png.flaticon.com/128/8759/8759173.png" alt="DevOps" className="w-12 h-12" />, bgImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80" },
  { id: "data-analytics", title: "Data Analytics & BI", desc: "Actionable insights through data-driven intelligence.", icon: <img src="https://cdn-icons-png.flaticon.com/128/17904/17904741.png" alt="Data Analytics" className="w-12 h-12" />, bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" },
  { id: "managed-it-services", title: "Managed IT Services", desc: "Proactive monitoring and expert technical support.", icon: <img src="https://cdn-icons-png.flaticon.com/128/18643/18643269.png" alt="Managed IT" className="w-12 h-12" />, bgImage: "https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&q=80" },
  { id: "it-infrastructure-consulting", title: "IT Infrastructure Consulting", desc: "Design robust, scalable, and secure IT foundations.", icon: <img src="https://cdn-icons-png.flaticon.com/128/19014/19014236.png" alt="IT Infrastructure" className="w-12 h-12" />, bgImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80" },
  { id: "cyber-security", title: "Cyber Security", desc: "Protect infrastructure and data from cyber threats.", icon: <img src="https://cdn-icons-png.flaticon.com/128/8722/8722568.png" alt="Cyber Security" className="w-12 h-12" />, bgImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80" },
  { id: "elv-ibms", title: "ELV & IBMS", desc: "Intelligent building management systems.", icon: <img src="https://cdn-icons-png.flaticon.com/128/15902/15902549.png" alt="ELV IBMS" className="w-12 h-12" />, bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" },
  { id: "oem-software", title: "OEM Software Licenses", desc: "Enterprise software licensing and subscription management.", icon: <img src="https://cdn-icons-png.flaticon.com/128/10690/10690664.png" alt="OEM" className="w-12 h-12" />, bgImage: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80" },
  { id: "pps", title: "PPS (PC, Print & Supplies)", desc: "Enterprise hardware and office IT equipment.", icon: <img src="https://cdn-icons-png.flaticon.com/128/9820/9820042.png" alt="PPS" className="w-12 h-12" />, bgImage: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&q=80" },
  { id: "maintenance-support", title: "Maintenance & Support", desc: "Reliable operation of IT infrastructure.", icon: <img src="https://cdn-icons-png.flaticon.com/128/15633/15633753.png" alt="Maintenance" className="w-12 h-12" />, bgImage: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&q=80" },
];

export const Services = () => {
  return (
    <div className="pb-16 overflow-hidden relative">
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] mb-8">
        <img src="https://cdn-icons-png.flaticon.com/128/15713/15713237.png" alt="Services" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80 flex items-center justify-center">
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">Our Services</h1>
        </div>
      </div>
      
      <div className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, idx) => (
            <Link 
              key={service.id} 
              to={`/services/${service.id}`}
              className="relative h-[300px] rounded-3xl overflow-hidden group cursor-pointer block md:pointer-events-auto"
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
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
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
                <h4 className="text-xl font-black text-white mb-2">{service.title}</h4>
                <p className="text-white/90 text-sm mb-4 leading-relaxed">
                  {service.desc}
                </p>
                <div className="flex gap-2">
                  <span 
                    className="px-6 py-3 bg-white text-primary text-sm font-bold rounded-full hover:bg-white/90 transition-all"
                  >
                    Read More
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
