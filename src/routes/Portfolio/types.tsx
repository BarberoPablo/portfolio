export type Project = {
  name: string;
  description: string;
  icon: React.ReactNode;
  githubUrl: string;
  deployedUrl: string;
  details: React.ReactNode;
};

export type Experience = {
  title: string;
  url: string;
  company: string;
  location: string;
  description: string[];
};
