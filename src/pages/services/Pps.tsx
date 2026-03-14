import { ServiceTemplate } from '../../components/ServiceTemplate';

export const Pps = () => (
  <ServiceTemplate 
    title="PPS (PC, Print & Supplies)" 

    overview="Introducing PPS (PC+Print+Supplies) Sales & Services. Welcome to Mviz Technologies’s PPS Business Unit. Every organization begins its IT journey with essential computing hardware, printing systems, and technology infrastructure. Mviz Technologies provides reliable enterprise-grade hardware solutions and IT equipment that empower organizations to operate efficiently and productively. From computing devices and printing systems to power backup and presentation technologies, PPS delivers trusted products backed by leading OEM partnerships."

    solutions={[
      { 
        icon: <img src="https://img.icons8.com/fluency/48/laptop.png" width="32" />, 
        title: "PC / Laptop / Workstation", 
        desc: "High-performance computing systems designed to support enterprise productivity, development environments, and professional workloads." 
      },

      { 
        icon: <img src="https://img.icons8.com/fluency/48/tablet.png" width="32" />, 
        title: "Tablet / Mobile / Handheld Devices", 
        desc: "Mobile technology solutions that allow professionals to stay connected and productive while working remotely or on the move." 
      },

      { 
        icon: <img src="https://img.icons8.com/fluency/48/plotter.png" width="32" />, 
        title: "Plotter / Scanner / MFD", 
        desc: "Advanced printing and scanning infrastructure including plotters and multifunction devices designed for enterprise documentation workflows." 
      },

      { 
        icon: <img src="https://img.icons8.com/fluency/48/laser-printer.png" width="32" />, 
        title: "Laser Printer / Printer / Scanner / MFP", 
        desc: "Enterprise printing devices enabling seamless printing, scanning, copying, and document management operations." 
      },

      { 
        icon: <img src="https://img.icons8.com/fluency/48/uninterruptible-power-supply.png" width="32" />, 
        title: "UPS & Power Backup Solutions", 
        desc: "Reliable power backup infrastructure ensuring uninterrupted operations and protection for critical IT systems." 
      },

      { 
        icon: <img src="https://img.icons8.com/fluency/48/print.png" width="32" />, 
        title: "Managed Print Services", 
        desc: "Comprehensive printing infrastructure management solutions designed to optimize printing efficiency and reduce operational costs." 
      },

      { 
        icon: <img src="https://img.icons8.com/fluency/48/projector.png" width="32" />, 
        title: "Projector / Display / Interactive Board", 
        desc: "Presentation and collaboration technologies including projectors, displays, and interactive boards for meetings and learning environments." 
      },

      { 
        icon: <img src="https://img.icons8.com/fluency/48/toner.png" width="32" />, 
        title: "Printer Supplies", 
        desc: "Genuine supplies including toner cartridges, inkjet cartridges, and print heads ensuring reliable printer performance and longevity." 
      }
    ]}

    partners={[
      "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg",
      "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg",
      "https://upload.wikimedia.org/wikipedia/commons/3/3c/Acer_Logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/4/41/Canon_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/6/63/Vertiv_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/5/50/Eaton_Corporation_logo.svg"
    ]}

    industries={[
      "Education & Universities",
      "Corporate Enterprises",
      "Retail Businesses",
      "Government Organizations",
      "Healthcare Institutions"
    ]}

    image="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200&auto=format&fit=crop"
  />
);