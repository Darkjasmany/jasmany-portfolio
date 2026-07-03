interface Config {
  curriculumUrl: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
}

export const config: Config = {
  curriculumUrl: "https://drive.google.com/file/d/1VBkWbmi9Pjx7BVrrSfI872oBf-D52YQD/view",
  email: "jasmanyfranco@gmail.com",
  githubUrl: "https://github.com/Darkjasmany",
  linkedinUrl: "https://www.linkedin.com/in/jasmany-developer/",
} as const;
