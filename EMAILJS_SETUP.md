# EmailJS Setup Guide for Contact Form

This guide will help you set up EmailJS to enable working email functionality in your contact form.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Set up Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the setup instructions for your provider
5. Note down the **Service ID** (e.g., "service_abc123")

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Design your template with these variables:
   ```
   From: {{from_name}} <{{from_email}}>
   Subject: {{subject}}
   
   Hi Yuvaraj,
   
   You have received a new message from your portfolio contact form:
   
   Name: {{from_name}}
   Email: {{from_email}}
   Subject: {{subject}}
   
   Message:
   {{message}}
   
   ---
   This message was sent from your portfolio website contact form.
   ```
4. Save and note down the **Template ID** (e.g., "template_xyz789")

## Step 4: Get Public Key

1. Go to **Account** in your dashboard
2. Find your **Public Key** (e.g., "abcdef123456")

## Step 5: Update Environment Variables

Update your `.env.local` file with your actual values:

```env
REACT_APP_EMAILJS_SERVICE_ID=service_abc123
REACT_APP_EMAILJS_TEMPLATE_ID=template_xyz789
REACT_APP_EMAILJS_PUBLIC_KEY=abcdef123456
```

## Step 6: Restart Development Server

After updating the environment variables, restart your development server:

```bash
npm start
```

## Security Notes

- EmailJS public keys are safe to expose in frontend code
- EmailJS rate limits prevent spam (default: 200 emails/month on free plan)
- Your actual email credentials remain secure on EmailJS servers
- Consider upgrading to a paid plan for higher limits in production

## Testing

1. Fill out the contact form on your website
2. Check your email for the message
3. Verify the form shows success/error messages appropriately

## Troubleshooting

- **Environment variables not working**: Make sure to restart the development server
- **Template not found**: Verify the Template ID in your EmailJS dashboard
- **Service not found**: Check the Service ID and ensure the service is active
- **403 Forbidden**: Verify your Public Key and check EmailJS dashboard for any restrictions

## Free Plan Limits

- 200 emails per month
- 2 email services
- 1 email template
- Basic support

Consider upgrading if you need higher limits for production use.
