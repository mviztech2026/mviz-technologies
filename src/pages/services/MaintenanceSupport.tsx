import { ServiceTemplate } from '../../components/ServiceTemplate';

export const MaintenanceSupport = () => (
  <ServiceTemplate 
    title="Maintenance & Support Services" 
    overview="Enjoy an array of Maintenance and Support Services from Mviz Technologies. Our services support organizations throughout the entire lifecycle of their IT infrastructure, including installation, warranty support, post-warranty maintenance, and troubleshooting. With dedicated engineers, service centers, and our Technical Resource Center (TRC), Mviz Technologies ensures your IT systems remain operational, secure, and optimized at all times."

    solutions={[
      { 
        icon: <img src="https://img.icons8.com/fluency/48/maintenance.png" width="32" />, 
        title: "Annual Maintenance Contract (AMC)", 
        desc: "Comprehensive support agreements covering preventive maintenance and rapid issue resolution." 
      },

      { 
        icon: <img src="https://img.icons8.com/fluency/48/service.png" width="32" />, 
        title: "Service Center Support", 
        desc: "Dedicated repair and maintenance facilities for enterprise IT hardware and infrastructure." 
      },

      { 
        icon: <img src="https://img.icons8.com/fluency/48/warranty-card.png" width="32" />, 
        title: "Authorized Service Provider (ASP)", 
        desc: "Certified support services including authorized maintenance for HP plotters and OEM equipment." 
      },

      { 
        icon: <img src="https://img.icons8.com/fluency/48/settings.png" width="32" />, 
        title: "Installation & Warranty Support", 
        desc: "Professional installation and support services during the equipment warranty lifecycle." 
      },

      { 
        icon: <img src="https://img.icons8.com/fluency/48/engineer.png" width="32" />, 
        title: "On-site Engineer Support", 
        desc: "Field engineers providing on-site diagnostics, troubleshooting, and infrastructure maintenance." 
      },

      { 
        icon: <img src="https://img.icons8.com/fluency/48/tools.png" width="32" />, 
        title: "Spot Maintenance & One-time Support", 
        desc: "Rapid response maintenance visits to resolve infrastructure issues when required." 
      },

      { 
        icon: <img src="https://img.icons8.com/fluency/48/networking-manager.png" width="32" />, 
        title: "OEM & Third-Party Support", 
        desc: "Integrated support services delivered through partnerships with HP, Mviz Technologies experts, and trusted providers." 
      }
    ]}

    partners={[
      "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg",
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Hewlett_Packard_Enterprise_logo.svg"
    ]}

    industries={[
      "Government",
      "Corporate Enterprises",
      "Healthcare",
      "Education",
      "Manufacturing",
      "Financial Institutions"
    ]}

    image="https://images.unsplash.com/photo-1581092921461-39b4d8c8b1b4?q=80&w=1200&auto=format&fit=crop"
  />
);