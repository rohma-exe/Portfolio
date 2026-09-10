import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { config } from "../../constants/config";

// Unified Brown Theme Palette: Light Brown (Default) & Dark Brown (Active)
const BROWN_THEME = {
  // Default (Unselected) Light Brown
  inactive: {
    accent: "#B5A496",
    light: "#D6C7B9",
    glow: "rgba(181, 164, 150, 0.3)",
    bg: "#FAF8F5",
    text: "#6E665E",
    border: "#C7B8AA",
  },
  // Active (Selected) Dark Brown
  active: {
    accent: "#4A3B2F",
    light: "#7D6958",
    glow: "rgba(74, 59, 47, 0.5)",
    bg: "#F5EEE8",
    text: "#FAF8F5",
    border: "#4A3B2F",
  },
};

// Desktop Road coordinates for 3 milestones along a 1200x400 SVG Canvas
const DESKTOP_POINTS = [
  { x: 220, y: 250, isTop: false }, // Valley 1 (Starbucks) -> Content Below
  { x: 600, y: 145, isTop: true },  // Crest (Tesla) -> Content Above
  { x: 980, y: 250, isTop: false }, // Valley 2 (Meta) -> Content Below
];

// Symmetrical Cubic Bezier path traversing the 3 points smoothly
const DESKTOP_ROAD_PATH =
  "M 0,200 C 90,200 140,250 220,250 C 340,250 480,145 600,145 C 720,145 860,250 980,250 C 1060,250 1110,200 1200,200";

