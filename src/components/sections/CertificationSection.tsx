import React, { useEffect, useRef } from "react";
import { certifications } from "../../constants";
import type { TCertification } from "../../types";

const LinkIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
    <path d="M10.59 13.41a1 1 0 0 1 0-1.41l3-3a1 1 0 1 1 1.41 1.41l-3 3a1 1 0 0 1-1.41 0z"></path>
    <path d="M13 7h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-4a1 1 0 1 1 2 0v4h8V9h-4a1 1 0 1 1 0-2z"></path>
  </svg>
);

const CertCard: React.FC<{ cert: TCertification }> = ({ cert }) => (
  <article
    className="group w-[280px] shrink-0 rounded-2xl bg-tertiary p-5 
               ring-1 ring-black/5 transition-transform duration-500 ease-out 
               hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/30"
  >
    <div className="relative h-[150px] w-full overflow-hidden rounded-xl">
      <img
        src={cert.image || "https://placehold.co/600x400?text=Certification"}
        alt={cert.name}
        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        loading="lazy"
      />
      {cert.credentialUrl && (
        <div className="absolute right-2 top-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noreferrer"
            className="black-gradient flex h-8 w-8 items-center justify-center rounded-full text-white"
            title={cert.linkLabel || "View Credential"}
          >
            <LinkIcon />
          </a>
        </div>
      )}
    </div>

    <h3 className="mt-4 text-[16px] font-bold text-white">{cert.name}</h3>
    <p className="text-sm text-secondary">
      {cert.issuer}{cert.date ? ` · ${cert.date}` : ""}
    </p>

    {cert.credentialId && (
      <div className="mt-3 text-xs text-secondary">
        Credential ID: <span className="font-mono">{cert.credentialId}</span>
      </div>
    )}

    {cert.credentialUrl && (
      <div className="mt-4">
        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-3 py-2 text-sm font-medium text-white hover:bg-white/10"
        >
          <LinkIcon />
          <span>{cert.linkLabel || "View Credential"}</span>
        </a>
      </div>
    )}
  </article>
);

const CertificationSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const items = [...certifications, ...certifications]; // duplikasi untuk loop mulus

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let raf = 0;
    let x = 0;
    const speed = 0.5; // atur kecepatan

    const tick = () => {
      x += speed;
      const half = el.scrollWidth / 2;
      if (x >= half) x = 0;
      el.scrollLeft = x;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section id="certification" className="py-16">
      <h2 className="mb-10 text-center text-3xl font-bold text-white">
        Certifications
      </h2>
      <div className="relative overflow-hidden">
        <div
          ref={scrollRef}
          className="flex w-max gap-6 overflow-x-hidden"
          style={{ scrollBehavior: "auto" }}
        >
          {items.map((c, i) => (
            <CertCard key={`${c.name}-${i}`} cert={c} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
