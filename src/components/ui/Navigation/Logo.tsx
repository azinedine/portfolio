'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import Image from 'next/image'
import { APP_VERSION, BUILD_INFO } from '@/lib/constants'

type LogoProps = {
  onClick?: () => void
}

export function Logo({ onClick }: LogoProps) {
  return (
    <Link
      href="/"
      className="flex items-center space-x-3 group relative"
      onClick={onClick}
    >
      <div className="relative">
        <motion.div
          whileHover={{ 
            rotate: [0, -10, 10, 0],
            scale: 1.1,
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="w-11 h-11 rounded-full flex items-center justify-center  p-2 bg-primary-900 dark:bg-transparent"
          style={{ willChange: 'transform' }}
        >
          {/* <Code2 className="w-5 h-5 text-white" /> */}
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={44} 
            height={44}
            className="transition-all duration-300"
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary-400 to-purple-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"
          initial={false}
        />

        <motion.div
          className="absolute -top-1 -right-1"
          animate={{ 
            scale: [0, 1, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatDelay: 1
          }}
        >
          <Sparkles className="w-3 h-3 text-purple-300" />
        </motion.div>
      </div>
      <div className="flex flex-col">
        <motion.span 
          className="text-xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-primary-600 dark:from-white dark:via-gray-100 dark:to-primary-200 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          A.ZINEDDINE
        </motion.span>
        <span className="text-xs text-gray-500 dark:text-white/50 font-medium tracking-wider">
          Software Engineer
        </span>
        <motion.span 
          className="text-xs text-gray-400 dark:text-white/30 font-mono tracking-wider transition-colors duration-200 group-hover:text-primary-500 dark:group-hover:text-primary-300 cursor-help"
          initial={{ opacity: 0.7 }}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          title={`Version: ${BUILD_INFO.version}\nBuild Date: ${BUILD_INFO.buildDate}\nEnvironment: ${BUILD_INFO.environment}`}
        >
          v{APP_VERSION}
        </motion.span>
      </div>
    </Link>
  )
}


