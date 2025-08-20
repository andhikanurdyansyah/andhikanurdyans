import { certifications } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import type { TCertification } from "../../types";

const LinkIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
    <path d="M10.59 13.41a1 1 0 0 1 0-1.41l3-3a1 1 0 1 1 1.41 1.41l-3 3a1 1 0 0 1-1.41 0z"></path>
    <path d="M13 7h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-4a1 1 0 1 1 2 0v4h8V9h-4a1 1 0 1 1 0-2z"></path>
  </svg>
);

const CertCard: React.FC<{ cert: TCertification }> = ({ cert }) => (
  <article className="w-[300px] shrink-0 rounded-2xl bg-tertiary p-5 ring-1 ring-black/5">
    {/* IMAGE */}
    <div className="relative h-[180px] w-full">
      <img
        src={cert.image || "https://placehold.co/600x400?text=Certification"}
        alt={cert.name}
        className="h-full w-full rounded-2xl object-cover"
        loading="lazy"
      />
      {cert.credentialUrl && (
        <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noreferrer"
            className="black-gradient flex h-10 w-10 items-center justify-center rounded-full text-white"
            title={cert.linkLabel || "View Credential"}
          >
            <LinkIcon />
          </a>
        </div>
      )}
    </div>

    {/* TEXT */}
    <h3 className="mt-5 text-[18px] font-bold leading-snug text-white">
      {cert.name}
    </h3>
    <div className="text-sm text-secondary">
      {cert.issuer}{cert.date ? ` · ${cert.date}` : ""}
    </div>

    {/* ID */}
    {cert.credentialId && (
      <div className="mt-3 text-xs text-secondary">
        Credential ID: <span className="font-mono">{cert.credentialId}</span>
      </div>
    )}

    {/* BUTTON */}
    <div className="mt-4">
      {cert.credentialUrl ? (
        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-3 py-2 text-sm font-medium text-white hover:bg-white/10"
        >
          <LinkIcon />
          <span>{cert.linkLabel || "View Credential"}</span>
        </a>
      ) : (
        <span className="text-xs text-secondary">(No credential URL provided)</span>
      )}
    </div>
  </article>
);

const Certification: React.FC = () => {
  // duplikasi list supaya loop mulus (50% track digeser)
  const loopItems = [...certifications, ...certifications];

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

      {/* Banner auto-scroll */}
      <div className="mt-10 overflow-hidden">
        {/* CSS lokal untuk animasi halus */}
        <style>{`
          @keyframes scrollX {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            display: flex;
            gap: 1.5rem;                /* gap-6 */
            width: max-content;
            will-change: transform;
            animation: scrollX 35s linear infinite;
          }
          .marquee-container:hover .marquee-track {
            animation-play-state: paused; /* pause saat hover */
          }
          @media (prefers-reduced-motion: reduce) {
            .marquee-track { animation: none; }
          }
        `}</style>

        <div className="marquee-container">
          <div className="marquee-track">
            {loopItems.map((c, i) => (
              <CertCard key={`${c.name}-${i}`} cert={c} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Certification, "certification");
