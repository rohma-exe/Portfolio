import { motion } from "framer-motion";
import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { revealUp, scaleIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const Works = () => {
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full mb-12">
        <motion.p
          variants={revealUp(0.1, 0.8)}
          className="mt-3 max-w-3xl text-lg text-[#6E665E] dark:text-[#C4B8AD] font-sans leading-relaxed"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      {/* Projects Showcase Container */}
      <div className="space-y-8">
        {/* Featured Hero Project Card */}
        {featuredProject && (
          <motion.div
            variants={scaleIn(0.2, 0.7)}
            className="glass-card shimmer-border neon-glow-hover rounded-3xl overflow-hidden p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Image Preview */}
            <div className="lg:col-span-7 relative h-[260px] sm:h-[340px] w-full overflow-hidden rounded-2xl group">
              <img
                src={featuredProject.image}
                alt={featuredProject.name}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-white bg-[#8C7A6B] px-3 py-1 rounded-full shadow-warm-glow-sm">
                  Featured Case Study
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#8C7A6B] dark:text-[#D6C7B9] font-heading px-3 py-1 rounded-full bg-[#AF9D8E]/15 dark:bg-[#AF9D8E]/20 border border-[#AF9D8E]/25">
                    Featured Project
                  </span>
                  <a
                    href={featuredProject.sourceCodeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass flex h-10 w-10 items-center justify-center rounded-full border border-[#AF9D8E]/30 dark:border-[#AF9D8E]/20 hover:border-[#8C7A6B] dark:hover:border-[#D6C7B9] hover:shadow-warm-glow-sm transition-all duration-300"
                    aria-label="View Source Code"
                  >
                    <img src={github} alt="github" className="h-5 w-5 object-contain dark:invert" />
                  </a>
                </div>

                <h3 className="font-heading font-bold text-3xl text-[#48413A] dark:text-[#FAF8F5] mb-3">
                  {featuredProject.name}
                </h3>
                <p className="text-[#6E665E] dark:text-[#C4B8AD] text-sm sm:text-base leading-relaxed font-sans mb-6">
                  {featuredProject.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.tags.map((tag) => (
                    <span
                      key={tag.name}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-[#FAF8F5] dark:bg-[#14100E] text-[#524A43] dark:text-[#D6C7B9] border border-[#AF9D8E]/20 dark:border-[#AF9D8E]/15 font-sans"
                    >
                      #{tag.name}
                    </span>
                  ))}
                </div>

                <a
                  href={featuredProject.sourceCodeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-warm-gradient px-6 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-white shadow-warm-glow neon-glow-hover font-heading"
                >
                  <span>View Repository</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* Remaining Projects — 2 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((project, index) => (
            <motion.div
              key={`project-${index}`}
              variants={scaleIn(0.3 + index * 0.15, 0.6)}
              className="glass-card shimmer-border neon-glow-hover rounded-3xl overflow-hidden p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-[220px] w-full overflow-hidden rounded-2xl mb-5">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3">
                    <a
                      href={project.sourceCodeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass flex h-10 w-10 items-center justify-center rounded-full border border-[#AF9D8E]/30 dark:border-[#AF9D8E]/20 hover:border-[#8C7A6B] dark:hover:border-[#D6C7B9] shadow-warm-glow-sm transition-all duration-300"
                    >
                      <img src={github} alt="github" className="h-5 w-5 object-contain dark:invert" />
                    </a>
                  </div>
                </div>

                <h3 className="font-heading font-bold text-2xl text-[#48413A] dark:text-[#FAF8F5] mb-2">
                  {project.name}
                </h3>
                <p className="text-[#6E665E] dark:text-[#C4B8AD] text-sm leading-relaxed font-sans mb-4">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#AF9D8E]/15 dark:border-[#AF9D8E]/10">
                {project.tags.map((tag) => (
                  <span
                    key={tag.name}
                    className="text-xs font-medium px-2.5 py-1 rounded-md bg-[#FAF8F5] dark:bg-[#14100E] text-[#524A43] dark:text-[#D6C7B9] border border-[#AF9D8E]/20 dark:border-[#AF9D8E]/15"
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
