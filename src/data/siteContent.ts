// Site-wide editable content configuration
// This file serves as the default content, can be updated via admin panel

export interface SiteContent {
  contact: {
    email: string;
    phone: string;
    phoneDisplay: string;
    hours: string;
    headquarters: {
      address: string[];
      city: string;
      state: string;
      pincode: string;
      mapsLink: string;
    };
    branch: {
      address: string[];
      city: string;
      state: string;
      pincode: string;
      mapsLink: string;
    };
  };
  privacy: {
    lastUpdated: string;
    sections: Array<{
      title: string;
      content: string | string[];
    }>;
  };
  terms: {
    lastUpdated: string;
    sections: Array<{
      title: string;
      content: string;
    }>;
  };
  footer: {
    companyName: string;
    tagline: string;
    socialLinks: {
      linkedin?: string;
      twitter?: string;
      facebook?: string;
      instagram?: string;
    };
  };
}

export const defaultContent: SiteContent = {
  contact: {
    email: "support@mvizindia.com",
    phone: "+91 9960925523",
    phoneDisplay: "+91 9960925523",
    hours: "Mon - Fri, 9am - 6pm IST",
    headquarters: {
      address: ["A-1101, Mainland Valencia", "Kesnand Road, Vagholi"],
      city: "Pune",
      state: "Maharashtra",
      pincode: "412207",
      mapsLink: "https://maps.app.goo.gl/vsgPwkT7itJ7ajaf7"
    },
    branch: {
      address: ["Plot No 15, Diamond City", "Bandhgora, Pinda Joda"],
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
      },
      {
        title: "3. How We Use Your Information",
        content: [
          "To respond to your inquiries and provide requested services",
          "To improve our website, products, and services",
          "To send periodic emails regarding our services or updates",
          "To comply with legal obligations and enforce our policies",
          "To analyze usage patterns and optimize user experience"
        ]
      },
      {
        title: "4. Data Sharing & Disclosure",
        content: "We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting business, provided they agree to keep your information confidential."
      },
      {
        title: "5. Data Security",
        content: "We implement industry-standard security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security."
      },
      {
        title: "6. Your Rights",
        content: [
          "Access, correct, or delete your personal data",
          "Opt out of marketing communications",
          "Request a copy of the data we hold about you",
          "Withdraw consent where processing is based on consent"
        ]
      },
      {
        title: "7. Third-Party Links",
        content: "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit."
      },
      {
        title: "8. Changes to This Policy",
        content: "We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically."
      },
      {
        title: "9. Contact Us",
        content: "If you have any questions about this Privacy Policy or our data practices, please contact us using the information provided on our contact page."
      }
    ]
  },
  terms: {
    lastUpdated: "2024-01-01",
    sections: [
      {
        title: "1. Acceptance of Terms",
        content: "By accessing or using the MVIZ Technologies website, you agree to be bound by these Terms of Service and all applicable laws and regulations."
      },
      {
        title: "2. Intellectual Property",
        content: "The content, features, and functionality of this website are owned by MVIZ Technologies and are protected by international copyright, trademark, and other intellectual property laws."
      },
      {
        title: "3. Use License",
        content: "Permission is granted to temporarily download one copy of the materials on MVIZ Technologies' website for personal, non-commercial transitory viewing only."
      },
      {
        title: "4. Disclaimer",
        content: "The materials on MVIZ Technologies' website are provided on an 'as is' basis. MVIZ Technologies makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."
      },
      {
        title: "5. Governing Law",
        content: "These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in Pune, Maharashtra, India."
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

const STORAGE_KEY = 'mviz_site_content';

export function getSiteContent(): SiteContent {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    return { ...defaultContent, ...JSON.parse(stored) };
  }
  return defaultContent;
}

export function saveSiteContent(content: SiteContent): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
}

export function resetSiteContent(): void {
  localStorage.removeItem(STORAGE_KEY);
}

export function exportSiteContent(): string {
  return JSON.stringify(getSiteContent(), null, 2);
}

export function importSiteContent(jsonString: string): boolean {
  try {
    const parsed = JSON.parse(jsonString);
    saveSiteContent(parsed);
    return true;
  } catch {
    return false;
  }
}
