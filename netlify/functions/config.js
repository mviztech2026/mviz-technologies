// Use Netlify environment variables for storage
const defaultConfig = {
  email: "support@mvizindia.com",
  phone: "+91 065422201234"
};

exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod === 'GET') {
    // Return config from env vars or defaults
    const config = {
      email: process.env.SITE_EMAIL || defaultConfig.email,
      phone: process.env.SITE_PHONE || defaultConfig.phone
    };
    
    return {
      statusCode: 200,
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: JSON.stringify(config)
    };
  }

  if (event.httpMethod === 'POST') {
    const authHeader = event.headers.authorization || event.headers.Authorization;
    const adminPassword = process.env.ADMIN_PASSWORD || 'mviz2024';

    if (authHeader !== `Bearer ${adminPassword}`) {
      return {
        statusCode: 401,
        headers: { ...headers, 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Unauthorized' })
      };
    }

    try {
      const config = JSON.parse(event.body);
      
      return {
        statusCode: 200,
        headers: { ...headers, 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          success: true, 
          config: config,
          note: 'Update SITE_EMAIL and SITE_PHONE in Netlify dashboard for persistence'
        })
      };
    } catch (error) {
      return {
        statusCode: 500,
        headers: { ...headers, 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Failed to process' })
      };
    }
  }

  return {
    statusCode: 405,
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify({ error: 'Method not allowed' })
  };
};
