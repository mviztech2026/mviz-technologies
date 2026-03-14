import { ServiceTemplate } from '../../components/ServiceTemplate';
import { Server, Database, Wifi, Router, Network, Monitor, Phone, Cpu, Shield, Zap, Tv, Cloud } from 'lucide-react';

const solutions = [
  { icon: <Server size={32} />, title: "Servers (Rack, Tower & Blade)", desc: "Powerful and reliable enterprise servers designed to support business-critical workloads, virtualization, and large-scale computing environments." },

  { icon: <Database size={32} />, title: "Storage / NAS Solutions", desc: "Secure and scalable storage infrastructure enabling efficient data management, backup, and high availability across enterprise environments." },

  { icon: <Wifi size={32} />, title: "Wireless AP & Controllers", desc: "Enterprise wireless networking solutions with centralized control to deliver seamless connectivity and reliable performance." },

  { icon: <Router size={32} />, title: "Enterprise Routers", desc: "High-performance routing infrastructure ensuring efficient network traffic management and secure connectivity across enterprise networks." },

  { icon: <Network size={32} />, title: "Switches (Core, L3, L2, Distribution)", desc: "Versatile enterprise switching solutions that enable scalable network architecture and efficient data transmission." },

  { icon: <Cpu size={32} />, title: "SAN Switch", desc: "Fiber Channel switching infrastructure designed to optimize storage area networks and ensure high-speed data access." },

  { icon: <Monitor size={32} />, title: "Video Conferencing Systems", desc: "Modern enterprise video conferencing solutions enabling real-time collaboration across distributed teams." },

  { icon: <Phone size={32} />, title: "IPBX & IP Phone Systems", desc: "Enterprise communication platforms with IP telephony solutions to improve connectivity and productivity." },

  { icon: <Cpu size={32} />, title: "HPC & HCI Systems", desc: "High-performance computing and hyper-converged infrastructure solutions designed for complex workloads and large-scale data processing." },

  { icon: <Cpu size={32} />, title: "Engineered Systems", desc: "Integrated enterprise platforms engineered for specific workloads, optimized performance, and operational efficiency." },

  { icon: <Cloud size={32} />, title: "Cloud Machines", desc: "Flexible and scalable cloud infrastructure solutions supporting enterprise applications, workloads, and digital transformation initiatives." },

  { icon: <Shield size={32} />, title: "Biometric Attendance Systems", desc: "Secure biometric authentication systems designed for workforce attendance management and identity verification." },

  { icon: <Tv size={32} />, title: "Video Wall & Display Solutions", desc: "Large-scale display technologies and video wall systems designed for monitoring centers, command centers, and enterprise visual communication." },
];

export const EnterpriseProducts = () => (
  <ServiceTemplate 
    title="Enterprise Product & Services" 
    overview="Welcome to the Enterprise Product and Services Business Unit of Mviz Technologies. We specialize in delivering enterprise-grade IT infrastructure solutions for government organizations, PSUs, and corporate customers. Our approach focuses on understanding each organization's pain points, operational challenges, and available resources in order to design the right technology architecture. Our team collaborates closely with OEM technical experts to deliver reliable, scalable, and cost-effective infrastructure solutions that support critical business applications and long-term digital transformation."

    solutions={solutions}

    partners={[
      "https://upload.wikimedia.org/wikipedia/commons/4/4e/Hewlett_Packard_Enterprise_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg",
      "https://upload.wikimedia.org/wikipedia/commons/4/49/Aruba_Networks_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/0/0c/NetApp_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/6/6f/Poly_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/2/24/LG_logo_%282015%29.svg"
    ]}

    industries={[
      "Government Infrastructure",
      "Public Sector Units (PSU)",
      "Corporate Enterprises",
      "Healthcare & Hospitals",
      "Educational Institutions",
      "Smart Infrastructure Projects"
    ]}

    image="https://cdn-icons-png.flaticon.com/128/15713/15713237.png"
  />
);