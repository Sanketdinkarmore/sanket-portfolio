import { posts } from "../../blog/posts";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SectionTitle from "../SectionTitle";

const COLORS: Record<string, string> = {
  blue:    "59,130,246",
  emerald: "16,185,129",
  rose:    "244,63,94",
  amber:   "245,158,11",
  violet:  "139,92,246",
  orange:  "249,115,22",
};
const COLOR_KEYS = Object.keys(COLORS);

function getColor(slug: string, metaColor?: string) {
  if (metaColor && COLORS[metaColor]) return COLORS[metaColor];
  const sum = slug.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  return COLORS[COLOR_KEYS[sum % COLOR_KEYS.length]];
}

export default function Blog() {
  const navigate = useNavigate();

  return (
    <div className="md:p-7">
      <div className="pt-8 ">
        <SectionTitle title="Blogs"/>
      </div>

      <div className="flex flex-col gap-2">
        {posts.map((post) => {
          const rgb = getColor(post.slug, post.meta.color);
          const tags: string[] = post.meta.tags ?? (post.meta.category ? [post.meta.category] : []);

          return (
            <div
              key={post.slug}
              onClick={() => navigate(`/blog/${post.slug}`)}
              className="group flex items-center gap-4 px-4 py-3.5 rounded-xl border border-white/[0.07] hover:border-white/[0.14] bg-white/[0.02] hover:bg-white/[0.04] cursor-pointer transition-all duration-150"
            >
              <div
                className="shrink-0 w-2 h-2 rounded-full"
                style={{ background: `rgb(${rgb})`, boxShadow: `0 0 6px rgba(${rgb},0.6)` }}
              />

              <p className="flex-1 text-sm font-medium text-white/70 group-hover:text-white transition-colors duration-150 truncate">
                {post.meta.title}
              </p>

              <div className="hidden sm:flex items-center gap-1.5 shrink-0">
                {tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-[0.58rem] font-mono tracking-wide uppercase px-1.5 py-0.5 rounded"
                    style={{
                      color: `rgba(${rgb}, 0.85)`,
                      background: `rgba(${rgb}, 0.08)`,
                      border: `1px solid rgba(${rgb}, 0.18)`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {post.meta.date && (
                <span className="hidden md:block shrink-0 text-[0.65rem] font-mono text-white/25">
                  {post.meta.date}
                </span>
              )}

              <ArrowUpRight
                size={14}
                className="shrink-0 text-white/20 group-hover:text-white/50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}