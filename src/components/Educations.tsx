
import React from "react";
import { educations } from "../constants";

const Educations = () => {
  return (
    <section className="mt-16 px-6">
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      {educations.map((edu, index) => (
        <div key={index} className="mb-6 border rounded p-4 shadow">
          <h3 className="text-xl font-semibold">{edu.name}</h3>
          <p className="text-gray-500">{edu.date}</p>
          <p className="mt-2">{edu.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Educations;
