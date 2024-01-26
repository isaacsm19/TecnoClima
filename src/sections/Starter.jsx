import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { useScroll } from "../components/useScroll";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { GoPlay } from "react-icons/go";
import { motion } from "framer-motion";
import WorkImage from "../assets/work.png";
import "../styles/sections/Starter.scss";
import { headerAnimation, imageAnimation } from "../utils/Animations";
import { MdMessage, MdPhone, MdPhoneAndroid, MdSend } from "react-icons/md";
import { FaHandsHelping, FaWhatsapp } from "react-icons/fa";
import { BiMessage, BiMessageAdd } from "react-icons/bi";

export default function Starter() {
  const [element, controls] = useScroll();

  return (
    <div className="main-container" ref={element}>
      <Navbar />
      <div className="container">
        <motion.div
          className="content"
          variants={headerAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}
        >
          <h1>
          Nos acomodamos a tus necesidades
          </h1>
          <p>
            Refrigeración y aire acondicionado
          </p>
          <div className="button-container">
          <form action="https://wa.me/50683149394" target="_blank">
            <Button content="Contáctanos" icon={<FaWhatsapp/>} /></form>
            <form action="#services">
            <Button
              color="pink"
              content="Servicios"
              icon={<HiOutlineArrowNarrowRight />}
            />
            </form>
          </div>
        </motion.div>
        <motion.div
          className="image"
          variants={imageAnimation}
          animate={controls}
          transition={{ type: "tween" }}
        >
          <img src={WorkImage} alt="Work Image" />
        </motion.div>
      </div>
    </div>
  );
}
