"use client";

import { Button } from "./ui/button";
import { Clock, Star, Truck } from "lucide-react";
import { ImageWithFallback } from "./image-with-fallback";
import { motion } from "motion/react";

const features = [
  { icon: Clock, text: "Listo en 10 min", color: "var(--brand-blue)" },
  { icon: Star, text: "4.8★ en reseñas", color: "var(--brand-blue)" },
  { icon: Truck, text: "Delivery gratis", color: "var(--brand-blue)" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "var(--brand-white)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <motion.div
          className="text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span style={{ color: "var(--brand-blue)" }}>Auténtica</span> <br />
            <span className="text-[var(--brand-blue)]">Comida Italiana</span> <br />
            <span style={{ color: "var(--brand-orange)" }}>en 140 gramos</span>
          </motion.h1>

          <motion.p
            className="text-xl text-[var(--brand-blue)]/80 mb-8 max-w-lg mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Disfruta de los sabores tradicionales de Italia en porciones
            perfectas. Preparado fresco, servido rápido, con todo el amor de la
            cocina italiana.
          </motion.p>

          {/* Features */}
          <motion.div
            className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2"
                whileHover={{ y: -1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <feature.icon className="h-4 w-4" style={{ color: feature.color }} />
                <span className="text-sm font-medium text-[var(--brand-blue)]/70">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Button
                size="lg"
                className="px-8 py-3 w-full sm:w-auto"
                style={{
                  backgroundColor: "var(--brand-blue)",
                  color: "var(--brand-white)",
                }}
              >
                Ver Menú Completo
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-3 w-full sm:w-auto border text-[var(--brand-blue)] hover:bg-[var(--brand-blue)] hover:text-[var(--brand-white)]"
                style={{ borderColor: "var(--brand-blue)" }}
              >
                Pedir por WhatsApp
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            className="relative z-10"
            whileHover={{ scale: 1.02, rotate: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1662197480393-2a82030b7b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwcGFzdGElMjBmb29kJTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3NTk4MjYxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Deliciosa pasta italiana fresca"
              className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
            />
          </motion.div>

          {/* Minimal: sin elementos decorativos animados */}
        </motion.div>
      </div>
    </section>
  );
}
