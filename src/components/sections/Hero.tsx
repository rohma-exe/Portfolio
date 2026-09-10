import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../../constants/styles";
import { GamingSetupCanvas } from "../canvas";
import { config } from "../../constants/config";

const TITLES = [
  "Software Engineer",
  "AI & ML Enthusiast",
  "Full Stack Developer",
  "Data Science Scholar",
];

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = TITLES[titleIndex];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % TITLES.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentTitle.substring(0, displayText.length - 1)
            : currentTitle.substring(0, displayText.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section className="relative mx-auto flex min-h-screen w-full flex-col justify-center overflow-hidden py-16 lg:py-0">
      {/* Container: Text on Left, 3D Model on Right */}
      <div
        className={`${styles.paddingX} relative z-10 mx-auto flex w-full max-w-7xl flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 min-h-[calc(100vh-80px)]`}
      >
        {/* LEFT SIDE: Hero Text Design */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-10 pt-10 lg:pt-0">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass mb-6 inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 shadow-warm-glow-sm border border-[#AF9D8E]/40 bg-[#FAF8F5]/85 dark:bg-[#1C1816]/85"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#AF9D8E] opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#8C7A6B] dark:bg-[#D6C7B9]"></span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#48413A] dark:text-[#FAF8F5] font-heading">
              Open for Master's & Roles
            </span>
          </motion.div>

          {/* Main Heading — Elegant Charcoal Gray / Warm Ivory */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading font-bold text-[#48413A] dark:text-[#FAF8F5] text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl tracking-tight leading-none"
          >
            Hi, I'm{" "}
            <span className="taupe-text-gradient underline decoration-[#AF9D8E]/50 decoration-wavy underline-offset-8">
              {config.hero.name}
            </span>
          </motion.h1>

          {/* Dynamic Typewriter Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 h-10 text-xl sm:text-2xl md:text-3xl font-medium text-[#6E665E] dark:text-[#C4B8AD] font-sans"
          >
            <span className="text-[#8C7A6B] dark:text-[#D6C7B9] font-semibold drop-shadow-[0_0_12px_rgba(175,157,142,0.3)]">
              {displayText}
            </span>
            <span className="typewriter-cursor"></span>
          </motion.div>

          {/* Subtitle / Bio Teaser */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 max-w-xl text-base sm:text-lg text-[#6E665E] dark:text-[#C4B8AD] font-sans leading-relaxed"
          >
            Crafting intelligent software, scalable web applications, and data-driven AI solutions with precision and elegance.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="#work"
              className="bg-warm-gradient rounded-xl px-8 py-3.5 text-sm font-semibold text-white shadow-warm-glow neon-glow-hover transition-all duration-300 font-heading"
            >
              Explore My Work ↓
            </a>
            <a
              href="#contact"
              className="glass rounded-xl px-8 py-3.5 text-sm font-semibold text-[#48413A] dark:text-[#FAF8F5] border border-[#AF9D8E]/40 dark:border-[#AF9D8E]/25 hover:border-[#8C7A6B] dark:hover:border-[#D6C7B9] hover:text-[#3D3731] dark:hover:text-[#FFFFFF] transition-all duration-300 font-heading hover:shadow-warm-glow-sm"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE: 3D Gaming Setup Model */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full lg:w-1/2 h-[380px] sm:h-[480px] lg:h-[600px] flex items-center justify-center relative"
        >
          <GamingSetupCanvas />
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
        <a href="#about" aria-label="Scroll down">
          <div className="flex h-[48px] w-[28px] items-start justify-center rounded-full border-2 border-[#AF9D8E]/40 dark:border-[#AF9D8E]/30 p-1.5 backdrop-blur-sm transition-colors hover:border-[#8C7A6B] dark:hover:border-[#D6C7B9]">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="h-2 w-2 rounded-full bg-[#8C7A6B] dark:bg-[#D6C7B9] warm-pulse"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
