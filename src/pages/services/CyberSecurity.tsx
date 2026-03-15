import { ServiceTemplate } from '../../components/ServiceTemplate';
import { 
  Shield, 
  Lock, 
  Eye, 
  Globe, 
  Mail, 
  Smartphone, 
  Terminal, 
  Search,
  Key
} from 'lucide-react';

export const CyberSecurity = () => (
  <ServiceTemplate 
    title="Cyber Security" 
    overview={
      <>
        Secure your <strong>Work Environment</strong> with our high-end Cyber Security solutions. 
        As technology advances through <strong>online transactions, remote monitoring, and cloud-based solutions</strong>, 
        risks like cyber fraud and data breaches increase. We protect your infrastructure, 
        applications, and information through a dedicated, comprehensive security business unit.
      </>
    }
    solutions={[
      { 
        icon: <Shield size={32} />, 
        title: "Antivirus & Malware Protection", 
        desc: "Leading-edge protection from Cisco, Checkpoint, Fortigate, and McAfee to safeguard systems against evolving viruses." 
      },
      { 
        icon: <Lock size={32} />, 
        title: "UTM & Firewall Implementation", 
        desc: "Robust Unified Threat Management to protect your network from unauthorized access and intrusion attempts." 
      },
      { 
        icon: <Eye size={32} />, 
        title: "IPS (Intrusion Prevention)", 
        desc: "Active monitoring systems designed to detect and block malicious activities before they reach your internal network." 
      },
      { 
        icon: <Terminal size={32} />, 
        title: "Cybersecurity Software & Tools", 
        desc: "A comprehensive toolkit to proactively identify vulnerabilities, assess risks, and deploy security measures." 
      },
      { 
        icon: <Search size={32} />, 
        title: "Cybersecurity Audit & Prevention", 
        desc: "Expert-led audits to assess your security posture, identify gaps, and develop tailored prevention strategies." 
      },
      { 
        icon: <Key size={32} />, 
        title: "Secure Access for Edge Devices", 
        desc: "Ensuring IoT devices and remote endpoints are hardened against potential threats at the network edge." 
      },
      { 
        icon: <Mail size={32} />, 
        title: "Email & Collaboration Protection", 
        desc: "Securing communication channels against phishing attacks, data leakage, and unauthorized credential access." 
      },
      { 
        icon: <Smartphone size={32} />, 
        title: "Endpoint, Mobile & Web Security", 
        desc: "Holistic protection covering mobile devices and web applications to ensure secure business operations anywhere." 
      },
    ]}
    partners={[
      "Cisco", "Checkpoint", "Fortigate", "Sophos", "Quickheal", "McAfee", "F-Secure"
    ]}
    industries={["Banking & Finance", "Healthcare", "Government Agencies", "IT Infrastructure"]}
    image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  />
);