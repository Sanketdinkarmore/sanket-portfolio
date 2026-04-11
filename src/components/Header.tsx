import React from 'react';
import {
  Instagram,
  Linkedin,
  Github,
  Globe,
  Download,
  MapPin,
  Mail,
} from 'lucide-react';

import { personalInfo } from '../data/portfolioData';

interface ProfileHeaderProps {
  personalInfo?: {
    name: string;
    title: string;
    avatar: string;
    email: string;
    location: string;
    cvUrl?: string;
    socialLinks: {
      icon: string;
      url: string;
    }[];
  };
}

const ProfileHeader: React.FC<ProfileHeaderProps> = () => {
  const name = personalInfo?.name || 'Sanket More';
  const title = personalInfo?.title || 'Full Stack Developer';
  const avatar = personalInfo?.avatar;
  const email = personalInfo?.email || 'moresanket2305@gmail.com';
  const location = personalInfo?.location || 'Mumbai, IND';
  const cvUrl = personalInfo?.cvUrl || '#';
  const socialLinks = personalInfo?.socialLinks || [];

  const iconMap: any = {
    instagram: Instagram,
    linkedin: Linkedin,
    github: Github,
    portfolio: Globe,
  };

  const portfolioLink = window.location.origin;

  return (
    <div className="flex justify-center w-full mt-[45px]">
      <div className="relative w-full max-w-[1100px] rounded-[28px] border border-[#333] bg-[#23262b] shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-visible">
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden rounded-[28px]">

          <div
            className="absolute bottom-0 right-0"
            style={{
              width: 0,
              height: 0,
              borderBottom: '100px solid #06b6d4',
              borderLeft: '150px solid transparent',
            }}
          />
        </div>

        <div className="absolute -top-[45px] left-1/2 md:left-[45px] -translate-x-1/2 md:translate-x-0 z-20">
          <div className="relative w-[140px] h-[140px] flex items-center justify-center">
            <div className="absolute inset-0 bg-[#1d1e24] rounded-[40px] shadow-[0_-10px_50px_rgba(0,0,0,0.2)]" />

            <div className="relative w-[120px] h-[120px] rounded-full bg-[#23262b] flex items-center justify-center border-[10px] border-[#23262b]">
              <img
                src={avatar}
                alt={name}
                className="w-full h-full rounded-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/120?text=Avatar';
                }}
              />
            </div>
          </div>
        </div>
        <div className="relative z-10 px-6 md:px-8 py-10 md:py-[14px] flex flex-col md:flex-row items-center justify-between">

          <div className="hidden md:block w-[170px] flex-shrink-0" />

          <div className="flex-1 text-center md:text-left pt-[45px] md:pt-0 w-full mt-[30px] md:mt-0">
            <h1 className="text-white font-black text-[1rem] md:text-[1.5rem] tracking-wide">
              {name.split(' ')[0]}{' '}
              <span className="font-light">
                {name.split(' ').slice(1).join(' ')}
              </span>
            </h1>

            <p className="text-[#9ca3af] text-[0.9rem] mt-1 mb-3">{title}</p>

            <div className="flex gap-3 justify-center md:justify-start">
              {socialLinks.length > 0 ? (
                socialLinks.map((s: any, i: number) => {
                  const Icon = iconMap[s.icon?.toLowerCase()] || Globe;
                  return (
                    <a
                      key={i}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6b7280] hover:text-white transition"
                    >
                      <Icon size={16} strokeWidth={1.8} />
                    </a>
                  );
                })
              ) : (
                <>
                  <button className="text-[#6b7280] hover:text-white transition cursor-pointer">
                    <Instagram size={16} strokeWidth={1.8} />
                  </button>
                  <button className="text-[#6b7280] hover:text-white transition cursor-pointer">
                    <Linkedin size={16} strokeWidth={1.8} />
                  </button>
                  <button className="text-[#6b7280] hover:text-white transition cursor-pointer">
                    <Github size={16} strokeWidth={1.8} />
                  </button>
                  
                </>
              )}
              <a
                key={"portfolio"}
                href={portfolioLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6b7280] hover:text-white transition"
              >
                <Globe size={16} strokeWidth={1.8} />
              </a>
            </div>
          </div>

          <div className="hidden md:block w-[1px] h-[80px] bg-white/10 mx-8" />

          <div className="block md:hidden w-full h-[1px] bg-white/10 my-6" />

          <div className="grid grid-cols-2 gap-6 w-full md:max-w-[450px]">
            <div>
              <p className="text-[0.65rem] font-bold tracking-widest text-[#6b7280] mb-1">
                EMAIL
              </p>
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 text-white hover:text-blue-400 text-[0.85rem] transition"
              >
                <span className="truncate max-w-[140px] md:max-w-full">
                  {email}
                </span>
                <Mail size={14} className="text-[#9ca3af] flex-shrink-0" />
              </a>
            </div>

            <div>
              <p className="text-[0.65rem] font-bold tracking-widest text-[#6b7280] mb-1">
                CV
              </p>
              <a
                href={cvUrl}
                download
                className="flex items-center gap-2 text-white hover:text-blue-400 text-[0.85rem] transition"
              >
                <span>Download</span>
                <Download size={14} className="text-[#9ca3af] flex-shrink-0" />
              </a>
            </div>

            <div>
              <p className="text-[0.65rem] font-bold tracking-widest text-[#6b7280] mb-1">
                LOCATION
              </p>
              <div className="flex items-center gap-2 text-white text-[0.85rem]">
                <span>{location}</span>
                <MapPin size={14} className="text-[#9ca3af] flex-shrink-0" />
              </div>
            </div>

            <div>
              <p className="text-[0.65rem] font-bold tracking-widest text-[#6b7280] mb-1">
                CURRENT ROLE
              </p>
              <div className="text-[0.85rem]">{personalInfo.status}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;