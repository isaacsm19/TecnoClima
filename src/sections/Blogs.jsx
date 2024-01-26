import React from "react";
import Blog from "../components/Blog";
import Button from "../components/Button";
import Title from "../components/Title";
import { useScroll } from "../components/useScroll";
import { motion } from "framer-motion";
import BlogImage1 from "../assets/blogImage1.jpg";
import BlogImage2 from "../assets/blogImage2.jpg";
import BlogImage3 from "../assets/blogImage3.jpg";
import "../styles/sections/Blogs.scss";
import { textAnimation, cardAnimation } from "../utils/Animations";

function Blogs() {
  const [element, controls] = useScroll();

  return (
    <div className="blogs-container" id="blog" ref={element}>
      <div className="container">
        <motion.div
          className="title-container"
          variants={textAnimation}
          animate={controls}
          transition={{ duration: 1 }}
        >
          <Title title="Proyectos" color="blue" lineCenter={true} />
          <p>Proyectos realizados por TecnoClima.</p>
        </motion.div>
        <div className="blogs">
          <Blog
            image={BlogImage1}
            title="Proyecto1"
            subTitle="Descripción"
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            image={BlogImage2}
            title="Proyecto2"
            subTitle="Descripción"
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            image={BlogImage3}
            title="Proyecto3"
            subTitle="Descripción"
            variants={cardAnimation}
            animate={controls}
          />
        </div>
        <div
          className="button-container"
          variants={textAnimation}
          animate={controls}
        >
          <form action="https://instagram.com/tecnoclimacr?utm_medium=copy_link" target="_blank">
            <Button content="Ver más" />
            </form>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
