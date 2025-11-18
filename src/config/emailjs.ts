// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  // Your EmailJS Service ID
  SERVICE_ID: 'service_9ksdmdh',

  // Your EmailJS Template IDs
  TEMPLATES: {
    CLIENT: 'template_y4mk8lg',
    PROVIDER: 'template_3639v78'
  },

  // Your EmailJS Public Key
  PUBLIC_KEY: 'rgxieDjRGEUpWGnQt',

  // Recipient email - switches based on environment
  TO_EMAIL: process.env.NODE_ENV === 'production' ? 'contact@mieladigital.com' : 'abiola@mieladigital.com'
};

// EmailJS Setup Instructions:
// 1. Go to https://www.emailjs.com/ and create an account
// 2. Create a new service (Gmail, Outlook, etc.)
// 3. Create email templates with these variables:
//    - {{from_name}}, {{from_email}}, {{company}}, {{message}}, {{inquiry_type}}, {{to_email}}
// 4. Get your Service ID, Template IDs, and Public Key
// 5. Replace the placeholder values above with your actual credentials