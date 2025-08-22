import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

// --- state awal form mengikuti config.contact.form ---
const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map((input) => [input, ""])
) as Record<string, string>;

// --- EmailJS env (ADMIN TEMPLATE pakai VITE_EMAILJS_TEMPLATE_ID) ---
const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string, // admin
  accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN as string,
  autoReplyTemplateId: import.meta.env
    .VITE_EMAILJS_TEMPLATE_ID_AUTOREPLY as string, // auto-reply
};

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // validasi very-light
    if (!form.name?.trim() || !form.email?.trim() || !form.message?.trim()) {
      alert("Please fill your name, email, and message.");
      return;
    }

    setLoading(true);

    const now = new Date();
    const submitted_at = now.toLocaleString();
    const year = String(now.getFullYear());

    try {
      // 1) Kirim ke kamu (ADMIN)
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          form_name: form.name,
          to_name: config.html.fullName,
          from_email: form.email,
          to_email: config.html.email,
          message: form.message,
          reply_to: form.email, // balas langsung ke pengirim
          submitted_at,
          year,
        },
        emailjsConfig.accessToken
      );

      // 2) Kirim auto-reply ke pengirim (USER)
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.autoReplyTemplateId,
        {
          form_name: form.name,
          message: form.message,
          submitted_at,
          year,
          owner_email: config.html.email,
          portfolio_url: "https://andhikanurdyans.vercel.app",
          to_name: form.name,  // opsional kalau dipakai di template
          to_email: form.email // opsional, hanya sebagai info
        },
        emailjsConfig.accessToken
      );

      alert("✅ Message sent! A copy has been emailed to you.");
      setForm(INITIAL_STATE);
      formRef.current?.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("❌ Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <Header useMotion={false} {...config.contact} />

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
          noValidate
        >
          {Object.keys(config.contact.form).map((input) => {
            const { span, placeholder } =
              config.contact.form[input as keyof typeof config.contact.form];
            const isMessage = input === "message";
            const isEmail = input === "email";
            const Component: any = isMessage ? "textarea" : "input";

            return (
              <label key={input} className="flex flex-col">
                <span className="mb-4 font-medium text-white">{span}</span>
                <Component
                  type={isEmail ? "email" : "text"}
                  name={input}
                  defaultValue={form[input] ?? ""}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white outline-none"
                  {...(isMessage && { rows: 7 })}
                  required
                />
              </label>
            );
          })}

          <div className="mt-4 flex gap-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-tertiary shadow-primary rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none transition-transform duration-300 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
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
