import React from "react";
import Header from "../components/header/header";
import styles from "../style/index.module.scss";
import Line from "../components/line";
import Footer from "../components/footer/footer.js";
import Button from "../components/button/button";
export default function Home() {
  return (
    <>
      <Header />

      <div className={styles.buttons}>
  <Button href="/kana">Practice kana</Button>
 <Button href="#writing">Practice writing using kana</Button>

 
      </div>
      
      <Line />
      <Footer />
    </>
  );
}
