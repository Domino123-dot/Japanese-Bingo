import React from "react";
import Header from "../../components/header/header";
import Button from "../../components/button/button";
import styles from "../kana/kana.module.scss";
import Layout from "../../components/layout/layout";
import Backbutton from "../../components/backButton/Backbutton";
import Icon from "../../components/icon/icon";
import { faEgg, faRotate, faIceCream } from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
const kana = () => {
  return (
    <>
      <Backbutton />
      <Layout>
        <Header title="Practice kana">
          In this section you can practice your kana knowlege, you can choose
          between japanese hiragana, katakana their combinations or you can
          select all kana where you'll be able to quiz yourself from literally
          everything (except for kanji).
        </Header>

        <div className={styles.flexbox}>
          <Button isDisabled={true} href="/Hiragana" style={styles.buttonDisabled}>
            <div className={styles.iconDisabled}>
              {" "}
              <Icon icon={faEgg} />
            </div>
            Newbie Friendly Quiz
          </Button>{" "}
          <br />
          <Button isDisabled={true} href="/Katakana" style={styles.buttonDisabled}>
            <div className={styles.iconDisabled}>
              {" "}
              <Icon icon={faRotate} />{" "}
            </div>
            Friendly Quiz (Reverse)
          </Button>{" "}
          <br />
          <Button href="/Both" style={styles.button}>
            <div className={styles.icon}>
              {" "}
              <Icon icon={faIceCream} />{" "}
            </div>
            Vanilla Kana Quiz
          </Button>
        </div>
      </Layout>
    </>
  );
};

export default kana;
