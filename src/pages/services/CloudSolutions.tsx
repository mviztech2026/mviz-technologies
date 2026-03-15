import { ServiceTemplate } from '../../components/ServiceTemplate';
import { Cloud, Server, ShieldCheck } from 'lucide-react';

export const CloudSolutions = () => (
  <ServiceTemplate 
    title="Cloud Solutions" 
    overview="Gain security, flexibility, and agility with cloud technology solutions from Mviz Technologies. Welcome to the Cloud Solution Business Unit of Mviz Technologies. In today's rapidly evolving digital landscape, organizations must leverage cloud technologies, IoT platforms, and AI-driven systems to expand operations beyond geographical boundaries. Our team provides expert guidance, migration support, and managed services to help businesses successfully adopt and manage cloud infrastructure and applications. We design scalable, secure, and cost-efficient cloud environments that empower organizations to innovate faster and operate more efficiently."

    solutions={[
      { 
        icon: <img src="https://cdn-icons-png.flaticon.com/128/4149/4149691.png" alt="Cloud" className="w-8 h-8" />, 
        title: "IAAS (Infrastructure as a Service)", 
        desc: "Enterprise cloud infrastructure solutions using leading platforms such as Microsoft Azure, Google Cloud Platform, and Oracle Cloud. These platforms provide scalable computing, storage, and networking capabilities." 
      },

      { 
        icon: <img src="https://cdn-icons-png.flaticon.com/128/4149/4149691.png" alt="Cloud" className="w-8 h-8" />, 
        title: "SAAS (Software as a Service)", 
        desc: "Adoption and integration of modern cloud-based software solutions that enable organizations to access enterprise applications from anywhere while reducing infrastructure complexity." 
      },

      { 
        icon: <img src="https://cdn-icons-png.flaticon.com/128/4149/4149691.png" alt="Cloud" className="w-8 h-8" />, 
        title: "Application & Infrastructure Migration", 
        desc: "Seamless migration of applications, databases, and enterprise infrastructure from traditional on-premise environments to secure and scalable cloud platforms." 
      },

      { 
        icon: <img src="https://cdn-icons-png.flaticon.com/128/4149/4149691.png" alt="Cloud" className="w-8 h-8" />, 
        title: "Managed Cloud Services (MSP)", 
        desc: "End-to-end cloud monitoring, maintenance, security management, and optimization services delivered by our dedicated Managed Service Provider team." 
      },
    ]}

    partners={[
      "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg"
    ]}

    industries={[
      "Enterprise IT Infrastructure",
      "Technology Startups",
      "Retail & E-commerce",
      "Logistics & Supply Chain",
      "Financial Services",
      "Healthcare Systems"
    ]}

    image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
  />
);