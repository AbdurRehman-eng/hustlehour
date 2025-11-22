'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Clock, Coffee, Users, Mic } from 'lucide-react'

export default function Schedule() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const schedule = [
    {
      time: '12:00 PM',
      title: 'Welcome & Opening',
      description: 'Introduction to Hustle Hour and our distinguished speakers',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      duration: '15 min',
    },
    {
      time: '12:15 PM',
      title: 'CEO Keynote Speeches',
      description: 'CEOs share their inspiring journeys, challenges, and success stories',
      icon: Mic,
      color: 'from-blue-500 to-cyan-500',
      duration: '60 min',
    },
    {
      time: '1:15 PM',
      title: 'Q&A Session',
      description: 'Interactive question and answer session with the audience',
      icon: Users,
      color: 'from-orange-500 to-red-500',
      duration: '30 min',
    },
    {
      time: '1:45 PM',
      title: 'Tea Time Networking',
      description: 'Exclusive networking session over tea with CEOs and audience',
      icon: Coffee,
      color: 'from-green-500 to-emerald-500',
      duration: '15 min',
    },
  ]

  return (
    <section id="schedule" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Event Schedule</span>
          </h2>
          <p className="text-xl text-gray-300">
            Join us for an inspiring afternoon of stories, insights, and networking
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-green-500 opacity-30"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-400 via-pink-400 to-green-400"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.7 }}
            />
          </motion.div>

          <div className="space-y-12">
            {schedule.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative flex items-start space-x-6"
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="relative z-10 flex-shrink-0"
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg relative`}
                      animate={{
                        boxShadow: [
                          `0 0 20px rgba(168, 85, 247, 0.4)`,
                          `0 0 40px rgba(236, 72, 153, 0.6)`,
                          `0 0 20px rgba(168, 85, 247, 0.4)`,
                        ],
                        rotate: [0, 360],
                      }}
                      transition={{
                        boxShadow: { duration: 2, repeat: Infinity, delay: index * 0.2 },
                        rotate: { duration: 10, repeat: Infinity, ease: 'linear' },
                      }}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, -360],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.1,
                        }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                    </motion.div>
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.color} opacity-50`}
                      animate={{
                        scale: [1, 2, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.color} opacity-30`}
                      animate={{
                        scale: [1, 2.5, 1],
                        opacity: [0.3, 0, 0.3],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: index * 0.3 + 0.5,
                      }}
                    />
                  </motion.div>

                  {/* Content card */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    whileHover={{ scale: 1.05, x: 15, rotateY: 5 }}
                    className="flex-1 glass-effect rounded-2xl p-6 glow-effect relative overflow-hidden group"
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    />
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 relative z-10">
                      <motion.div
                        className="flex items-center space-x-4 mb-2 md:mb-0"
                        whileHover={{ scale: 1.05 }}
                      >
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                        >
                          <Clock className="w-5 h-5 text-purple-400" />
                        </motion.div>
                        <motion.span
                          className="text-2xl font-bold text-white"
                          animate={{
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.2,
                          }}
                        >
                          {item.time}
                        </motion.span>
                        <span className="text-sm text-gray-400">({item.duration})</span>
                      </motion.div>
                    </div>
                    <motion.h3
                      className="text-2xl font-bold mb-2 text-gradient relative z-10"
                      animate={{
                        backgroundPosition: ['0%', '100%', '0%'],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-300 relative z-10"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: index * 0.2 + 0.4 }}
                    >
                      {item.description}
                    </motion.p>
                    <motion.div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                    />
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block glass-effect rounded-2xl p-6 glow-effect"
          >
            <p className="text-lg text-gray-300 mb-2">
              <span className="font-bold text-purple-400">Date:</span> 9 December 2024
            </p>
            <p className="text-lg text-gray-300">
              <span className="font-bold text-pink-400">Duration:</span> 2 hours (12:00 PM - 2:00 PM)
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

