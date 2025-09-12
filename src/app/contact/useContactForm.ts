"use client";

import { useState, useCallback } from "react";
import emailjs from '@emailjs/browser';
import { FormData } from "./data";
import { ERROR_MESSAGES, FORM_VALIDATION_RULES, FORM_SUCCESS_TIMEOUT, APP_CONFIG } from '@/config';
import { checkEmailJSConfiguration } from '@/utils/email';

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
        if (!value.trim()) return ERROR_MESSAGES.NAME_REQUIRED;
        if (value.trim().length < FORM_VALIDATION_RULES.name.minLength) return ERROR_MESSAGES.NAME_TOO_SHORT;
        if (value.trim().length > FORM_VALIDATION_RULES.name.maxLength) return ERROR_MESSAGES.NAME_TOO_LONG;
        return undefined;

      case 'email':
        if (!value.trim()) return ERROR_MESSAGES.EMAIL_REQUIRED;
        if (!FORM_VALIDATION_RULES.email.pattern.test(value)) return ERROR_MESSAGES.EMAIL_INVALID;
        return undefined;

      case 'subject':
        if (!value.trim()) return ERROR_MESSAGES.SUBJECT_REQUIRED;
        if (value.trim().length < FORM_VALIDATION_RULES.subject.minLength) return ERROR_MESSAGES.SUBJECT_TOO_SHORT;
        if (value.trim().length > FORM_VALIDATION_RULES.subject.maxLength) return ERROR_MESSAGES.SUBJECT_TOO_LONG;
        return undefined;

      case 'message':
        if (!value.trim()) return ERROR_MESSAGES.MESSAGE_REQUIRED;
        if (value.trim().length < FORM_VALIDATION_RULES.message.minLength) return ERROR_MESSAGES.MESSAGE_TOO_SHORT_FORM;
        if (value.trim().length > FORM_VALIDATION_RULES.message.maxLength) return ERROR_MESSAGES.MESSAGE_TOO_LONG;
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
    return checkEmailJSConfiguration();
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
        setError(ERROR_MESSAGES.FORM_VALIDATION_ERROR);
        return;
      }

      // Check if EmailJS is configured
      if (!isEmailJSConfigured()) {
        setError(ERROR_MESSAGES.EMAIL_SERVICE_NOT_CONFIGURED);
        return;
      }

      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC!;

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        budget: formData.budget || 'Not specified',
        to_email: APP_CONFIG.email,
        reply_to: formData.email.trim(),
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setIsSubmitted(true);
      setFormData(initialFormData);
      setErrors({});
      
      // Reset success message after timeout
      setTimeout(() => setIsSubmitted(false), FORM_SUCCESS_TIMEOUT);
    } catch (error: unknown) {
      console.error('EmailJS error:', error);
      setError(ERROR_MESSAGES.EMAIL_SEND_FAILED);
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