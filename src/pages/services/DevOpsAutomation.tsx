import { ServiceTemplate } from '../../components/ServiceTemplate';
import { Terminal, Settings, Zap } from 'lucide-react';

export const DevOpsAutomation = () => (
  <ServiceTemplate 
    title="DevOps & Automation" 
    overview="Accelerate your software delivery and improve operational efficiency with our DevOps and automation services. We help organizations bridge the gap between development and operations, implementing CI/CD pipelines, infrastructure as code, and automated testing to ensure faster, more reliable releases. Our team leverages modern DevOps practices to reduce manual effort, minimize errors, and enhance the scalability of your IT systems."

    solutions={[
      { 
        icon: <Terminal size={32} />, 
        title: "CI/CD Pipeline Implementation", 
        desc: "Design and implement robust Continuous Integration and Continuous Deployment pipelines to automate build, test, and deployment processes, ensuring rapid and error-free software delivery." 
      },
      { 
        icon: <Settings size={32} />, 
        title: "Infrastructure as Code (IaC)", 
        desc: "Automate infrastructure provisioning and management using tools like Terraform and Ansible, ensuring consistency, scalability, and rapid environment setup." 
      },
      { 
        icon: <Zap size={32} />, 
        title: "Process Automation", 
        desc: "Identify and automate repetitive operational tasks to increase efficiency, reduce human error, and free up your team to focus on high-value strategic initiatives." 
      },
    ]}

    partners={[
      "https://upload.wikimedia.org/wikipedia/commons/0/05/Docker_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
      "https://upload.wikimedia.org/wikipedia/commons/0/0d/Jenkins_logo.svg"
    ]}

    industries={[
      "Software Development",
      "FinTech",
      "E-commerce",
      "SaaS",
      "Healthcare Systems",
      "Logistics"
    ]}

    image="https://cdn-icons-png.flaticon.com/128/8759/8759173.png"
  />
);
