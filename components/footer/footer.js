import React from "react";
import styles from "../footer/footer.module.scss";
import Line from "../line";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <Line color="#241f1f" margin="20% 5% 0 5%" />
      Project made by me. Feel free to contact via e-mail if you have any
      questions <a className={styles.a}href="mailto:pl.kubakot@gmail.com">pl.kubakot@gmail.com.</a>
    </div>
  );
};

export default Footer;
