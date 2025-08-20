import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { certifications } from "../../constants";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import type { TCertification } from "../../types";

// ikon link kecil (tanpa dependency tambahan)
const LinkIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
    <path d="M10.59 13.41a1 1 0 0 1 0-1.41l3-3a1 1 0 1 1 1.41 1.41l-3 3a1 1 0 0 1-1.41 0z"></path>
    <path d="M13 7h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-4a1 1 0 1 1 2 0v4h8V9h-4a1 1 0 1 1 0-2z"></path>
  </svg>
);

const CertCard: React.FC<{ cert: TCertification; i: number }> = ({ cert, i }) => (
  <motion.article
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ delay: i * 0.06, duration: 0.35, ease: "easeOut" }}
    whileHover={{ scale: 1.04, y: -6, rotateZ: -0.3 }}
    whileTap={{ scale: 0.99 }}
    className="group rounded-2xl bg-tertiary p-5 ring-1 ring-white/10 shadow-sm
               transition-shadow duration-300 ease-out hover:shadow-xl hover:shadow-indigo-500/20"
  >
    {/* Gambar */}
    <div className="relative h-[160px] w-full overflow-hidden rounded-xl">
      <img
        src={cert.image || "https://placehold.co/600x400?text=Certification"}
        alt={cert.name}
        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        loading="lazy"
      />
      {cert.credentialUrl && (
        <div className="absolute right-2 top-2 opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
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
    <h3 className="mt-4 text-[16px] font-bold text-white leading-snug">
      {cert.name}
    </h3>
    <p className="text-sm text-secondary">
      {cert.issuer}{cert.date ? ` · ${cert.date}` : ""}
    </p>

    {/* ID + tombol (opsional) */}
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
          className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-3 py-2
                     text-sm font-medium text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400/70"
        >
          <LinkIcon />
          <span>{cert.linkLabel || "View Credential"}</span>
        </a>
      </div>
    )}
  </motion.article>
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

      <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {certifications.map((c, idx) => (
          <CertCard key={`${c.name}-${idx}`} cert={c} i={idx} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certification, "certification");
