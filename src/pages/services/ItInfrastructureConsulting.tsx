import { ServiceTemplate } from '../../components/ServiceTemplate';
import { Server, ShieldCheck, Zap } from 'lucide-react';

export const ItInfrastructureConsulting = () => (
  <ServiceTemplate 
    title="IT Infrastructure Consulting" 
    overview="Build a robust, scalable, and secure IT foundation with our expert infrastructure consulting services. We help organizations design, implement, and optimize their IT environments, ensuring they align with business goals and support long-term growth. Our team provides comprehensive assessments, architectural design, and implementation support for networks, servers, storage, and data center solutions, leveraging the latest technologies to maximize efficiency and reliability."

    solutions={[
      { 
        icon: <Server size={32} />, 
        title: "Network & Server Architecture Design", 
        desc: "Design and implement high-performance, resilient network and server architectures tailored to your specific performance, security, and scalability requirements." 
      },
      { 
        icon: <ShieldCheck size={32} />, 
        title: "Data Center Optimization", 
        desc: "Modernize your data center infrastructure, improving efficiency, reducing energy consumption, and enhancing overall performance and reliability." 
      },
      { 
        icon: <Zap size={32} />, 
        title: "Infrastructure Assessment & Strategy", 
        desc: "Comprehensive assessments of your existing IT infrastructure to identify bottlenecks, security risks, and opportunities for improvement and strategic investment." 
      },
    ]}

    partners={[
      "https://upload.wikimedia.org/wikipedia/commons/e/e5/Cisco_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg",
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Aruba_Networks_Logo.svg"
    ]}

    industries={[
      "Enterprise IT Infrastructure",
      "Manufacturing",
      "Healthcare Systems",
      "Logistics & Supply Chain",
      "Financial Services",
      "Education"
    ]}

    image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
  />
);
