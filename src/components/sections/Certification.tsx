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
  <article className="w-[280px] shrink-0 rounded-2xl bg-tertiary p-5 ring-1 ring-black/5">
    <div className="relative h-[150px] w-full">
      <img
        src={cert.image || "https://placehold.co/600x400?text=Certification"}
        alt={cert.name}
        className="h-full w-full rounded-xl object-cover"
      />
      {cert.credentialUrl && (
        <div className="absolute right-2 top-2">
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noreferrer"
            className="black-gradient flex h-8 w-8 items-center justify-center rounded-full text-white"
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
  </article>
);

const Certification: React.FC = () => {
  const loopItems = [...certifications, ...certifications]; // digandakan supaya mulus

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

      {/* teks pembuka */}
      {config.sections.certification?.content && (
        <p className="mt-3 max-w-3xl text-[17px] leading-[30px] text-secondary">
          {config.sections.certification.content}
        </p>
      )}

      {/* Banner auto-scroll */}
      <div className="mt-10 overflow-hidden">
        <style>{`
          @keyframes scrollX {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            display: inline-flex;
            gap: 1rem;
            width: max-content;
            animation: scrollX 50s linear infinite;
            will-change: transform;
          }
          .marquee-container:hover .marquee-track {
            animation-play-state: paused;
          }
        `}</style>

        <div className="marquee-container relative flex overflow-hidden">
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
