'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Linkedin, Briefcase, Award } from 'lucide-react'

export default function Speakers() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Real speaker data
  const ceos = [
    {
      name: 'Ameer Hamza Baig',
      company: 'Search O Pal',
      role: 'Founder',
      bio: 'No. 1 AI-Based Recruitment Platform Owner',
      image: '/ameerhamza.jpg',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Fawad Hussain',
      company: 'Markaz',
      role: 'Co-Founder and CTO',
      bio: 'Leading technology innovation and product development',
      image: '/fawadhussain.jpg',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Umair Aslam',
      company: 'Markaz',
      role: 'Co-Founder',
      bio: 'Building innovative solutions for the future',
      image: '/umair.jpg',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      name: 'Umair Aslam',
      company: 'Markaz',
      role: 'Co-Founder',
      bio: 'Transforming ideas into successful ventures',
      image: '/umairaslam.jpg',
      gradient: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <section id="speakers" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Our Speakers</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the visionary leaders who will share their incredible journeys and insights
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ceos.map((ceo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, rotateY: -90, scale: 0.5 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0, scale: 1 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8, type: 'spring', stiffness: 100 }}
              whileHover={{ 
                scale: 1.15, 
                y: -20, 
                rotateY: 10,
                rotateX: 5,
                z: 100,
              }}
              className="glass-effect rounded-2xl p-6 glow-effect relative overflow-hidden group"
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${ceo.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              {/* Avatar */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: [0, 360] }}
                transition={{ duration: 0.6 }}
                className="relative z-10 mb-4"
              >
                <motion.div
                  className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-br ${ceo.gradient} p-1 shadow-lg relative overflow-hidden`}
                  animate={{
                    boxShadow: [
                      `0 0 20px rgba(168, 85, 247, 0.4)`,
                      `0 0 40px rgba(236, 72, 153, 0.6)`,
                      `0 0 20px rgba(168, 85, 247, 0.4)`,
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-gray-800 relative">
                    <Image
                      src={ceo.image}
                      alt={ceo.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 128px) 100vw, 128px"
                    />
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${ceo.gradient} opacity-0 group-hover:opacity-30 transition-opacity`}
                    />
                  </div>
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${ceo.gradient} opacity-50 -z-10`}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.15,
                    }}
                  />
                </motion.div>
                <motion.div
                  className="absolute -top-2 -right-2"
                  animate={{ 
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.2, 1],
                    y: [0, -5, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                  whileHover={{ rotate: 360, scale: 1.3 }}
                >
                  <Award className="w-6 h-6 text-yellow-400" />
                </motion.div>
              </motion.div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <motion.h3
                  className="text-2xl font-bold mb-2 text-white"
                  animate={{
                    textShadow: [
                      '0 0 10px rgba(255, 255, 255, 0.3)',
                      '0 0 20px rgba(168, 85, 247, 0.5)',
                      '0 0 10px rgba(255, 255, 255, 0.3)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.1,
                  }}
                >
                  {ceo.name.split('').map((char, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: -10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.2 + i * 0.05 }}
                      className="inline-block"
                      whileHover={{ scale: 1.3, y: -3 }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                  ))}
                </motion.h3>
                <motion.div
                  className="flex items-center justify-center mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2 + 0.3 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                  >
                    <Briefcase className="w-4 h-4 text-gray-400 mr-2" />
                  </motion.div>
                  <motion.p
                    className="text-purple-300 font-semibold"
                    whileHover={{ scale: 1.1, color: '#c084fc' }}
                  >
                    {ceo.company}
                  </motion.p>
                </motion.div>
                <motion.p
                  className="text-sm text-gray-400 mb-3"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.4 }}
                >
                  {ceo.role}
                </motion.p>
                <motion.p
                  className="text-gray-300 text-sm mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2 + 0.5 }}
                >
                  {ceo.bio}
                </motion.p>

                {/* Social links */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.6, type: 'spring' }}
                  whileHover={{ scale: 1.2 }}
                  className="flex justify-center"
                >
                  <motion.a
                    href="#"
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors relative overflow-hidden group"
                    whileHover={{ rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-blue-500/20"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1.5, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                    />
                    <Linkedin className="w-5 h-5 text-blue-400 relative z-10" />
                  </motion.a>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <motion.div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${ceo.gradient} rounded-full filter blur-2xl opacity-20`}
                animate={{
                  scale: [1, 1.2, 1],
                  x: [0, 20, 0],
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 italic">
            More speakers to be announced soon...
          </p>
        </motion.div>
      </div>
    </section>
  )
}

