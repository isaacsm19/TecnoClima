import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import React, { useState } from "react";
import { BiArrowFromTop, BiArrowToTop, BiUpArrow } from "react-icons/bi";
import { FaArrowAltCircleUp, FaArrowUp, FaInstagram, FaWhatsapp, FaFacebook, FaLink } from "react-icons/fa";
import { HiArrowNarrowUp } from "react-icons/hi";
import { ImArrowUp2 } from "react-icons/im";
import "../styles/components/Socials.scss";

const Socials = () => {
  return (

    <div class="fv-sbuttons-main">
		<a href="https://www.facebook.com/Tecnoclimacr-384239282024185/" class="fv-sbutton"
			target="_blank"><i class="FaInstagram"><FaFacebook /></i></a><a href="https://instagram.com/tecnoclimacr?utm_medium=copy_link" class="fv-sbutton"
			target="_blank"><i class="FaInstagram"><FaInstagram /></i></a><a href="https://wa.me/50683149394" class="fv-sbutton"
			target="_blank"><i class="FaInstagram"><FaWhatsapp /></i></a>
		<a target="_blank" class="fv-sbutton"><i class="FaInstagram"><FaLink /></i></a>
	</div>

    


  );
}

export default Socials;