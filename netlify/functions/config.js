// Supabase client for Netlify function
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

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

  // If no Supabase config, return defaults
  if (!supabaseUrl || !supabaseKey) {
    if (event.httpMethod === 'GET') {
      return {
        statusCode: 200,
        headers: { ...headers, 'Content-Type': 'application/json' },
        body: JSON.stringify(defaultConfig)
      };
    }
    return {
      statusCode: 503,
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Database not configured' })
    };
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  if (event.httpMethod === 'GET') {
    const { data, error } = await supabase
      .from('site_config')
      .select('*')
      .eq('id', 1)
      .single();
    
    if (error || !data) {
      return {
        statusCode: 200,
        headers: { ...headers, 'Content-Type': 'application/json' },
        body: JSON.stringify(defaultConfig)
      };
    }

    return {
      statusCode: 200,
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: data.email, phone: data.phone })
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
      
      const { error } = await supabase
        .from('site_config')
        .upsert({ 
          id: 1, 
          email: config.email, 
          phone: config.phone,
          updated_at: new Date().toISOString()
        });

      if (error) throw error;

      return {
        statusCode: 200,
        headers: { ...headers, 'Content-Type': 'application/json' },
        body: JSON.stringify({ success: true, config })
      };
    } catch (error) {
      return {
        statusCode: 500,
        headers: { ...headers, 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Failed to save', details: error.message })
      };
    }
  }

  return {
    statusCode: 405,
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify({ error: 'Method not allowed' })
  };
};
