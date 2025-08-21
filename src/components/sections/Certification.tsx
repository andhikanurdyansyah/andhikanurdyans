import { certifications } from "../../constants";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { SectionWrapper } from "../../hoc";
import type { TCertification } from "../../types";

/* Ikon link */
const LinkIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
    <path d="M10.59 13.41a1 1 0 0 1 0-1.41l3-3a1 1 0 1 1 1.41 1.41l-3 3a1 1 0 0 1-1.41 0z" />
    <path d="M13 7h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a1 1 0 1 1 0-2z" />
  </svg>
);

const CertCard: React.FC<{ cert: TCertification }> = ({ cert }) => (
  <article
    className="group w-[280px] shrink-0 rounded-2xl bg-tertiary p-5
               ring-1 ring-white/10 shadow-sm transition-all duration-500 ease-out
               hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/20"
  >
    {/* Gambar: rasio konsisten 16:9, fit (object-contain) + padding supaya portrait rapi */}
    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl bg-black/20 p-3 sm:p-4">
      <img
        src={cert.image || "https://placehold.co/600x400?text=Certification"}
        alt={cert.name}
        className="mx-auto my-auto h-full w-full max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
        loading="lazy"
      />
      {cert.credentialUrl && (
        <div className="absolute right-2 top-2 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noreferrer"
            className="black-gradient inline-flex h-8 w-8 items-center justify-center rounded-full text-white focus:outline-none focus:ring-2 focus:ring-indigo-400/70"
            title={cert.linkLabel || "View Credential"}
          >
            <LinkIcon />
          </a>
        </div>
      )}
    </div>

    {/* Info */}
    <h3 className="mt-4 text-[16px] font-bold leading-snug text-white">{cert.name}</h3>
    <p className="text-sm text-secondary">
      {cert.issuer}
      {cert.date ? ` · ${cert.date}` : ""}
    </p>

    {/* ID (opsional) */}
    {cert.credentialId && (
      <div className="mt-3 text-xs text-secondary">
        Credential ID: <span className="font-mono">{cert.credentialId}</span>
      </div>
    )}

    {/* Tombol View (seperti Education) */}
    {cert.credentialUrl && (
      <a
        href={cert.credentialUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-block rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow transition hover:bg-indigo-500"
      >
        View
      </a>
    )}
  </article>
);

const Certification: React.FC = () => {
  return (
    <>
      <Header
        useMotion
        {...(config.sections.certification || {
          p: "Professional proof",
          h2: "Certifications.",
          content: "",
        })}
      />

      {config.sections.certification?.content ? (
        <p className="mt-3 max-w-3xl text-[17px] leading-[30px] text-secondary">
          {config.sections.certification.content}
        </p>
      ) : null}

      {/* Banner auto-scroll Tailwind; pause saat hover */}
      <div className="group relative mt-10 w-full overflow-hidden">
        <div className="flex w-max gap-6 animate-scrollX-slow group-hover:[animation-play-state:paused]">
          {[...certifications, ...certifications].map((c, idx) => (
            <CertCard key={`${c.name}-${idx}`} cert={c} />
          ))}
        </div>

        {/* (Opsional) fade di kiri/kanan biar mulus
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-primary to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-primary to-transparent" />
        */}
      </div>
    </>
  );
};

export default SectionWrapper(Certification, "certification");
