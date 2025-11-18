# EmailJS Setup Guide

This project uses EmailJS for reliable email delivery with mailto as fallback. Follow these steps to configure email sending.

## 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account using **any email address** (you can use abiola@mieladigital.com or your personal email)
3. Verify your email address

**Note**: You don't need to use contact@mieladigital.com to create the EmailJS account. The account email is just for login - the actual recipient email is configured separately in the templates.

## 2. Create Email Service

1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 3. Create Email Templates

Create two email templates:

### Client Template
- **Template Name**: `client_inquiry`
- **Subject**: `New Client Inquiry from {{from_name}}`
- **Content**:
```
Hello,

You have received a new client inquiry from your website.

Name: {{from_name}}
Company: {{company}}
Email: {{from_email}}
Type: {{inquiry_type}}

Message:
{{message}}

---
Sent from mieladigital.com
```

### Provider Template
- **Template Name**: `provider_inquiry`
- **Subject**: `New Partnership Inquiry from {{from_name}}`
- **Content**:
```
Hello,

You have received a new partnership inquiry from your website.

Name: {{from_name}}
Company: {{company}}
Email: {{from_email}}
Type: {{inquiry_type}}

Message:
{{message}}

---
Sent from mieladigital.com
```

## 4. Get Your Credentials

From your EmailJS dashboard, collect:
- **Service ID** (from Email Services)
- **Template IDs** (from Email Templates)
- **Public Key** (from Account > API Keys)

## 5. Update Configuration

Edit `/src/config/emailjs.ts` with your actual credentials:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id_here',
  TEMPLATES: {
    CLIENT: 'your_client_template_id',
    PROVIDER: 'your_provider_template_id'
  },
  PUBLIC_KEY: 'your_public_key_here',
  // Email automatically switches based on environment:
  // Development: abiola@mieladigital.com
  // Production: contact@mieladigital.com
  TO_EMAIL: process.env.NODE_ENV === 'production' ? 'contact@mieladigital.com' : 'abiola@mieladigital.com'
};
```

## 6. Test the Integration

### Development Testing
1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit both forms
4. Check if emails are received at `abiola@mieladigital.com`

### Production Testing
1. Build and deploy your site: `npm run build`
2. Test the forms on the live site
3. Check if emails are received at `contact@mieladigital.com`

**Environment Switching**: The system automatically uses the correct email based on environment - no manual changes needed!

## Troubleshooting

- **Emails not sending**: Check browser console for errors
- **Template variables not working**: Ensure template variables match exactly
- **CORS issues**: Make sure your domain is added to EmailJS allowed origins
- **Rate limits**: Free plan has limits, consider upgrading for production

## Fallback Behavior

If EmailJS fails (network issues, configuration problems), the system automatically falls back to mailto links, ensuring users can always send inquiries.