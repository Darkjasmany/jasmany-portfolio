interface Config {
  curriculumUrl: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
}

export const config: Config = {
  curriculumUrl: "https://docs.google.com/document/d/1BMbSqbt3bnuTMAiKfrPJ2BTodH9Ow24E/preview",
  email: "hello@jasmanyfranco.dev",
  githubUrl: "https://github.com/Darkjasmany",
  linkedinUrl: "https://www.linkedin.com/in/jasmany-developer/",
} as const;
