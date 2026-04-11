
import type { PersonalInfo, Project, SkillsInfo } from '../types/index';

export const skillsData: SkillsInfo = {
  frontend: ['React', 'Next.js', 'Tailwind CSS', 'React Native (Expo)', 'HTML', 'CSS'],
  backend: ['Node.js', 'Express.js', 'Python', 'REST APIs', 'MongoDB', 'MySQL', 'PostgreSQL'],
  devops: ['Docker', 'CI/CD', 'Git', 'GitHub', 'Postman'],
  cloud: ['AWS (EC2, S3, IAM)', 'Netlify'],
};

export const personalInfo: PersonalInfo = {
  name: 'Sanket More',
  title: 'Full Stack Developer',
  email: 'moresanket2305@gmail.com',
  location: 'Mumbai, Maharashtra, India',
  avatar: '/sanket-avatar.png',
  cvUrl:'https://drive.google.com/file/d/1SHUNshfAq7L2ZJyWITBjvbYYN9qC5mWd/view?usp=sharing',
  status: 'Seeking full stack developer roles',
  bio: 'Full stack developer with production experience in Node.js, React, and AWS. I build dashboards, APIs, and data pipelines that ship.',
  socialLinks: [
    { icon: 'linkedin', url: 'https://www.linkedin.com/in/sanket-more-654a1a301', label: 'LinkedIn' },
    { icon: 'github', url: 'https://github.com/Sanketdinkarmore', label: 'GitHub' },
  ],
};

const ph = (text: string) =>
  `https://placehold.co/800x500/23262b/e8a0a0?text=${encodeURIComponent(text)}`;

export const projectsInfo: Project[] = [

  {
      id: 1,
      category: 'Project',
      title: 'NASA APOD Dashboard',
      techStack: ['React', 'Tailwind CSS', 'JavaScript', 'REST API', 'Netlify'],
      image: 'https://res.cloudinary.com/drsitovda/image/upload/q_auto/f_auto/v1775928827/Screenshot_2026-04-11_230319_tiwen4.png',
      link: 'https://stellar-apod-vision.netlify.app/',
      buttonTitle: 'Live',
    },
  
   {
      id: 2,
      category: 'Project',
      title: 'SMS Spam Detection (ML)',
      techStack: ['Python', 'Scikit-learn', 'Pandas', 'TF-IDF', 'Streamlit', 'AWS EC2'],
      image:'https://res.cloudinary.com/drsitovda/image/upload/q_auto/f_auto/v1775929182/Screenshot_2026-04-11_230856_epyeoc.png',
      link: 'http://3.239.118.145:8501/',
      buttonTitle: 'Live',
    },
  
  
  
  
  
    {
      id: 3,
      category: 'Project',
      title: 'Student Management System',
      techStack: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'React', 'REST APIs'],
      image: ph('Student Mgmt'),
      link: 'https://github.com/Sanketdinkarmore/Student-Management-System',
      buttonTitle: 'Github',
    },
    
  
  
    {
      id: 4,
      category: 'Certification',
      title: 'Machine Learning Certification — Thakur College (June 2024)',
      image: ph('ML Cert'),
      buttonTitle: 'Verify',
    },
   
    {
      id: 5,
      category: 'Project',
      title: 'Caption-Craft',
      techStack: ['Next.js, React, TypeScript, Tailwind CSS, and Automatic Speech Recognition (ASR) service'],
      image: 'https://res.cloudinary.com/drsitovda/image/upload/q_auto/f_auto/v1771524108/captioncraft/user_696f80af269ab5ec6c7b9028/thumbnails/ocikucnlodullc7ampaf.png' ,
      link: 'https://github.com/Sanketdinkarmore/CaptionCraft',
      buttonTitle: 'Github',
    },
    
    {
      id: 5,
      category: 'Certification',
      title: 'Java Programming — IIT Bombay Spoken Tutorial (2023)',
      image: ph('Java Cert'),
      buttonTitle: 'Verify',
    },
    {
      id: 6,
      category: 'Certification',
      title: 'Hack It Out 2024 — Top 4 finalist (Student Management System)',
      techStack: ['Hackathon'],
      image: ph('Hackathon'),
      link: 'https://github.com/Sanketdinkarmore/Student-Management-System',
      buttonTitle: 'Github',
    },
  ];
