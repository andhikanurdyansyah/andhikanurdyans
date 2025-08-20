import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { educations } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import type { TEducation } from "../../types";

// fallback ikon/link sederhana (boleh ganti pakai assets kamu)
const LinkIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
    <path d="M10.59 13.41a1 1 0 0 1 0-1.41l3-3a1 1 0 1 1 1.41 1.41l-3 3a1 1 0 0 1-1.41 0z"></path>
    <path d="M13 7h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-4a1 1 0 1 1 2 0v4h8V9h-4a1 1 0 1 1 0-2z"></path>
  </svg>
);

const EducationCard: React.FC<{ index: number } & TEducation> = ({
  index,
  title,
  institution,
  period,
  location,
  details,
  image,
  linkUrl,
  linkLabel,
  tags,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.25, 0.75)}>
      <Tilt glareEnable tiltEnable tiltMaxAngleX={30} tiltMaxAngleY={30} glareColor="#aaa6c3">
        <div className="bg-tertiary w-full rounded-2xl p-5 sm:w-[300px] ring-1 ring-black/5">
          <div className="relative h-[200px] w-full">
            <img
              src={image || "https://placehold.co/600x400?text=Education"}
              alt={title}
              className="h-full w-full rounded-2xl object-cover"
            />
            {linkUrl && (
              <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
                <a
                  href={linkUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="black-gradient flex h-10 w-10 items-center justify-center rounded-full text-white"
                  title={linkLabel || "View"}
                >
                  <LinkIcon />
                </a>
              </div>
            )}
          </div>

          <div className="mt-5">
            <h3 className="text-[20px] font-bold text-white">{title}</h3>
            <p className="text-secondary mt-1 text-[14px]">
              {institution}{location ? ` · ${location}` : ""} {period ? ` · ${period}` : ""}
            </p>
          </div>

          {Array.isArray(details) && details.length > 0 && (
            <ul className="mt-3 list-disc pl-5 text-sm text-secondary space-y-1">
              {details.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          )}

          {Array.isArray(tags) && tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p key={tag.name} className={`text-[12px] ${tag.color}`}>#{tag.name}</p>
              ))}
            </div>
          )}

          {linkUrl && (
            <div className="mt-4">
              <a
                href={linkUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-3 py-2 text-sm font-medium text-white hover:bg-white/10"
              >
                <LinkIcon />
                <span>{linkLabel || "View"}</span>
              </a>
            </div>
          )}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Education: React.FC = () => {
  return (
    <>
      <Header
        useMotion
        {...(config.sections.education || {
          p: "Where I studied",
          h2: "Education.",
          content: "",
        })}
      />

      {config.sections.education?.content ? (
        <div className="flex w-full">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
          >
            {config.sections.education.content}
          </motion.p>
        </div>
      ) : null}

      <div className="mt-10 flex flex-wrap gap-7">
        {educations.map((edu, index) => (
          <EducationCard key={`${edu.institution}-${index}`} index={index} {...edu} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
