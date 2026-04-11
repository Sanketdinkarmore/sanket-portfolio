import React from "react";
import { User, FileText, Codesandbox, BookOpen, Mail } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const menuItems = [
  { id: "about", icon: <User size={32} />, label: "About", link: "/about" },
  { id: "resume", icon: <FileText size={32} />, label: "Resume", link: "/resume" },
  { id: "portfolio", icon: <Codesandbox size={32} />, label: "Portfolio", link: "/portfolio" },
  { id: "blog", icon: <BookOpen size={32} />, label: "Blog", link: "/blog" },
  { id: "contact", icon: <Mail size={32} />, label: "Contact", link: "/contact" },
];

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const activeSection = location.pathname.split("/")[1] || "resume";

  return (
    <div className="bg-[#23262b] rounded-2xl p-4">
      <div className="flex flex-col items-center gap-4">
        {menuItems.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => {
                navigate(item.link)
                window.scrollTo({
                  top: 0,
                  behavior: "smooth", 
                });
              }}
              className={`w-[90px] h-[90px] rounded-2xl flex flex-col items-center justify-center gap-1 transition-all
              ${isActive ? "bg-blue-500 text-white" : "text-gray-400 hover:text-blue-500"}`}
            >
              {item.icon}
              <span className="text-[0.75rem] uppercase">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;