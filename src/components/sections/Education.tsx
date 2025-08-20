import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { educations } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import type { TEducation } from "../../types";

const EduItem: React.FC<{ index: number; edu: TEducation }> = ({ index, edu }) => (
  <motion.li variants={fadeIn("up", "spring", index * 0.25, 0.6)} className="mb-8 ml-4">
    <div className="absolute -left-1.5 mt-2 h-3 w-3 rounded-full border border-white bg-violet-400/70 dark:border-gray-900" />
    <div className="rounded-2xl bg-tertiary p-5 ring-1 ring-black/5">
      <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
        <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
        <span className="text-xs md:text-sm text-secondary">{edu.period}</span>
      </div>
      <div className="mt-1 text-sm text-secondary">
        {edu.institution}{edu.location ? ` · ${edu.location}` : ""}
      </div>
      {Array.isArray(edu.details) && edu.details.length > 0 && (
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-secondary">
          {edu.details.map((d, i) => (<li key={i}>{d}</li>))}
        </ul>
      )}
    </div>
  </motion.li>
);

const Education: React.FC = () => (
  <>
    <Header useMotion {...(config.sections.education || { title: "Education", subtitle: "", content: "" })} />

    {config.sections.education?.content ? (
      <div className="flex w-full">
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 max-w-3xl text-[17px] leading-[30px] text-secondary">
          {config.sections.education.content}
        </motion.p>
      </div>
    ) : null}

    <ol className="relative mt-10 border-l border-white/10">
      {educations.map((edu, index) => (<EduItem key={`${edu.institution}-${index}`} index={index} edu={edu} />))}
    </ol>
  </>
);

export default SectionWrapper(Education, "education");
