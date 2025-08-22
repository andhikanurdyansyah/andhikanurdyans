import { useState } from "react";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { config } from "../../constants/config";

// icons (tanpa lib tambahan)
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

type FormState = "idle" | "loading" | "success" | "error";

const Contact: React.FC = () => {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "", _hp: "" });

  const onChange =
    (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((s) => ({ ...s, [k]: e.target.value }));

  const isValidEmail = (v: string) => /\S+@\S+\.\S+/.test(v);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form._hp) return; // honeypot triggers: do nothing

    if (!form.name || !isValidEmail(form.email) || !form.message) {
      setState("error");
      setTimeout(() => setState("idle"), 1500);
      return;
    }
    try {
      setState("loading");
      // === PLACE TO INTEGRATE ===
      // 1) EmailJS: emailjs.send(...)
      // 2) Resend/Sendgrid via serverless API route
      // 3) Formspree/Netlify forms
      await new Promise((r) => setTimeout(r, 900)); // fake delay
      setState("success");
      setForm({ name: "", email: "", message: "", _hp: "" });
      setTimeout(() => setState("idle"), 2000);
    } catch {
      setState("error");
      setTimeout(() => setState("idle"), 1800);
    }
  };

  return (
    <section id="contact" className="relative">
      <Header useMotion p={config.contact.p} h2={config.contact.h2} />

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {/* LEFT: form */}
        <div className="rounded-2xl bg-tertiary/60 p-6 ring-1 ring-white/10">
          <form onSubmit={onSubmit} className="space-y-5">
            {/* honeypot */}
            <input
              type="text"
              name="_hp"
              autoComplete="off"
              tabIndex={-1}
              value={form._hp}
              onChange={onChange("_hp")}
              className="hidden"
            />

            <div>
              <label className="mb-2 block text-sm font-medium text-white/90">{config.contact.form.name.span}</label>
              <input
                type="text"
                placeholder={config.contact.form.name.placeholder}
                value={form.name}
                onChange={onChange("name")}
                className="w-full rounded-lg bg-black/30 px-4 py-3 text-white placeholder:text-secondary outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white/90">{config.contact.form.email.span}</label>
              <input
                type="email"
                placeholder={config.contact.form.email.placeholder}
                value={form.email}
                onChange={onChange("email")}
                className="w-full rounded-lg bg-black/30 px-4 py-3 text-white placeholder:text-secondary outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-indigo-500"
              />
              {!!form.email && !isValidEmail(form.email) && (
                <p className="mt-1 text-xs text-pink-400">Please enter a valid email.</p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white/90">{config.contact.form.message.span}</label>
              <textarea
                placeholder={config.contact.form.message.placeholder}
                rows={6}
                value={form.message}
                onChange={onChange("message")}
                className="w-full resize-none rounded-lg bg-black/30 px-4 py-3 text-white placeholder:text-secondary outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={state === "loading"}
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-indigo-500 disabled:opacity-60"
              >
                {state === "loading" ? "Sending..." : state === "success" ? "Sent ✓" : "Send"}
              </button>

              <a
                href="/Andhika-Nurdyansyah-CV.pdf"
                download
                className="inline-flex items-center justify-center rounded-lg bg-black/40 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:bg-black/50"
              >
                Download CV
                <span className="ml-1">⬇</span>
              </a>

              <span className="ml-auto text-xs text-secondary">
                I typically reply within <strong className="text-white/90">24 hours</strong>.
              </span>
            </div>

            {state === "error" && (
              <p className="text-sm text-pink-400">Please complete the form correctly.</p>
            )}
          </form>
        </div>

        {/* RIGHT: quick contact cards (profesional & simple) */}
        <div className="grid grid-cols-1 gap-4">
          <a
            href={`mailto:${config.html.email}`}
            className="group flex items-center justify-between rounded-2xl bg-tertiary/60 p-5 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/10"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-indigo-600/20 p-3 text-indigo-300">
                <MailIcon />
              </div>
              <div>
                <p className="text-sm text-secondary">Email</p>
                <p className="font-semibold text-white">{config.html.email}</p>
              </div>
            </div>
            <span className="text-xs text-secondary group-hover:text-white">Write →</span>
          </a>

          <a
            href="https://wa.me/628xxxxxxxxxx"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-2xl bg-tertiary/60 p-5 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/10"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-green-600/20 p-3 text-green-400">
                <WhatsAppIcon />
              </div>
              <div>
                <p className="text-sm text-secondary">WhatsApp</p>
                <p className="font-semibold text-white">+62 8xx xxxx xxxx</p>
              </div>
            </div>
            <span className="text-xs text-secondary group-hover:text-white">Chat →</span>
          </a>

          <a
            href="https://www.linkedin.com/in/andhikanurdyansyah/"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-2xl bg-tertiary/60 p-5 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/10"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-sky-600/20 p-3 text-sky-400">
                <LinkedInIcon />
              </div>
              <div>
                <p className="text-sm text-secondary">LinkedIn</p>
                <p className="font-semibold text-white">andhikanurdyansyah</p>
              </div>
            </div>
            <span className="text-xs text-secondary group-hover:text-white">Connect →</span>
          </a>

          {/* optional: Calendly */}
          {/* <a href="https://calendly.com/andhika/intro-chat" ...>Schedule →</a> */}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Contact, "contact");
