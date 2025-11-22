'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Users, Coffee, Lightbulb } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    {
      icon: Lightbulb,
      title: 'Inspiring Stories',
      description: 'Learn from CEOs who have built successful companies from the ground up',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Target,
      title: 'Real Experiences',
      description: 'Hear firsthand accounts of challenges, failures, and triumphs',
      color: 'from-red-400 to-pink-500',
    },
    {
      icon: Users,
      title: 'Networking',
      description: 'Connect with industry leaders and like-minded individuals',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      icon: Coffee,
      title: 'Tea Time',
      description: 'Exclusive networking session over tea with CEOs and audience',
      color: 'from-green-400 to-emerald-500',
    },
  ]

  return (
    <section id="about" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 18,
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
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ scale: 0.8, rotateX: -90 }}
            animate={isInView ? { scale: 1, rotateX: 0 } : {}}
            transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
          >
            <motion.span
              className="text-gradient inline-block"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {'About The Event'.split('').map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: -20, rotateX: -90 }}
                  animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.03, type: 'spring' }}
                  className="inline-block"
                  whileHover={{ scale: 1.3, y: -5, color: '#a855f7' }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, type: 'spring' }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Hustle Hour is a unique opportunity to learn from the best. CEOs from multiple
            companies will share their journey, the obstacles they faced, and how they
            reached the pinnacle of success.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50, rotateY: -90, scale: 0.5 }}
                animate={isInView ? { opacity: 1, y: 0, rotateY: 0, scale: 1 } : {}}
                transition={{ delay: index * 0.15, duration: 0.8, type: 'spring' }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -15,
                  rotateY: 5,
                  rotateX: 5,
                  z: 50,
                }}
                className="glass-effect rounded-2xl p-8 text-center glow-effect relative overflow-hidden group"
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6, type: 'spring' }}
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center relative z-10`}
                  animate={{
                    boxShadow: [
                      `0 0 20px rgba(168, 85, 247, 0.3)`,
                      `0 0 40px rgba(236, 72, 153, 0.5)`,
                      `0 0 20px rgba(168, 85, 247, 0.3)`,
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
                <motion.h3
                  className="text-2xl font-bold mb-3 text-white relative z-10"
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
                  {feature.title}
                </motion.h3>
                <motion.p
                  className="text-gray-300 relative z-10"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.15 + 0.3 }}
                >
                  {feature.description}
                </motion.p>
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                />
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="glass-effect rounded-3xl p-8 md:p-12 max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold mb-6 text-center text-gradient">
            What to Expect
          </h3>
          <div className="space-y-4">
            {[
              'Inspiring keynote speeches from successful CEOs',
              'Real stories about building companies from scratch',
              'Insights into overcoming challenges and failures',
              'Q&A session with industry leaders',
              'Exclusive tea time networking with CEOs and audience',
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50, scale: 0.8 }}
                animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1, type: 'spring' }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center space-x-4 group"
              >
                <motion.div
                  className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 relative"
                  animate={{ 
                    scale: [1, 1.8, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  whileHover={{ scale: 2, rotate: 360 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                    animate={{
                      scale: [1, 2, 1],
                      opacity: [0.8, 0, 0.8],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  />
                </motion.div>
                <motion.p
                  className="text-lg text-gray-200 flex-1"
                  animate={{
                    color: isInView ? ['#e5e7eb', '#a855f7', '#e5e7eb'] : '#e5e7eb',
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                >
                  {item.split('').map((char, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.6 + index * 0.1 + i * 0.02 }}
                      className="inline-block"
                      whileHover={{ scale: 1.2, y: -2 }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

