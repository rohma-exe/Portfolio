type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Rohma Rani — Software Engineer",
    fullName: "Rohma Rani",
    email: "rohma@example.com",
  },
  hero: {
    name: "Rohma Rani",
    p: [
      "Software Engineer crafting intelligent",
      "solutions with AI & modern web tech",
    ],
  },
  contact: {
    p: "Let's Connect",
    h2: "Get In Touch.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email address?" },
      message: {
        span: "Your Message",
        placeholder: "How can I help you?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a Software Engineer with a strong foundation in full-stack development
      and a growing passion for Data Science and Artificial Intelligence. With hands-on
      experience in React, Node.js, TypeScript, and Python, I build scalable, user-centric
      applications that solve real-world problems. Currently pursuing my Master's in
      Data Science / AI, I'm driven by the intersection of software engineering and
      machine learning — creating systems that are not just functional, but truly intelligent.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `The following projects showcase my skills and experience through
    real-world examples. Each project is briefly described with
    links to code repositories and live demos. They reflect my
    ability to solve complex problems, work with diverse technologies,
    and deliver impactful results.`,
    },
  },
};
