import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../../constants/styles";
import { navLinks } from "../../constants";
import { menu, close } from "../../assets";
import { config } from "../../constants/config";
import { ThemeToggle } from "../atoms/ThemeToggle";

const Navbar = () => {
  const [active, setActive] = useState<string | null>();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActive("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        // @ts-ignore
        const sectionHeight = current.offsetHeight;
        const sectionTop =
          current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", navbarHighlighter, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } fixed top-0 z-20 flex w-full items-center py-4 transition-all duration-200 ease-out ${
        scrolled
          ? "bg-[#FAF8F5]/92 dark:bg-[#0D0B0A]/92 backdrop-blur-md border-b border-[#AF9D8E]/25 dark:border-[#AF9D8E]/15 shadow-[0_4px_20px_rgba(175,157,142,0.1)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.5)] py-3.5"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center group"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <p className="cursor-pointer text-[21px] font-heading font-bold text-[#48413A] dark:text-[#FAF8F5] group-hover:text-[#8C7A6B] dark:group-hover:text-[#D6C7B9] transition-colors duration-200 tracking-tight">
            {config.html.fullName}
          </p>
        </Link>

        <div className="hidden items-center gap-7 sm:flex">
          <ul className="list-none flex-row gap-7 flex">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.id
                    ? "text-[#8C7A6B] dark:text-[#D6C7B9] font-bold"
                    : "text-[#6E665E] dark:text-[#A89C91]"
                } cursor-pointer text-[16px] font-medium warm-underline transition-colors duration-200 hover:text-[#8C7A6B] dark:hover:text-[#FAF8F5] font-heading`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          {/* Social links & Theme Toggle */}
          <div className="flex items-center gap-4 ml-2 border-l border-[#AF9D8E]/30 dark:border-[#AF9D8E]/20 pl-5">
            <a
              href="https://linkedin.com/in/rohma-rani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8C7A6B] dark:text-[#D6C7B9] hover:text-[#48413A] dark:hover:text-[#FAF8F5] transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://github.com/rohma-exe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8C7A6B] dark:text-[#D6C7B9] hover:text-[#48413A] dark:hover:text-[#FAF8F5] transition-colors duration-200"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
            <a
              href={`mailto:${config.html.email}`}
              className="text-[#8C7A6B] dark:text-[#D6C7B9] hover:text-[#48413A] dark:hover:text-[#FAF8F5] transition-colors duration-200"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>

            {/* Desktop Theme Switcher */}
            <ThemeToggle />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end sm:hidden gap-3">
          <ThemeToggle />

          <img
            src={toggle ? close : menu}
            alt="menu"
            className="h-[28px] w-[28px] cursor-pointer object-contain filter dark:invert"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } glass absolute right-0 top-20 z-10 mx-4 my-2 min-w-[180px] rounded-2xl p-6 shadow-warm-glow`}
          >
            <ul className="flex flex-1 list-none flex-col items-start justify-end gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`cursor-pointer text-[16px] font-medium font-heading ${
                    active === nav.id
                      ? "text-[#8C7A6B] dark:text-[#D6C7B9] font-bold"
                      : "text-[#6E665E] dark:text-[#A89C91]"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              {/* Mobile social links */}
              <li className="flex gap-4 mt-2 pt-3 border-t border-[#AF9D8E]/20 dark:border-[#AF9D8E]/15 w-full">
                <a href="https://linkedin.com/in/rohma-rani" target="_blank" rel="noopener noreferrer" className="text-[#8C7A6B] dark:text-[#D6C7B9] hover:text-[#48413A] dark:hover:text-[#FAF8F5]" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://github.com/rohma-exe" target="_blank" rel="noopener noreferrer" className="text-[#8C7A6B] dark:text-[#D6C7B9] hover:text-[#48413A] dark:hover:text-[#FAF8F5]" aria-label="GitHub">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                </a>
                <a href={`mailto:${config.html.email}`} className="text-[#8C7A6B] dark:text-[#D6C7B9] hover:text-[#48413A] dark:hover:text-[#FAF8F5]" aria-label="Email">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

