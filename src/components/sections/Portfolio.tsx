import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, FolderGit2, LayoutGrid, ExternalLink } from 'lucide-react';
import SectionTitle from '../SectionTitle';
import { Select, MenuItem } from '@mui/material';
import { projectsInfo } from '../../data/portfolioData';
import type { Project } from '../../types';

const tabs = [
  { label: 'All', icon: <LayoutGrid size={14} /> },
  { label: 'Projects', icon: <FolderGit2 size={14} /> },
  { label: 'Certifications', icon: <Award size={14} /> },
  { label: 'Badge', icon: <Award size={14} /> },
];

const PortfolioCard = ({ title, category, image, techStack, link, buttonTitle }: Project) => {
  const [hovered, setHovered] = useState(false);

  return (

    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="flex flex-col break-inside-avoid mb-6"
    >
      <div className='border border-white/10 border-1 rounded-2xl p-2'>
        <div
          className="relative rounded-2xl overflow-hidden cursor-pointer w-full"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img
            src={image}
            alt={title}
            className="block w-full h-auto transition-all duration-500"
            style={{
              transform: hovered ? 'scale(1.05)' : 'scale(1)',
              opacity: hovered ? 0.12 : 0.72,
            }}
          />

          <div className="absolute top-4 left-4 z-10">
            <span
              className={`text-sm font-semibold px-4 py-1.5 rounded-full shadow-lg ${category === 'Project'
                  ? 'bg-orange-500 text-white'
                  : 'bg-blue-500 text-white'
                }`}
            >
              {category}
            </span>
          </div>

          {techStack && <AnimatePresence>
            {hovered && (
              <motion.div
                key="overlay"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center pointer-events-none"
              >
                <p className="text-white/50 text-[11px] font-bold tracking-[0.25em] uppercase mb-3">
                  Tech Stack
                </p>
                <p className="text-white text-lg font-bold leading-relaxed">
                  {techStack.join(' – ')}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          }
        </div>

        <div className="mt-4 px-1">
          <h3 className="text-white text-xl font-extrabold mb-3 leading-snug">{title}</h3>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 active:scale-95 transition-all duration-200 text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-md"
            >
              {buttonTitle}
              <ExternalLink size={13} />
            </a>
          )}
        </div>
      </div>
    </motion.div>

  );
};

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState(0);

  const filtered = projectsInfo.filter((p) => {
    if (activeTab === 1) return p.category === 'Project';
    if (activeTab === 2) return p.category === 'Certification';
    if (activeTab === 3) return p.category === 'Badge';
    return true;
  });

  return (
    <div className="min-h-screen  text-white px-2 py-12 sm:px-8 md:px-5 lg:px-7">
      <SectionTitle title='Portfolio' />

      <div className="mb-10">
        <div className="sm:hidden">
          <Select
            value={activeTab}
            onChange={(e) => setActiveTab(Number(e.target.value))}
            size="small"
            fullWidth
            sx={{
              color: 'white',
              fontWeight: 600,
              fontSize: '0.875rem',
              borderRadius: '12px',
              backgroundColor: '#1e2028',
              '.MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.1)' },
              '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.25)' },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#2563eb' },
              '.MuiSvgIcon-root': { color: 'rgba(255,255,255,0.4)' },
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  bgcolor: '#1e2028',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '12px',
                  mt: 0.5,
                  '& .MuiMenuItem-root': {
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    gap: 1,
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.06)', color: 'white' },
                    '&.Mui-selected': { bgcolor: 'rgba(37,99,235,0.2)', color: '#60a5fa' },
                    '&.Mui-selected:hover': { bgcolor: 'rgba(37,99,235,0.3)' },
                  },
                },
              },
            }}
          >
            {tabs.map((tab, i) => (
              <MenuItem key={tab.label} value={i} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <div className='flex gap-2 items-center justify-center'>{tab.icon}
                  {tab.label}</div>
              </MenuItem>
            ))}
          </Select>
        </div>

        <div className="hidden sm:flex gap-2 flex-wrap">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${activeTab === i
                  ? 'bg-blue-600 border-blue-600 text-white'
                  : 'bg-transparent border-white/10 text-white/50 hover:text-white/80 hover:border-white/20'
                }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        layout
        className="columns-1 sm:columns-2 gap-6 max-w-full"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <PortfolioCard key={project.id} {...project} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="text-center py-24 text-white/30 text-sm tracking-wide">
          No Worries. will get one soon..
        </div>
      )}
    </div>
  );
};

export default Portfolio;