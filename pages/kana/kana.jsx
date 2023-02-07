import React from "react";
import Header from "../../components/header/header";
import Button from "../../components/button/button";
import styles from "../kana/kana.module.scss";
import Layout from "../../components/layout/layout";
import Backbutton from "../../components/backButton/Backbutton";
import Icon from "../../components/icon/icon";
import { faFaceTired } from "@fortawesome/free-solid-svg-icons";
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
          <Button href="/Hiragana" style={styles.button}>
            <Icon icon={faFaceTired} />
            Hiragana <br />
            （ひらがな）
          </Button>
          <Button href="/Katakana" style={styles.button}>
          Quess Kana (Intermediate)
          </Button>
          <Button href="/Both" style={styles.button}>
           Quess Kana (Hard)
          </Button>
        </div>
      </Layout>
    </>
  );
};

export default kana;
