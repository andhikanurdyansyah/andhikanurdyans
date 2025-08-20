import React, { useEffect, useRef } from "react";
import { certifications } from "../../constants";
import { Link as LinkIcon } from "lucide-react";

const CertificationSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const speed = 1; // kecepatan scroll banner
    let animationFrame: number;

    const autoScroll = () => {
      if (!scrollContainer) return;
      scrollAmount += speed;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0; // reset biar infinite
      }
      scrollContainer.scrollLeft = scrollAmount;
      animationFrame = requestAnimationFrame(autoScroll);
    };

    animationFrame = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section id="certification" className="py-16">
      <h2 className="text-center text-3xl font-bold text-white mb-10">
        Certifications
      </h2>
      <div className="relative overflow-hidden">
        <div
          ref={scrollRef}
          className="flex w-max gap-6 overflow-x-hidden"
          style={{ scrollBehavior: "smooth" }}
        >
          {/* Loop dua kali biar infinite */}
          {[...certifications, ...certifications].map((cert, idx) => (
            <CertCard key={idx} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CertCard: React.FC<{ cert: any }> = ({ cert }) => (
  <article
    className="group w-[280px] shrink-0 rounded-2xl bg-tertiary p-5 
               ring-1 ring-black/5 transition-transform duration-500 ease-out 
               hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/30"
  >
    {/* Gambar */}
    <div className="relative h-[150px] w-full overflow-hidden rounded-xl">
      <img
        src={cert.image || "https://placehold.co/600x400?text=Certification"}
        alt={cert.name}
        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
      />
      {cert.credentialUrl && (
        <div className="absolute right-2 top-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noreferrer"
            className="black-gradient flex h-8 w-8 items-center justify-center rounded-full text-white"
          >
            <LinkIcon size={16} />
          </a>
        </div>
      )}
    </div>

    {/* Info */}
    <h3 className="mt-4 text-[16px] font-bold text-white">{cert.name}</h3>
    <p className="text-sm text-secondary">
      {cert.issuer}
      {cert.date ? ` · ${cert.date}` : ""}
    </p>
  </article>
);

export default CertificationSection;
