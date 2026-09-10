import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="relative flex h-[32px] w-[62px] items-center justify-between rounded-full px-[5px] transition-all duration-300 border border-[#AF9D8E]/40 dark:border-[#AF9D8E]/30 bg-[#EDE8E3] dark:bg-[#181412] shadow-inner focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C7A6B] group cursor-pointer"
    >
      {/* Track Sun Icon (Left) */}
      <span className="flex h-5 w-5 items-center justify-center text-[#8C7A6B] dark:text-[#6E665E] transition-opacity duration-200">
        <svg
          className="w-3.5 h-3.5 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z" />
        </svg>
      </span>

      {/* Track Moon Icon (Right) */}
      <span className="flex h-5 w-5 items-center justify-center text-[#9C8D7F] dark:text-[#D6C7B9] transition-opacity duration-200">
        <svg
          className="w-3.5 h-3.5 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12.3 2a10 10 0 0 0-.19 1.4 10 10 0 0 0 10 10c.47 0 .93-.04 1.39-.11a10 10 0 1 1-11.2-11.29z" />
        </svg>
      </span>

      {/* Sliding Luxury Thumb */}
      <motion.div
        animate={{ x: isDark ? 30 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
        className="absolute left-[3px] top-[3px] flex h-[24px] w-[24px] items-center justify-center rounded-full bg-white dark:bg-[#433528] shadow-[0_2px_8px_rgba(0,0,0,0.18)] dark:shadow-[0_2px_10px_rgba(0,0,0,0.5)] border border-[#AF9D8E]/30 dark:border-[#AF9D8E]/25"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ rotate: -60, scale: 0.5, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 60, scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center"
            >
              <svg className="w-3 h-3 text-[#FAF8F5] fill-current" viewBox="0 0 24 24">
                <path d="M12.3 2a10 10 0 0 0-.19 1.4 10 10 0 0 0 10 10c.47 0 .93-.04 1.39-.11a10 10 0 1 1-11.2-11.29z" />
              </svg>
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 60, scale: 0.5, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -60, scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center"
            >
              <svg className="w-3 h-3 text-[#8C7A6B] fill-current" viewBox="0 0 24 24">
                <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1z" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </button>
  );
};
