import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/header/header";
import styles from "../../pages/Both/both.module.scss";
import Layout from "../../components/layout/layout";
import Backbutton from "../../components/backButton/Backbutton";
import axios from "axios";
import OptionButton from "../../components/OptionButton/OptionButton";

const both = () => {
  const [questions, setQuestions] = useState([]);
  const [firstQuestionPool, setFirstQuestionPool] = useState([]);
  const [secondQuestionPool, setSecondQuestionPool] = useState([]);
  const [thirdQuestionPool, setThirdQuestionPool] = useState([]);
  const [showFinishButton, setShowFinishButton] = useState(false);
  const [pool, setPool] = useState([]);
  const appearButton = false;
  const [startClicked, setStartClicked] = useState(false);
  const selectedItems = [pool];
  const [correctAnswer, setCorrectAnswer] = useState([]);
  const [wrongAnswer, setWrongAnswer] = useState([]);
  const isDisabled = useRef(null);
  const [correctAnswerPoints, setCorrectAnswerPoints] = useState(1);
  const [maxPoints, setMaxPoints] = useState(1);
  const [finishGame , setFinishGame] = useState(false);

  const getProducts = () => {
    axios.get("http://localhost:8000/api/questions").then((response) => {
      setQuestions(response.data);
    });
  };

  useEffect(() => {
    getProducts({});

  }, [startClicked]);

  {
    if (
      firstQuestionPool.length > 0 ||
      secondQuestionPool.length > 0 ||
      thirdQuestionPool.length > 0
    ) {
      appearButton = true;
    }
  }

  function StartGame() {
    setPool((pool) => [
      ...pool,
      ...firstQuestionPool,
      ...secondQuestionPool,
      ...thirdQuestionPool,
    ]);
    setStartClicked(true);
  }

  function FinishGame() {

    setFinishGame(true);
    console.log(finishGame)

  }

  return (
    <>
      <React.StrictMode>
 

        <Layout>
        <Backbutton />
          <Header title="Practice kana">
            In this section you can practice your kana knowlege, you can choose
            between japanese hiragana, katakana their combinations or you can
            select all kana where you'll be able to quiz yourself from literally
            everything (except for kanji).
          </Header>

          

          <div
            className={
              startClicked ? styles.flexboxDissapeared : styles.flexbox
            }
          >
            
            <div className={styles.kanas}>
              <h1>Main Kana</h1>
              <OptionButton
                onChange={(values) => {
                  setFirstQuestionPool(values);
                }}
                options={[
                  {
                    text: "a i u e o | あ い う え お",
                    value: "a/",
                    maxPointsToGet: 5,
                  },
                  {
                    text: "ka ki ku ko | か き く こ",
                    value: "ka/",
                    maxPointsToGet: 4,
                  },
                  {
                    text: "sa shi su se so | さ し す せ そ",
                    value: "sa/",
                    maxPointsToGet: 5,
                  },
                  {
                    text: " na ni nu ne no | な に ぬ ね の",
                    value: "na/",
                    maxPointsToGet: 5,
                  },
                  {
                    text: "ha hi fu he ho | は ひ ふ へ ほ",
                    value: "ha/",
                    maxPointsToGet: 5,
                  },
                  {
                    text: "ma mi mu me mo | ま み む め も",
                    value: "ma/",
                    maxPointsToGet: 5,
                  },
                  {
                    text: "ya yu yo | や ゆ よ",
                    value: "ya/",
                    maxPointsToGet: 3,
                  },
                  {
                    text: "ra ri ru re ro | ら り る れ ろ",
                    value: "ra/",
                    maxPointsToGet: 5,
                  },
                  {
                    text: "wa wo n | わ を ん",
                    value: "wa/",
                    maxPointsToGet: 3,
                  },
                ]}
              />
            </div>

            <div className={styles.kanas}>
              <h1>Dakuten</h1>
              <OptionButton
                onChange={(values) => {
                  setSecondQuestionPool(values);
                }}
                options={[
                  {
                    text: "ga gi gu ge go | が ぎ ぐ げ ご",
                    value: "ga/",
                    maxPointsToGet: 5,
                  },
                  {
                    text: "za ji zu ze zo | ざ じ ず ぜ ぞ",
                    value: "za/",
                    maxPointsToGet: 5,
                  },
                  {
                    text: "da ji zu de do | だ じ で ど",
                    value: "da/",
                    maxPointsToGet: 4,
                  },
                  {
                    text: "ba bi bu be bo | ば び ぶ べ ぼ",
                    value: "ba/",
                    maxPointsToGet: 5,
                  },
                  {
                    text: "pa pi pu pe po | ぱ ぴ ぷ ぺ ぽ",
                    value: "pa/",
                    maxPointsToGet: 5,
                  },
                ]}
              />
            </div>
            <div className={styles.kanas}>
              <h1>Combination</h1>
              <OptionButton
                onChange={(values) => {
                  setThirdQuestionPool(values);
                }}
                options={[
                  { text: "kya | きゃ", value: "kya/", maxPointsToGet: 3 },
                  { text: "cha | ちゃ", value: "cha/", maxPointsToGet: 3 },
                  { text: "hya |ひゃ", value: "hya/", maxPointsToGet: 3 },
                  { text: "rya |りゃ", value: "rya/", maxPointsToGet: 3 },
                  { text: "ja |じゃ", value: "ja/", maxPointsToGet: 3 },
                  { text: "bya |びゃ", value: "bya/", maxPointsToGet: 3 },
                  { text: "sha |しゃ", value: "sha/", maxPointsToGet: 3 },
                  { text: "nya |にゃ", value: "nya/", maxPointsToGet: 3 },
                  { text: "mya |みゃ", value: "mya/", maxPointsToGet: 3 },
                  { text: "gya |ぎゃ", value: "gya/", maxPointsToGet: 3 },
                  { text: "dya |ぢゃ", value: "dya/", maxPointsToGet: 3 },
                  { text: "pya |ぴゃ", value: "pya/", maxPointsToGet: 3 },
                ]}
              />
            </div>
          </div>

          <div
            className={
              startClicked ? styles.QuizFlexbox : styles.flexboxDissapeared
            }
          >
            <div className={finishGame ? styles.blurAppear : styles.blurDsp}></div>
              <div className={finishGame ? styles.finishBoxAppear : styles.finishBoxDsp}>TEST</div>

            {questions

              .filter(
                (question) =>
                  pool.includes(question.category) &&
                  question.is_active === true
              )

              .map((question) => {
             
                return (
                  <div
                    key={question.pk}
                    className={
                      correctAnswer.includes(question.pk)
                        ? styles.menuCorrect
                        : wrongAnswer.includes(question.pk)
                        ? styles.menuWrong
                        : styles.menu
                    }
                  >
                    {question.question}

                    <input
                      onBlur={(e) => {
                        const answer = "";
                        answer = e.target.value.toLowerCase();

                        if (answer.length > 0) {
                          setShowFinishButton(true);

                          if (answer === question.good_answer) {
                            setCorrectAnswer([...correctAnswer, question.pk]);
                            setCorrectAnswerPoints(correctAnswerPoints + 1);
                          } else if (answer != question.good_answer) {
                            setWrongAnswer([...wrongAnswer, question.pk]);
                          }
                        }
                      }}
                      key={question.pk}
                      className={
                        correctAnswer.includes(question.pk)
                          ? styles.inputCorrect
                          : wrongAnswer.includes(question.pk)
                          ? styles.inputWrong
                          : styles.input
                      }
                      spellCheck="false"
                      type="text"
                      autoComplete="off"
                      disabled={
                        correctAnswer.includes(question.pk) ? true : false
                      }
                    ></input>
                  </div>
                );
              })}
          </div>
          <button
            className={showFinishButton ? styles.button : styles.buttonDsp}
            onClick={FinishGame}
          >
            Finish
          </button>

          <div className={startClicked ? styles.flexboxDissapeared : null}>
            <button
              onClick={StartGame}
              className={appearButton ? styles.button : styles.buttonDsp}
            >
              Start!
            </button>
          </div>
        </Layout>
      </React.StrictMode>
    </>
  );
};

export default both;
