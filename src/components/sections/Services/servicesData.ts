import {
  Code2,
  Palette,
  Video,
  Smartphone,
  Database,
  Wrench,
} from 'lucide-react'
import { type Service } from './ServiceCard'

export const services: Service[] = [
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Building high-quality mobile apps with React Native & Expo, optimized for both iOS and Android platforms.",
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-500/20 to-emerald-500/10",
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Modern websites and dashboards using React, Next.js, and Laravel — fast, secure, and scalable solutions.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-500/20 to-cyan-500/10",
  },
  {
    icon: Database,
    title: "Backend & APIs",
    description:
      "Robust backend solutions with Laravel, Node.js & MongoDB — powering your apps with reliability and performance.",
    color: "from-indigo-500 to-blue-500",
    bgColor: "from-indigo-500/20 to-blue-500/10",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Clean, modern, and user-friendly designs that bring your product vision to life with exceptional user experience.",
    color: "from-pink-500 to-rose-500",
    bgColor: "from-pink-500/20 to-rose-500/10",
  },
  {
    icon: Video,
    title: "Digital Marketing",
    description:
      "Boosting your brand with social media ads, SEO, and creative campaigns under my own brand expertise.",
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-500/20 to-red-500/10",
  },
  {
    icon: Wrench,
    title: "Technical Consulting",
    description: 
      "Providing expert guidance on architecture, technology stack selection, and development best practices.",
    color: "from-purple-500 to-indigo-500",
    bgColor: "from-purple-500/20 to-indigo-500/10",
  },
]
