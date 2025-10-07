"use client";

import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./image-with-fallback";
import { Heart, Users, Award, Clock, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export function About() {
  const stats = [
    {
      icon: Heart,
      number: "140g",
      label: "Porción perfecta",
      description: "Cada plato está calculado para la satisfacción ideal",
    },
    {
      icon: Users,
      number: "1000+",
      label: "Clientes felices",
      description: "Familias que confían en nosotros cada día",
    },
    {
      icon: Award,
      number: "4.9★",
      label: "Calificación",
      description: "Reconocidos por la calidad y sabor auténtico",
    },
    {
      icon: Clock,
      number: "10min",
      label: "Tiempo promedio",
      description: "Comida rápida sin sacrificar la calidad",
    },
  ];

  const values = [
    {
      title: "Ingredientes Frescos",
      description: "Importamos los mejores productos directamente de Italia",
    },
    {
      title: "Preparación Artesanal",
      description:
        "Cada plato es preparado al momento con técnicas tradicionales",
    },
    {
      title: "Servicio Rápido",
      description: "Comida de calidad lista en menos de 15 minutos",
    },
  ];

  return (
    <section
      id="nosotros"
      className="py-20"
      style={{ backgroundColor: "var(--brand-white)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Badge
                variant="secondary"
                className="mb-4"
                style={{
                  backgroundColor: "var(--brand-yellow)",
                  color: "var(--brand-blue)",
                }}
              >
                Nuestra Historia
              </Badge>
            </motion.div>

            <motion.h2
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span style={{ color: "var(--brand-blue)" }}>Pasión</span>{" "}
              <span className="text-gray-800">Italiana</span>
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Nacimos de la pasión por llevar los auténticos sabores de Italia a
              tu mesa, pero adaptados al ritmo de vida moderno. Nuestro nombre,{" "}
              <strong>140gramos</strong>, representa la porción perfecta:
              suficiente para satisfacer, ideal para disfrutar.
            </motion.p>

            <motion.p
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Cada receta ha sido cuidadosamente desarrollada por nuestros
              chefs, quienes combinan técnicas tradicionales italianas con la
              eficiencia de la comida rápida, sin comprometer jamás la calidad
              ni el sabor.
            </motion.p>

            <div className="space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  whileHover={{ x: 4 }}
                >
                  <CheckCircle2
                    className="w-6 h-6 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--brand-yellow)" }}
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {value.title}
                    </h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1659354218430-ac7f0b31e977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjByZXN0YXVyYW50JTIwa2l0Y2hlbiUyMGNoZWZ8ZW58MXx8fHwxNzU5ODI2MTMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Chef preparando comida italiana fresca"
                className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-3xl" />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
            >
              <Card className="text-center p-6 border-0 shadow-md hover:shadow-xl transition-all">
                <CardContent className="p-0">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <stat.icon
                      className="h-12 w-12 mx-auto mb-3"
                      style={{ color: "var(--brand-blue)" }}
                    />
                  </motion.div>
                  <div
                    className="text-3xl font-bold mb-2"
                    style={{ color: "var(--brand-blue)" }}
                  >
                    {stat.number}
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {stat.label}
                  </h4>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
