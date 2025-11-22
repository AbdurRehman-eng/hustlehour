'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Calendar, Clock, Linkedin, Twitter, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gradient">Hustle Hour</h3>
            <p className="text-gray-400 mb-4">
              An inspiring event where vision meets reality. Join us for stories of success,
              challenges, and networking with industry leaders.
            </p>
            <div className="flex space-x-4">
              {[Linkedin, Twitter, Facebook].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
                  whileHover={{ 
                    scale: 1.3, 
                    rotate: 360,
                    y: -5,
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-purple-500/20 transition-colors relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  />
                  <Icon className="w-5 h-5 text-purple-400 relative z-10" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Speakers', 'Schedule', 'Venue', 'Register'].map((link, index) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-purple-400 transition-colors inline-block relative"
                    whileHover={{ 
                      scale: 1.1, 
                      x: 5,
                      color: '#a855f7',
                    }}
                  >
                    <motion.span
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    {link}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4 text-white">Event Details</h3>
            <ul className="space-y-3 text-gray-400">
              {[
                { icon: Calendar, text: '9 December 2024', color: 'text-purple-400' },
                { icon: Clock, text: '12:00 PM - 2:00 PM', color: 'text-pink-400' },
                { icon: MapPin, text: 'SEECS Seminar Hall, NUST', color: 'text-cyan-400' },
                { icon: Mail, text: 'info@hustlehour.com', color: 'text-green-400' },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.li
                    key={index}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    <motion.div
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        rotate: { duration: 5, repeat: Infinity, ease: 'linear' },
                        scale: { duration: 2, repeat: Infinity, delay: index * 0.2 },
                      }}
                    >
                      <Icon className={`w-5 h-5 ${item.color}`} />
                    </motion.div>
                    <motion.span
                      whileHover={{ color: '#a855f7', scale: 1.05 }}
                    >
                      {item.text}
                    </motion.span>
                  </motion.li>
                )
              })}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2024 Hustle Hour. Organized by NUST SEECS. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

