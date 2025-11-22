'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Building, Calendar, Clock } from 'lucide-react'

export default function Venue() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="venue" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-20"
          animate={{
            x: [0, -100, 0],
            scale: [1, 1.3, 1],
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
              {'Venue & Details'.split('').map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: -20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.03, type: 'spring' }}
                  className="inline-block"
                  whileHover={{ scale: 1.3, y: -5 }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, type: 'spring' }}
            className="text-xl text-gray-300"
          >
            Join us at the prestigious SEECS Seminar Hall, NUST
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Venue Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, x: -30, rotateY: -15 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{ delay: 0.3, type: 'spring' }}
              whileHover={{ scale: 1.1, x: 15, rotateY: 5, z: 50 }}
              className="glass-effect rounded-2xl p-6 glow-effect relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="flex items-center space-x-4 mb-4 relative z-10"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center relative"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(168, 85, 247, 0.4)',
                      '0 0 40px rgba(236, 72, 153, 0.6)',
                      '0 0 20px rgba(168, 85, 247, 0.4)',
                    ],
                    rotate: [0, 360],
                  }}
                  transition={{
                    boxShadow: { duration: 2, repeat: Infinity },
                    rotate: { duration: 5, repeat: Infinity, ease: 'linear' },
                  }}
                >
                  <MapPin className="w-6 h-6 text-white" />
                </motion.div>
                <motion.h3
                  className="text-2xl font-bold text-white"
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
                  }}
                >
                  Location
                </motion.h3>
              </motion.div>
              <p className="text-lg text-gray-300">
                <span className="font-semibold text-purple-400">SEECS Seminar Hall</span>
              </p>
              <p className="text-gray-400 mt-2">
                School of Electrical Engineering and Computer Science
              </p>
              <p className="text-gray-400">National University of Sciences and Technology (NUST)</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, x: 10 }}
              className="glass-effect rounded-2xl p-6 glow-effect"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Date & Time</h3>
              </div>
              <div className="space-y-2">
                <p className="text-lg text-gray-300">
                  <span className="font-semibold text-blue-400">Date:</span> 9 December 2024
                </p>
                <p className="text-lg text-gray-300">
                  <span className="font-semibold text-cyan-400">Time:</span> 12:00 PM - 2:00 PM
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, x: 10 }}
              className="glass-effect rounded-2xl p-6 glow-effect"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Facilities</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  <span>State-of-the-art seminar hall</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  <span>Professional audio-visual equipment</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  <span>Comfortable seating arrangement</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  <span>Networking area for tea time</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Visual representation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-effect rounded-3xl p-12 glow-effect relative overflow-hidden"
            >
              {/* Decorative elements */}
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full filter blur-3xl opacity-30"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full filter blur-3xl opacity-30"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, -90, 0],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <div className="relative z-10 text-center">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="inline-block mb-8"
                >
                  <Building className="w-24 h-24 text-purple-400" />
                </motion.div>
                <h3 className="text-3xl font-bold mb-4 text-gradient">SEECS Seminar Hall</h3>
                <p className="text-gray-300 text-lg mb-6">
                  A prestigious venue at NUST, perfect for hosting inspiring events and
                  fostering meaningful connections.
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center"
                  >
                    <MapPin className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="text-left">
                    <p className="text-white font-semibold">NUST Campus</p>
                    <p className="text-gray-400 text-sm">Islamabad, Pakistan</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

