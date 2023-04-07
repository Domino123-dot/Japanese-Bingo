import React, { useEffect, useState } from "react";
import Header from "../../components/header/header";
import styles from "../../pages/Both/both.module.scss";
import Layout from "../../components/layout/layout";
import Backbutton from "../../components/backButton/Backbutton";
import axios from "axios";
import OptionButton from "../../components/OptionButton/OptionButton";
import Button from "../../components/button/button";
import Line from "../../components/line";

const States = {
  init: "init",
  progress: "progress",
  finished: "finished",
};

const SumbitQuiz = ({ maxPointsToGet, pointsPlayerGot}) => {
  const scorePercent = 0;
  scorePercent = (pointsPlayerGot / maxPointsToGet) * 100;
  const title = "";

  {
    if (scorePercent <= 20) {
      title = "Meh....";
    } else if (scorePercent >= 20 && scorePercent < 80) {
      title = "Pretty Good!";
    } else if (scorePercent >= 80 && scorePercent < 100) {
      title = "Almost got it all!";
    } else if (scorePercent === 100) {
      title = "Congrats! Got it all!";
    } else {
      title = "!ERROR!";
    }
  }

  return (
    <>
      <div className={styles.blurAppear} />
      <div className={styles.finishBoxAppear}>
        <div className={styles.header}>{title}</div>
        <div className={styles.bottomText}>
          You got {pointsPlayerGot} out of {maxPointsToGet} questions! <br />
          Your score : {scorePercent.toFixed(0)}%
        </div>
        <div className={styles.backButtonFinal}>
          <Button href="/" style={styles.buttonBackScore}>
            Back
          </Button>
        </div>
      </div>
    </>
  );
};

const QuestionSelect = ({ questions }) => {
  const [firstQuestionPool, setFirstQuestionPool] = useState([]);
  const [secondQuestionPool, setSecondQuestionPool] = useState([]);
  const [thirdQuestionPool, setThirdQuestionPool] = useState([]);
  const [fourthQuestionPool, setFourthQuestionPool] = useState([]);
  const [fifthQuestionPool, setFifthQuestionPool] = useState([]);
  const [sixthQuestionPool, setSixthQuestionPool] = useState([]);
  const [pool, setPool] = useState([]);

  const appearButton =
    firstQuestionPool.length +
      secondQuestionPool.length +
      thirdQuestionPool.length +
      fourthQuestionPool.length +
      fifthQuestionPool.length +
      sixthQuestionPool.length >
    0;

  useEffect(() => {
    setPool([
      ...firstQuestionPool,
      ...secondQuestionPool,
      ...thirdQuestionPool,
      ...fourthQuestionPool,
      ...fifthQuestionPool,
      ...sixthQuestionPool,
    ]);
  }, [
    firstQuestionPool,
    secondQuestionPool,
    thirdQuestionPool,
    fourthQuestionPool,
    fifthQuestionPool,
    sixthQuestionPool,
  ]);

  return (
    <>
      <div className={styles.flexbox}>
        <div className={styles.header}>
          Hiragana
          <Line color="#241f1f" margin="1% 30% 0 30%" />
        </div>

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
              },
              {
                text: "ka ki ku ko | か き く こ",
                value: "ka/",
              },
              {
                text: "sa shi su se so | さ し す せ そ",
                value: "sa/",
              },
              {
                text: " na ni nu ne no | な に ぬ ね の",
                value: "na/",
              },
              {
                text: "ha hi fu he ho | は ひ ふ へ ほ",
                value: "ha/",
              },
              {
                text: "ma mi mu me mo | ま み む め も",
                value: "ma/",
              },
              {
                text: "ya yu yo | や ゆ よ",
                value: "ya/",
              },
              {
                text: "ra ri ru re ro | ら り る れ ろ",
                value: "ra/",
              },
              {
                text: "wa wo n | わ を ん",
                value: "wa/",
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
              },
              {
                text: "za ji zu ze zo | ざ じ ず ぜ ぞ",
                value: "za/",
              },
              {
                text: "da ji zu de do | だ じ で ど",
                value: "da/",
              },
              {
                text: "ba bi bu be bo | ば び ぶ べ ぼ",
                value: "ba/",
              },
              {
                text: "pa pi pu pe po | ぱ ぴ ぷ ぺ ぽ",
                value: "pa/",
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

        <div className={styles.header}>
          Katakana
          <Line color="#241f1f" margin="1% 30% 0 30%" />
        </div>
        <div className={styles.kanas}>
          <h1>Main Kana</h1>
          <OptionButton
            onChange={(values) => {
              setFourthQuestionPool(values);
            }}
            options={[
              {
                text: "a i u e o | ア イ ウ エ オ",
                value: "a/kat",
              },
              {
                text: "ka ki ku ko | カ キ ク ケ コ",
                value: "ka/kat",
              },
              {
                text: "sa shi su se so | サ シ ス セ ソ",
                value: "sa/kat",
              },
              {
                text: " na ni nu ne no | ナ ニ ヌ ネ ノ",
                value: "na/kat",
              },
              {
                text: "ha hi fu he ho | ハ ヒ フ ヘ ホ",
                value: "ha/kat",
              },
              {
                text: "ma mi mu me mo | マ ミ ム メ モ",
                value: "ma/kat",
              },
              {
                text: "ya yu yo | ヤ ユ ヨ ",
                value: "ya/kat",
              },
              {
                text: "ra ri ru re ro | ラ リ ル レ ロ",
                value: "ra/kat",
              },
              {
                text: "wa wo n | ワ ヲ ン",
                value: "wa/kat",
              },
            ]}
          />
        </div>
        <div className={styles.kanas}>
          <h1>Dakuten</h1>
          <OptionButton
            onChange={(values) => {
              setFifthQuestionPool(values);
            }}
            options={[
              {
                text: "ga gi gu ge go | ガ ギ グ ゲ ゴ",
                value: "ga/kat",
              },
              {
                text: "za ji zu ze zo | ザ ジ ズ ゼ ゾ",
                value: "za/kat",
              },
              {
                text: "da ji zu de do | ダ ヂ ヅ デ ド",
                value: "da/kat",
              },
              {
                text: "ba bi bu be bo | バ ビ ブ ベ ボ",
                value: "ba/kat",
              },
              {
                text: "pa pi pu pe po | パ ピ プ ペ ポ",
                value: "pa/kat",
              },
            ]}
          />
        </div>

        <div className={styles.kanas}>
          <h1>Combination</h1>
          <OptionButton
            onChange={(values) => {
              setSixthQuestionPool(values);
            }}
            options={[
              { text: "kya | キャ", value: "kya/kat" },
              { text: "cha | チャ", value: "cha/kat" },
              { text: "hya |ヒャ", value: "hya/kat" },
              { text: "rya |リャ", value: "rya/kat" },
              { text: "ja |ジャ", value: "ja/kat" },
              { text: "bya |ビャ", value: "bya/kat" },
              { text: "sha |シャ", value: "sha/kat" },
              { text: "nya |ニャ", value: "nya/kat" },
              { text: "mya |ミャ", value: "mya/kat" },
              { text: "gya |ギャ", value: "gya/kat" },
              { text: "dya |ヂャ", value: "dya/kat" },
              { text: "pya |ピャ", value: "pya/kat" },
            ]}
          />
        </div>
      </div>

      <button
        onClick={() => {
          questions(pool);
        }}
        className={appearButton ? styles.buttonStart : styles.buttonDsp}
      >
        Start!
      </button>
    </>
  );
};

