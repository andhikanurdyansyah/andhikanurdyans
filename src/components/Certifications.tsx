
import React from "react";
import { certifications } from "../constants";

const Certifications = () => {
  return (
    <section className="mt-16 px-6">
      <h2 className="text-3xl font-bold mb-6">Certifications</h2>
      <div className="flex flex-wrap gap-4">
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-48 h-32 border rounded overflow-hidden shadow hover:scale-105 transition"
          >
            <img
              src={cert.image}
              alt={cert.name}
              className="object-cover w-full h-full"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
