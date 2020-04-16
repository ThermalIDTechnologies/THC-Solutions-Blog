const easing = [0.6, -0.05, 0.01, 0.99]

export const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
}

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

export const fadeInDown = {
  initial: {
    y: -60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
}

export const fadeInRight = {
  initial: {
    x: -60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
}

const trans = { type: "spring", damping: 300 }

export const hover = {
  scale: 1.05,
  transition: trans,
}

export const tap = {
  scale: 0.95,
  transition: trans,
}