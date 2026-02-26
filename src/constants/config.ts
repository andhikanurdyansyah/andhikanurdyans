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
    education: Required<TSection>;      // renamed from works
    certification: Required<TSection>;  // renamed from feedbacks
  };
};

export const config: TConfig = {
  html: {
    title: "Andhika Nurdyansyah — Portfolio",
    fullName: "Andhika Nurdyansyah",
    email: "andhikanurdyansyah@gmail.com",
  },
  hero: {
    name: "Andhika Nurdyansyah",
    p: [
      "Infrastructure & Solutions Architecture Lead | Driving Secure, Cloud-Native Enterprise Systems",
    ],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `Leading enterprise infrastructure and cloud-native architecture initiatives with a strong focus on security, scalability, and operational resilience.
I bridge technology and business strategy—designing sustainable systems that drive performance, reliability, and long-term digital growth.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    education: {
      p: "Where I studied",
      h2: "Education.",
      content: `Formal education and academic journey, highlighting coursework and focus areas.`,
    },
    certification: {
      p: "Professional proof",
      h2: "Certifications.",
      content: `Professional certifications and credentials that validate my expertise in cloud, DevOps, and technology.`,
    },
  },
};
