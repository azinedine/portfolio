# EmailJS Template Setup Guide

This guide will help you set up the professional email template for receiving contact form submissions through EmailJS.

## 📧 Template File Location
The HTML email template is located at: `/src/templates/email-template.html`

## 🚀 EmailJS Setup Instructions

### Step 1: EmailJS Dashboard Setup
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Sign in to your account
3. Navigate to **Email Templates** section
4. Click **Create New Template**

### Step 2: Template Configuration
1. **Template Name**: `Portfolio Contact Form Template`
2. **Template ID**: `template_portfolio_contact` (save this for your environment variables)
3. **Subject Line**: `New Contact: {{subject}} - from {{from_name}}`

### Step 3: Template Variables Mapping

The template uses the following variables that match your contact form:

#### Required Variables (from your form):
- `{{from_name}}` - Contact's full name
- `{{from_email}}` - Contact's email address  
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{budget}}` - Selected budget range
- `{{reply_to}}` - Reply-to email address

#### Auto-generated Variables (add these in EmailJS):
- `{{submission_date}}` - Auto: Current date
- `{{submission_time}}` - Auto: Current time
- `{{to_email}}` - Your email address (amarichezineddine@gmail.com)

### Step 4: HTML Template Setup
1. In EmailJS template editor, switch to **HTML** mode
2. Copy the entire content from `/src/templates/email-template.html`
3. Paste it into the HTML editor
4. Click **Save Template**

### Step 5: Test Template
1. Use the **Test** feature in EmailJS dashboard
2. Fill in sample data for all variables
3. Send a test email to verify formatting

### Step 6: Environment Variables Update
Update your `.env.local` file:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_portfolio_contact
NEXT_PUBLIC_EMAILJS_PUBLIC=your_public_key
```

## 🎨 Template Features

### Visual Design
- **Professional Layout**: Clean, modern design with proper spacing
- **Responsive**: Works on desktop and mobile email clients
- **Brand Colors**: Uses your portfolio's color scheme (purple gradient)
- **Typography**: System fonts for maximum compatibility

### Information Organization
- **Header Section**: Clear identification of the email source
- **Contact Grid**: Organized display of sender information
- **Message Section**: Highlighted message content with proper formatting
- **Metadata**: Submission details and tracking information
- **Quick Actions**: Direct reply and meeting scheduling buttons

### Email Client Compatibility
- **Gmail**: Full support including CSS styles
- **Outlook**: Compatible with most features
- **Apple Mail**: Full support
- **Mobile Clients**: Responsive design included

## 🔧 Customization Options

### Priority Levels
You can customize priority based on budget range by modifying the EmailJS template:

**High Priority** (Budget: dzd50k+):
```html
<span class="priority-indicator priority-high">High</span>
```

**Medium Priority** (Budget: dzd25k-dzd50k):
```html
<span class="priority-indicator priority-medium">Medium</span>
```

**Low Priority** (Budget: under dzd25k):
```html
<span class="priority-indicator priority-low">Low</span>
```

### Branding Customization
To match your exact brand colors, update these CSS variables in the template:
```css
/* Primary brand color */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Accent colors */
border-left: 4px solid #667eea; /* Info items */
border-left: 4px solid #10b981; /* Message section */
```

### Additional Features
You can add more dynamic content by including these EmailJS auto-variables:
- `{{user_agent}}` - Browser information
- `{{user_ip}}` - User's IP address (if needed)
- `{{form_url}}` - URL where form was submitted

## 📱 Mobile Optimization

The template includes responsive design with:
- **Flexible Grid**: Adapts to screen size
- **Touch-Friendly Buttons**: Proper sizing for mobile taps
- **Readable Typography**: Optimized for small screens
- **Simplified Layout**: Stack elements vertically on mobile

## ⚡ Performance Notes

- **Inline CSS**: All styles are inline for maximum email client compatibility
- **Optimized Images**: Uses emoji instead of image files for faster loading
- **Minimal External Dependencies**: No external stylesheets or scripts

## 🔒 Security Considerations

- **No JavaScript**: Template uses only HTML/CSS for security
- **Sanitized Variables**: EmailJS automatically escapes template variables
- **No External Resources**: All styling is self-contained

## 🎯 Expected Result

When someone submits your contact form, you'll receive a professionally formatted email with:

1. **Clear Header**: Immediately identifies the email source
2. **Organized Information**: All form data in an easy-to-read layout
3. **Highlighted Message**: The main message stands out visually
4. **Quick Actions**: Direct links to reply or schedule meetings
5. **Professional Footer**: Maintains your brand image

This template will help you:
- **Respond Faster**: All information at a glance
- **Look Professional**: Branded, well-designed emails
- **Stay Organized**: Consistent format for all inquiries
- **Take Action**: Quick reply and scheduling options