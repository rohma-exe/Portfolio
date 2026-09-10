import type { TMotion } from "../types";
import { Variants } from "framer-motion";

export const textVariant = () => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
      },
    },
  };
};

export const fadeIn = (
  direction: TMotion["direction"],
  type: TMotion["type"],
  delay: TMotion["delay"],
  duration: TMotion["duration"]
): Variants => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (
  delay: TMotion["delay"],
  duration: TMotion["duration"]
) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (
  direction: TMotion["direction"],
  type: TMotion["type"],
  delay: TMotion["delay"],
  duration: TMotion["duration"]
) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

// ── New creative variants ──

export const staggerContainer = (
  staggerChildren = 0.15,
  delayChildren = 0.1
): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const scaleIn = (delay = 0, duration = 0.6): Variants => ({
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      delay,
      duration,
      bounce: 0.3,
    },
  },
});

export const revealUp = (delay = 0, duration = 0.7): Variants => ({
  hidden: {
    y: 40,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration,
      ease: [0.16, 1, 0.3, 1],
    },
  },
});

export const slideFromLeft = (delay = 0, duration = 0.7): Variants => ({
  hidden: {
    x: -80,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration,
      ease: [0.16, 1, 0.3, 1],
    },
  },
});

export const slideFromRight = (delay = 0, duration = 0.7): Variants => ({
  hidden: {
    x: 80,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration,
      ease: [0.16, 1, 0.3, 1],
    },
  },
});
