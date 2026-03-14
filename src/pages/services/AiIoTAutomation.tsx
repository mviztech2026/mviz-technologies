import { ServiceTemplate } from '../../components/ServiceTemplate';
import { Cpu, Zap, Database } from 'lucide-react';

export const AiIoTAutomation = () => (
  <ServiceTemplate 
    title="AI, IoT & Automation" 
    overview="Welcome to the AI, IoT & Automation Business Unit of Mviz Technologies. We are dedicated to meeting the needs of organizations seeking to implement modern technologies in Artificial Intelligence (AI), Internet of Things (IoT), and industrial automation. Our focus is on leveraging intelligent systems, sensors, controllers, and machine learning technologies to enhance plant operations, process monitoring, and operational efficiency. By combining AI, IoT connectivity, and automation, we help organizations achieve real-time visibility, predictive maintenance, intelligent decision-making, and optimized operational performance."

    solutions={[
      { 
        icon: <img src="https://cdn-icons-png.flaticon.com/128/10398/10398522.png" alt="AI IoT" className="w-8 h-8" />, 
        title: "Plant & Process Automation", 
        desc: "Implement advanced automation systems to streamline industrial processes, reduce manual intervention, improve operational efficiency, and ensure consistent production performance." 
      },

      { 
        icon: <img src="https://cdn-icons-png.flaticon.com/128/10398/10398522.png" alt="AI IoT" className="w-8 h-8" />, 
        title: "AI & IoT Solutions", 
        desc: "Leverage AI-driven analytics and IoT connected devices to monitor systems, enable predictive maintenance, generate real-time insights, and automate decision-making." 
      },

      { 
        icon: <img src="https://cdn-icons-png.flaticon.com/128/10398/10398522.png" alt="AI IoT" className="w-8 h-8" />, 
        title: "Sensors & Controllers", 
        desc: "Deploy intelligent sensors and industrial controllers to capture real-time operational data, monitor environmental conditions, and optimize plant performance." 
      },

      { 
        icon: <img src="https://cdn-icons-png.flaticon.com/128/10398/10398522.png" alt="AI IoT" className="w-8 h-8" />, 
        title: "PLC Systems (Programmable Logic Controllers)", 
        desc: "Industrial-grade PLC systems designed to automate machinery, control manufacturing processes, and deliver precise operational control in complex environments." 
      },

      { 
        icon: <img src="https://cdn-icons-png.flaticon.com/128/10398/10398522.png" alt="AI IoT" className="w-8 h-8" />, 
        title: "AI & Machine Learning Software", 
        desc: "Utilize advanced AI and ML platforms to analyze industrial data, detect patterns, forecast system behavior, and enable intelligent automation across operations." 
      },
    ]}

    partners={[
      "Industrial Automation OEMs",
      "AI & Machine Learning Platform Providers",
      "Sensor & Controller Manufacturers",
      "Industrial IoT Hardware Providers"
    ]}

    industries={[
      "Manufacturing & Smart Factories",
      "Energy & Utilities",
      "Smart Cities & Infrastructure",
      "Agriculture & AgriTech",
      "Logistics & Supply Chain",
      "Industrial Automation"
    ]}

    image="https://cdn-icons-png.flaticon.com/128/10398/10398522.png"
  />
);