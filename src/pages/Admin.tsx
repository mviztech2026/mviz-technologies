import { useState, useEffect, type ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { Save, Download, Upload, Lock, Unlock, Phone, Mail, MapPin, FileText, Settings } from 'lucide-react';

interface ContactData {
  email: string;
  phone: string;
  hours: string;
  headquarters: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pincode: string;
    mapsLink: string;
  };
  branch: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pincode: string;
    mapsLink: string;
  };
}

interface Section {
  title: string;
  content: string | string[];
}

interface SiteData {
  contact: ContactData;
  privacy: {
    lastUpdated: string;
    sections: Section[];
  };
  terms: {
    lastUpdated: string;
    sections: Section[];
  };
  footer: {
    companyName: string;
    tagline: string;
    socialLinks: {
      linkedin: string;
      twitter: string;
      facebook: string;
      instagram: string;
    };
  };
}

const defaultData: SiteData = {
  contact: {
    email: "support@mvizindia.com",
    phone: "+91 9960925523",
    hours: "Mon - Fri, 9am - 6pm IST",
    headquarters: {
      line1: "A-1101, Mainland Valencia",
      line2: "Kesnand Road, Vagholi",
      city: "Pune",
      state: "Maharashtra",
      pincode: "412207",
      mapsLink: "https://maps.app.goo.gl/vsgPwkT7itJ7ajaf7"
    },
    branch: {
      line1: "Plot No 15, Diamond City",
      line2: "Bandhgora, Pinda Joda",
      city: "Bokaro",
      state: "Jharkhand",
      pincode: "827013",
      mapsLink: "https://maps.app.goo.gl/19Q8qhuzek4G2ZSN8"
    }
  },
  privacy: {
    lastUpdated: "2024-01-01",
    sections: [
      {
        title: "1. Introduction",
        content: "MVIZ Technologies (\"we,\" \"our,\" or \"us\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services."
      },
      {
        title: "2. Information We Collect",
        content: [
          "Personal Information: Name, email address, phone number, company name, and other details you provide through our contact forms.",
          "Usage Data: Information about how you interact with our website, including IP address, browser type, pages visited, and time spent on pages.",
          "Cookies & Tracking: We use cookies and similar technologies to enhance your browsing experience and analyze website traffic."
        ]
      }
    ]
  },
  terms: {
    lastUpdated: "2024-01-01",
    sections: [
      {
        title: "1. Acceptance of Terms",
        content: "By accessing or using the MVIZ Technologies website, you agree to be bound by these Terms of Service and all applicable laws and regulations."
      }
    ]
  },
  footer: {
    companyName: "MVIZ Technologies",
    tagline: "Innovating Tomorrow's Technology Solutions Today",
    socialLinks: {
      linkedin: "",
      twitter: "",
      facebook: "",
      instagram: ""
    }
  }
};

