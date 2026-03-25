import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SiteProvider } from './context/SiteContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Projects } from './pages/Projects';
import { Technologies } from './pages/Technologies';
import { Industries } from './pages/Industries';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { Privacy, Terms } from './pages/Legal';
import Admin from './pages/Admin';

import { EnterpriseProducts } from './pages/services/EnterpriseProducts';
import { SystemIntegration } from './pages/services/SystemIntegration';
import { ApplicationConsultancy } from './pages/services/ApplicationConsultancy';
import { CloudSolutions } from './pages/services/CloudSolutions';
import { AiIoTAutomation } from './pages/services/AiIoTAutomation';
import { DevOpsAutomation } from './pages/services/DevOpsAutomation';
import { DataAnalytics } from './pages/services/DataAnalytics';
import { ManagedItServices } from './pages/services/ManagedItServices';
import { ItInfrastructureConsulting } from './pages/services/ItInfrastructureConsulting';
import { CyberSecurity } from './pages/services/CyberSecurity';
import { ElvIbms } from './pages/services/ElvIbms';
import { OemSoftware } from './pages/services/OemSoftware';
import { Pps } from './pages/services/Pps';
import { MaintenanceSupport } from './pages/services/MaintenanceSupport';

export default function App() {
  return (
    <SiteProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/enterprise-products" element={<EnterpriseProducts />} />
            <Route path="/services/system-integration" element={<SystemIntegration />} />
            <Route path="/services/application-consultancy" element={<ApplicationConsultancy />} />
            <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
            <Route path="/services/ai-iot-automation" element={<AiIoTAutomation />} />
            <Route path="/services/devops-automation" element={<DevOpsAutomation />} />
            <Route path="/services/data-analytics" element={<DataAnalytics />} />
            <Route path="/services/managed-it-services" element={<ManagedItServices />} />
            <Route path="/services/it-infrastructure-consulting" element={<ItInfrastructureConsulting />} />
            <Route path="/services/cyber-security" element={<CyberSecurity />} />
            <Route path="/services/elv-ibms" element={<ElvIbms />} />
            <Route path="/services/oem-software" element={<OemSoftware />} />
            <Route path="/services/pps" element={<Pps />} />
            <Route path="/services/maintenance-support" element={<MaintenanceSupport />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </SiteProvider>
  );
}
