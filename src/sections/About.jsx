import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Title from "../components/Title";
import { useScroll } from "../components/useScroll";
import { HiLightBulb } from "react-icons/hi";
import { BsFillCalendarFill, BsHammer } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { SiGooglemessages, SiTalend } from "react-icons/si";
import { motion } from "framer-motion";
import "../styles/sections/About.scss";
import { reveal } from "../utils/Animations";
import { GiAutoRepair, GiHammerNails, GiSellCard } from "react-icons/gi";
import { AiOutlineBorderVerticle } from "react-icons/ai";
import { FaHandsHelping } from "react-icons/fa";

function About() {
  const [element, controls] = useScroll();

  return (
    <div className="about-container" id="about" ref={element}>
      <div className="container">
        <motion.div
          className="details"
          initial="hidden"
          animate="show"
          animate={controls}
          variants={reveal}
          transition={{ delay: 0.1, stiffness: 300 }}
        >
          <Title title="Sobre Nosotros" color="blue" />
          <p>
          Aire acondicionado 
          </p>
          <p>
          Refrigeración
          </p>
          <form action="https://wa.me/50683149394" target="_blank">
          <Button content="Contáctanos" />
          </form>
        </motion.div>
        <div className="cards" ref={element}>
          <Card
            title="Instalación"
            logo={<GiHammerNails />}
            animateCustom={controls}
          />
          <Card
            title="Reparación"
            logo={<GiAutoRepair />}
            animateCustom={controls}
          />
          <Card
            title="Venta"
            logo={<GiSellCard />}
            animateCustom={controls}
          />
          <Card
            title="Asesoramiento"
            logo={<FaHandsHelping />}
            animateCustom={controls}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
