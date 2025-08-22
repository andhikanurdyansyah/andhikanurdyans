import { Mail, Linkedin, Phone } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black-100 py-8 text-center">
      {/* Icons */}
      <div className="mb-3 flex items-center justify-center gap-6 text-gray-400">
        <a
          href="mailto:andhikanurdyansyah@gmail.com"
          className="transition-transform hover:scale-110 hover:text-white"
          aria-label="Email"
        >
          <Mail className="h-6 w-6" />
        </a>

        <a
          href="https://wa.me/6285788883297?text=Hi%20Andhika!"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110 hover:text-white"
          aria-label="WhatsApp"
        >
          <Phone className="h-6 w-6" />
        </a>

        <a
          href="https://id.linkedin.com/in/andhika-nurdyansyah-b404a0148"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110 hover:text-white"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-6 w-6" />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-400">© {year} Andhika. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
