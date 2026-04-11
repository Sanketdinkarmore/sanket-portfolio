
export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  period: string;
  responsibilities: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  location: string;
  period: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  period: string;
  hours?: string;
  description: string;
  mode: string;
}

export interface Project {
  id: number;
  title: string;
  category: 'Certification' | 'Project' | 'Badge';
  image: string;
  techStack?: string[];
  link?: string;
  buttonTitle: 'Live' | 'Github' | 'Verify' | 'Open'
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  tags: string[];
  bgColor?: string;
}

export interface SocialLink {
  icon: string;
  url: string;
  label: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  location: string;
  avatar: string;
  cvUrl?: string;
  status: string;
  bio?: string;
  socialLinks: SocialLink[];
}

export interface SkillsInfo {
  frontend: string[]
  backend: string[]
  cloud: string[]
  devops: string[]
}