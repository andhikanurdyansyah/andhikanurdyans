import { Mail, Linkedin, Phone, Github, Instagram, Facebook, Twitter } from "lucide-react";

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
          href="https://www.linkedin.com/in/andhikanurdyansyah/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110 hover:text-white"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-6 w-6" />
        </a>

        <a
          href="https://github.com/andhikanurdyansyah"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110 hover:text-white"
          aria-label="GitHub"
        >
          <Github className="h-6 w-6" />
        </a>

        <a
          href="https://www.instagram.com/andhikanurdyansyah/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110 hover:text-white"
          aria-label="Instagram"
        >
          <Instagram className="h-6 w-6" />
        </a>

        <a
          href="https://www.facebook.com/andhika.nurdyansyah/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110 hover:text-white"
          aria-label="Facebook"
        >
          <Facebook className="h-6 w-6" />
        </a>

        <a
          href="https://x.com/andhikanurdyans"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110 hover:text-white"
          aria-label="Twitter"
        >
          <Twitter className="h-6 w-6" />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-400">© {year} Andhika. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
