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
          In this section you can practice your kana knowledge. You can choose
          between japanese Hiragana, Katakana their combinations or you can
          select all kana where you'll be able to quiz yourself from literally
          everything (except for kanji).
        </Header>

        <div className={styles.flexbox}>
        <Button href="/Both" style={styles.button}>
            <div className={styles.icon}>
              {" "}
              <Icon link={"/Both"} icon={faIceCream} />{" "}
            </div>
            Vanilla kana chart quiz
          </Button>
          <br />
          <Button isDisabled={true} href="/" style={styles.buttonDisabled}>
            <div className={styles.iconDisabled}>
              {" "}
              <Icon link={"/"} icon={faEgg} />
            </div>
            Cooming soon!
          </Button>{" "}
          <br />
          <Button isDisabled={true} href="/" style={styles.buttonDisabled}>
            <div className={styles.iconDisabled}>
              {" "}
              <Icon link={"/"} icon={faRotate} />{" "}
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
