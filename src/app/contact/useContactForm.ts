"use client";

import { useState, useCallback } from "react";
import emailjs from '@emailjs/browser';
import { FormData } from "./data";

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  budget?: string;
}

interface UseContactFormReturn {
  formData: FormData;
  errors: FormErrors;
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string | null;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  validateField: (name: string, value: string) => string | undefined;
  clearError: () => void;
  resetForm: () => void;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
  budget: ''
};

export const useContactForm = (): UseContactFormReturn => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateField = useCallback((name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        if (value.trim().length > 50) return 'Name must be less than 50 characters';
        return undefined;

      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return undefined;

      case 'subject':
        if (!value.trim()) return 'Subject is required';
        if (value.trim().length < 5) return 'Subject must be at least 5 characters';
        if (value.trim().length > 100) return 'Subject must be less than 100 characters';
        return undefined;

      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        if (value.trim().length > 2000) return 'Message must be less than 2000 characters';
        return undefined;

      default:
        return undefined;
    }
  }, []);

  const validateForm = useCallback((): FormErrors => {
    const newErrors: FormErrors = {};
    
    Object.keys(formData).forEach((key) => {
      const fieldName = key as keyof FormData;
      if (fieldName !== 'budget') { // Budget is optional
        const error = validateField(fieldName, formData[fieldName]);
        if (error) {
          newErrors[fieldName] = error;
        }
      }
    });

    return newErrors;
  }, [formData, validateField]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear field error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }

    // Clear general error
    if (error) {
      setError(null);
    }
  }, [errors, error]);

  const isEmailJSConfigured = useCallback((): boolean => {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    
    return !!(serviceId && templateId && publicKey && 
           serviceId !== 'your-service-id' && 
           templateId !== 'your-template-id' && 
           publicKey !== 'your-public-key');
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Validate form
      const formErrors = validateForm();
      if (Object.keys(formErrors).length > 0) {
        setErrors(formErrors);
        setError('Please fix the errors above and try again.');
        return;
      }

      // Check if EmailJS is configured
      if (!isEmailJSConfigured()) {
        setError('Email service is not configured. Please contact me directly at amarichezineddine@gmail.com');
        return;
      }

      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        budget: formData.budget || 'Not specified',
        to_email: 'amarichezineddine@gmail.com',
        reply_to: formData.email.trim(),
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setIsSubmitted(true);
      setFormData(initialFormData);
      setErrors({});
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error: unknown) {
      console.error('EmailJS error:', error);
      setError('Failed to send message. Please try again or contact me directly at amarichezineddine@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validateForm, isEmailJSConfigured]);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const resetForm = useCallback(() => {
    setFormData(initialFormData);
    setErrors({});
    setError(null);
    setIsSubmitted(false);
  }, []);

  return {
    formData,
    errors,
    isSubmitting,
    isSubmitted,
    error,
    handleInputChange,
    handleSubmit,
    validateField,
    clearError,
    resetForm
  };
};