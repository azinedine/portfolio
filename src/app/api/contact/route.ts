import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  let body: Record<string, string> = {};
  
  try {
    body = await request.json();
    const { name, email, subject, message, budget } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Using Web3Forms (free service) - replace with your access key
    const web3formsAccessKey = process.env.WEB3FORMS_ACCESS_KEY || 'your-access-key-here';
    
    const formData = new FormData();
    formData.append('access_key', web3formsAccessKey);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('subject', `Portfolio Contact: ${subject}`);
    formData.append('message', `
Contact Details:
- Name: ${name}
- Email: ${email}
- Subject: ${subject}
${budget ? `- Budget: ${budget}` : ''}

Message:
${message}

---
This message was sent from your portfolio contact form.
    `);
    formData.append('from_name', 'Portfolio Contact Form');
    formData.append('reply_to', email);

    // Send to Web3Forms
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const result = await response.json();

    if (result.success) {
      return NextResponse.json(
        { message: 'Message sent successfully' },
        { status: 200 }
      );
    } else {
      throw new Error('Failed to send message via Web3Forms');
    }

  } catch (error) {
    console.error('Contact form error:', error);
    
    // Fallback: Log the message for manual processing
    console.log('Contact form submission (fallback):', {
      name: body.name,
      email: body.email,
      subject: body.subject,
      message: body.message,
      budget: body.budget,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json(
      { error: 'Failed to send message. Please try again or contact me directly.' },
      { status: 500 }
    );
  }
}