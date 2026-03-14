import { ServiceTemplate } from '../../components/ServiceTemplate';
import { BarChart3, Database, Search } from 'lucide-react';

export const DataAnalytics = () => (
  <ServiceTemplate 
    title="Data Analytics & Business Intelligence" 
    overview="Unlock the power of your data with our comprehensive analytics and business intelligence services. We help organizations collect, process, and analyze vast amounts of data to gain actionable insights, optimize operations, and make informed, data-driven decisions. Our team designs and implements custom BI dashboards, data warehouses, and predictive analytics models that empower your leadership to visualize trends, identify opportunities, and mitigate risks."

    solutions={[
      { 
        icon: <Database size={32} />, 
        title: "Data Warehousing & Integration", 
        desc: "Build scalable data warehouses that consolidate data from multiple sources, providing a single source of truth for all your analytics and reporting needs." 
      },
      { 
        icon: <BarChart3 size={32} />, 
        title: "BI Dashboards & Visualization", 
        desc: "Create interactive, real-time dashboards and reports that provide clear, visual insights into your key performance indicators (KPIs) and business metrics." 
      },
      { 
        icon: <Search size={32} />, 
        title: "Predictive Analytics", 
        desc: "Leverage machine learning and advanced statistical models to forecast trends, anticipate customer behavior, and optimize business strategies." 
      },
    ]}

    partners={[
      "https://upload.wikimedia.org/wikipedia/commons/c/cf/Tableau_Logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/Microsoft_Power_BI_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/3/3a/Looker_logo.svg"
    ]}

    industries={[
      "Retail & E-commerce",
      "Financial Services",
      "Healthcare Systems",
      "Logistics & Supply Chain",
      "Marketing & Advertising",
      "Manufacturing"
    ]}

    image="https://cdn-icons-png.flaticon.com/128/17904/17904741.png"
  />
);
