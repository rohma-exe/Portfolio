
import { motion } from "framer-motion";
import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { revealUp, scaleIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

// ── Bespoke 3D Cashmere / Champagne Geometric Icons ──
const FullStack3DIcon = () => (
  <svg
    viewBox="0 0 64 64"
    className="w-14 h-14 object-contain filter drop-shadow-[0_8px_16px_rgba(140,122,107,0.28)] group-hover:rotate-12 transition-transform duration-500 select-none"
  >
    <defs>
      <linearGradient id="fsGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="50%" stopColor="#D6C7B9" />
        <stop offset="100%" stopColor="#AF9D8E" />
      </linearGradient>
      <linearGradient id="fsGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#AF9D8E" />
        <stop offset="100%" stopColor="#8C7A6B" />
      </linearGradient>
      <linearGradient id="fsGrad3" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#8C7A6B" />
        <stop offset="100%" stopColor="#524A43" />
      </linearGradient>
      <linearGradient id="fsGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FAF8F5" />
        <stop offset="100%" stopColor="#D6C7B9" />
      </linearGradient>
    </defs>
    {/* 3D Polyhedron Crystal Facets */}
    <polygon points="32,4 54,20 32,32 10,20" fill="url(#fsGrad1)" />
    <polygon points="10,20 32,32 32,60 10,44" fill="url(#fsGrad2)" />
    <polygon points="54,20 32,32 32,60 54,44" fill="url(#fsGrad3)" />
    <polygon points="32,4 54,20 44,12" fill="url(#fsGrad4)" opacity="0.9" />
    <polygon points="32,4 10,20 20,12" fill="#FFFFFF" opacity="0.75" />
    <line x1="32" y1="4" x2="32" y2="32" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.7" />
    <line x1="10" y1="20" x2="32" y2="32" stroke="#FFFFFF" strokeWidth="1" opacity="0.5" />
    <line x1="54" y1="20" x2="32" y2="32" stroke="#FAF8F5" strokeWidth="1" opacity="0.5" />
    <circle cx="32" cy="18" r="1.5" fill="#FFFFFF" opacity="0.9" />
  </svg>
);

const AI3DIcon = () => (
  <svg
    viewBox="0 0 64 64"
    className="w-12 h-12 object-contain filter drop-shadow-[0_8px_16px_rgba(140,122,107,0.28)] group-hover:-rotate-12 transition-transform duration-500 select-none"
  >
    <defs>
      <radialGradient id="aiSphereGrad" cx="35%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="35%" stopColor="#D6C7B9" />
        <stop offset="70%" stopColor="#AF9D8E" />
        <stop offset="100%" stopColor="#6E665E" />
      </radialGradient>
      <linearGradient id="aiRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D6C7B9" />
        <stop offset="100%" stopColor="#8C7A6B" />
      </linearGradient>
    </defs>
    {/* 3D Sphere */}
    <circle cx="32" cy="32" r="17" fill="url(#aiSphereGrad)" />
    {/* Orbital Ring 1 */}
    <ellipse
      cx="32"
      cy="32"
      rx="25"
      ry="9.5"
      transform="rotate(-30 32 32)"
      fill="none"
      stroke="url(#aiRingGrad)"
      strokeWidth="2.5"
      strokeDasharray="7 3"
    />
    {/* Orbital Ring 2 */}
    <ellipse
      cx="32"
      cy="32"
      rx="25"
      ry="9.5"
      transform="rotate(40 32 32)"
      fill="none"
      stroke="#8C7A6B"
      strokeWidth="2"
      opacity="0.8"
    />
    {/* Synaptic Nodes */}
    <circle cx="21" cy="18" r="3" fill="#FAF8F5" stroke="#8C7A6B" strokeWidth="1.5" />
    <circle cx="43" cy="46" r="3" fill="#FAF8F5" stroke="#AF9D8E" strokeWidth="1.5" />
    <circle cx="47" cy="22" r="2.5" fill="#8C7A6B" />
    <circle cx="17" cy="42" r="2.5" fill="#AF9D8E" />
    <circle cx="27" cy="26" r="2.5" fill="#FFFFFF" opacity="0.85" />
  </svg>
);

const UIUX3DIcon = () => (
  <svg
    viewBox="0 0 64 64"
    className="w-12 h-12 object-contain filter drop-shadow-[0_8px_16px_rgba(140,122,107,0.28)] group-hover:scale-110 transition-transform duration-500 select-none"
  >
    <defs>
      <linearGradient id="uiGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="50%" stopColor="#D6C7B9" />
        <stop offset="100%" stopColor="#AF9D8E" />
      </linearGradient>
      <linearGradient id="uiGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#AF9D8E" />
        <stop offset="100%" stopColor="#8C7A6B" />
      </linearGradient>
      <linearGradient id="uiGrad3" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#8C7A6B" />
        <stop offset="100%" stopColor="#524A43" />
      </linearGradient>
    </defs>
    {/* Top floating isometric layer */}
    <polygon points="32,6 54,19 32,32 10,19" fill="url(#uiGrad1)" />
    <polygon points="10,19 32,32 32,45 10,32" fill="url(#uiGrad2)" opacity="0.95" />
    <polygon points="54,19 32,32 32,45 54,32" fill="url(#uiGrad3)" />
    {/* Bottom floating base layer */}
    <polygon points="32,39 48,48 32,57 16,48" fill="url(#uiGrad1)" opacity="0.75" />
    <polygon points="16,48 32,57 32,60 16,51" fill="url(#uiGrad2)" opacity="0.6" />
    <polygon points="48,48 32,57 32,60 48,51" fill="url(#uiGrad3)" opacity="0.6" />
    {/* Highlight Dot */}
    <circle cx="32" cy="17" r="2.5" fill="#FFFFFF" opacity="0.9" />
  </svg>
);

const DevOps3DIcon = () => (
  <svg
    viewBox="0 0 64 64"
    className="w-12 h-12 object-contain filter drop-shadow-[0_8px_16px_rgba(140,122,107,0.28)] group-hover:scale-110 transition-transform duration-500 select-none"
  >
    <defs>
      <linearGradient id="devCubeTop" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#D6C7B9" />
      </linearGradient>
      <linearGradient id="devCubeLeft" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#AF9D8E" />
        <stop offset="100%" stopColor="#8C7A6B" />
      </linearGradient>
      <linearGradient id="devCubeRight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8C7A6B" />
        <stop offset="100%" stopColor="#48413A" />
      </linearGradient>
    </defs>
    {/* Main Isometric Infrastructure Cube */}
    <polygon points="32,8 52,20 32,32 12,20" fill="url(#devCubeTop)" />
    <polygon points="12,20 32,32 32,56 12,44" fill="url(#devCubeLeft)" />
    <polygon points="52,20 32,32 32,56 52,44" fill="url(#devCubeRight)" />
    {/* Interconnect Seams and Nodes */}
    <line x1="32" y1="32" x2="32" y2="56" stroke="#FAF8F5" strokeWidth="1.5" opacity="0.6" />
    <circle cx="32" cy="20" r="3" fill="#8C7A6B" stroke="#FFFFFF" strokeWidth="1" />
    <circle cx="22" cy="38" r="2.5" fill="#FAF8F5" opacity="0.9" />
    <circle cx="42" cy="38" r="2.5" fill="#FAF8F5" opacity="0.9" />
    <line x1="22" y1="38" x2="32" y2="44" stroke="#FAF8F5" strokeWidth="1" opacity="0.5" strokeDasharray="2 2" />
    <line x1="42" y1="38" x2="32" y2="44" stroke="#FAF8F5" strokeWidth="1" opacity="0.5" strokeDasharray="2 2" />
  </svg>
);

const About = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.about} />

      <motion.p
        variants={revealUp(0.2, 0.8)}
        className="mt-4 max-w-3xl text-lg text-[#6E665E] dark:text-[#C4B8AD] font-sans leading-relaxed"
      >
        {config.sections.about.content}
      </motion.p>

      {/* Bento Grid Layout */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Large Featured Card — Full Stack Development */}
        <motion.div
          variants={scaleIn(0.1, 0.6)}
          className="md:col-span-2 glass-card shimmer-border neon-glow-hover relative overflow-hidden rounded-3xl p-8 flex flex-col justify-between group min-h-[280px]"
        >
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-gradient-to-br from-[#AF9D8E]/25 to-[#8C7A6B]/15 dark:from-[#AF9D8E]/15 dark:to-[#8C7A6B]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8C7A6B] dark:text-[#D6C7B9] font-heading px-3 py-1 rounded-full bg-[#AF9D8E]/15 dark:bg-[#AF9D8E]/20 border border-[#AF9D8E]/25">
                Core Specialization
              </span>
              <FullStack3DIcon />
            </div>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#48413A] dark:text-[#FAF8F5] mb-3">
              {services[0]?.title}
            </h3>
            <p className="text-[#6E665E] dark:text-[#C4B8AD] text-base leading-relaxed font-sans max-w-xl">
              Architecting end-to-end web applications with modern frontend frameworks and robust backend microservices. Focused on speed, accessibility, and exceptional user experience.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-[#AF9D8E]/15 dark:border-[#AF9D8E]/10">
            {["React / Next.js", "TypeScript", "Node.js", "REST / GraphQL"].map((tag) => (
              <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md bg-[#FAF8F5] dark:bg-[#14100E] text-[#524A43] dark:text-[#D6C7B9] border border-[#AF9D8E]/20 dark:border-[#AF9D8E]/15">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Card 2 — ML / AI Engineering */}
        <motion.div
          variants={scaleIn(0.2, 0.6)}
          className="glass-card shimmer-border neon-glow-hover relative overflow-hidden rounded-3xl p-8 flex flex-col justify-between group min-h-[280px]"
        >
          <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-gradient-to-br from-[#8C7A6B]/20 to-[#AF9D8E]/10 dark:from-[#8C7A6B]/15 dark:to-[#AF9D8E]/10 rounded-full blur-xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8C7A6B] dark:text-[#D6C7B9] font-heading px-3 py-1 rounded-full bg-[#AF9D8E]/15 dark:bg-[#AF9D8E]/20 border border-[#AF9D8E]/25">
                AI Focus
              </span>
              <AI3DIcon />
            </div>
            <h3 className="font-heading font-bold text-2xl text-[#48413A] dark:text-[#FAF8F5] mb-2">
              {services[1]?.title}
            </h3>
            <p className="text-[#6E665E] dark:text-[#C4B8AD] text-sm leading-relaxed font-sans">
              Building intelligent predictive models, machine learning pipelines, and data analytics tools for real-world impact.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-[#AF9D8E]/15 dark:border-[#AF9D8E]/10">
            {["Python", "PyTorch", "Data Science", "Scikit-Learn"].map((tag) => (
              <span key={tag} className="text-xs font-medium px-2 py-0.5 rounded bg-[#FAF8F5] dark:bg-[#14100E] text-[#524A43] dark:text-[#D6C7B9] border border-[#AF9D8E]/20 dark:border-[#AF9D8E]/15">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Card 3 — UI/UX Design */}
        <motion.div
          variants={scaleIn(0.3, 0.6)}
          className="glass-card shimmer-border neon-glow-hover relative overflow-hidden rounded-3xl p-8 flex flex-col justify-between group min-h-[260px]"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8C7A6B] dark:text-[#D6C7B9] font-heading px-3 py-1 rounded-full bg-[#AF9D8E]/15 dark:bg-[#AF9D8E]/20 border border-[#AF9D8E]/25">
                Creative
              </span>
              <UIUX3DIcon />
            </div>
            <h3 className="font-heading font-bold text-2xl text-[#48413A] dark:text-[#FAF8F5] mb-2">
              {services[2]?.title}
            </h3>
            <p className="text-[#6E665E] dark:text-[#C4B8AD] text-sm leading-relaxed font-sans">
              Designing intuitive, sleek user interfaces with micro-interactions, responsive layouts, and interactive wireframes.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-[#AF9D8E]/15 dark:border-[#AF9D8E]/10">
            {["Figma", "Design Systems", "Prototyping"].map((tag) => (
              <span key={tag} className="text-xs font-medium px-2 py-0.5 rounded bg-[#FAF8F5] dark:bg-[#14100E] text-[#524A43] dark:text-[#D6C7B9] border border-[#AF9D8E]/20 dark:border-[#AF9D8E]/15">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Card 4 — DevOps & Infrastructure */}
        <motion.div
          variants={scaleIn(0.4, 0.6)}
          className="md:col-span-2 glass-card shimmer-border neon-glow-hover relative overflow-hidden rounded-3xl p-8 flex flex-col justify-between group min-h-[260px]"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8C7A6B] dark:text-[#D6C7B9] font-heading px-3 py-1 rounded-full bg-[#AF9D8E]/15 dark:bg-[#AF9D8E]/20 border border-[#AF9D8E]/25">
                Infrastructure
              </span>
              <DevOps3DIcon />
            </div>
            <h3 className="font-heading font-bold text-2xl text-[#48413A] dark:text-[#FAF8F5] mb-2">
              {services[3]?.title}
            </h3>
            <p className="text-[#6E665E] dark:text-[#C4B8AD] text-sm sm:text-base leading-relaxed font-sans max-w-xl">
              Containerizing applications with Docker, establishing CI/CD automation, and ensuring high-availability deployments on modern cloud infrastructure.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-[#AF9D8E]/15 dark:border-[#AF9D8E]/10">
            {["Docker", "Git / GitHub Actions", "Cloud Deployment", "Netlify"].map((tag) => (
              <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md bg-[#FAF8F5] dark:bg-[#14100E] text-[#524A43] dark:text-[#D6C7B9] border border-[#AF9D8E]/20 dark:border-[#AF9D8E]/15">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
