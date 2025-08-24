'use client'

import { motion, easeOut } from 'framer-motion'
import { Briefcase, GraduationCap, Award, Calendar, MapPin, ExternalLink } from 'lucide-react'
import { AnimatedText } from '@/components/common/AnimatedText'

const experiences = [
  {
    id: 1,
    type: 'work',
    title: 'Senior Full Stack Developer',
    company: 'TechFlow Solutions',
    location: 'San Francisco, CA',
    period: '2022 - Present',
    description: 'Lead a team of 5 developers in building scalable web applications. Architected and implemented microservices infrastructure that improved system performance by 40%.',
    achievements: [
      'Led the development of a real-time collaboration platform serving 50k+ users',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Mentored junior developers and conducted technical interviews',
      'Reduced application load time by 35% through code optimization'
    ],
    technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL', 'Redis'],
    link: 'https://techflow.com'
  },
  {
    id: 2,
    type: 'work',
    title: 'Full Stack Developer',
    company: 'InnovateLab',
    location: 'Remote',
    period: '2020 - 2022',
    description: 'Developed and maintained multiple client projects ranging from e-commerce platforms to data visualization dashboards.',
    achievements: [
      'Built 15+ production applications with 99.9% uptime',
      'Integrated payment systems processing $2M+ in transactions',
      'Implemented responsive designs increasing mobile engagement by 45%',
      'Collaborated with cross-functional teams in agile environment'
    ],
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Stripe', 'Tailwind CSS'],
    link: 'https://innovatelab.com'
  },
  {
    id: 3,
    type: 'work',
    title: 'Frontend Developer',
    company: 'StartupXYZ',
    location: 'New York, NY',
    period: '2019 - 2020',
    description: 'Focused on creating intuitive user interfaces and improving user experience across web and mobile platforms.',
    achievements: [
      'Redesigned main product interface increasing user satisfaction by 30%',
      'Developed React Native mobile app with 4.8 App Store rating',
      'Established component library used across 10+ projects',
      'Improved website accessibility compliance to WCAG 2.1 standards'
    ],
    technologies: ['React', 'React Native', 'TypeScript', 'Sass', 'Firebase'],
    link: 'https://startupxyz.com'
  }
]

const education = [
  {
    id: 1,
    type: 'education',
    title: 'Bachelor of Science in Computer Science',
    institution: 'University of Technology',
    location: 'Boston, MA',
    period: '2015 - 2019',
    description: 'Graduated Magna Cum Laude with a focus on software engineering and web technologies.',
    achievements: [
      'GPA: 3.8/4.0',
      'President of Computer Science Club',
      'Winner of Annual Hackathon 2018',
      'Dean\'s List for 6 consecutive semesters'
    ],
    technologies: ['Java', 'Python', 'C++', 'SQL', 'Data Structures', 'Algorithms']
  }
]

const certifications = [
  {
    id: 1,
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
    credentialId: 'AWS-SA-2023-001',
    link: '#'
  },
  {
    id: 2,
    title: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    date: '2022',
    credentialId: 'GCP-PD-2022-002',
    link: '#'
  },
  {
    id: 3,
    title: 'Meta Frontend Developer Professional',
    issuer: 'Meta',
    date: '2021',
    credentialId: 'META-FE-2021-003',
    link: '#'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
}

const TimelineItem = ({ item, index, isLast }: { 
  item: typeof experiences[0] | typeof education[0], 
  index: number, 
  isLast: boolean 
}) => {
  const Icon = item.type === 'work' ? Briefcase : GraduationCap

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-6 top-12 w-px h-full bg-gradient-to-b from-primary-400 to-transparent" />
      )}
      
      {/* Timeline icon */}
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center border-4 border-white dark:border-dark-950 shadow-lg">
          <Icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
        </div>

        {/* Content */}
        <div className="flex-1 pb-12">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-dark-200 dark:border-dark-800"
          >
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-1">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium">
                  <span>{'company' in item ? item.company : item.institution}</span>
                  {'link' in item && item.link && (
                    <motion.a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="text-dark-400 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 mt-2 lg:mt-0">
                <span className="inline-flex items-center gap-1 text-sm text-dark-500 dark:text-dark-500">
                  <Calendar className="w-4 h-4" />
                  {item.period}
                </span>
                <span className="inline-flex items-center gap-1 text-sm text-dark-500 dark:text-dark-500">
                  <MapPin className="w-4 h-4" />
                  {item.location}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-dark-600 dark:text-dark-400 mb-4">
              {item.description}
            </p>

            {/* Achievements */}
            <div className="mb-4">
              <h4 className="font-semibold text-dark-900 dark:text-white mb-2">
                Key Achievements:
              </h4>
              <ul className="space-y-1">
                {item.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-dark-600 dark:text-dark-400">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="font-semibold text-dark-900 dark:text-white mb-2">
                Technologies Used:
              </h4>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm rounded-md font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ExperiencePage() {
  const allItems = [...experiences, ...education].sort((a, b) => {
    // Sort by year (newest first)
    const yearA = parseInt(a.period.split(' - ')[1] === 'Present' ? '2024' : a.period.split(' - ')[1])
    const yearB = parseInt(b.period.split(' - ')[1] === 'Present' ? '2024' : b.period.split(' - ')[1])
    return yearB - yearA
  })

  return (
    <div className="min-h-screen bg-white dark:bg-dark-950 pt-20">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-responsive">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium">
                My Journey
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <AnimatedText text="Professional" className="text-dark-900 dark:text-white" />
              <br />
              <AnimatedText text="Experience" className="gradient-text" delay={0.5} />
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-dark-600 dark:text-dark-400 leading-relaxed max-w-3xl mx-auto"
            >
              A timeline of my career journey, education, and professional growth in the world of software development.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50 dark:bg-dark-900/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-white mb-4 text-center">
              Career Timeline
            </h2>
            <p className="text-dark-600 dark:text-dark-400 text-center max-w-2xl mx-auto">
              From education to professional experience, here's my journey in tech
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {allItems.map((item, index) => (
              <TimelineItem
                key={item.id}
                item={item}
                index={index}
                isLast={index === allItems.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-white mb-4">
              Certifications & Awards
            </h2>
            <p className="text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
              Professional certifications that validate my expertise in various technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-dark-200 dark:border-dark-800"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <span className="text-sm text-dark-500 dark:text-dark-500 font-medium">
                    {cert.date}
                  </span>
                </div>
                
                <h3 className="font-bold text-dark-900 dark:text-white mb-2">
                  {cert.title}
                </h3>
                
                <p className="text-dark-600 dark:text-dark-400 mb-3">
                  {cert.issuer}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-dark-500 dark:text-dark-500">
                    ID: {cert.credentialId}
                  </span>
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50 dark:bg-dark-900/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-12 text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
              With years of experience and a proven track record, I'm ready to help bring your next project to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 hover:bg-primary-50 font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Hire Me
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Download Resume
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}