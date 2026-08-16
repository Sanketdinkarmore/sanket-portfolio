import type { PersonalInfo, Project, SkillsInfo } from '../types/index';

export const skillsData: SkillsInfo = {
  frontend: ['React', 'Next.js', 'Tailwind CSS', 'React Native', 'HTML5', 'CSS3'],
  backend: ['Node.js', 'Express.js', 'FastAPI', 'Python', 'REST APIs', 'JWT', 'OAuth'],
  devops: ['Docker', 'CI/CD', 'GitHub Actions', 'Jenkins', 'Nginx', 'Git'],
  cloud: ['AWS (EC2, S3, RDS, Lambda)', 'Netlify', 'Vercel'],
};

export const personalInfo: PersonalInfo = {
  name: 'Sanket More',
  title: 'Full-Stack Engineer',
  email: 'moresanket2305@gmail.com',
  location: 'Mumbai · Pune · Remote',
  avatar: '/sanket-avatar.png',
  cvUrl:
    'https://drive.google.com/uc?export=download&id=168BKuVazLXNpFiCMAycb9WZ5aXIXexp3',
  status: 'Open to Full Stack · SWE · DevOps · Cloud',
  bio: 'Full-stack engineer building scalable products with cloud, AI, and modern web technologies. Experienced in Node.js, React/Next.js, Python, PostgreSQL, AWS, and Docker.',
  socialLinks: [
    {
      icon: 'linkedin',
      url: 'https://www.linkedin.com/in/sanket-more-654a1a301',
      label: 'LinkedIn',
    },
    {
      icon: 'github',
      url: 'https://github.com/Sanketdinkarmore',
      label: 'GitHub',
    },
  ],
};

const ph = (text: string) =>
  `https://placehold.co/800x500/23262b/22D3EE?text=${encodeURIComponent(text)}`;

export const projectsInfo: Project[] = [
  {
    id: 1,
    category: 'Project',
    title: 'Nextup — Career OS',
    techStack: [
      'Next.js',
      'Node.js',
      'Express',
      'Prisma',
      'PostgreSQL',
      'FastAPI',
      'Redis',
      'BullMQ',
      'AWS',
    ],
    image: '/projects/nextup.png',
    link: 'https://nextup-sanket.duckdns.org/',
    githubUrl: 'https://github.com/Sanketdinkarmore/resumeanalysis',
    buttonTitle: 'Live',
  },
  {
    id: 2,
    category: 'Project',
    title: 'BrandBridge AI',
    techStack: [
      'Next.js',
      'TypeScript',
      'MongoDB',
      'Gemini',
      'Tailwind CSS',
    ],
    image: '/projects/brandbridge.png',
    link: 'https://brandbridgeai.vercel.app/',
    githubUrl: 'https://github.com/Sanketdinkarmore/brandbridgeai',
    buttonTitle: 'Live',
  },
  {
    id: 3,
    category: 'Project',
    title: 'CaptionCraft',
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'ASR',
      'AI',
    ],
    image: '/projects/captioncraft.png',
    githubUrl: 'https://github.com/Sanketdinkarmore/CaptionCraft',
    buttonTitle: 'Github',
  },
  {
    id: 4,
    category: 'Project',
    title: 'NASA APOD Dashboard',
    techStack: ['React', 'Tailwind CSS', 'JavaScript', 'NASA API'],
    image: '/projects/nasa-apod.png',
    link: 'http://52.64.31.250/nasa-apod/',
    githubUrl:
      'https://github.com/Sanketdinkarmore/Nasa-apod-react-dashboard',
    buttonTitle: 'Live',
  },
  {
    id: 5,
    category: 'Project',
    title: 'SMS Spam Detection (ML)',
    techStack: [
      'Python',
      'Scikit-learn',
      'Pandas',
      'TF-IDF',
      'Streamlit',
      'AWS EC2',
    ],
    image: '/projects/sms-spam.png',
    link: 'http://3.26.99.227/',
    githubUrl: 'https://github.com/Sanketdinkarmore/sms-spam-classifier-ML',
    buttonTitle: 'Live',
  },
  {
    id: 6,
    category: 'Project',
    title: 'Student Management System',
    techStack: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'React',
      'REST APIs',
    ],
    image: ph('Student Mgmt · Hack It Out Top 4'),
    githubUrl:
      'https://github.com/Sanketdinkarmore/Student-Management-System',
    buttonTitle: 'Github',
  },
];
