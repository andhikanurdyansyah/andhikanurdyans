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

/* ========== ICONS (tanpa dependency) ========== */
const MailIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
    <path d="M2 6a2 2 0 012-2h16a2 2 0 012 2v.34l-10 6.25L2 6.34V6zm0 2.53v9.47a2 2 0 002 2h16a2 2 0 002-2V8.53l-9.38 5.86a2 2 0 01-2.24 0L2 8.53z" />
  </svg>
);
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
    <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12a11.9 11.9 0 001.7 6.11L0 24l6.09-1.6A12 12 0 1020.52 3.48zM12 22a10 10 0 115.92-18.13A10 10 0 0112 22zm5.09-7.46c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.64.14-.19.28-.74.91-.9 1.1-.17.19-.33.21-.61.07-.28-.14-1.17-.43-2.22-1.37-.82-.73-1.37-1.64-1.53-1.92-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.5.14-.17.19-.28.28-.47.09-.19.05-.35-.02-.5-.07-.14-.64-1.55-.88-2.13-.23-.56-.47-.49-.64-.49h-.55c-.19 0-.5.07-.76.35-.26.28-1 1-1 2.43s1.03 2.82 1.17 3.02c.14.19 2.03 3.1 4.92 4.35.69.3 1.23.47 1.65.6.69.22 1.31.19 1.81.11.55-.08 1.66-.68 1.9-1.35.23-.66.23-1.24.16-1.35-.07-.12-.26-.19-.54-.33z"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
    <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7.12 20.48H4.56V9.06h2.56v11.42zM5.84 7.68a1.49 1.49 0 110-2.98 1.49 1.49 0 010 2.98zM20.48 20.48h-2.56v-5.56c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.66h-2.56V9.06h2.46v1.56h.03c.34-.64 1.18-1.31 2.44-1.31 2.61 0 3.09 1.72 3.09 3.95v7.22z"/>
  </svg>
);

/* Kartu Info kiri */
const InfoCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  href: string;
  hint?: string;
}> = ({ icon, title, subtitle, href, hint }) => (
  <a
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel="noreferrer"
    className="group flex items-center justify-between rounded-xl bg-black/40 p-4 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/50 hover:shadow-lg hover:shadow-indigo-500/10"
  >
    <div className="flex items-center gap-3">
      <div className="rounded-lg bg-indigo-600/20 p-3 text-indigo-300">
        {icon}
      </div>
      <div>
        <p className="text-xs text-secondary">{title}</p>
        <p className="text-sm font-semibold text-white">{subtitle}</p>
        {hint && <p className="mt-0.5 text-[10px] text-secondary/80">{hint}</p>}
      </div>
    </div>
    <span className="text-[11px] text-secondary transition group-hover:text-white">Open →</span>
  </a>
);

const Contact = () => {
  const formRef = useRef<React.LegacyRef<HTMLFormElement> | undefined>();
  const [form, setForm] = useState(INITIAL_STATE as Record<string, string>);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    if (!e) return;
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
    if (!e) return;
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
          setForm(INITIAL_STATE as Record<string, string>);
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
      {/* LEFT PANEL: header + info kiri + form (rapih dengan grid) */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.9] rounded-2xl bg-black-100 p-8 ring-1 ring-white/10"
      >
        <Header useMotion={false} {...config.contact} />

        {/* Info kiri + Form dalam grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-5">
          {/* Sidebar info kiri */}
          <div className="space-y-3 md:col-span-2">
            <InfoCard
              icon={<MailIcon />}
              title="Email"
              subtitle={config.html.email}
              href={`mailto:${config.html.email}`}
              hint="I typically reply within 24 hours."
            />
            <InfoCard
              icon={<WhatsAppIcon />}
              title="WhatsApp"
              subtitle="+62 8xx xxxx xxxx"
              href="https://wa.me/628xxxxxxxxxx"
              hint="Fastest response"
            />
            <InfoCard
              icon={<LinkedInIcon />}
              title="LinkedIn"
              subtitle="andhikanurdyansyah"
              href="https://www.linkedin.com/in/andhikanurdyansyah/"
            />
          </div>

          {/* Form di kanan */}
          <form
            // @ts-expect-error
            ref={formRef}
            onSubmit={handleSubmit}
            className="md:col-span-3 mt-2 flex flex-col gap-6"
          >
            {Object.keys(config.contact.form).map((input) => {
              const { span, placeholder } =
                config.contact.form[input as keyof typeof config.contact.form];
              const Component = input === "message" ? "textarea" : "input";

              return (
                <label key={input} className="flex flex-col">
                  <span className="mb-2 text-sm font-medium text-white">{span}</span>
                  <Component
                    type={input === "email" ? "email" : "text"}
                    name={input}
                    value={form[`${input}`]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="rounded-lg bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary ring-1 ring-white/10 focus:ring-2 focus:ring-indigo-500"
                    {...(input === "message" && { rows: 7 })}
                  />
                </label>
              );
            })}

            <div className="mt-1 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="rounded-xl bg-indigo-600 px-8 py-3 font-bold text-white shadow-md outline-none transition-transform duration-300 hover:scale-[1.03] hover:bg-indigo-500 disabled:opacity-60"
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
        </div>
      </motion.div>

      {/* RIGHT PANEL: Earth (tetap animasi) */}
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
