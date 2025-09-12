// EmailJS configuration and utilities
export const checkEmailJSConfiguration = (): boolean => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC;
  
  return !!(serviceId && templateId && publicKey && 
         serviceId !== 'your-service-id' && 
         templateId !== 'your-template-id' && 
         publicKey !== 'your-public-key');
}