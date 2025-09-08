import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

// Types
export interface ContactInfo {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
  color: string;
}

export interface SocialLink {
  icon: typeof Github;
  label: string;
  href: string;
  color: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  budget: string;
}

// Contact Information Data
export const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    label: "Email",
    value: "a.zineddine@dev.com",
    href: "mailto:amarichezineddine@gmail.com",
    color: "text-red-500",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+213 540 128 550",
    href: "tel:+213540128550",
    color: "text-green-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Khemis Miliana, Algeria",
    href: "#",
    color: "text-blue-500",
  },
  {
    icon: Clock,
    label: "Timezone",
    value: "CET (UTC+1)",
    href: "#",
    color: "text-purple-500",
  },
];

// Social Links Data
export const socialLinks: SocialLink[] = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/azinedine",
    color: "hover:text-gray-900 dark:hover:text-white",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/zineddineamariche/",
    color: "hover:text-blue-600",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://x.com/zinedineamarich",
    color: "hover:text-blue-400",
  },
];

// FAQ Data
export const faqs: FAQ[] = [
  {
    question: "What's your typical project timeline?",
    answer:
      "Project timelines vary based on complexity, but most web applications take 4-8 weeks from start to finish. I'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Absolutely! I work with clients worldwide and am comfortable with different time zones. I maintain regular communication throughout the project lifecycle.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in React.js, Next.js, React Native, Vue.js, Node.js, and Laravel. I'm always learning new technologies to provide the best solutions for each project.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes, I offer various support packages including bug fixes, feature updates, and maintenance. We can discuss the best support option for your needs.",
  },
];

// Budget Options
export const budgetOptions = [
  { value: "", label: "Select budget range" },
  { value: "5k-10k", label: "$5,000 - $10,000" },
  { value: "10k-25k", label: "$10,000 - $25,000" },
  { value: "25k-50k", label: "$25,000 - $50,000" },
  { value: "50k+", label: "$50,000+" },
];
