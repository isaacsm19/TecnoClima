import React from "react";
import BrandName from "../components/BrandName";
import { useScroll } from "../components/useScroll";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { AiFillInstagram, AiFillLinkedin, AiOutlineSend } from "react-icons/ai";
import { motion } from "framer-motion";
import "../styles/sections/Footer.scss";
import { fromUp, fromDown } from "../utils/Animations";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const [element, controls] = useScroll();

  return (
    <div className="footer-container" ref={element}>
      <div className="container">
        <div className="main-container">
          <motion.div
            className="news-letter"
            variants={fromUp}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <BrandName isFooter={true} />
            <p>
              Nos acomodamos a tus necesidades
            </p>
            
          </motion.div>
          <motion.div
            className="quick-links"
            variants={fromDown}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <h3>Enlaces Rápidos</h3>
            <ul>
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="#about">Sobre Nosotros</a>
              </li>
              <li>
                <a href="#services">Servicios</a>
              </li>
              <li>
                <a href="#testimonial">Clientes</a>
              </li>
              <li>
                <a href="#blog">Proyectos</a>
              </li>
              <li>
                <a href="https://wa.me/50683149394" target="_blank">Contactar</a>
              </li>
             
            </ul>
          </motion.div>
          <motion.div
            className="industries"
            variants={fromUp}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <h3>Servicios</h3>
            <ul>
              <li>
                <a>Aire Acondicionado Residencial</a>
              </li>
              <li>
                <a>Aire Acondicionado Comercial</a>
              </li>
              <li>
                <a>Refrigeración Comercial</a>
              </li>
              <li>
                <a>Refrigeración Doméstica</a>
              </li>
              <li>
                <a>Refrigeración Industrial</a>
              </li>
             
            </ul>
          </motion.div>
          <motion.div
            className="touch"
            variants={fromDown}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <h3>Contáctanos</h3>
            <div className="touch-section">
              <div className="icon">
                <MdEmail />
              </div>
              <div className="detail">
                <div className="detail-name">Correo</div>
                <div className="detail-content">
                  <a>martinretana@tecnoclimacr.com</a>
                </div>
              </div>
            </div>
            <div className="touch-section">
              <div className="icon">
                <FaPhoneAlt />
              </div>
              <div className="detail">
                <div className="detail-name">Teléfono</div>
                <div className="detail-content">
                  <a>+506 83149394</a>
                </div>
              </div>
            </div>

            <div className="touch-section">
              <div className="icon">
                <ImLocation />
              </div>
              <div className="detail">
                <div className="detail-name">Ubicación</div>
                <div className="detail-content">
                  <a>Atenas, Aljuela, Costa Rica</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="copyright">
          <div className="copy">
            <p>© 2022 TecnoClima | Diseñada por SG Solutions</p>
          </div>
          <div className="icons">
            <div className="icon">
              <a href="https://www.facebook.com/Tecnoclimacr-384239282024185/" target="_blank">
                <FaFacebookF />
              </a>
            </div>
            <div className="icon">
              <a href="https://instagram.com/tecnoclimacr?utm_medium=copy_link" target="_blank">
                <AiFillInstagram />
              </a>
            </div>
            <div className="icon">
              <a href="https://wa.me/50683149394" target="_blank">
                <FaWhatsapp />
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
