import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Save, Lock, Mail, Phone, CheckCircle } from 'lucide-react';

interface Config {
  email: string;
  phone: string;
}

const defaultConfig: Config = {
  email: "support@mvizindia.com",
  phone: "+91 065422201234"
};

export const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [config, setConfig] = useState<Config>(defaultConfig);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const ADMIN_PASSWORD = 'mviz2024';

  // Load current config on mount
  useEffect(() => {
    fetch('/.netlify/functions/config')
      .then(res => res.json())
      .then(data => setConfig({ ...defaultConfig, ...data }))
      .catch(() => setMessage('Could not load current settings'));
  }, []);

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setMessage('');
    } else {
      setMessage('Invalid password');
    }
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const response = await fetch('/.netlify/functions/config', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${password}`
        },
        body: JSON.stringify(config)
      });

      if (response.ok) {
        setMessage('✅ Saved! All pages updated automatically.');
      } else {
        setMessage('❌ Failed to save. Try again.');
      }
    } catch (error) {
      setMessage('❌ Error saving. Check connection.');
    }
    setLoading(false);
    setTimeout(() => setMessage(''), 5000);
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
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h1 className="text-2xl font-black text-primary mb-2">Edit Contact Info</h1>
          <p className="text-slate-500 mb-6">Changes appear automatically across the entire site</p>
          
          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email Address
            </label>
            <input
              type="email"
              value={config.email}
              onChange={(e) => setConfig({ ...config, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-primary outline-none"
            />
            <p className="text-xs text-slate-400 mt-1">Used in: Contact page, Footer, all email links</p>
          </div>

          {/* Phone */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Phone Number
            </label>
            <input
              type="text"
              value={config.phone}
              onChange={(e) => setConfig({ ...config, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-primary outline-none"
            />
            <p className="text-xs text-slate-400 mt-1">Used in: Contact page, Footer, all phone links</p>
          </div>

          {message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700"
            >
              {message}
            </motion.div>
          )}

          <button
            onClick={handleSave}
            disabled={loading}
            className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 disabled:opacity-50 flex items-center justify-center gap-2 text-lg"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <Save className="w-5 h-5" />
            )}
            {loading ? 'Saving...' : 'Save Changes'}
          </button>

          <div className="mt-6 p-4 bg-blue-50 rounded-xl">
            <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              What gets updated?
            </h3>
            <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
              <li>Contact page email & phone</li>
              <li>Footer contact info</li>
              <li>All "mailto" and "tel" links site-wide</li>
              <li>Instant update - no redeploy needed!</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Admin;
