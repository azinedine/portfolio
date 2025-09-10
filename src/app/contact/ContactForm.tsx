"use client";

import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { budgetOptions } from "./data";
import { useContactForm } from "./useContactForm";

const ContactForm = () => {
  const {
    formData,
    errors,
    isSubmitting,
    isSubmitted,
    error,
    handleInputChange,
    handleSubmit,
    clearError
  } = useContactForm();

  const isEmailJSConfigured = () => {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    
    return serviceId && templateId && publicKey && 
           serviceId !== 'your-service-id' && 
           templateId !== 'your-template-id' && 
           publicKey !== 'your-public-key';
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 shadow-sm">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Send Me a Message
      </h2>

      {/* Configuration Notice */}
      {!isEmailJSConfigured() && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg"
        >
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5">⚠️</div>
            <div>
              <p className="text-amber-800 dark:text-amber-300 font-medium mb-1">
                Email service not configured
              </p>
              <p className="text-amber-700 dark:text-amber-400 text-sm">
                Please contact me directly at{' '}
                <a 
                  href="mailto:amarichezineddine@gmail.com" 
                  className="underline hover:no-underline"
                >
                  amarichezineddine@gmail.com
                </a>
                {' '}or set up EmailJS following the instructions in EMAIL_SETUP.md
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Success Message */}
      {isSubmitted && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-3"
        >
          <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
          <p className="text-green-800 dark:text-green-300 font-medium">
            Thank you for your message! I&apos;ll get back to you soon.
          </p>
        </motion.div>
      )}

      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start gap-3"
        >
          <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-red-800 dark:text-red-300 font-medium">
              {error}
            </p>
            <button
              onClick={clearError}
              className="text-red-600 dark:text-red-400 text-sm underline hover:no-underline mt-1"
            >
              Dismiss
            </button>
          </div>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className={`space-y-6 ${!isEmailJSConfigured() ? 'opacity-50 pointer-events-none' : ''}`}>
        {/* Name and Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:text-white transition-colors ${
                errors.name ? 'border-red-300 dark:border-red-600' : 'border-gray-300 dark:border-gray-700'
              }`}
              placeholder="Your full name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:text-white transition-colors ${
                errors.email ? 'border-red-300 dark:border-red-600' : 'border-gray-300 dark:border-gray-700'
              }`}
              placeholder="your@email.com"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Subject and Budget */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:text-white transition-colors ${
                errors.subject ? 'border-red-300 dark:border-red-600' : 'border-gray-300 dark:border-gray-700'
              }`}
              placeholder="Project inquiry"
              aria-invalid={!!errors.subject}
              aria-describedby={errors.subject ? 'subject-error' : undefined}
            />
            {errors.subject && (
              <p id="subject-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                {errors.subject}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Budget Range
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:text-white transition-colors appearance-none ${
                formData.budget ? 'border-gray-300 dark:border-gray-700' : 'border-gray-300 dark:border-gray-700'
              }`}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                backgroundPosition: 'right 0.75rem center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '1.5em 1.5em'
              }}
            >
              {budgetOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={4}
            className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:text-white transition-colors resize-none ${
              errors.message ? 'border-red-300 dark:border-red-600' : 'border-gray-300 dark:border-gray-700'
            }`}
            placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting || !isEmailJSConfigured()}
          whileHover={{ scale: (isSubmitting || !isEmailJSConfigured()) ? 1 : 1.02 }}
          whileTap={{ scale: (isSubmitting || !isEmailJSConfigured()) ? 1 : 0.98 }}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : !isEmailJSConfigured() ? (
            <>
              <div className="w-5 h-5">⚠️</div>
              Email Service Not Configured
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Message
            </>
          )}
        </motion.button>

        <p className="text-sm text-gray-500 dark:text-gray-500 text-center">
          I typically respond within 24 hours. For urgent matters, feel free to call me directly.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
