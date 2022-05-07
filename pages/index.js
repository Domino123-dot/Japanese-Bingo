import React from "react";
import Header from "../components/header/header";
import styles from "../style/index.module.scss";
import Line from "../components/line";
import Footer from "../components/footer/footer.js";
import Button from "../components/button/button";

export default function Home() {
  return (
    <>
     <Header title="Japanese kana quiz!"> 
         Free to use japanese kana quiz, you can practice your Hiragana and Katakana 
         knowlege in "Practice kana" section of this website, on the other hand I present to you "Practice writing"
         where you can practice your kana knowlege by writing whole words, enjoy!</Header>
      <div className={styles.buttons}>
  <Button style={styles.button} href="/kana">Practice kana</Button>
 <Button style={styles.button} href="#writing">Practice writing using kana</Button>

 
      </div>
      
      <Line />
      <Footer />
    </>
  );
}
