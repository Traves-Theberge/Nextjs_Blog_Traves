import { Variants } from 'framer-motion'

export const springConfig = {
  stiffness: 100,
  damping: 15,
  mass: 0.5
}

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export const containerAnimation: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

export const textReveal: Variants = {
  hidden: { 
    opacity: 0, 
    y: 100,
    skewY: 7
  },
  visible: { 
    opacity: 1, 
    y: 0,
    skewY: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.01, -0.05, 0.95]
    }
  }
}

export const slideInFromLeft: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

export const slideInFromRight: Variants = {
  hidden: { x: 100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

export const cardAnimation: Variants = {
  hidden: { 
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      ...springConfig
    }
  }
}

// ... other animations 