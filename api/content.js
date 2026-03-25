// Vercel Serverless Function - Get content
import fs from 'fs';
import path from 'path';

const CONTENT_FILE = path.join(process.cwd(), 'content', 'site-content.json');

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    try {
      const data = fs.readFileSync(CONTENT_FILE, 'utf8');
      const content = JSON.parse(data);
      return res.status(200).json(content);
    } catch (error) {
      console.error('Error reading content:', error);
      // Return default content if file doesn't exist
      return res.status(200).json({
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
        privacy: { sections: [], lastUpdated: "2024-01-01" },
        terms: { sections: [], lastUpdated: "2024-01-01" },
        footer: {
          companyName: "MVIZ Technologies",
          tagline: "Innovating Tomorrow's Technology Solutions Today"
        }
      });
    }
  }

  if (req.method === 'POST') {
    const authHeader = req.headers.authorization;
    const adminPassword = process.env.ADMIN_PASSWORD || 'mviz2024';

    if (authHeader !== `Bearer ${adminPassword}`) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
      const newContent = req.body;
      fs.writeFileSync(CONTENT_FILE, JSON.stringify(newContent, null, 2));
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error saving content:', error);
      return res.status(500).json({ error: 'Failed to save content' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
