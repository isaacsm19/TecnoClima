import React, { useState } from "react";
import Button from "./Button";
import BrandName from "./BrandName";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import "../styles/components/Navbar.scss";
import { navbarAnimation } from "../utils/Animations";

export default function Navbar() {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const navbarToggler = () => {
    setToggleNavbar(!toggleNavbar);
  };
  return (
    <motion.div
      className={`navbar ${toggleNavbar === true ? "active" : ""}`}
      variants={navbarAnimation}
      transition={{ delay: 0.1 }}
    >
      <div className="col">
        <BrandName />
        <div className="collapseble-button">
          {!toggleNavbar ? (
            <GiHamburgerMenu onClick={navbarToggler} />
          ) : (
            <MdClose onClick={navbarToggler} />
          )}
        </div>
      </div>
      <nav>
        <div className="links">
          <ul>
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
            <form action="https://wa.me/50683149394" target="_blank">
              <Button content="Contactar" />
              </form>
            </li>
          </ul>
        </div>
      </nav>
    </motion.div>
  );
}
