import React from 'react';
import { Briefcase, GraduationCap, Code2, Trophy, ChevronRight } from 'lucide-react';
import { resumeData } from '../../data/resumeData';
import SectionTitle from '../SectionTitle';

const TimelineItem = ({
  title,
  company,
  date,
  desc,
}: {
  title: string;
  company: string;
  date: string;
  desc: string[];
}) => (
  <div className="relative pl-8 mb-8">
    <div className="absolute left-0 top-0 bottom-0 w-px bg-linear-to-b from-blue-500 to-blue-500/10" />
    <div className="absolute left-[-4px] top-1 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_6px_2px_rgba(59,130,246,0.5)]" />

    <h3 className="text-base font-semibold text-white leading-tight">{title}</h3>
    <p className="text-blue-400 mt-0.5">
      {company} • {date}
    </p>

    {Array.isArray(desc) ? (
      <ul className="mt-2 space-y-1.5 list-none">
        {desc.map((point, index) => (
          <li key={index} className="flex items-start gap-2 text-zinc-300">
            <ChevronRight className="w-3.5 h-3.5 mt-0.5 text-blue-400 flex-shrink-0" />
            <span className="leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>
    ) : (
      <p className="mt-2 text-zinc-300">{desc}</p>
    )}
  </div>
);

const SectionHeader = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <div className="flex text-2xl items-center gap-2 mb-6">
    <span className="text-blue-500">{icon}</span>
    <h2 className="font-bold text-zinc-100 uppercase tracking-widest">
      {title}
    </h2>
  </div>
);

const SkillGroup = ({ title, skills }: { title: string; skills: string[] }) => (
  <div className="mb-5">
    <p className="font-semibold text-zinc-400 uppercase tracking-wider mb-2">
      {title}
    </p>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-3 py-1 rounded-full text-xs font-medium bg-blue-900/30 text-blue-300 border border-blue-700/80 hover:bg-blue-900/50 transition-colors cursor-default"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Resume = () => {
  return (
    <div className="md:p-7 text-white">
       <div className="pt-8 ">
        <SectionTitle title="Resume"/>
      </div>
      <section>
        <SectionHeader icon={<Briefcase className="w-7 h-7" />} title="Experience" />
        <div className="mt-6">
          {resumeData.experience.map((item, i) => (
            <TimelineItem key={i} {...item} />
          ))}
        </div>
      </section>

      <section>
        <SectionHeader icon={<GraduationCap className="w-7 h-7" />} title="Education" />
        <div className="mt-6">
          {resumeData.education.map((item, i) => (
            <TimelineItem key={i} {...item} />
          ))}
        </div>
      </section>

      <section>
        <SectionHeader icon={<Code2 className="w-7 h-7" />} title="Technical Skills" />
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8">
          {resumeData.skills.map((group, i) => (
            <SkillGroup key={i} skills={group.stack} title={group.name} />
          ))}
        </div>
      </section>

      <section>
        <SectionHeader icon={<Trophy className="w-7 h-7" />} title="Achievements" />
        <ul className="mt-6 space-y-3">
          {resumeData.achievements.map((ach, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-zinc-300"
            >
              <span className="mt-0.5 w-5 h-5 rounded-full bg-yellow-900/40 flex items-center justify-center flex-shrink-0">
                <Trophy className="w-3 h-3 text-amber-400" />
              </span>
              <span className="leading-relaxed">{ach}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Resume;