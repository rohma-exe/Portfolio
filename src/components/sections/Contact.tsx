import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { CrystalCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { revealUp } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map((input) => [input, ""])
);

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
};

const Contact = () => {
  const formRef = useRef<React.LegacyRef<HTMLFormElement> | undefined>();
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    if (e === undefined) return;
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
    if (e === undefined) return;
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          form_name: form.name,
          to_name: config.html.fullName,
          from_email: form.email,
          to_email: config.html.email,
          message: form.message,
        },
        emailjsConfig.accessToken
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm(INITIAL_STATE);
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center overflow-hidden">
      {/* Left Column: Glassmorphism Form */}
      <motion.div
        variants={revealUp(0.2, 0.8)}
        className="lg:col-span-7 glass-card shimmer-border rounded-3xl p-8 sm:p-12 relative z-10"
      >
        <Header useMotion={false} {...config.contact} />

        <form
          // @ts-expect-error
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-6"
        >
          {Object.keys(config.contact.form).map((input) => {
            const { span, placeholder } =
              config.contact.form[input as keyof typeof config.contact.form];
            const Component = input === "message" ? "textarea" : "input";

            return (
              <label key={input} className="flex flex-col">
                <span className="mb-2 text-xs font-bold uppercase tracking-wider text-[#48413A] dark:text-[#FAF8F5] font-heading">
                  {span}
                </span>
                <Component
                  type={input === "email" ? "email" : "text"}
                  name={input}
                  value={form[`${input}`]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="bg-white/85 dark:bg-[#14100E]/85 placeholder:text-[#9C8A7D] dark:placeholder-[#7D6E62] rounded-xl border border-[#AF9D8E]/30 dark:border-[#AF9D8E]/20 px-5 py-3.5 text-sm font-medium text-[#48413A] dark:text-[#FAF8F5] outline-none focus:border-[#8C7A6B] dark:focus:border-[#D6C7B9] focus:ring-4 focus:ring-[#AF9D8E]/20 transition-all duration-300 shadow-sm"
                  {...(input === "message" && { rows: 5 })}
                />
              </label>
            );
          })}
          <button
            type="submit"
            className="bg-warm-gradient rounded-xl px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white shadow-warm-glow neon-glow-hover outline-none font-heading transition-all duration-300"
          >
            {loading ? "Sending Message..." : "Send Message →"}
          </button>
        </form>

        {/* Social Links Row */}
        <div className="mt-8 pt-6 border-t border-[#AF9D8E]/15 dark:border-[#AF9D8E]/10 flex items-center justify-between">
          <span className="text-xs font-medium text-[#6E665E] dark:text-[#C4B8AD] font-sans">Or reach out directly:</span>
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/rohma-rani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#8C7A6B] dark:text-[#D6C7B9] hover:text-[#48413A] dark:hover:text-[#FAF8F5] hover:underline font-heading"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/rohma-exe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#8C7A6B] dark:text-[#D6C7B9] hover:text-[#48413A] dark:hover:text-[#FAF8F5] hover:underline font-heading"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </motion.div>

      {/* Right Column: 3D Crystal Canvas */}
      <motion.div
        variants={revealUp(0.4, 0.8)}
        className="lg:col-span-5 h-[340px] sm:h-[450px] lg:h-[520px] w-full relative flex items-center justify-center"
      >
        <CrystalCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
