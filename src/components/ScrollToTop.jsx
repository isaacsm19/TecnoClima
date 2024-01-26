import React, { useState } from "react";
import { BiArrowFromTop, BiArrowToTop, BiUpArrow } from "react-icons/bi";
import { FaArrowAltCircleUp, FaArrowUp } from "react-icons/fa";
import { HiArrowNarrowUp } from "react-icons/hi";
import { ImArrowUp2 } from "react-icons/im";
import "../styles/components/ScrollToTop.scss";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  window.addEventListener("scroll", toggleVisible);
  return (
    <>
      {visible && (
        <div className="scrollToTop" onClick={scrollToTop}>
          <ImArrowUp2 />
        </div>
      )}
    </>
  );
}

export default ScrollToTop;
