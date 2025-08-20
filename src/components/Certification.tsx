import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { certifications } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import type { TCertification } from "../../types";

const CertCard: React.FC<{ index: number; cert: TCertification }> = ({ index, cert }) => {
  return (
    <motion.article
      variants={fadeIn("up", "spring", index * 0.2, 0.6)}
      className="rounded-2xl bg-tertiary p-5 ring-1 ring-black/5 hover:shadow-md"
    >
      <h3 className="text-lg font-semibold leading-snug text-white">{cert.name}</h3>
      <div className="text-sm text-secondary">
        {cert.issuer}{cert.date ? ` · ${cert.date}` : ""}
      </div>

      {cert.credentialId && (
        <div className="mt-3 text-xs text-secondary">
          Credential ID: <span className="font-mono">{cert.credentialId}</span>
        </div>
      )}

      <div className="mt-4">
        {cert.credentialUrl ? (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-xl border border-white/20 px-3 py-2 text-sm font-medium text-white hover:bg-white/10"
          >
            View Credential
          </a>
        ) : (
          <span className="text-xs text-secondary">(No credential URL provided)</span>
        )}
      </div>
    </motion.article>
  );
};

const Certification: React.FC = () => {
  return (
    <>
      <Header useMotion {...(config.sections.certification || { title: "Certification", subtitle: "", content: "" })} />

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

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {certifications.map((c, index) => (
          <CertCard key={`${c.name}-${index}`} index={index} cert={c} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certification, "certification");
