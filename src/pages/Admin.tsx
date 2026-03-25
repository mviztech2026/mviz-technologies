import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Save, Lock, Mail, Phone } from 'lucide-react';

interface SiteData {
  footerEmail: string;
  footerPhone: string;
  contactEmail: string;
}

const defaultData: SiteData = {
  footerEmail: "support@mvizindia.com",
  footerPhone: "+91 065422201234",
  contactEmail: "support@mvizindia.com"
};

export const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [data, setData] = useState<SiteData>(defaultData);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const ADMIN_PASSWORD = 'mviz2024';

  useEffect(() => {
    const saved = localStorage.getItem('mviz_site_data');
    if (saved) {
      setData({ ...defaultData, ...JSON.parse(saved) });
    }
  }, []);

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setMessage('');
    } else {
      setMessage('Invalid password');
    }
  };

  const handleSave = () => {
    setLoading(true);
    localStorage.setItem('mviz_site_data', JSON.stringify(data));
    setLoading(false);
    setMessage('Changes saved! Export JSON and send to developer for deployment.');
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
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full mx-4"
        >
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-2xl font-black text-primary">Admin Login</h1>
          </div>
          
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            placeholder="Enter password"
            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-primary outline-none mb-4"
          />
          
          {message && <p className="text-red-500 text-sm mb-4">{message}</p>}
          
          <button
            onClick={handleLogin}
            className="w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90"
          >
            Login
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <h1 className="text-xl font-black text-primary mb-6">Edit Contact Info</h1>
          
          {/* Footer Email */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Footer Email
            </label>
            <input
              type="email"
              value={data.footerEmail}
              onChange={(e) => setData({ ...data, footerEmail: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-primary outline-none"
            />
          </div>

          {/* Footer Phone */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Footer Phone
            </label>
            <input
              type="text"
              value={data.footerPhone}
              onChange={(e) => setData({ ...data, footerPhone: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-primary outline-none"
            />
          </div>

          {/* Contact Page Email */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Contact Page Email
            </label>
            <input
              type="email"
              value={data.contactEmail}
              onChange={(e) => setData({ ...data, contactEmail: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-primary outline-none"
            />
          </div>

          {message && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm">
              {message}
            </div>
          )}

          <div className="flex gap-3">
            <button
              onClick={handleSave}
              disabled={loading}
              className="flex-1 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <Save className="w-4 h-4" />
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
            <button
              onClick={handleExport}
              className="px-4 py-3 bg-slate-100 text-slate-700 font-semibold rounded-xl hover:bg-slate-200"
            >
              Export JSON
            </button>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            After saving, click "Export JSON" and send the file to your developer to update the live website.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Admin;