const Quiz = ({
  questionsPool,
  questions,
  finished,
  answeredPoints,
  pointsToGet,
}) => {
  const [correctAnswer, setCorrectAnswer] = useState([]);
  const [wrongAnswer, setWrongAnswer] = useState([]);
  const [showFinishButton, setShowFinishButton] = useState(false);
  const [goodPoint, setGoodPoint] = useState(0);
  const maxPoints = 0;

  return (
    <>
      <div className={styles.QuizFlexbox}>
        {questions

          .filter(
            (question) =>
              questionsPool.includes(question.category) &&
              question.is_active === true
          )

          .map((question) => {
            if (question.max_points_to_get === 1) {
              maxPoints = maxPoints + 1;
            }
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
                        setGoodPoint(goodPoint + 1);
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
                  disabled={correctAnswer.includes(question.pk) ? true : false}
                ></input>
              </div>
            );
          })}
      </div>

      <button
        className={showFinishButton ? styles.buttonFinish : styles.buttonDsp}
        onClick={() => {
          answeredPoints(goodPoint);
          pointsToGet(maxPoints);
          finished();
        }}
      >
        Finish!
      </button>
    </>
  );
};

const both = () => {
  const [questions, setQuestions] = useState([]);
  const [state, setState] = useState(States.init);
  const [questionPool, setQuestionPool] = useState([]);
  const [correct, setCorrect] = useState(0);
  const [max, setMax] = useState(null);
  useEffect(() => {
    axios.get("https://back-end.e-hiragana.online/api/questions/").then((response) => {
      setQuestions(response.data);
    });
  }, []);

  return (
    <>
      <React.StrictMode>
        <Layout>
          <Backbutton />
          <Header title="Practice kana">
            In this section you can practice your kana knowlege, you can choose
            between japanese Hiragana, Katakana and their combinations or you can
            select all kana where you'll be able to quiz yourself from literally
            everything!
          </Header>

          {state === States.init && (
            <QuestionSelect
              questions={(values) => {
                setQuestionPool(values);
                setState(States.progress);
              }}
            />
          )}

          {state === States.progress && (
            <Quiz
              pointsToGet={(value) => {
                setMax(value);
              }}
              questionsPool={questionPool}
              questions={questions}
              answeredPoints={(value) => {
                setCorrect(value);
              }}
              finished={() => {
                setState(States.finished);
              }}
            />
          )}

          {state === States.finished && (
            <SumbitQuiz
              maxPointsToGet={max}
              pointsPlayerGot={correct}
              
            />
          )}
        </Layout>
      </React.StrictMode>
    </>
  );
};

export default both;
