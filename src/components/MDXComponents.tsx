import { useState, useRef } from "react";
import { Check, Copy } from "lucide-react";

function CopyButton({ getText }: { getText: () => string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const el = document.createElement("textarea");
      el.value = getText();
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      title="Copy code"
      style={{
        position: "absolute",
        top: "0.6rem",
        right: "0.6rem",
        display: "flex",
        alignItems: "center",
        gap: "0.3rem",
        padding: "0.25rem 0.5rem",
        borderRadius: "6px",
        border: "1px solid rgba(255,255,255,0.08)",
        background: copied ? "rgba(16,185,129,0.12)" : "rgba(255,255,255,0.04)",
        color: copied ? "rgb(110,231,183)" : "rgba(255,255,255,0.3)",
        fontSize: "0.6rem",
        fontFamily: "'Geist Mono', monospace",
        letterSpacing: "0.05em",
        cursor: "pointer",
        transition: "all 0.15s ease",
        zIndex: 10,
      }}
      onMouseEnter={(e) => {
        if (!copied) {
          (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.7)";
          (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.2)";
          (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.08)";
        }
      }}
      onMouseLeave={(e) => {
        if (!copied) {
          (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.3)";
          (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.08)";
          (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.04)";
        }
      }}
    >
      {copied ? <Check size={10} /> : <Copy size={10} />}
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

function Pre({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) {
  const preRef = useRef<HTMLPreElement>(null);

  const getText = () => preRef.current?.innerText ?? "";

  return (
    <div style={{ position: "relative" }}>
      <CopyButton getText={getText} />
      <pre ref={preRef} {...props}>
        {children}
      </pre>
    </div>
  );
}

export const mdxComponents = {
  pre: Pre,
};