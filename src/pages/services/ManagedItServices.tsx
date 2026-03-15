import { ServiceTemplate } from '../../components/ServiceTemplate';
import { Headset, ShieldCheck, Server } from 'lucide-react';

export const ManagedItServices = () => (
  <ServiceTemplate 
    title="Managed IT Services" 
    overview="Ensure the reliability, security, and performance of your IT infrastructure with our comprehensive managed IT services. We provide proactive monitoring, maintenance, and support for your entire IT environment, allowing your team to focus on core business activities. Our dedicated team manages your network, servers, endpoints, and security, ensuring maximum uptime, rapid issue resolution, and adherence to industry best practices."

    solutions={[
      { 
        icon: <Server size={32} />, 
        title: "Proactive Infrastructure Monitoring", 
        desc: "24/7 monitoring of your network, servers, and applications to detect and resolve issues before they impact your business operations." 
      },
      { 
        icon: <Headset size={32} />, 
        title: "Help Desk & User Support", 
        desc: "Responsive, expert technical support for your employees, ensuring quick resolution of IT issues and minimizing downtime." 
      },
      { 
        icon: <ShieldCheck size={32} />, 
        title: "Security & Compliance Management", 
        desc: "Continuous security monitoring, patch management, and compliance auditing to protect your data and ensure adherence to industry regulations." 
      },
    ]}

    partners={[
      "https://upload.wikimedia.org/wikipedia/commons/e/e5/Cisco_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg",
      "https://upload.wikimedia.org/wikipedia/commons/f/f6/HP_New_Logo_2D.svg"
    ]}

    industries={[
      "Professional Services",
      "Healthcare Systems",
      "Retail & E-commerce",
      "Financial Services",
      "Manufacturing",
      "Education"
    ]}

    image="https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&q=80"
  />
);
