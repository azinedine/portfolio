import { 
  Code2, 
  Zap, 
  Users, 
  Award, 
  Heart, 
  Lightbulb, 
  Target, 
  Globe, 
  Smartphone 
} from "lucide-react";

// Types
export interface Stat {
  icon: typeof Code2;
  label: string;
  value: string;
  color: string;
}

export interface Skill {
  name: string;
  level: number;
  color: string;
  icon: string;
}

export interface Value {
  icon: typeof Heart;
  title: string;
  description: string;
  color: string;
}

export interface FunFact {
  emoji: string;
  title: string;
  description: string;
  gradient: string;
}

// Stats Data
export const stats: Stat[] = [
  { icon: Code2, label: "Projects Completed", value: "50+", color: "from-purple-500 to-purple-600" },
  { icon: Users, label: "Happy Clients", value: "20+", color: "from-blue-500 to-blue-600" },
  { icon: Zap, label: "Years Experience", value: "4+", color: "from-indigo-500 to-indigo-600" },
  { icon: Award, label: "Awards Won", value: "8", color: "from-purple-600 to-blue-600" },
];

// Skills Data
export const skills = {
  frontend: [
    { name: "React.js", level: 95, color: "from-blue-500 to-blue-600", icon: "⚛️" },
    { name: "React Native", level: 92, color: "from-cyan-500 to-cyan-600", icon: "📱" },
    { name: "Next.js", level: 90, color: "from-gray-700 to-gray-800", icon: "🔼" },
    { name: "Vue.js", level: 85, color: "from-green-500 to-green-600", icon: "🌟" },
    { name: "TypeScript", level: 88, color: "from-blue-600 to-blue-700", icon: "🔷" },
    { name: "Tailwind CSS", level: 95, color: "from-teal-500 to-teal-600", icon: "🎨" },
  ],
  backend: [
    { name: "Node.js", level: 90, color: "from-green-600 to-green-700", icon: "🟢" },
    { name: "Laravel", level: 88, color: "from-red-500 to-red-600", icon: "🔴" },
    { name: "MongoDB", level: 85, color: "from-green-700 to-green-800", icon: "🍃" },
    { name: "PostgreSQL", level: 80, color: "from-blue-700 to-blue-800", icon: "🐘" },
    { name: "Firebase", level: 82, color: "from-yellow-500 to-orange-500", icon: "🔥" },
    { name: "Docker", level: 75, color: "from-blue-500 to-blue-600", icon: "🐳" },
  ],
};

// Values Data
export const values: Value[] = [
  {
    icon: Heart,
    title: "Passion-Driven",
    description: "I believe great software comes from genuine passion and dedication to craft.",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Always seeking creative solutions and staying ahead with cutting-edge technologies.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Target,
    title: "Quality Focused",
    description: "Committed to delivering clean, maintainable code that stands the test of time.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is my success. I prioritize communication and collaboration.",
    color: "from-blue-500 to-indigo-500"
  }
];

// Fun Facts Data
export const funFacts: FunFact[] = [
  {
    emoji: "☕",
    title: "Coffee Lover",
    description: "Can't code without my daily dose of caffeine",
    gradient: "from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30"
  },
  {
    emoji: "🌙",
    title: "Night Owl",
    description: "Most productive coding happens after midnight",
    gradient: "from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30"
  },
  {
    emoji: "🎯",
    title: "Perfectionist",
    description: "Every pixel matters in my designs",
    gradient: "from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30"
  }
];
