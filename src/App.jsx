import React from "react";
import Testimonials from "./sections/Testimonials";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Starter from "./sections/Starter";
import Why from "./sections/Why";
import Blogs from "./sections/Blogs";
import ScrollToTop from "./components/ScrollToTop";
import Socials from "./components/Socials";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div initial="hidden" animate="show">
      <ScrollToTop />
      <Socials />
      <Starter />
      <About />
      <Why />
      <Testimonials />
      <Blogs />
      <Footer />
    </motion.div>
  );
}

export default App;
