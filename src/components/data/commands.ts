export type LinkItem = {
  label: string;
  href: string;
  src?: string;
};

export type CommandItem = {
  title: string;
  about: string;
  content: string;
  type?: "text" | "links";
  links?: LinkItem[];
};

export const commands: CommandItem[] = [
  {
    title: "about",
    about: "About Me",
    content:
      "I'm a QA Analyst / Application Tester with hands-on experience in frontend development, manual testing, and end-to-end validation. I enjoy working on user-facing web applications, understanding how users interact with products, finding issues before release, and helping teams deliver reliable, easy-to-use experiences.",
  },
  {
    title: "skills",
    about: "Skills I am proficient in",
    content:
      "React, TypeScript, JavaScript, HTML, CSS, Node.js, Express, MongoDB, Playwright, Manual Testing, API Testing.",
  },
  {
    title: "projects",
    about: "Projects I have worked on",
    content:
      "My projects include a Pokémon database explorer, a full-stack expense tracker, and a prompt-based portfolio website.",
  },
  {
    title: "contact",
    about: "How to contact me",
    content: "You can connect with me through:",
    type: "links",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/uilacceb/",
        src: "src/assets/contact-logos/linkedin.png",
      },
      {
        label: "GitHub",
        href: "https://github.com/uilacceb",
        src: "src/assets/contact-logos/github2.png",
      },
      {
        label: "Email",
        href: "mailto:uilacceb@gmail.com",
        src: "src/assets/contact-logos/email.png",
      },
    ],
  },
];
