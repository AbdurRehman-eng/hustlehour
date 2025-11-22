import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hustle Hour - NUST Seminar',
  description: 'Join us for Hustle Hour at NUST SEECS Seminar Hall. CEOs sharing their inspiring stories and networking over tea.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

