import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "../../constants";
import { Header } from "../atoms/Header";
import { config } from "../../constants/config";

const Feedbacks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <div className="my-16 rounded-3xl bg-warm-gradient-subtle dark:bg-[#14100E]/80 border border-[#AF9D8E]/20 dark:border-[#AF9D8E]/15 p-8 sm:p-12 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-[#AF9D8E]/12 dark:bg-[#AF9D8E]/8 rounded-full blur-3xl pointer-events-none" />

      <Header useMotion={true} {...config.sections.feedbacks} />

      {/* Carousel Container */}
      <div className="mt-10 relative max-w-4xl mx-auto min-h-[240px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {current && (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="glass-card shimmer-border rounded-3xl p-8 sm:p-10 relative"
            >
              {/* Decorative Quote Icon */}
              <span className="absolute top-6 right-8 text-6xl font-heading font-bold taupe-text-gradient opacity-40 select-none">
                “
              </span>

              <p className="text-lg sm:text-xl font-sans text-[#48413A] dark:text-[#FAF8F5] leading-relaxed italic mb-8 max-w-3xl">
                "{current.testimonial}"
              </p>

              <div className="flex items-center gap-4 border-t border-[#AF9D8E]/15 dark:border-[#AF9D8E]/10 pt-6">
                <img
                  src={current.image}
                  alt={`feedback_by-${current.name}`}
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-[#AF9D8E]/40 shadow-warm-glow-sm"
                />
                <div>
                  <h4 className="font-heading font-bold text-[#48413A] dark:text-[#FAF8F5] text-lg">
                    {current.name}
                  </h4>
                  <p className="text-xs font-bold text-[#8C7A6B] dark:text-[#D6C7B9] uppercase tracking-wider font-heading">
                    {current.designation} of {current.company}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Carousel Controls & Pagination Dots */}
        <div className="mt-8 flex items-center justify-between">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-8 bg-[#8C7A6B] dark:bg-[#D6C7B9] shadow-warm-glow-sm"
                    : "w-2.5 bg-[#AF9D8E]/30 hover:bg-[#AF9D8E]/50"
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="glass flex h-10 w-10 items-center justify-center rounded-full border border-[#AF9D8E]/30 dark:border-[#AF9D8E]/20 text-[#6E665E] dark:text-[#C4B8AD] hover:border-[#8C7A6B] dark:hover:border-[#D6C7B9] hover:text-[#48413A] dark:hover:text-[#FAF8F5] transition-all duration-300"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="glass flex h-10 w-10 items-center justify-center rounded-full border border-[#AF9D8E]/30 dark:border-[#AF9D8E]/20 text-[#6E665E] dark:text-[#C4B8AD] hover:border-[#8C7A6B] dark:hover:border-[#D6C7B9] hover:text-[#48413A] dark:hover:text-[#FAF8F5] transition-all duration-300"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
