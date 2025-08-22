import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full bg-black-100 py-6 mt-12 border-t border-gray-800">
      <div className="container mx-auto flex flex-col items-center gap-4">
        {/* Sosial Media Icons */}
        <div className="flex gap-6">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="mailto:andhikanurdyansyah@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/email.svg" alt="Email" className="w-6 h-6" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://wa.me/6285788883297"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/whatsapp.svg" alt="WhatsApp" className="w-6 h-6" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://id.linkedin.com/in/andhika-nurdyansyah-b404a0148"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
          </motion.a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Andhika. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
