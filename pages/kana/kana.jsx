import React from "react";
import Header from "../../components/header/header";
import Button from "../../components/button/button";
import styles from "../kana/kana.module.scss";
import Layout from "../../components/layout/layout";
import Backbutton from "../../components/backButton/Backbutton";
import Icon from "../../components/icon/icon";
import { faEgg, faRotate, faIceCream } from "@fortawesome/free-solid-svg-icons";
const kana = () => {
  return (
    <>
      <Backbutton />
      <Layout>
        <Header title="Practice kana">
          Best I can do for you at this moment is some simple memory
          hiragana&katakana quiz called "Vanilla", some people will be familiar
          with that type of quiz, that's why it's "Vanilla" in my opinion, who
          knows what time will bring us behind those 2 other buttons... have
          fun! Even it's not that much to do in here...
        </Header>

        <div className={styles.flexbox}>
          <Button href="/Both" style={styles.button}>
            <div className={styles.icon}>
              {" "}
              <Icon icon={faIceCream} />{" "}
            </div>
            Vanilla kana chart quiz
          </Button>
          <br />
          <Button isDisabled={true} href="/" style={styles.buttonDisabled}>
            <div className={styles.iconDisabled}>
              {" "}
              <Icon icon={faEgg} />
            </div>
            Cooming soon!
          </Button>{" "}
          <br />
          <Button isDisabled={true} href="/" style={styles.buttonDisabled}>
            <div className={styles.iconDisabled}>
              {" "}
              <Icon icon={faRotate} />{" "}
            </div>
            Cooming soon!
          </Button>{" "}
          <br />
        </div>
      </Layout>
    </>
  );
};

export default kana;
