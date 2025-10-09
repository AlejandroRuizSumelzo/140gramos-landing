"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  Smartphone,
} from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  const quickLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#menu", label: "Menú" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#contacto", label: "Contacto" },
  ];

  const socialLinks = [
    { icon: Instagram, label: "Instagram" },
    { icon: Facebook, label: "Facebook" },
    { icon: Twitter, label: "Twitter" },
  ];

  const legalLinks = [
    { href: "#", label: "Términos y Condiciones" },
    { href: "#", label: "Política de Privacidad" },
    { href: "#", label: "Cookies" },
  ];

  return (
    <footer
      id="contacto"
      className="pt-16 pb-8 text-[var(--brand-cream)]"
      style={{
        backgroundColor: "var(--brand-blue)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3
              className="text-2xl font-bold mb-3 text-[var(--brand-cream)]"
            >
              140gramos
            </h3>
            <p className="mb-6 leading-relaxed text-[var(--brand-cream)]/80">
              Auténtica comida italiana en porciones perfectas. Sabor
              tradicional, servicio rápido, experiencia inolvidable.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-2 border border-white/10 hover:bg-white/5 hover:border-white/20 transition-colors rounded-md"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-[var(--brand-cream)]/80" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-sm uppercase tracking-wider text-[var(--brand-cream)]/70 mb-3 font-medium">
              Enlaces rápidos
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                >
                  <a
                    href={link.href}
                    className="transition-colors text-[var(--brand-cream)]/80 hover:text-[var(--brand-cream)] hover:underline"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-sm uppercase tracking-wider text-[var(--brand-cream)]/70 mb-3 font-medium">
              Contacto
            </h4>
            <div className="space-y-3">
              <motion.div
                className="flex items-start gap-3 group"
                whileHover={{ x: 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0 text-[var(--brand-cream)]/60" />
                <div>
                  <p className="text-[var(--brand-cream)]/85">Av. Emprendimiento 1234</p>
                  <p className="text-[var(--brand-cream)]/85">Zaragoza, España</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-3 group"
                whileHover={{ x: 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <Phone className="h-5 w-5 text-[var(--brand-cream)]/60" />
                <p className="text-[var(--brand-cream)]/85">(+34) 1234-5678</p>
              </motion.div>

              <motion.div
                className="flex items-center gap-3 group"
                whileHover={{ x: 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <Mail className="h-5 w-5 text-[var(--brand-cream)]/60" />
                <p className="text-[var(--brand-cream)]/85">hola@140gramos.com</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-sm uppercase tracking-wider text-[var(--brand-cream)]/70 mb-3 font-medium">
              Horarios
            </h4>
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-[var(--brand-cream)]/60" />
                <span className="text-[var(--brand-cream)]/85 text-sm">
                  Lun - Vie: 11:00 - 23:00
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-[var(--brand-cream)]/60" />
                <span className="text-[var(--brand-cream)]/85 text-sm">
                  Sáb - Dom: 12:00 - 24:00
                </span>
              </div>
            </div>

            <div>
              <h5 className="text-sm uppercase tracking-wider text-[var(--brand-cream)]/70 mb-2 font-medium">
                Newsletter
              </h5>
              <div className="flex gap-2">
                <Input
                  placeholder="Tu email"
                  className="bg-transparent border border-[var(--brand-cream)]/20 text-[var(--brand-cream)] placeholder:text-[var(--brand-cream)]/50 focus-visible:ring-0 focus-visible:border-[var(--brand-cream)]/40"
                />
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="sm"
                    className="border border-[var(--brand-cream)] text-[var(--brand-cream)] bg-transparent hover:bg-[var(--brand-cream)] hover:text-[var(--brand-blue)]"
                  >
                    Suscribir
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <Separator className="mb-8 bg-[var(--brand-cream)]/15" />

        <motion.div
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="text-[var(--brand-cream)]/70 text-sm">
            © 2025 140gramos. Todos los derechos reservados.
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {legalLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="transition-colors text-[var(--brand-cream)]/70 hover:text-[var(--brand-cream)] hover:underline"
                whileHover={{ y: -1 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-12 p-6 rounded-xl text-center border border-[var(--brand-cream)]/15"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="text-xs uppercase tracking-wider text-[var(--brand-cream)]/60 mb-2">
            Oferta especial
          </div>
          <h3 className="text-xl font-semibold mb-2 text-[var(--brand-cream)]">
            ¡Haz tu primer pedido!
          </h3>
          <p className="mb-4 text-[var(--brand-cream)]/80">
            Descarga nuestra app y obtén 20% de descuento en tu primera orden
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="ghost"
                className="gap-2 border border-[var(--brand-cream)] text-[var(--brand-cream)] hover:bg-[var(--brand-cream)] hover:text-[var(--brand-blue)]"
              >
                <Smartphone className="w-4 h-4" />
                Descargar App
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="link" className="text-[var(--brand-cream)] underline underline-offset-4">
                Pedir por WhatsApp
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
