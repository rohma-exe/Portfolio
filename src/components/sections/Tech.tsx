import { motion } from "framer-motion";
import { technologies } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { scaleIn } from "../../utils/motion";

const SKILL_DETAILS: Record<string, { category: string; desc: string; level: string }> = {
  JavaScript: { category: "Language", desc: "ES6+, Async, Closures & Modern JS", level: "Expert" },
  TypeScript: { category: "Language", desc: "Strict Typing, Interfaces & Generics", level: "Advanced" },
  "React JS": { category: "Frontend", desc: "Hooks, Context, State & Performance", level: "Expert" },
  "Node JS": { category: "Backend", desc: "REST APIs, Express & Microservices", level: "Advanced" },
  MongoDB: { category: "Database", desc: "NoSQL Modeling & Aggregations", level: "Proficient" },
  "HTML 5": { category: "Frontend", desc: "Semantic Markup & Accessibility", level: "Expert" },
  "CSS 3": { category: "Frontend", desc: "Flexbox, Grid, Animations & FX", level: "Expert" },
  "Tailwind CSS": { category: "Styling", desc: "Utility-first Styling & Design Systems", level: "Expert" },
  git: { category: "Tools", desc: "Version Control, Branching & CI/CD", level: "Advanced" },
  figma: { category: "Design", desc: "UI Wireframing & Prototyping", level: "Advanced" },
  docker: { category: "DevOps", desc: "Containerization & Deployment", level: "Proficient" },
};

const Tech = () => {
  return (
    <>
      <div className="text-center mb-12">
        <span className="font-heading sm:text-[15px] text-[12px] text-[#8C7A6B] dark:text-[#AF9D8E] uppercase tracking-[0.25em] font-bold">
          MY TECH STACK
        </span>
        <h2 className="font-heading text-[#48413A] dark:text-[#FAF8F5] font-bold md:text-[56px] sm:text-[48px] xs:text-[36px] text-[28px] tracking-tight">
          Technologies & Tools.
        </h2>
        <p className="mt-2 text-[#6E665E] dark:text-[#C4B8AD] text-base max-w-xl mx-auto font-sans">
          Hover or tap over any card to flip and view core proficiency details.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {technologies.map((tech, index) => {
          const detail = SKILL_DETAILS[tech.name] || {
            category: "Tech",
            desc: "Modern development tool",
            level: "Proficient",
          };

          return (
            <motion.div
              key={tech.name}
              variants={scaleIn(index * 0.05, 0.5)}
              className="flip-card h-44 w-full cursor-pointer"
            >
              <div className="flip-card-inner relative h-full w-full rounded-2xl shadow-warm-glow-sm">
                {/* Front Side */}
                <div className="flip-card-front glass-card absolute inset-0 flex flex-col items-center justify-center rounded-2xl p-4 border border-[#AF9D8E]/20 dark:border-[#AF9D8E]/15">
                  <div className="h-14 w-14 mb-3 flex items-center justify-center">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="h-full w-full object-contain filter drop-shadow-sm"
                    />
                  </div>
                  <h4 className="font-heading font-semibold text-[#48413A] dark:text-[#FAF8F5] text-sm text-center">
                    {tech.name}
                  </h4>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C7A6B] dark:text-[#D6C7B9] mt-1">
                    {detail.category}
                  </span>
                </div>

                {/* Back Side */}
                <div className="flip-card-back bg-warm-gradient absolute inset-0 flex flex-col items-center justify-center rounded-2xl p-4 text-white text-center shadow-warm-glow">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-white/20 px-2 py-0.5 rounded-full mb-1">
                    {detail.level}
                  </span>
                  <h5 className="font-heading font-bold text-sm mb-1">{tech.name}</h5>
                  <p className="text-xs text-white/95 leading-tight font-sans">
                    {detail.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
