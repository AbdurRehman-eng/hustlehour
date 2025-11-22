# Hustle Hour - NUST Seminar Website

A beautiful, animated Next.js website for the Hustle Hour seminar event at NUST SEECS Seminar Hall.

## Features

- 🎨 **Stunning Animations**: Multiple animations using Framer Motion
- 🌈 **Colorful Design**: Vibrant gradients and color schemes throughout
- 📱 **Responsive**: Fully responsive design for all devices
- ⚡ **Fast**: Built with Next.js 14 for optimal performance
- 🎯 **Modern UI**: Glass morphism effects and smooth transitions

## Event Details

- **Date**: 9 December 2024
- **Time**: 12:00 PM - 2:00 PM
- **Venue**: SEECS Seminar Hall, NUST
- **Event**: CEOs sharing their stories followed by tea time networking

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
hustle-hour/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main page
│   └── globals.css      # Global styles
├── components/
│   ├── Navigation.tsx   # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About event section
│   ├── Speakers.tsx     # Speakers section
│   ├── Schedule.tsx     # Event schedule
│   ├── Venue.tsx        # Venue information
│   ├── Registration.tsx # Registration form
│   └── Footer.tsx       # Footer
├── package.json
└── tailwind.config.js   # Tailwind configuration
```

## Technologies Used

- **Next.js 14**: React framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **Framer Motion**: Animations
- **Lucide React**: Icons

## Customization

### Update CEO Information

Edit the `ceos` array in `components/Speakers.tsx` to add or modify CEO information.

### Change Colors

Modify the color scheme in `tailwind.config.js` and update gradient classes throughout components.

### Update Event Details

Edit the event details in:
- `components/Hero.tsx` - Main hero section
- `components/Schedule.tsx` - Schedule timeline
- `components/Venue.tsx` - Venue information

## License

This project is created for the Hustle Hour event at NUST.

