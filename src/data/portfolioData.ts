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
    'https://drive.google.com/file/d/1IZI-NKBpcxgngYoTn6_AvkTQS0o5Jz_W/view?usp=sharing',
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

/** Optimized Cloudinary delivery URL helper */
const cld = (publicId: string) =>
  `https://res.cloudinary.com/drsitovda/image/upload/q_auto,f_auto/${publicId}`;

export const projectsInfo: Project[] = [
  {
    id: 1,
    category: 'Project',
    title: 'SecureAI — Code Security Platform',
    techStack: [
      'Next.js',
      'Node.js',
      'Express',
      'Prisma',
      'PostgreSQL',
      'FastAPI',
      'Redis',
      'BullMQ',
      'Docker',
      'AWS',
    ],
    image:
      'https://res.cloudinary.com/drsitovda/image/upload/q_auto,f_auto/v1788612124/Screenshot_2026-09-05_181142_i9yofe.png',
    link: 'https://secureai-sanket.duckdns.org/',
    githubUrl: 'https://github.com/Sanketdinkarmore/secure_AI',
    buttonTitle: 'Live',
  },
  {
    id: 2,
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
    image:
      'https://res.cloudinary.com/drsitovda/image/upload/q_auto,f_auto/v1788611334/nextup_ptguih.jpg',
    link: 'https://nextup-sanket.duckdns.org/',
    githubUrl: 'https://github.com/Sanketdinkarmore/resumeanalysis',
    buttonTitle: 'Live',
  },
  {
    id: 3,
    category: 'Project',
    title: 'BrandBridge AI',
    techStack: [
      'Next.js',
      'TypeScript',
      'MongoDB',
      'Gemini',
      'Tailwind CSS',
    ],
    image:
      'https://res.cloudinary.com/drsitovda/image/upload/q_auto,f_auto/v1788611334/brandbridge_yzmbms.jpg',
    link: 'https://brandbridgeai.vercel.app/',
    githubUrl: 'https://github.com/Sanketdinkarmore/brandbridgeai',
    buttonTitle: 'Live',
  },
  {
    id: 4,
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
    image: cld(
      'v1771524108/captioncraft/user_696f80af269ab5ec6c7b9028/thumbnails/ocikucnlodullc7ampaf'
    ),
    githubUrl: 'https://github.com/Sanketdinkarmore/CaptionCraft',
    buttonTitle: 'Github',
  },
  {
    id: 5,
    category: 'Project',
    title: 'NASA APOD Dashboard',
    techStack: ['React', 'Tailwind CSS', 'JavaScript', 'NASA API'],
    image: cld('v1775928827/Screenshot_2026-04-11_230319_tiwen4'),
    link: 'http://52.64.31.250/nasa-apod/',
    githubUrl:
      'https://github.com/Sanketdinkarmore/Nasa-apod-react-dashboard',
    buttonTitle: 'Live',
  },
  {
    id: 6,
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
    image: cld('v1775929182/Screenshot_2026-04-11_230856_epyeoc'),
    link: 'https://sms-spam-classifier-ml-ekfwxqgxqvtdve6uv5ypwd.streamlit.app/',
    githubUrl: 'https://github.com/Sanketdinkarmore/sms-spam-classifier-ML',
    buttonTitle: 'Live',
  },
];
