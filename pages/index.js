import React from "react";
import styles from "../style/index.module.scss";
import Button from "../components/button/button";
import Layout from "../components/layout/layout";
import Line from "../components/line";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-regular-svg-icons";
import Icon from "../components/icon/icon";
export default function Home() {
  return (
    <>
      <Layout>
        <div className={styles.header}>
          <div className={styles.head}>Japanese kana quiz</div>
          <div className={styles.line}>
            <Line color="#241f1f" margin="1% 30% 0 30%" />
          </div>
          <div className={styles.desc}>
            <h2>
              Welcome on my Japanese quiz project! On this website you'll be
              able to test your hiragana and Katakana knowlege! Feel free to
              give me a feedback and have fun!
            </h2>
          </div>
        </div>
        <div className={styles.flexbox}>
          <Button href="/kana" style={styles.button}>
            <div className={styles.icon}>
              {" "}
              <Icon icon={faLanguage} />
            </div>
            Kana Quiz Categories
          </Button>{" "}
          <br />
          <Button isDisabled={true} href="/Katakana" style={styles.buttonDisabled}>
            <div className={styles.icon}>
              {" "}
              <Icon icon={faComments} />{" "}
            </div>
            I'll enjoy your feedback!
          </Button>{" "}
        </div>
      </Layout>
    </>
  );
}
