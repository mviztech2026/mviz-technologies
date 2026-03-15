import { ServiceTemplate } from '../../components/ServiceTemplate';

export const OemSoftware = () => (
  <ServiceTemplate 
    title="OEM Software Licenses" 
    overview="Welcome to the OEM Licenses Business Unit of Mviz Technologies. We specialize in providing ready-made software licenses and subscriptions for OEM (Original Equipment Manufacturer) products. Our dedicated team analyzes your requirements and recommends optimized licensing models that support your organization's daily IT operations. Mviz Technologies helps customers evaluate product capabilities, cost considerations, and compliance requirements to ensure the right software platforms power your enterprise infrastructure."

    solutions={[
      { 
        icon: <img src="https://img.icons8.com/fluency/48/microsoft.png" width="32" />, 
        title: "Microsoft Licenses", 
        desc: "Enterprise licensing for Microsoft platforms including Windows Server, Office 365, Azure services, and productivity solutions." 
      },

      { 
        icon: <img src="https://img.icons8.com/fluency/48/database.png" width="32" />, 
        title: "Oracle Software", 
        desc: "Comprehensive Oracle licensing solutions including enterprise databases, middleware, and business applications." 
      },

      { 
        icon: <img src="https://img.icons8.com/fluency/48/linux.png" width="32" />, 
        title: "RedHat Enterprise Software", 
        desc: "Reliable open-source enterprise operating systems and infrastructure solutions built on RedHat platforms." 
      },

      { 
        icon: <img src="https://img.icons8.com/fluency/48/cloud.png" width="32" />, 
        title: "VMWare Virtualization", 
        desc: "Virtualization infrastructure software enabling efficient data center management and cloud infrastructure deployment." 
      },

      { 
        icon: <img src="https://img.icons8.com/fluency/48/data-backup.png" width="32" />, 
        title: "Backup Software", 
        desc: "Enterprise backup platforms that protect data, ensure recovery readiness, and maintain operational continuity." 
      },

      { 
        icon: <img src="https://img.icons8.com/fluency/48/system-task.png" width="32" />, 
        title: "EMS / NMS / Helpdesk Platforms", 
        desc: "Enterprise management systems, network monitoring tools, and helpdesk software for efficient IT operations." 
      },

      { 
        icon: <img src="https://img.icons8.com/fluency/48/postgresql.png" width="32" />, 
        title: "Postgres Database", 
        desc: "Open-source relational database solutions designed for high reliability and enterprise-level data management." 
      },

      { 
        icon: <img src="https://img.icons8.com/fluency/48/analytics.png" width="32" />, 
        title: "Data Analytics Software", 
        desc: "Powerful analytics platforms that help organizations transform raw data into actionable business insights." 
      },

      { 
        icon: <img src="https://img.icons8.com/fluency/48/antivirus.png" width="32" />, 
        title: "Antivirus & Security Software", 
        desc: "Advanced security software protecting enterprise systems from malware, ransomware, and cyber threats." 
      },

      { 
        icon: <img src="https://img.icons8.com/fluency/48/video-call.png" width="32" />, 
        title: "Video Conferencing Software", 
        desc: "Collaboration platforms such as Webex, Microsoft Teams, Zoom, and PeopleLink enabling remote communication." 
      }
    ]}

    partners={[
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/d/d8/Red_Hat_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg"
    ]}

    industries={[
      "Enterprise IT Infrastructure",
      "Corporate Organizations",
      "Financial Institutions",
      "Education & Universities",
      "Government & Public Sector"
    ]}

    image="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80"
  />
);