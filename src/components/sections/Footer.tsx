import { Mail, Linkedin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black-100 py-6 text-center text-gray-400">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="mailto:andhikanurdyansyah@gmail.com"
          className="hover:text-white transition-colors"
          aria-label="Email"
        >
          <Mail className="h-6 w-6" />
        </a>
        <a
          href="https://wa.me/6285788883297"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
          aria-label="WhatsApp"
        >
          <Phone className="h-6 w-6" />
        </a>
        <a
          href="https://id.linkedin.com/in/andhika-nurdyansyah-b404a0148"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-6 w-6" />
        </a>
      </div>
      <p className="text-sm">
        © {new Date().getFullYear()} Andhika Nurdyansyah. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
