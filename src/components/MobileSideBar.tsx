import { User, FileText, Codesandbox, BookOpen, Mail } from 'lucide-react';
import { useNavigate, useLocation } from "react-router-dom";

const menuItems = [
  { id: 'about', icon: <User size={20} />, label: 'About', link: '/about' },
  { id: 'resume', icon: <FileText size={20} />, label: 'Resume', link: '/resume' },
  { id: 'portfolio', icon: <Codesandbox size={20} />, label: 'Portfolio', link: '/portfolio' },
  { id: 'blog', icon: <BookOpen size={20} />, label: 'Blog', link: '/blog' },
  { id: 'contact', icon: <Mail size={20} />, label: 'Contact', link: '/contact' },
];

export function MobileSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const activeSection = location.pathname.split("/")[1] || "resume";

  return (
    <div className="bg-[#1c1f23]/95 backdrop-blur-md border-b border-white/[0.06] py-2">
      <div className="flex items-center justify-around w-full gap-1">
        {menuItems.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => {
                navigate(item.link);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`
                flex flex-col items-center justify-center gap-1
                px-1 py-2 rounded-xl flex-1
                transition-all duration-300 ease-in-out
                ${isActive
                  ? 'text-blue-500'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }
              `}
            >
              <span>{item.icon}</span>
              <span className="text-[0.6rem] font-semibold tracking-widest uppercase leading-none">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}