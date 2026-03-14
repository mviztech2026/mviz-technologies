import { ServiceTemplate } from '../../components/ServiceTemplate';
import { Code, Database, Shield, Zap, Cpu } from 'lucide-react';

export const ApplicationConsultancy = () => (
  <ServiceTemplate 
    title="Application & Consultancy" 
    overview="Welcome to the Application & Consultancy Business Unit of Mviz Technologies. We understand the challenges organizations face when trying to achieve the desired outcomes from their applications. Often there is a significant gap between required solutions and available expertise in the market. Coordinating multiple vendors and agencies to deliver successful digital systems can be complex and costly. Our team bridges this gap by providing end-to-end consulting, development, and management services that deliver cost-effective, scalable, and reliable technology solutions tailored to each organization's needs."

    solutions={[
      { 
        icon: <Code size={32} />, 
        title: "Application Development", 
        desc: "Comprehensive application development services designed and built to meet specific business requirements and operational workflows." 
      },

      { 
        icon: <Database size={32} />, 
        title: "Migration Services", 
        desc: "Smooth migration of applications and enterprise data to modern platforms, cloud environments, or updated technology stacks." 
      },

      { 
        icon: <Code size={32} />, 
        title: "Web Portals & Website Development", 
        desc: "Interactive and user-friendly web portals and enterprise websites designed to support digital transformation and customer engagement." 
      },

      { 
        icon: <Cpu size={32} />, 
        title: "Mobile App Development", 
        desc: "Custom mobile applications across Android, iOS, and cross-platform technologies to improve accessibility and user experience." 
      },

      { 
        icon: <Database size={32} />, 
        title: "ERP Implementation (SAP & Oracle)", 
        desc: "Implementation, customization, and support services for enterprise ERP platforms including SAP and Oracle." 
      },

      { 
        icon: <Database size={32} />, 
        title: "Customized ERP Development", 
        desc: "Design and development of tailor-made ERP systems built specifically for organizational workflows and operational needs." 
      },

      { 
        icon: <Zap size={32} />, 
        title: "Corporate Training", 
        desc: "Professional training programs that enhance workforce capabilities across enterprise software, IT infrastructure, and digital systems." 
      },

      { 
        icon: <Shield size={32} />, 
        title: "Consultancy & IT Audit", 
        desc: "Comprehensive technology consulting and system audits to identify performance gaps, security risks, and improvement opportunities." 
      },

      { 
        icon: <Zap size={32} />, 
        title: "Facility Management Services", 
        desc: "Efficient management of enterprise IT infrastructure ensuring system reliability, uptime, and operational efficiency." 
      },

      { 
        icon: <Cpu size={32} />, 
        title: "Managed Services", 
        desc: "End-to-end management of applications and IT systems so organizations can focus on their core business operations." 
      },
    ]}

    partners={[
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg"
    ]}

    industries={[
      "Corporate Enterprises",
      "Education & Universities",
      "Healthcare & Hospitals",
      "Financial Services",
      "Government & Public Sector",
      "Technology Startups"
    ]}

    image="https://cdn-icons-png.flaticon.com/128/15579/15579160.png"
  />
);