const Experience = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  return (
    <>
      {/* Left-Aligned Section Header & Subtitle */}
      <Header useMotion={true} {...config.sections.experience} />
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-4 max-w-3xl text-base sm:text-lg text-[#6E665E] dark:text-[#C4B8AD] font-sans leading-relaxed"
      >
        A visual journey through my professional milestones. Click any checkpoint to explore key achievements and responsibilities.
      </motion.p>

      {/* ========================================================================= */}
      {/* DESKTOP VIEW: Unified Serpentine Highway & Interactive SVG Roadmap        */}
      {/* ========================================================================= */}
      <div className="hidden lg:block relative mt-10 mb-12 max-w-7xl mx-auto px-4">
        <div className="relative w-full">
          <svg
            viewBox="0 0 1200 400"
            className="w-full h-auto select-none overflow-visible"
          >
            <defs>
              {/* Diffuse Ambient Auras for Pins */}
              <radialGradient id="aura-inactive" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={BROWN_THEME.inactive.accent} stopOpacity="0.35" />
                <stop offset="60%" stopColor={BROWN_THEME.inactive.light} stopOpacity="0.1" />
                <stop offset="100%" stopColor={BROWN_THEME.inactive.light} stopOpacity="0" />
              </radialGradient>
              <radialGradient id="aura-active" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={BROWN_THEME.active.accent} stopOpacity="0.5" />
                <stop offset="60%" stopColor={BROWN_THEME.active.light} stopOpacity="0.15" />
                <stop offset="100%" stopColor={BROWN_THEME.active.light} stopOpacity="0" />
              </radialGradient>

              {/* Road Drop Shadow */}
              <filter id="road-shadow" x="-5%" y="-20%" width="110%" height="150%">
                <feDropShadow
                  dx="0"
                  dy="8"
                  stdDeviation="8"
                  floodColor="#48413A"
                  floodOpacity="0.12"
                />
              </filter>

              {/* Pin Active Drop Shadow */}
              <filter id="pin-glow" x="-40%" y="-40%" width="180%" height="180%">
                <feDropShadow
                  dx="0"
                  dy="4"
                  stdDeviation="6"
                  floodColor="#4A3B2F"
                  floodOpacity="0.35"
                />
              </filter>
            </defs>

            {/* Glowing Auras behind road peaks/valleys */}
            {DESKTOP_POINTS.map((pt, i) => (
              <circle
                key={`aura-${i}`}
                cx={pt.x}
                cy={pt.y}
                r="95"
                fill={activeIdx === i ? "url(#aura-active)" : "url(#aura-inactive)"}
              />
            ))}

            {/* Outer Road Curb / Border */}
            <path
              d={DESKTOP_ROAD_PATH}
              fill="none"
              stroke="#D6C7B9"
              strokeWidth="44"
              strokeLinecap="round"
              filter="url(#road-shadow)"
            />

            {/* Dark Asphalt Pavement */}
            <path
              d={DESKTOP_ROAD_PATH}
              fill="none"
              stroke="#2E2824"
              strokeWidth="38"
              strokeLinecap="round"
            />

            {/* White Dashed Center Lane Marking */}
            <path
              d={DESKTOP_ROAD_PATH}
              fill="none"
              stroke="#FAF8F5"
              strokeWidth="3.5"
              strokeDasharray="14 10"
              strokeLinecap="round"
              className="opacity-90"
            />

            {/* 3 Interactive Milestones with Precision Alignment */}
            {experiences.map((exp, index) => {
              const pt = DESKTOP_POINTS[index];
              if (!pt) return null;
              const isActive = activeIdx === index;
              const theme = isActive ? BROWN_THEME.active : BROWN_THEME.inactive;

              return (
                <g
                  key={`svg-milestone-${index}`}
                  transform={`translate(${pt.x}, ${pt.y})`}
                  onClick={() => setActiveIdx(index)}
                  className="cursor-pointer group"
                >
                  {/* Ground Contact Shadow on the Road Lane */}
                  <ellipse
                    cx="0"
                    cy="0"
                    rx={isActive ? 16 : 12}
                    ry={isActive ? 6 : 4.5}
                    fill="rgba(0,0,0,0.35)"
                  />

                  {/* Target Contact Ring on the Road */}
                  <circle
                    cx="0"
                    cy="0"
                    r={isActive ? 7 : 5}
                    fill={theme.accent}
                    stroke="#FAF8F5"
                    strokeWidth="2"
                  />
                  <circle
                    cx="0"
                    cy="0"
                    r={isActive ? 14 : 10}
                    fill="none"
                    stroke={theme.accent}
                    strokeWidth={isActive ? "2" : "1.5"}
                    strokeDasharray={isActive ? "none" : "3 3"}
                    opacity={isActive ? "1" : "0.7"}
                  />

                  {/* Teardrop Pin Body planted directly onto the road at (0, 0) */}
                  <g
                    filter={isActive ? "url(#pin-glow)" : undefined}
                    className="transition-transform duration-300 group-hover:-translate-y-1.5"
                  >
                    {/* Teardrop Path */}
                    <path
                      d="M 0,0 C -6,-10 -22,-24 -22,-44 C -22,-56.15 -12.15,-66 0,-66 C 12.15,-66 22,-56.15 22,-44 C 22,-24 6,-10 0,0 Z"
                      fill={theme.accent}
                      stroke="#FAF8F5"
                      strokeWidth="2.5"
                    />

                    {/* White Inner Circle */}
                    <circle
                      cx="0"
                      cy="-44"
                      r="16"
                      fill="#FFFFFF"
                      stroke="#FAF8F5"
                      strokeWidth="1.5"
                    />

                    {/* Company Avatar Icon */}
                    <image
                      href={exp.icon}
                      x="-11"
                      y="-55"
                      width="22"
                      height="22"
                      preserveAspectRatio="xMidYMid meet"
                    />

                    {/* Active Ping Dot */}
                    {isActive && (
                      <circle
                        cx="16"
                        cy="-60"
                        r="4.5"
                        fill={theme.accent}
                        stroke="#FAF8F5"
                        strokeWidth="1.5"
                      />
                    )}
                  </g>

                  {/* Header & Summary Callout (Above Peak / Below Valley) */}
                  {pt.isTop ? (
                    // Above Peak (Tesla)
                    <g className="transition-transform duration-300 group-hover:-translate-y-1">
                      {/* Date Capsule Pill */}
                      <rect
                        x="-68"
                        y="-106"
                        width="136"
                        height="24"
                        rx="12"
                        fill={isActive ? theme.accent : "#FAF8F5"}
                        stroke={isActive ? theme.accent : theme.border}
                        strokeWidth="1.5"
                        filter="drop-shadow(0 2px 4px rgba(0,0,0,0.06))"
                      />
                      <text
                        x="0"
                        y="-90"
                        textAnchor="middle"
                        fill={isActive ? "#FAF8F5" : theme.text}
                        fontSize="10.5"
                        fontWeight="700"
                        fontFamily="Clash Display, sans-serif"
                        letterSpacing="0.06em"
                      >
                        {exp.date.toUpperCase()}
                      </text>

                      {/* Role Title */}
                      <text
                        x="0"
                        y="-118"
                        textAnchor="middle"
                        fill={isActive ? "#AF9D8E" : "#48413A"}
                        className="fill-[#48413A] dark:fill-[#FAF8F5]"
                        fontSize="15"
                        fontWeight="700"
                        fontFamily="Clash Display, sans-serif"
                      >
                        {exp.title}
                      </text>

                      {/* Company Name */}
                      <text
                        x="0"
                        y="-135"
                        textAnchor="middle"
                        fill={isActive ? theme.accent : "#8C7A6B"}
                        className="fill-[#8C7A6B] dark:fill-[#D6C7B9]"
                        fontSize="12"
                        fontWeight="700"
                        fontFamily="Clash Display, sans-serif"
                        letterSpacing="0.08em"
                      >
                        {exp.companyName.toUpperCase()}
                      </text>
                    </g>
                  ) : (
                    // Below Valley (Starbucks & Meta)
                    <g className="transition-transform duration-300 group-hover:translate-y-1">
                      {/* Date Capsule Pill */}
                      <rect
                        x="-70"
                        y="34"
                        width="140"
                        height="24"
                        rx="12"
                        fill={isActive ? theme.accent : "#FAF8F5"}
                        stroke={isActive ? theme.accent : theme.border}
                        strokeWidth="1.5"
                        filter="drop-shadow(0 2px 4px rgba(0,0,0,0.06))"
                      />
                      <text
                        x="0"
                        y="50"
                        textAnchor="middle"
                        fill={isActive ? "#FAF8F5" : theme.text}
                        fontSize="10.5"
                        fontWeight="700"
                        fontFamily="Clash Display, sans-serif"
                        letterSpacing="0.06em"
                      >
                        {exp.date.toUpperCase()}
                      </text>

                      {/* Role Title */}
                      <text
                        x="0"
                        y="76"
                        textAnchor="middle"
                        fill={isActive ? "#AF9D8E" : "#48413A"}
                        className="fill-[#48413A] dark:fill-[#FAF8F5]"
                        fontSize="15"
                        fontWeight="700"
                        fontFamily="Clash Display, sans-serif"
                      >
                        {exp.title}
                      </text>

                      {/* Company Name */}
                      <text
                        x="0"
                        y="94"
                        textAnchor="middle"
                        fill={isActive ? theme.accent : "#8C7A6B"}
                        className="fill-[#8C7A6B] dark:fill-[#D6C7B9]"
                        fontSize="12"
                        fontWeight="700"
                        fontFamily="Clash Display, sans-serif"
                        letterSpacing="0.08em"
                      >
                        {exp.companyName.toUpperCase()}
                      </text>
                    </g>
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        {/* 3. Detailed Expandable Experience Drawer (Desktop) */}
        <div className="mt-4 max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {activeIdx !== null && experiences[activeIdx] && (
              <motion.div
                key={`active-details-${activeIdx}`}
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="glass-card shimmer-border rounded-3xl p-6 md:p-8 relative border shadow-warm-glow"
                style={{
                  borderLeftColor: BROWN_THEME.active.accent,
                  borderLeftWidth: "6px",
                }}
              >
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-3 border-b border-[#AF9D8E]/20 dark:border-[#AF9D8E]/10">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-2xl p-2 flex items-center justify-center shadow-sm border bg-[#FAF8F5] dark:bg-[#14100E]"
                      style={{
                        borderColor: BROWN_THEME.active.light,
                      }}
                    >
                      <img
                        src={experiences[activeIdx].icon}
                        alt={experiences[activeIdx].companyName}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-2xl text-[#48413A] dark:text-[#FAF8F5]">
                        {experiences[activeIdx].title}
                      </h4>
                      <p
                        className="font-heading font-semibold text-sm"
                        style={{
                          color: BROWN_THEME.active.accent,
                        }}
                      >
                        {experiences[activeIdx].companyName}
                      </p>
                    </div>
                  </div>

                  <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider font-heading bg-[#4A3B2F] text-[#FAF8F5] border border-[#4A3B2F] shadow-sm">
                    {experiences[activeIdx].date}
                  </span>
                </div>

                {/* Key Bullet Points */}
                <h5 className="text-xs font-bold uppercase tracking-widest text-[#8C7A6B] dark:text-[#D6C7B9] font-heading mb-3">
                  Key Achievements & Responsibilities
                </h5>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {experiences[activeIdx].points.map((point, pIdx) => (
                    <li
                      key={`point-active-${pIdx}`}
                      className="flex items-start text-sm text-[#6E665E] dark:text-[#C4B8AD] font-sans leading-relaxed bg-[#FAF8F5]/60 dark:bg-[#14100E]/60 p-3 rounded-xl border border-[#AF9D8E]/20 dark:border-[#AF9D8E]/15"
                    >
                      <span
                        className="mr-2.5 font-bold text-base leading-none mt-0.5"
                        style={{
                          color: BROWN_THEME.active.accent,
                        }}
                      >
                        ✦
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE / TABLET VIEW: Vertical Winding S-Curve Timeline (< lg)            */}
      {/* ========================================================================= */}
      <div className="lg:hidden relative mt-8 max-w-2xl mx-auto px-2">
        {/* Continuous Serpentine Left Line with Asphalt Styling */}
        <div className="relative pl-14 sm:pl-16 space-y-10">
          {/* Vertical Road Track */}
          <div className="absolute left-6 sm:left-7 top-4 bottom-4 w-5 -translate-x-1/2 rounded-full bg-[#2E2824] border-2 border-[#D6C7B9] shadow-md flex items-center justify-center overflow-hidden">
            {/* Dashed Center Stripe */}
            <div className="w-0.5 h-full border-r-2 border-dashed border-[#FAF8F5]/90" />
          </div>

          {experiences.map((exp, index) => {
            const isSelected = activeIdx === index;
            const theme = isSelected ? BROWN_THEME.active : BROWN_THEME.inactive;

            return (
              <motion.div
                key={`mobile-milestone-${index}`}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Milestone Pin Icon on the Track */}
                <button
                  onClick={() => setActiveIdx(isSelected ? null : index)}
                  className="absolute -left-14 sm:-left-16 top-3 -translate-x-1/2 z-10 focus:outline-none"
                  aria-label={`Milestone ${exp.title}`}
                >
                  <div
                    className="w-11 h-11 rounded-full p-1.5 shadow-warm-glow flex items-center justify-center border-2 border-white transition-transform active:scale-90"
                    style={{
                      backgroundColor: theme.accent,
                      boxShadow: `0 0 14px ${theme.glow}`,
                    }}
                  >
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center p-1">
                      <img
                        src={exp.icon}
                        alt={exp.companyName}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </button>

                {/* Experience Card */}
                <div
                  onClick={() => setActiveIdx(isSelected ? null : index)}
                  className="glass-card shimmer-border rounded-2xl p-5 sm:p-6 cursor-pointer border transition-all duration-300"
                  style={{
                    borderColor: isSelected ? theme.accent : "rgba(175, 157, 142, 0.3)",
                    borderLeftWidth: "4px",
                    borderLeftColor: theme.accent,
                  }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span
                      className="text-[11px] font-bold uppercase tracking-wider font-heading px-3 py-0.5 rounded-full border shadow-sm"
                      style={{
                        backgroundColor: isSelected ? theme.accent : "#FAF8F5",
                        color: isSelected ? "#FAF8F5" : "#6E665E",
                        borderColor: isSelected ? theme.accent : theme.border,
                      }}
                    >
                      {exp.date}
                    </span>
                    <span className="text-xs font-semibold text-[#8C7A6B] dark:text-[#D6C7B9] font-heading">
                      Phase 0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-[#48413A] dark:text-[#FAF8F5]">
                    {exp.title}
                  </h3>
                  <p
                    className="font-heading font-semibold text-sm mb-3"
                    style={{ color: theme.accent }}
                  >
                    {exp.companyName}
                  </p>

                  <ul className="space-y-2">
                    {exp.points.map((point, pIndex) => (
                      <li
                        key={`mob-point-${pIndex}`}
                        className="flex items-start text-xs sm:text-sm text-[#6E665E] dark:text-[#C4B8AD] font-sans leading-relaxed"
                      >
                        <span
                          className="mr-2 font-bold text-sm leading-none mt-0.5"
                          style={{ color: theme.accent }}
                        >
                          ✦
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
