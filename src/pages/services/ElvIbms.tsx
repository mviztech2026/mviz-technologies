import { ServiceTemplate } from '../../components/ServiceTemplate';
import { Zap, Monitor, Database, Server } from 'lucide-react';

export const ElvIbms = () => (
  <ServiceTemplate 
    title="ELV & IBMS" 
    overview="Welcome to the ELV & IBMS Business Unit of Mviz Technologies. We specialize in delivering advanced infrastructure solutions for modern buildings, campuses, and enterprise facilities. Our expertise covers LAN-WAN networking, IPBX systems, access control, surveillance infrastructure, and intelligent building management systems. As facilities grow more complex, organizations require centralized monitoring, automation, and reliable infrastructure management. Mviz Technologies provides end-to-end planning, design, implementation, and maintenance of ELV and IBMS infrastructure to ensure efficient facility operations, improved safety, and intelligent control of building environments."

    solutions={[
      { icon: <Zap size={32} />, title: "Access Control Systems", desc: "Advanced access control systems that regulate and monitor entry points across enterprise facilities." },

      { icon: <Monitor size={32} />, title: "CCTV Surveillance", desc: "High-definition surveillance solutions for continuous monitoring and improved security management." },

      { icon: <Zap size={32} />, title: "Rodent Control Systems", desc: "Infrastructure solutions to prevent and manage rodent-related risks within buildings and facilities." },

      { icon: <Database size={32} />, title: "Water Leak Detection (WLD)", desc: "Early leak detection systems designed to protect critical infrastructure and data center environments." },

      { icon: <Zap size={32} />, title: "VESDA Smoke Detection", desc: "Very Early Smoke Detection Apparatus systems providing advanced fire safety monitoring." },

      { icon: <Zap size={32} />, title: "Parking Access Control (PAC/CAC)", desc: "Smart parking management systems controlling vehicle access and monitoring parking facilities." },

      { icon: <Database size={32} />, title: "Electrical Panels & Power Controls", desc: "Reliable electrical panel infrastructure for efficient power distribution and system control." },

      { icon: <Server size={32} />, title: "UPS, DG & Power Backup", desc: "Uninterruptible power supply systems, diesel generators, and backup infrastructure for critical operations." },

      { icon: <Zap size={32} />, title: "Gas Suppression Systems", desc: "Advanced fire suppression technologies using gas-based systems to protect sensitive environments." },

      { icon: <Zap size={32} />, title: "Fire Detection & Alarm (FDA)", desc: "Comprehensive fire detection and alarm infrastructure ensuring quick emergency response." },

      { icon: <Database size={32} />, title: "Passive & Active Networking", desc: "Complete networking infrastructure including structured cabling and active network devices." },

      { icon: <Database size={32} />, title: "False Flooring Infrastructure", desc: "Specialized flooring solutions designed to support data center and infrastructure cabling systems." },

      { icon: <Server size={32} />, title: "Server Rack & Data Centre Infrastructure", desc: "Enterprise-grade server racks and data center infrastructure solutions." },

      { icon: <Zap size={32} />, title: "Civil Work for IT Infrastructure", desc: "Civil construction and facility preparation for implementing enterprise IT infrastructure." },

      { icon: <Server size={32} />, title: "Building Management & Automation", desc: "Integrated building automation systems managing HVAC, temperature control, power, and water systems." },
    ]}

    partners={[
      "https://upload.wikimedia.org/wikipedia/commons/5/53/Honeywell_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/7/70/Schneider_Electric_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/3/3b/D-Link_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/6/63/Vertiv_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/2/24/LG_logo_%282015%29.svg",
      "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg"
    ]}

    industries={[
      "Commercial Real Estate",
      "Corporate Campuses",
      "Industrial Facilities",
      "Hospitals & Healthcare",
      "Hotels & Hospitality",
      "Government Infrastructure"
    ]}

    image="https://cdn-icons-png.flaticon.com/128/15902/15902549.png"
  />
);