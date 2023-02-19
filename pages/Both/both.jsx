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

const SumbitQuiz = ({ maxPointsToGet, pointsPlayerGot, score }) => {
  return (
    <>
      <div className={styles.blurAppear} />
      <div className={styles.finishBoxAppear}>
        <div className={styles.header}>Congratulations</div>
        <div className={styles.bottomText}>
          You got {pointsPlayerGot} out of {maxPointsToGet} questions! <br />
          Your score : {score}%
        </div>

        <Button href="/" style={styles.buttonFinish}>
          Back
        </Button>
      </div>
    </>
  );
};

const QuestionSelect = ({ questions }) => {
  const [firstQuestionPool, setFirstQuestionPool] = useState([]);
  const [secondQuestionPool, setSecondQuestionPool] = useState([]);
  const [thirdQuestionPool, setThirdQuestionPool] = useState([]);
  const [pool, setPool] = useState([]);
  const appearButton =
    firstQuestionPool.length +
      secondQuestionPool.length +
      thirdQuestionPool.length >
    0;

  useEffect(() => {
    setPool([
      ...firstQuestionPool,
      ...secondQuestionPool,
      ...thirdQuestionPool,
    ]);
  }, [firstQuestionPool, secondQuestionPool, thirdQuestionPool]);

  return (
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
    
     
      
    </div>

    
    
  );
};

const Quiz = ({ questionsPool, questions, finished }) => {
  const [correctAnswer, setCorrectAnswer] = useState([]);
  const [wrongAnswer, setWrongAnswer] = useState([]);
  const [showFinishButton, setShowFinishButton] = useState(false);
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
        className={showFinishButton ? styles.buttonFnsh : styles.buttonDsp}
        onClick={finished}
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
  useEffect(() => {
    axios.get("http://localhost:8000/api/questions").then((response) => {
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
            between japanese hiragana, katakana their combinations or you can
            select all kana where you'll be able to quiz yourself from literally
            everything (except for kanji).
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
              questionsPool={questionPool}
              questions={questions}
              finished={() => {
                setState(States.finished);
              }}
            />
          )}

          {state === States.finished && (
            <SumbitQuiz
              maxPointsToGet={"x"}
              pointsPlayerGot={"x"}
              score={"x"}
            />
          )}
        </Layout>
      </React.StrictMode>
    </>
  );
};

export default both;