export const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'contact' | 'privacy' | 'terms' | 'footer'>('contact');
  const [data, setData] = useState<SiteData>(defaultData);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('mviz_site_data');
    if (saved) {
      setData(JSON.parse(saved));
    }
  }, []);

  const handleLogin = () => {
    if (password === 'mviz2024') {
      setIsAuthenticated(true);
      setMessage('');
    } else {
      setMessage('Invalid password');
    }
  };

  const handleSave = () => {
    localStorage.setItem('mviz_site_data', JSON.stringify(data));
    setMessage('Changes saved! Export the file and send to developer to update the live site.');
    setTimeout(() => setMessage(''), 5000);
  };

  const handleExport = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'site-content.json';
    a.click();
    URL.revokeObjectURL(url);
    setMessage('Site content exported! Send this file to your developer to update the website.');
  };

  const handleImport = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const imported = JSON.parse(event.target?.result as string);
          setData(imported);
          localStorage.setItem('mviz_site_data', JSON.stringify(imported));
          setMessage('Content imported successfully!');
        } catch {
          setMessage('Invalid file format');
        }
      };
      reader.readAsText(file);
    }
  };

  const updateContact = (field: string, value: string) => {
    setData(prev => ({ ...prev, contact: { ...prev.contact, [field]: value } }));
  };

  const updateAddress = (type: 'headquarters' | 'branch', field: string, value: string) => {
    setData(prev => ({
      ...prev,
      contact: {
        ...prev.contact,
        [type]: { ...prev.contact[type], [field]: value }
      }
    }));
  };

  const updateFooter = (field: string, value: string) => {
    setData(prev => ({ ...prev, footer: { ...prev.footer, [field]: value } }));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4"
        >
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-2xl font-black text-primary">Admin Access</h1>
            <p className="text-slate-500">Enter password to manage site content</p>
          </div>
          
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            placeholder="Enter password"
            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all mb-4"
          />
          
          {message && <p className="text-red-500 text-sm mb-4">{message}</p>}
          
          <button
            onClick={handleLogin}
            className="w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors"
          >
            Login
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Settings className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-black text-primary">Site Admin</h1>
              <p className="text-xs text-slate-500">Manage website content</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handleExport}
              className="flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent font-semibold rounded-lg hover:bg-accent/20 transition-colors"
            >
              <Download className="w-4 h-4" />
              Export
            </button>
            <label className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200 transition-colors cursor-pointer">
              <Upload className="w-4 h-4" />
              Import
              <input type="file" accept=".json" onChange={handleImport} className="hidden" />
            </label>
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Save className="w-4 h-4" />
              Save
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          {[
            { id: 'contact', label: 'Contact Info', icon: Phone },
            { id: 'privacy', label: 'Privacy Policy', icon: FileText },
            { id: 'terms', label: 'Terms of Service', icon: FileText },
            { id: 'footer', label: 'Footer', icon: Settings }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-primary text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-100'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl mb-6"
          >
            {message}
          </motion.div>
        )}

        {/* Content Forms */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          {activeTab === 'contact' && (
            <div className="space-y-6">
              <h2 className="text-xl font-black text-primary flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Contact Information
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={data.contact.email}
                    onChange={(e) => updateContact('email', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-primary outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone</label>
                  <input
                    type="text"
                    value={data.contact.phone}
                    onChange={(e) => updateContact('phone', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-primary outline-none"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Business Hours</label>
                  <input
                    type="text"
                    value={data.contact.hours}
                    onChange={(e) => updateContact('hours', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-primary outline-none"
                  />
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-black text-primary mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Headquarters Address
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    placeholder="Address Line 1"
                    value={data.contact.headquarters.line1}
                    onChange={(e) => updateAddress('headquarters', 'line1', e.target.value)}
                    className="px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-primary outline-none"
                  />
                  <input
                    placeholder="Address Line 2"
                    value={data.contact.headquarters.line2}
                    onChange={(e) => updateAddress('headquarters', 'line2', e.target.value)}
                    className="px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-primary outline-none"
                  />
                  <input
                    placeholder="City"
                    value={data.contact.headquarters.city}
                    onChange={(e) => updateAddress('headquarters', 'city', e.target.value)}
                    className="px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-primary outline-none"
                  />
                  <input
                    placeholder="State"
                    value={data.contact.headquarters.state}
                    onChange={(e) => updateAddress('headquarters', 'state', e.target.value)}
                    className="px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-primary outline-none"
                  />
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-black text-accent mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Branch Office Address
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    placeholder="Address Line 1"
                    value={data.contact.branch.line1}
                    onChange={(e) => updateAddress('branch', 'line1', e.target.value)}
                    className="px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-primary outline-none"
                  />
                  <input
                    placeholder="Address Line 2"
                    value={data.contact.branch.line2}
                    onChange={(e) => updateAddress('branch', 'line2', e.target.value)}
                    className="px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-primary outline-none"
                  />
                  <input
                    placeholder="City"
                    value={data.contact.branch.city}
                    onChange={(e) => updateAddress('branch', 'city', e.target.value)}
                    className="px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-primary outline-none"
                  />
                  <input
                    placeholder="State"
                    value={data.contact.branch.state}
                    onChange={(e) => updateAddress('branch', 'state', e.target.value)}
                    className="px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-primary outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'footer' && (
            <div className="space-y-6">
              <h2 className="text-xl font-black text-primary">Footer Settings</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name</label>
                  <input
                    type="text"
                    value={data.footer.companyName}
                    onChange={(e) => updateFooter('companyName', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-primary outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Tagline</label>
                  <input
                    type="text"
                    value={data.footer.tagline}
                    onChange={(e) => updateFooter('tagline', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-primary outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {(activeTab === 'privacy' || activeTab === 'terms') && (
            <div className="space-y-6">
              <h2 className="text-xl font-black text-primary">
                {activeTab === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
              </h2>
              <p className="text-slate-500">
                Edit {activeTab === 'privacy' ? 'privacy policy' : 'terms'} content here. 
                Each section will appear on the respective page.
              </p>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> For full editing of Privacy Policy and Terms content, 
                  please use the Export button, edit the JSON file, and send to your developer.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <h3 className="font-black text-blue-900 mb-2">How to update the live website:</h3>
          <ol className="list-decimal list-inside space-y-2 text-blue-800 text-sm">
            <li>Make your changes in the forms above</li>
            <li>Click <strong>Save</strong> to store changes</li>
            <li>Click <strong>Export</strong> to download the site-content.json file</li>
            <li>Send the exported file to your developer (Sanju)</li>
            <li>Developer will update the site and redeploy</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Admin;
