import React from "react";
import Button from "./Button";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import "../styles/components/Blog.scss";
import { FaHandsHelping, FaWhatsapp } from "react-icons/fa";
import { MdHelp, MdMessage } from "react-icons/md";
import { BiMessage, BiMessageAdd } from "react-icons/bi";

function Blog({ image, title, subTitle, variants, animate }) {
  return (
    <motion.div
      className="blog-container"
      variants={variants}
      animate={animate}
    >
      <div className="image">
        <img src={image} alt="Blog" />
      </div>
      <div className="content">
        <div className="title">
          <h3>{title}</h3>
        </div>
        <div className="subTitle">
          <p>{subTitle}</p>
        </div>
        <form action="https://wa.me/50683149394" target="_blank">
        <Button
          content="Contactar"
          color="inverse"
          icon={<FaWhatsapp />}
        />
        </form>
      </div>
    </motion.div>
  );
}

export default Blog;
