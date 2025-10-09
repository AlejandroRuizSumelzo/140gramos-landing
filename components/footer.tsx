"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  ArrowRight,
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
      className="pt-16 pb-8 text-[var(--primary-foreground)]"
      style={{
        background:
          "color-mix(in oklch, var(--primary) 12%, black)",
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
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--brand-orange)" }}
            >
              140gramos
            </h3>
            <p className="mb-6 leading-relaxed text-[var(--brand-cream)]/90">
              Auténtica comida italiana en porciones perfectas. Sabor
              tradicional, servicio rápido, experiencia inolvidable.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-2 hover:bg-white/10 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
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
            <h4 className="font-semibold mb-4 text-lg">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <a
                    href={link.href}
                    className="transition-colors flex items-center gap-2 group text-[var(--brand-cream)]/90 hover:text-[var(--brand-orange)]"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.label}</span>
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
            <h4 className="font-semibold mb-4 text-lg">Contacto</h4>
            <div className="space-y-3">
              <motion.div
                className="flex items-start space-x-3 group"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <MapPin className="h-5 w-5 mt-1 transition-colors flex-shrink-0 text-[var(--brand-cream)]/70 group-hover:text-[var(--brand-orange)]" />
                <div>
                  <p className="text-[var(--brand-cream)]/90">Av. Emprendimiento 1234</p>
                  <p className="text-[var(--brand-cream)]/90">Zargoza, España</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3 group"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Phone className="h-5 w-5 transition-colors text-[var(--brand-cream)]/70 group-hover:text-[var(--brand-orange)]" />
                <p className="text-[var(--brand-cream)]/90">(+34) 1234-5678</p>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3 group"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Mail className="h-5 w-5 transition-colors text-[var(--brand-cream)]/70 group-hover:text-[var(--brand-orange)]" />
                <p className="text-[var(--brand-cream)]/90">hola@140gramos.com</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4 text-lg">Horarios</h4>
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-[var(--brand-cream)]/70" />
                <span className="text-[var(--brand-cream)]/90 text-sm">
                  Lun - Vie: 11:00 - 23:00
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-[var(--brand-cream)]/70" />
                <span className="text-[var(--brand-cream)]/90 text-sm">
                  Sáb - Dom: 12:00 - 24:00
                </span>
              </div>
            </div>

            <div>
              <h5 className="font-medium mb-3">Newsletter</h5>
              <div className="flex space-x-2">
                <Input
                  placeholder="Tu email"
                  className="text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:ring-[var(--accent)]"
                  style={{
                    backgroundColor: "var(--input-background)",
                    borderColor: "var(--border)",
                  }}
                />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="sm"
                    style={{
                      backgroundColor: "var(--brand-blue)",
                      color: "white",
                    }}
                  >
                    Suscribir
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <Separator className="mb-8 bg-[var(--border)]" />

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
                className="transition-colors text-[var(--brand-cream)]/70 hover:text-[var(--brand-orange)]"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-12 p-8 rounded-2xl text-center relative overflow-hidden"
          style={{ backgroundColor: "var(--brand-blue)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-10"
            style={{ backgroundColor: "var(--brand-orange)" }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <Badge
            className="mb-4"
            style={{
              backgroundColor: "var(--brand-orange)",
              color: "white",
            }}
          >
            Oferta Especial
          </Badge>

          <h3
            className="text-2xl font-bold mb-2"
            style={{ color: "var(--brand-white)" }}
          >
            ¡Haz tu primer pedido!
          </h3>
          <p className="mb-6" style={{ color: "var(--brand-cream)" }}>
            Descarga nuestra app y obtén 20% de descuento en tu primera orden
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="secondary"
                className="gap-2"
                style={{
                  backgroundColor: "var(--brand-orange)",
                  color: "white",
                }}
              >
                <Smartphone className="w-4 h-4" />
                Descargar App
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="border-[var(--primary-foreground)] text-[var(--primary-foreground)] hover:bg-[var(--primary-foreground)] hover:text-[var(--brand-blue)]"
              >
                Pedir por WhatsApp
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
