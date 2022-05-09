import React from "react";
import Header from "../../components/header/header";
import Button from "../../components/button/button";
import styles from "../kana/kana.module.scss";
import Layout from "../../components/layout/layout";
const kana = () => {
  return (
    <>
      <Layout>
        <Header title="Practice kana">
          In this section you can practice your kana knowlege, you can choose
          between japanese hiragana, katakana their combinations or you can
          select all kana where you'll be able to quiz yourself from literally
          everything (except for kanji).
        </Header>

        <div className={styles.buttons}>
          <Button href="/Hiragana" style={styles.button}>
            Hiragana <br />
            （ひらがな）
          </Button>
          <Button href="/Katakana" style={styles.button}>
            Katakana
            <br /> （カタカナ）
          </Button>
          <Button href="/Both" style={styles.button}>
            Hiragana and Katakana <br />
            （ひらがなとカタカナ）
          </Button>
        </div>
      </Layout>
    </>
  );
};

export default kana;
