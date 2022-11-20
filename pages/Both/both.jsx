import React, { StrictMode, useEffect, useState } from "react";
import Header from "../../components/header/header";
import styles from "../../pages/Both/both.module.scss";
import Layout from "../../components/layout/layout";
import Backbutton from "../../components/backButton/Backbutton";
import axios from "axios";
import OptionButton from "../../components/OptionButton/OptionButton";
import clsx from "clsx";
const both = () => {
  const [questions, setQuestions] = useState([]);
  const [FirstArray, SetFirtArray] = useState([]);
  const [SecondArray, SetSecondArray] = useState([]);
  const [ThirdArray, SetThirdArray] = useState([]);
  const appearButton = false;

  const getProducts = () => {
    axios.get("http://localhost:8000/api/questions").then((response) => {
      setQuestions(response.data);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  {
    if (FirstArray != 0 || SecondArray != 0 || ThirdArray != 0) {
      appearButton = true;
    }
  }

  function StartGame() {
    console.log("Waiting...");
  }
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
          <div className={styles.kanas}>
            <h1>Main Kana</h1>
            <OptionButton
              onChange={(values) => {
                SetFirtArray(values);
              }}
              options={[
                { text: "a i u e o | あ い う え お", value: "all" },
                { text: "ka ki ku ko | か き く こ", value: "ka/" },
                { text: "sa shi su se so | さ し す せ そ", value: "sa/" },
                { text: " na ni nu ne no | な に ぬ ね の", value: "na/" },
                { text: "ha hi fu he ho | は ひ ふ へ ほ", value: "ha/" },
                { text: "ma mi mu me mo | ま み む め も", value: "ma/" },
                { text: "ya yu yo | や ゆ よ", value: "ya/" },
                { text: "ra ri ru re ro | ら り る れ ろ", value: "ra/" },
                { text: "wa wo n | わ を ん", value: "wa/" },
              ]}
            />
          </div>

          <div className={styles.kanas}>
            <h1>Dakuten</h1>
            <OptionButton
              onChange={(values) => {
                SetSecondArray(values);
              }}
              options={[
                { text: "ga gi gu ge go | が ぎ ぐ げ ご", value: "ga/" },
                { text: "za ji zu ze zo | ざ じ ず ぜ ぞ", value: "za/" },
                { text: "da ji zu de do | だ じ で ど", value: "da/" },
                { text: "ba bi bu be bo | ば び ぶ べ ぼ", value: "ba/" },
                { text: "pa pi pu pe po | ぱ ぴ ぷ ぺ ぽ", value: "pa/" },
              ]}
            />
          </div>
          <div className={styles.kanas}>
            <h1>Combination</h1>
            <OptionButton
              onChange={(values) => {
                SetThirdArray(values);
              }}
              options={[
                { text: "kya | きゃ", value: "kya/" },
                { text: "cha | ちゃ", value: "cha/" },
                { text: "hya |ひゃ", value: "hya/" },
                { text: "rya |りゃ", value: "rya/" },
                { text: "ja |じゃ", value: "ja/" },
                { text: "bya |びゃ", value: "bya/" },
                { text: "sha |しゃ", value: "sha/" },
                { text: "nya |にゃ", value: "nya/" },
                { text: "mya |みゃ", value: "mya/" },
                { text: "gya |ぎゃ", value: "gya/" },
                { text: "dya |ぢゃ", value: "dya/" },
                { text: "pya |ぴゃ", value: "pya/" },
              ]}
            />
          </div>
        </div>

        <div>
          <button
            onClick={StartGame}
            className={clsx(appearButton ? styles.button : styles.buttonDsp)}
          >
            Start!
          </button>
        </div>
      </Layout>
    </>
  );
};

export default both;
