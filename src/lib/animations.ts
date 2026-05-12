import type { Variants, Transition } from "framer-motion";

// ---------------------------------------------------------------------------
// Variant definitions
// ---------------------------------------------------------------------------

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

export const slideInRightFull: Variants = {
  hidden: { x: "100%" },
  visible: { x: 0 },
  exit: { x: "100%" },
};

export const backdropFade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

// ---------------------------------------------------------------------------
// Stagger containers
// ---------------------------------------------------------------------------

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// ---------------------------------------------------------------------------
// Transition presets
// ---------------------------------------------------------------------------

export const transitions = {
  spring: {
    type: "spring",
    stiffness: 300,
    damping: 30,
  } as Transition,

  springBouncy: {
    type: "spring",
    stiffness: 400,
    damping: 25,
  } as Transition,

  springGentle: {
    type: "spring",
    stiffness: 200,
    damping: 30,
  } as Transition,

  smooth: {
    duration: 0.4,
    ease: [0.25, 0.1, 0.25, 1],
  } as Transition,

  fast: {
    duration: 0.2,
    ease: "easeOut",
  } as Transition,

  slow: {
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1],
  } as Transition,

  menu: {
    type: "spring",
    stiffness: 400,
    damping: 40,
  } as Transition,
} as const;

// ---------------------------------------------------------------------------
// Duration constants (synced with CSS custom properties)
// ---------------------------------------------------------------------------

export const durations = {
  instant: 0.1,
  fast: 0.15,
  normal: 0.3,
  slow: 0.5,
  slower: 0.8,
} as const;

// ---------------------------------------------------------------------------
// Viewport settings for whileInView
// ---------------------------------------------------------------------------

export const viewportSettings = {
  standard: { once: true, margin: "-100px" },
  eager: { once: true, margin: "0px" },
  lazy: { once: true, margin: "-200px" },
  repeat: { once: false, margin: "-100px" },
} as const;
