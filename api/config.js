// Vercel Serverless Function - Site Config
import fs from 'fs';
import path from 'path';

const CONFIG_FILE = path.join(process.cwd(), 'content', 'site-config.json');

const defaultConfig = {
  email: "support@mvizindia.com",
  phone: "+91 065422201234"
};

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    try {
      if (fs.existsSync(CONFIG_FILE)) {
        const data = fs.readFileSync(CONFIG_FILE, 'utf8');
        const config = JSON.parse(data);
        return res.status(200).json({ ...defaultConfig, ...config });
      }
      return res.status(200).json(defaultConfig);
    } catch (error) {
      return res.status(200).json(defaultConfig);
    }
  }

  if (req.method === 'POST') {
    const authHeader = req.headers.authorization;
    const adminPassword = process.env.ADMIN_PASSWORD || 'mviz2024';

    if (authHeader !== `Bearer ${adminPassword}`) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
      const config = req.body;
      // Ensure directory exists
      const dir = path.dirname(CONFIG_FILE);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2));
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error saving config:', error);
      return res.status(500).json({ error: 'Failed to save' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
