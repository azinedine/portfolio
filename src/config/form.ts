// Form configuration and validation rules
export const FORM_VALIDATION_RULES = {
  name: {
    minLength: 2,
    maxLength: 50,
  },
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  subject: {
    minLength: 5,
    maxLength: 100,
  },
  message: {
    minLength: 10,
    maxLength: 2000,
  },
} as const

export const FORM_SUCCESS_TIMEOUT = 5000 // 5 seconds

export const CONTACT_FORM_FIELDS = [
  { name: 'name', label: 'Full Name', type: 'text', required: true },
  { name: 'email', label: 'Email Address', type: 'email', required: true },
  { name: 'subject', label: 'Subject', type: 'text', required: true },
  { name: 'budget', label: 'Budget Range', type: 'select', required: false },
  { name: 'message', label: 'Message', type: 'textarea', required: true },
] as const