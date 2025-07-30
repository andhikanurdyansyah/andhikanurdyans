import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { educations } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TEducation } from "../../types";

const EducationCard: React.FC<{ index: number } & TEducation> = ({
  index,
  name,
  description,
  tags,
  icon,
  iconBg,
  date,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        glareColor="#aaa6c3"
      >
        <div className="bg-tertiary w-full rounded-2xl p-5 sm:w-[300px]">
          <div className="relative flex h-[80px] w-full items-center justify-center">
            <img
              src={icon}
              alt={name}
              className="h-16 w-16 rounded-full object-contain"
              style={{ backgroundColor: iconBg }}
            />
          </div>
          <div className="mt-5">
            <h3 className="text-[20px] font-bold text-white">{name}</h3>
            <p className="text-secondary mt-1 text-sm italic">{date}</p>
            <p className="text-secondary mt-2 text-sm">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-xs ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Educations = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.education} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.education.content}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {educations.map((edu, index) => (
          <EducationCard key={`education-${index}`} index={index} {...edu} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Educations, "education");
