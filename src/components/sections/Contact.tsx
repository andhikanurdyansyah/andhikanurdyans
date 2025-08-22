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
    <div
      className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}
    >
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

          <div className="mt-4 flex gap-4">
            <button
              type="submit"
              className="bg-tertiary shadow-primary rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none hover:scale-105 transition-transform duration-300"
            >
              {loading ? "Sending..." : "Send"}
            </button>

            <a
              href="https://drive.google.com/file/d/1otHMTcDRsM4AxoPi4XqMn2_2SEivh_J6/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-pulse inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#7F00FF] to-[#E100FF] px-6 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105"
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 13l-5 5m0 0l-5-5m5 5V6"
                />
              </svg>
            </a>
          </div>
          {/* Social icons (inline SVG, pasti muncul) */}
          <div className="mt-6 flex items-center gap-5">
            {/* Email */}
            <a
              href={`mailto:${config.html.email}`}
              className="group rounded-lg bg-black/30 p-3 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-black/40 hover:ring-white/20"
              aria-label="Email"
              title={config.html.email}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 text-white/90 group-hover:text-white"
                fill="currentColor"
              >
                <path d="M2 6a2 2 0 012-2h16a2 2 0 012 2v.34l-10 6.25L2 6.34V6zm0 2.53v9.47a2 2 0 002 2h16a2 2 0 002-2V8.53l-9.38 5.86a2 2 0 01-2.24 0L2 8.53z" />
              </svg>
            </a>

            {/* WhatsApp — ganti nomor sesuai punyamu */}
            <a
              href="https://wa.me/6285788883297"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg bg-black/30 p-3 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-black/40 hover:ring-white/20"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 text-green-400"
                fill="currentColor"
              >
                <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12a11.9 11.9 0 001.7 6.11L0 24l6.09-1.6A12 12 0 1020.52 3.48zM12 22a10 10 0 115.92-18.13A10 10 0 0112 22zm5.09-7.46c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.64.14-.19.28-.74.91-.9 1.1-.17.19-.33.21-.61.07-.28-.14-1.17-.43-2.22-1.37-.82-.73-1.37-1.64-1.53-1.92-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.5.14-.17.19-.28.28-.47.09-.19.05-.35-.02-.5-.07-.14-.64-1.55-.88-2.13-.23-.56-.47-.49-.64-.49h-.55c-.19 0-.5.07-.76.35-.26.28-1 1-1 2.43s1.03 2.82 1.17 3.02c.14.19 2.03 3.1 4.92 4.35.69.3 1.23.47 1.65.6.69.22 1.31.19 1.81.11.55-.08 1.66-.68 1.9-1.35.23-.66.23-1.24.16-1.35-.07-.12-.26-.19-.54-.33z"/>
              </svg>
            </a>

            {/* LinkedIn — ganti URL sesuai profilmu */}
            <a
              href="https://id.linkedin.com/in/andhika-nurdyansyah-b404a0148"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg bg-black/30 p-3 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-black/40 hover:ring-white/20"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 text-sky-400"
                fill="currentColor"
              >
                <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7.12 20.48H4.56V9.06h2.56v11.42zM5.84 7.68a1.49 1.49 0 110-2.98 1.49 1.49 0 010 2.98zM20.48 20.48h-2.56v-5.56c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.66h-2.56V9.06h2.46v1.56h.03c.34-.64 1.18-1.31 2.44-1.31 2.61 0 3.09 1.72 3.09 3.95v7.22z"/>
              </svg>
            </a>
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
