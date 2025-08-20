import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { certifications } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import type { TCertification } from "../../types";

// Ikon link kecil
const LinkIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
    <path d="M10.59 13.41a1 1 0 0 1 0-1.41l3-3a1 1 0 1 1 1.41 1.41l-3 3a1 1 0 0 1-1.41 0z"></path>
    <path d="M13 7h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-4a1 1 0 1 1 2 0v4h8V9h-4a1 1 0 1 1 0-2z"></path>
  </svg>
);

const CertCard: React.FC<{ index: number; cert: TCertification }> = ({ index, cert }) => (
  <motion.article
    variants={fadeIn("up", "spring", index * 0.2, 0.6)}
    className="snap-start"
  >
    <Tilt glareEnable tiltEnable tiltMaxAngleX={30} tiltMaxAngleY={30} glareColor="#aaa6c3">
      <div className="bg-tertiary ring-1 ring-black/5 w-[300px] rounded-2xl p-5">
        {/* IMAGE */}
        <div className="relative h-[180px] w-full">
          <img
            src={cert.image || "https://placehold.co/600x400?text=Certification"}
            alt={cert.name}
            className="h-full w-full rounded-2xl object-cover"
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
        <h3 className="mt-5 text-[18px] font-bold text-white leading-snug">
          {cert.name}
        </h3>
        <div className="text-sm text-secondary">
          {cert.issuer}{cert.date ? ` · ${cert.date}` : ""}
        </div>

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
      </div>
    </Tilt>
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
        <div className="flex w-full">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 max-w-3xl text-[17px] leading-[30px] text-secondary"
          >
            {config.sections.certification.content}
          </motion.p>
        </div>
      ) : null}

      {/* ROW BANNER SCROLL */}
      <div
        className="
          mt-10 flex gap-6 overflow-x-auto pb-2
          [scrollbar-width:thin]
          snap-x snap-mandatory
        "
      >
        {certifications.map((c, index) => (
          <CertCard key={`${c.name}-${index}`} index={index} cert={c} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certification, "certification");
