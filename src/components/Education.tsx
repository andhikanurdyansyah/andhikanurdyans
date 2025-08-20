import React from "react";
import { educations } from "../constants";

const Education: React.FC = () => {
  return (
    <section id="education" className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Education
        </h2>
        <p className="mt-2 text-sm opacity-80">
          Formal education, coursework highlights, and academic focus.
        </p>

        <ol className="mt-10 relative border-l border-gray-200 dark:border-gray-700">
          {educations.map((edu, idx) => (
            <li key={idx} className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 dark:bg-gray-700 rounded-full mt-2 -left-1.5 border border-white dark:border-gray-900" />
              <div className="p-4 md:p-5 bg-white dark:bg-gray-900 rounded-2xl shadow-sm ring-1 ring-black/5">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <h3 className="text-xl font-semibold">
                    {edu.degree}
                  </h3>
                  <span className="text-xs md:text-sm opacity-70">
                    {edu.period}
                  </span>
                </div>
                <div className="mt-1 text-sm opacity-90">
                  {edu.institution}
                  {edu.location ? <span> · {edu.location}</span> : null}
                </div>

                {Array.isArray(edu.details) && edu.details.length > 0 && (
                  <ul className="mt-3 list-disc pl-5 space-y-1 text-sm leading-relaxed opacity-90">
                    {edu.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Education;
