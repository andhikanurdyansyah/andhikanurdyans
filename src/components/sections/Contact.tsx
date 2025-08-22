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
) as Record<keyof typeof config.contact.form, string>;

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
};

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
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
      );

      alert("Thank you. I will get back to you as soon as possible.");
      setForm(INITIAL_STATE);
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid items-start gap-10 xl:mt-12 xl:grid-cols-2">
      {/* LEFT: Form + header */}
      <motion.div
        variants={slideIn("left", "tween", 0.15, 0.9)}
        className="rounded-2xl bg-black-100/80 p-8 ring-1 ring-white/10 shadow-md"
      >
        <Header useMotion={false} {...config.contact} />

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-6"
        >
          {/* Name */}
          <label className="flex flex-col">
            <span className="mb-2 text-sm font-medium text-white">
              {config.contact.form.name.span}
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={config.contact.form.name.placeholder}
              className="rounded-lg bg-tertiary px-5 py-3 font-medium text-white outline-none ring-1 ring-white/10 placeholder:text-secondary focus:ring-2 focus:ring-indigo-500"
            />
          </label>

          {/* Email */}
          <label className="flex flex-col">
            <span className="mb-2 text-sm font-medium text-white">
              {config.contact.form.email.span}
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={config.contact.form.email.placeholder}
              className="rounded-lg bg-tertiary px-5 py-3 font-medium text-white outline-none ring-1 ring-white/10 placeholder:text-secondary focus:ring-2 focus:ring-indigo-500"
            />
          </label>

          {/* Message */}
          <label className="flex flex-col">
            <span className="mb-2 text-sm font-medium text-white">
              {config.contact.form.message.span}
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={config.contact.form.message.placeholder}
              className="resize-none rounded-lg bg-tertiary px-5 py-3 font-medium text-white outline-none ring-1 ring-white/10 placeholder:text-secondary focus:ring-2 focus:ring-indigo-500"
            />
          </label>

          <div className="mt-2 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              className="rounded-xl bg-indigo-600 px-6 py-3 font-bold text-white shadow-md transition-transform duration-300 hover:scale-[1.03] hover:bg-indigo-500 disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>

            <a
              href="https://drive.google.com/file/d/1otHMTcDRsM4AxoPi4XqMn2_2SEivh_J6/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-black/40 px-6 py-3 font-bold text-white ring-1 ring-white/10 transition-all duration-300 hover:scale-[1.03] hover:bg-black/50"
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

            <span className="ml-auto text-xs text-secondary">
              I typically reply within <span className="text-white/90">24 hours</span>.
            </span>
          </div>
        </form>
      </motion.div>

      {/* RIGHT: Earth (animasi tetap), sticky di desktop biar sejajar */}
      <motion.div
        variants={slideIn("right", "tween", 0.15, 0.9)}
        className="xl:sticky xl:top-24"
      >
        <div className="h-[340px] md:h-[520px] xl:h-[560px] overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-md">
          <EarthCanvas />
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
