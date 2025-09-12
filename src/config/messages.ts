// Error messages for form validation and submission
export const ERROR_MESSAGES = {
  // Field-specific validation messages
  NAME_REQUIRED: 'Name is required',
  NAME_TOO_SHORT: 'Name must be at least 2 characters',
  NAME_TOO_LONG: 'Name must be less than 50 characters',
  
  EMAIL_REQUIRED: 'Email is required',
  EMAIL_INVALID: 'Please enter a valid email address',
  
  SUBJECT_REQUIRED: 'Subject is required',
  SUBJECT_TOO_SHORT: 'Subject must be at least 5 characters',
  SUBJECT_TOO_LONG: 'Subject must be less than 100 characters',
  
  MESSAGE_REQUIRED: 'Message is required',
  MESSAGE_TOO_SHORT_FORM: 'Message must be at least 10 characters',
  MESSAGE_TOO_LONG: 'Message must be less than 2000 characters',
  
  // General messages
  FORM_VALIDATION_ERROR: 'Please fix the errors above and try again.',
  EMAIL_SERVICE_NOT_CONFIGURED: 'Email service is not configured. Please contact me directly at amarichezineddine@gmail.com',
  EMAIL_SEND_FAILED: 'Failed to send message. Please try again or contact me directly at amarichezineddine@gmail.com',
  
  // Legacy messages for backward compatibility
  REQUIRED_FIELD: 'This field is required',
  INVALID_EMAIL: 'Please enter a valid email address',
  FORM_SUBMIT_ERROR: 'Sorry, there was an error sending your message. Please try again.',
  FORM_SUBMIT_SUCCESS: 'Thank you for your message! I\'ll get back to you soon.',
} as const