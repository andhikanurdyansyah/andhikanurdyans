import React from "react";
import { certifications } from "../constants";

const Certification: React.FC = () => {
  return (
    <section id="certification" className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Certification
        </h2>
        <p className="mt-2 text-sm opacity-80">
          Professional certifications and credentials.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certifications.map((c, idx) => (
            <article
              key={idx}
              className="p-5 bg-white dark:bg-gray-900 rounded-2xl shadow-sm ring-1 ring-black/5 hover:shadow-md transition"
            >
              <header className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold leading-snug">
                    {c.name}
                  </h3>
                  <div className="text-sm opacity-80">
                    {c.issuer}
                    {c.date ? <span> · {c.date}</span> : null}
                  </div>
                </div>
              </header>

              {c.credentialId && (
                <div className="mt-3 text-xs opacity-70">
                  Credential ID: <span className="font-mono">{c.credentialId}</span>
                </div>
              )}

              <footer className="mt-4">
                {c.credentialUrl ? (
                  <a
                    href={c.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-xl px-3 py-2 text-sm font-medium border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    View Credential
                  </a>
                ) : (
                  <span className="text-xs opacity-60">
                    (No credential URL provided)
                  </span>
                )}
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;
