"use client";

import { Button } from "./ui/button";
import { Menu, Phone } from "lucide-react";
import { motion } from "motion/react";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#menu", label: "Menú" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-[var(--brand-white)]/95 backdrop-blur-sm shadow-sm sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <a href="#inicio" className="flex items-center space-x-3">
              <img
                src="/140-gramos-logo.webp"
                alt="140gramos"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
            </a>
          </motion.div>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-[var(--brand-blue)]/80 hover:text-[var(--brand-blue)] transition-colors relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {link.label}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--brand-blue)]"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <motion.div
              className="hidden lg:flex items-center space-x-2 text-sm text-[var(--brand-blue)]/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Phone className="h-4 w-4" />
              <span>(+34) 123-123-123</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                className="hidden sm:inline-flex"
                style={{
                  backgroundColor: "var(--brand-blue)",
                  color: "white",
                }}
              >
                Pedir Ahora
              </Button>
            </motion.div>
            <Button variant="ghost" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
