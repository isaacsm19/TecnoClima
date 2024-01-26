import React from "react";
import Title from "../components/Title";
import Testimonial from "../components/Testimonial";
import { useScroll } from "../components/useScroll";
import { motion } from "framer-motion";
import "../styles/sections/Testimonials.scss";
import { textAnimation, cardAnimation } from "../utils/Animations";

export default function Testimonials() {
  const [element, controls] = useScroll();

  return (
    <div className="testimonials-container" id="testimonial" ref={element}>
      <div className="container">
        <motion.div
          className="title-container"
          variants={textAnimation}
          animate={controls}
          transition={{
            duration: 1,
          }}
        >
          <Title title="Clientes" color="blue" lineCenter={true} />
          <p>Reseñas</p>
        </motion.div>
        <div className="testimonials">
          <Testimonial
          
            content="Cada trabajo que han realizado en mi campo de trabajo ha sido con excelencia y eficiencia."
            name="Sheiry Laitano"
            designation="The Retreat - Gerente Mantenimiento"
            variants={cardAnimation}
            animate={controls}
          />
          <Testimonial
            content="Un servicio de calidad, por nuestro tipo de empresa necesitamos eficacia y eficiencia, es por eso que buscamos a Tecnoclima porque nos brinda ese buen servicio que los caracteriza."
            name="Stephannie Jiménez "
            designation="Doctora"
            variants={cardAnimation}
            animate={controls}
          />
          <Testimonial
            content="Tecnoclima es una empresa muy seria y responsable, con un excelente servicio al cliente, y comprometida con los proyectos."
            name="Marcela Amen Muñoz"
            designation="Arquitecta"
            variants={cardAnimation}
            animate={controls}
          />
        </div>
      </div>
    </div>
  );
}
