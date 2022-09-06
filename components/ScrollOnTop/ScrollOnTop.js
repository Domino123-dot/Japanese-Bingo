import { React, useState, useEffect } from "react";
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../ScrollOnTop/ScrollOnTop.module.scss";
import clsx from "clsx";

const ScrollOnTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setShowTopBtn(true);
        console.log(window.scrollY);
      } else if (window.scrollY <= 700) {
        setShowTopBtn(false);
      } else {
        setShowTopBtn(false);
      }
    });
  });

  return (
    <>
      <FontAwesomeIcon
        className={clsx(showTopBtn ? styles.ScrollUp : styles.DisabledScrollUp)}
        icon={faCircleUp}
        onClick={() => scrollTo(0, 0)}
      />
    </>
  );
};

export default ScrollOnTop;
