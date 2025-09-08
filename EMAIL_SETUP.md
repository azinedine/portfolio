# Email Setup Guide

## Contact Form Email Integration

Your contact form is now set up to send emails to your inbox! Here's how to complete the setup:

## Option 1: Web3Forms (Recommended - Free)

1. **Get your access key:**
   - Go to [Web3Forms.com](https://web3forms.com/)
   - Sign up for a free account
   - Create a new form and get your access key

2. **Set up environment variables:**
   - Create a `.env.local` file in your project root
   - Add your access key:
   ```
   WEB3FORMS_ACCESS_KEY=your-access-key-here
   ```

3. **Test the form:**
   - The form will now send emails to your registered email address
   - You'll receive both the contact form submission and an auto-reply

## Option 2: Alternative Email Services

If you prefer other services, you can modify `/src/app/api/contact/route.ts`:

### Formspree
- Sign up at [Formspree.io](https://formspree.io/)
- Replace the Web3Forms code with Formspree API calls

### EmailJS
- Sign up at [EmailJS.com](https://www.emailjs.com/)
- Use their client-side SDK instead of server-side API

### Custom SMTP
- Use Nodemailer with your email provider
- Add SMTP credentials to environment variables

## Current Features

✅ **Form Validation**: Required fields are validated
✅ **Error Handling**: Shows user-friendly error messages
✅ **Success Feedback**: Confirms when message is sent
✅ **Auto-reply**: Sends confirmation to the user
✅ **Responsive Design**: Works on all devices
✅ **Professional Formatting**: Well-formatted email templates

## Testing

1. Fill out the contact form on your website
2. Check your email for the message
3. Verify the user receives an auto-reply
4. Test error handling by submitting invalid data

## Troubleshooting

- **Form not sending**: Check your access key in `.env.local`
- **No emails received**: Check spam folder and verify email service setup
- **Build errors**: Ensure all environment variables are set correctly

## Security Notes

- Never commit your `.env.local` file to version control
- Use environment variables for all sensitive data
- Consider rate limiting for production use

Your contact form is now fully functional! 🎉
