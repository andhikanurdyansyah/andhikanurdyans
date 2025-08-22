import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map((input) => [input, ""])
);

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
};

/** ====== SIMPLE SVG ICONS (no external deps) ====== */
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
    <path d="M20.45 2H3.55A1.55 1.55 0 0 0 2 3.55v16.9A1.55 1.55 0 0 0 3.55 22h16.9A1.55 1.55 0 0 0 22 20.45V3.55A1.55 1.55 0 0 0 20.45 2zM8.34 19H5.67V9.75h2.67V19zM7 8.51A1.55 1.55 0 1 1 7 5.4a1.55 1.55 0 0 1 0 3.11zM19 19h-2.66v-4.8c0-1.14-.02-2.6-1.58-2.6-1.58 0-1.82 1.23-1.82 2.51V19h-2.66V9.75h2.55v1.27h.04c.36-.67 1.25-1.37 2.58-1.37 2.76 0 3.26 1.82 3.26 4.18V19z"/>
  </svg>
);
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
    <path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.37 0 0 5.37 0 12a11.9 11.9 0 0 0 1.7 6.11L0 24l6.09-1.6A12 12 0 1 0 20.52 3.48zM12 22a10 10 0 1 1 5.92-18.13A10 10 0 0 1 12 22zm5.09-7.46c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.64.14-.19.28-.74.91-.9 1.1-.17.19-.33.21-.61.07-.28-.14-1.17-.43-2.22-1.37-.82-.73-1.37-1.64-1.53-1.92-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.5.14-.17.19-.28.28-.47.09-.19.05-.35-.02-.5-.07-.14-.64-1.55-.88-2.13-.23-.56-.47-.49-.64-.49h-.55c-.19 0-.5.07-.76.35-.26.28-1 1-1 2.43s1.03 2.82 1.17 3.02c.14.19 2.03 3.1 4.92 4.35.69.3 1.23.47 1.65.6.69.22 1.31.19 1.81.11.55-.08 1.66-.68 1.9-1.35.23-.66.23-1.24.16-1.35-.07-.12-.26-.19-.54-.33z"/>
  </svg>
);
const MailIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
    <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v.34l-10 6.25L2 6.34V6zm0 2.53v9.47a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.53l-9.38 5.86a2 2 0 0 1-2.24 0L2 8.53z"/>
  </svg>
);

/** ====== PUT YOUR LINKS HERE ======
 * Ganti linkedin / whatsapp sesuai punyamu.
 */
const SOCIALS = {
  linkedin: "https://www.linkedin.com/in/andhikanurdyansyah/",
  whatsapp: "https://wa.me/6281234567890", // ganti ke nomor kamu (format internasional, tanpa +)
  email: `mailto:${config.html.email}`,
};

const Contact = () => {
  const formRef = useRef<React.LegacyRef<HTMLFormElement> | undefined>();
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    if (e === undefined) return;
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
    if (e === undefined) return;
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          form_name: form.name,
          to_name: config.html.fullName,
          from_email: form.email,
          to_email: config.html.email,
          message: form.message,
        },
        emailjsConfig.accessToken
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm(INITIAL_STATE);
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <div className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <Header useMotion={false} {...config.contact} />

        <form
          // @ts-expect-error
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {Object.keys(config.contact.form).map((input) => {
            const { span, placeholder } =
              config.contact.form[input as keyof typeof config.contact.form];
            const Component = input === "message" ? "textarea" : "input";

            return (
              <label key={input} className="flex flex-col">
                <span className="mb-4 font-medium text-white">{span}</span>
                <Component
                  type={input === "email" ? "email" : "text"}
                  name={input}
                  value={form[`${input}`]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white outline-none"
                  {...(input === "message" && { rows: 7 })}
                />
              </label>
            );
          })}

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              className="bg-tertiary shadow-primary rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none transition-transform duration-300 hover:scale-105"
            >
              {loading ? "Sending..." : "Send"}
            </button>

            <a
              href="https://drive.google.com/file/d/1otHMTcDRsM4AxoPi4XqMn2_2SEivh_J6/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#7F00FF] to-[#E100FF] px-6 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105"
            >
              <span>Download CV</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
              </svg>
            </a>
          </div>

          {/* ===== Social Icons Row (clickable) ===== */}
          <div className="mt-6 flex items-center gap-3">
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Open LinkedIn"
              title="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-white/15 bg-white/5 text-white/80 transition-all duration-200 hover:scale-105 hover:text-white hover:ring-white/30"
            >
              <LinkedInIcon />
            </a>

            <a
              href={SOCIALS.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="Open WhatsApp"
              title="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-white/15 bg-white/5 text-white/80 transition-all duration-200 hover:scale-105 hover:text-white hover:ring-white/30"
            >
              <WhatsAppIcon />
            </a>

            <a
              href={SOCIALS.email}
              aria-label="Send Email"
              title="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-white/15 bg-white/5 text-white/80 transition-all duration-200 hover:scale-105 hover:text-white hover:ring-white/30"
            >
              <MailIcon />
            </a>

            {/* optional helper text */}
            <span className="ml-2 text-xs text-secondary">
              Prefer chat? Reach me via LinkedIn / WhatsApp / Email.
            </span>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
