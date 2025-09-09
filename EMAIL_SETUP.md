# EmailJS Setup Guide

## Contact Form Email Integration

Your contact form is now set up to send emails using EmailJS! This is a client-side email service that doesn't require any server setup.

## EmailJS Setup (Recommended - Free)

1. **Create EmailJS Account:**
   - Go to [EmailJS.com](https://www.emailjs.com/)
   - Sign up for a free account
   - Verify your email address

2. **Set up Email Service:**
   - Go to "Email Services" in your dashboard
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions for your provider

3. **Create Email Template:**
   - Go to "Email Templates" in your dashboard
   - Click "Create New Template"
   - Use this template content:

   **Subject:** Portfolio Contact: {{subject}}
   
   **Body:**
   ```
   New Contact Form Submission
   
   Contact Details:
   - Name: {{from_name}}
   - Email: {{from_email}}
   - Subject: {{subject}}
   - Budget: {{budget}}
   
   Message:
   {{message}}
   
   ---
   This message was sent from your portfolio contact form.
   Reply to: {{reply_to}}
   ```

4. **Get Your Credentials:**
   - Note down your Service ID, Template ID, and Public Key
   - These are found in your EmailJS dashboard

5. **Set up Environment Variables:**
   - Create a `.env.local` file in your project root
   - Add your EmailJS credentials:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your-service-id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your-template-id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your-public-key
   ```

6. **Test the Form:**
   - Fill out and submit the contact form
   - Check your email for the message

## Current Features

✅ **Client-Side Email**: No server setup required
✅ **Form Validation**: Required fields are validated
✅ **Error Handling**: Shows user-friendly error messages
✅ **Success Feedback**: Confirms when message is sent
✅ **Responsive Design**: Works on all devices
✅ **Professional Formatting**: Well-formatted email templates
✅ **Free Service**: EmailJS free tier includes 200 emails/month

## Testing

1. Fill out the contact form on your website
2. Check your email for the message
3. Test error handling by submitting invalid data
4. Verify all form fields are included in the email

## Troubleshooting

- **Form not sending**: Check your EmailJS credentials in `.env.local`
- **No emails received**: Check spam folder and verify EmailJS service setup
- **Build errors**: Ensure all environment variables are set correctly
- **Template errors**: Verify your EmailJS template uses the correct variable names

## EmailJS Benefits

- **No Server Required**: Works entirely client-side
- **Free Tier**: 200 emails per month for free
- **Easy Setup**: Simple configuration process
- **Multiple Providers**: Supports Gmail, Outlook, Yahoo, etc.
- **Template System**: Easy to customize email formatting

## Security Notes

- Never commit your `.env.local` file to version control
- EmailJS handles security on their end
- Public keys are safe to expose (they're meant to be public)
- Consider upgrading to paid plan for production use

Your contact form is now fully functional with EmailJS! 🎉
