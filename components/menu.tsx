"use client";

import { ImageWithFallback } from "./image-with-fallback";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { motion } from "motion/react";
import { ChefHat, Sparkles } from "lucide-react";

export function Menu() {
  const pastaTypes = [
    { name: "Spaghetti", popular: false },
    { name: "Penne", popular: true },
    { name: "Fusilli", popular: false },
    { name: "Rigatoni", popular: false },
    { name: "Farfalle", popular: false, badge: "Sin gluten" },
  ];

  const sauceTypes = [
    { name: "Boloñesa", popular: true },
    { name: "Setas", popular: false },
    { name: "Carbonara", popular: true },
    { name: "Pesto", popular: false },
    { name: "Trufa", popular: false, badge: "Premium" },
    { name: "Queso", popular: false },
  ];

  const pricing = [
    { item: "Plato de pasta", price: "6,90 €", highlight: false },
    { item: "Bebida", price: "2,00 €", highlight: false },
    { item: "Postre", price: "3,00 €", highlight: false },
    { item: "Menú completo", price: "10,00 €", highlight: true },
  ];

  const menuImages = [
    {
      src: "https://images.unsplash.com/photo-1633337474564-1d9478ca4e2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFnaGV0dGklMjBjYXJib25hcmElMjBwYXN0YSUyMGRpc2h8ZW58MXx8fHwxNzU5ODI2OTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Spaghetti Carbonara",
    },
    {
      src: "https://images.unsplash.com/photo-1680678242896-a8e64cb95b62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW5uZSUyMHBhc3RhJTIwaXRhbGlhbiUyMGZvb2R8ZW58MXx8fHwxNzU5ODI2OTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Penne Pasta",
    },
    {
      src: "https://images.unsplash.com/photo-1568689595552-ae5eb971f704?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXNpbGxpJTIwcGFzdGElMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NTk4MjY5NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Fusilli Pasta",
    },
    {
      src: "https://images.unsplash.com/photo-1605590955562-be1a5fda4161?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXN0byUyMHBhc3RhJTIwZ3JlZW4lMjBiYXNpbHxlbnwxfHx8fDE3NTk4MjY5NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Pesto Pasta",
    },
  ];

  return (
    <section
      id="menu"
      className="py-20 bg-gradient-to-b from-[var(--brand-white)] to-[var(--brand-cream)]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ChefHat
              className="w-8 h-8"
              style={{ color: "var(--brand-blue)" }}
            />
            <h2
              className="text-5xl font-bold"
              style={{ color: "var(--brand-blue)" }}
            >
              Nuestro Menú
            </h2>
          </motion.div>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Plato de pasta (ración generosa 140 g) con selección de 5 tipos de
            pasta (incluye 1 sin gluten) y 6 salsas.
            <br />
            <span className="text-sm text-muted-foreground">
              Cada mes, el que menos rotación tiene se cambia para sacar siempre
              un nuevo menú
            </span>
          </p>
        </motion.div>

        {/* Menu Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="mb-12 border-0 shadow-xl">
            <CardContent className="p-8 md:p-12">
              {/* Pasta & Salsa Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
                {/* Pasta Column */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h3 className="text-2xl font-bold mb-6 tracking-wide text-foreground uppercase flex items-center gap-2">
                    Pasta
                    <Sparkles
                      className="w-5 h-5"
                      style={{ color: "var(--brand-orange)" }}
                    />
                  </h3>
                  <div className="space-y-3">
                    {pastaTypes.map((pasta, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-lg transition-colors group hover:bg-[var(--muted)]"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: 0.4 + index * 0.05,
                        }}
                        whileHover={{ x: 4 }}
                      >
                        <span className="text-lg text-muted-foreground font-medium group-hover:text-foreground">
                          {pasta.name}
                        </span>
                        <div className="flex gap-2">
                          {pasta.badge && (
                            <Badge
                              variant="secondary"
                              className="text-xs"
                              style={{
                                backgroundColor: "var(--brand-cream)",
                                color: "var(--brand-blue)",
                              }}
                            >
                              {pasta.badge}
                            </Badge>
                          )}
                          {pasta.popular && (
                            <Badge
                              variant="default"
                              className="text-xs"
                              style={{
                                backgroundColor: "var(--brand-blue)",
                                color: "white",
                              }}
                            >
                              Popular
                            </Badge>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Salsa Column */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h3 className="text-2xl font-bold mb-6 tracking-wide text-foreground uppercase flex items-center gap-2">
                    Salsa
                    <Sparkles
                      className="w-5 h-5"
                      style={{ color: "var(--brand-orange)" }}
                    />
                  </h3>
                  <div className="space-y-3">
                    {sauceTypes.map((sauce, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-lg transition-colors group hover:bg-[var(--muted)]"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: 0.4 + index * 0.05,
                        }}
                        whileHover={{ x: 4 }}
                      >
                        <span className="text-lg text-muted-foreground font-medium group-hover:text-foreground">
                          {sauce.name}
                        </span>
                        <div className="flex gap-2">
                          {sauce.badge && (
                            <Badge
                              variant="secondary"
                              className="text-xs"
                              style={{
                                backgroundColor: "var(--brand-orange)",
                                color: "white",
                              }}
                            >
                              {sauce.badge}
                            </Badge>
                          )}
                          {sauce.popular && (
                            <Badge
                              variant="default"
                              className="text-xs"
                              style={{
                                backgroundColor: "var(--brand-blue)",
                                color: "white",
                              }}
                            >
                              Popular
                            </Badge>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <Separator className="my-8" />

              {/* Pricing Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h3 className="text-xl font-bold mb-6 text-foreground">
                  Precios
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pricing.map((item, index) => (
                    <motion.div
                      key={index}
                      className={`flex justify-between items-center p-4 rounded-lg transition-all ${
                        item.highlight
                          ? "border-2 shadow-md"
                          : "hover:bg-[var(--muted)]"
                      }`}
                      style={
                        item.highlight
                          ? {
                              background:
                                "linear-gradient(to right, color-mix(in oklch, var(--brand-blue) 15%, white), color-mix(in oklch, var(--brand-orange) 20%, white))",
                              borderColor:
                                "color-mix(in oklch, var(--brand-orange) 60%, white)",
                            }
                          : undefined
                      }
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                      whileHover={{ scale: item.highlight ? 1.02 : 1 }}
                    >
                      <span
                        className={`${
                          item.highlight
                            ? "font-bold text-foreground"
                            : "text-muted-foreground"
                        }`}
                      >
                        {item.item}
                      </span>
                      <span
                        className={`${
                          item.highlight
                            ? "text-2xl font-bold"
                            : "text-lg font-semibold"
                        }`}
                        style={
                          item.highlight ? { color: "var(--brand-blue)" } : {}
                        }
                      >
                        {item.price}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <Separator className="my-8" />

              {/* Images Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <h3 className="text-xl font-bold mb-6 text-foreground">
                  Nuestros Platos
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {menuImages.map((image, index) => (
                    <motion.div
                      key={index}
                      className="aspect-square rounded-xl overflow-hidden shadow-md"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.05, rotate: 2 }}
                    >
                      <ImageWithFallback
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <p className="text-muted-foreground mb-6 text-lg">
            Cada plato está preparado al momento con ingredientes frescos de la
            mejor calidad
          </p>
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <motion.span
              className="w-8 h-px bg-[var(--border)]"
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 }}
            />
            <span className="text-sm uppercase tracking-wider font-medium">
              140 gramos perfectos
            </span>
            <motion.span
              className="w-8 h-px bg-[var(--border)]"
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
