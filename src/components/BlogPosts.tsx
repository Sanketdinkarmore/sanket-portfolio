import { useNavigate, useParams } from "react-router-dom";
import { posts } from "../blog/posts";
import { ArrowLeft, Clock, Calendar, User, ChevronUp } from "lucide-react";
import { mdxComponents } from "./MDXComponents";
import { useState, useEffect } from "react";

const COLORS: Record<string, string> = {
  blue: "rgb(59,130,246)",
  emerald: "rgb(16,185,129)",
  rose: "rgb(244,63,94)",
  amber: "rgb(245,158,11)",
  violet: "rgb(139,92,246)",
  orange: "rgb(249,115,22)",
};
const COLOR_KEYS = Object.keys(COLORS);

function getAccentColor(slug: string, metaColor?: string) {
  if (metaColor) return metaColor;
  const sum = slug.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return COLOR_KEYS[sum % COLOR_KEYS.length];
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);

  const post = posts.find((p) => p.slug === slug);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = scrollTop / docHeight;

      setScrollProgress(progress);
      setShowScrollTop(scrollTop > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <p className="text-white/40 font-mono text-sm tracking-widest uppercase">
          // 404 — post not found
        </p>
        <button onClick={() => navigate("/blog")} className="blog-back-btn">
          <ArrowLeft size={14} /> Back to Blog
        </button>
      </div>
    );
  }

  const { Component, meta } = post;
  const accentColor = getAccentColor(slug ?? "", meta.color);
  const color = COLORS[accentColor] ?? COLORS.blue;
  console.log(color)

  const tags: string[] = meta.tags ?? (meta.category ? [meta.category] : []);

  return (
    <div className="blog-post-root"
      style={{ "--accent": color } as React.CSSProperties}
    >

      <div className="blog-post-nav rounded-lg sticky">
        <button onClick={() => navigate("/blog")} className="blog-back-btn">
          <ArrowLeft size={14} />
          Back to Blog
        </button>
        <span className="blog-post-breadcrumb">
          Blog
          <span className="opacity-25 mx-2">/</span>
          <span className="text-white/55 truncate max-w-[200px] sm:max-w-xs">
            {meta.title}
          </span>
        </span>
      </div>

      <div className="mx-auto max-w-[720px]">

        <div className="pt-8 pb-6 mb-2">

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[0.58rem] font-mono tracking-widest uppercase px-2 py-0.5 rounded"
                  style={{
                    color: color,
                    background: `${color}20`,
                    border: `1px solid ${color}`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h1
            className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-[1.1] mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {meta.title}
          </h1>

          {meta.excerpt && (
            <p
              className="text-[1rem] leading-relaxed mb-5"
              style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Lora', serif" }}
            >
              {meta.excerpt}
            </p>
          )}

          <div
            className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-4 text-[0.68rem] font-mono tracking-wide"
            style={{
              borderTop: `1px solid ${color}`,
              color: "rgba(255,255,255,0.3)",
            }}
          >
            {meta.author && (
              <span className="flex items-center gap-1.5">
                <User size={11} style={{ color: color }} />
                <span className="text-white/50">{meta.author}</span>
              </span>
            )}
            {meta.date && (
              <span className="flex items-center gap-1.5">
                <Calendar size={11} style={{ color: color }} />
                {meta.date}
              </span>
            )}
            {meta.readingTime && (
              <span className="flex items-center gap-1.5">
                <Clock size={11} style={{ color: color }} />
                {meta.readingTime}
              </span>
            )}
          </div>

          <div
            className="mt-6 h-px w-full"
            style={{
              background: `linear-gradient(90deg, ${color}, ${color}, transparent)`,
            }}
          />
        </div>

        <div className="blog-content" data-color={accentColor}>
          <Component components={mdxComponents} />
        </div>

      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group"
        >
          <div
            className="relative flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-md"
            style={{
              background: "rgba(15,15,15,0.65)",
              border: `1px solid ${color}`,
            }}
          >
            {/* Progress Ring */}
            <svg
              className="absolute inset-0 w-full h-full -rotate-90"
              viewBox="0 0 36 36"
            >
              <path
                d="M18 2
             a 16 16 0 0 1 0 32
             a 16 16 0 0 1 0 -32"
                fill="none"
                stroke={`${color}`}
                strokeWidth="2"
                strokeDasharray={`${scrollProgress * 100}, 100`}
              />
            </svg>

            <ChevronUp
              size={20}
              style={{ color }}
              className="transition-transform duration-300 group-hover:-translate-y-1"
            />
          </div>
        </button>
      )}
    </div>
  );
}