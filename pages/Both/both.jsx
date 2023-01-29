import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/header/header';
import styles from './both.module.scss';
import Layout from '../../components/layout/layout';
import Backbutton from '../../components/backButton/Backbutton';
import OptionButton from '../../components/OptionButton/OptionButton';
import Button from '../../components/button/button';

const States = {
  init: 'init',
  inProgress: 'inProgress',
  finished: 'finished',
};

const QuestionSelection = ({onConfirm}) => {
  const [firstQuestionPool, setFirstQuestionPool] = useState([]);
  const [secondQuestionPool, setSecondQuestionPool] = useState([]);
  const [thirdQuestionPool, setThirdQuestionPool] = useState([]);

  const [pool, setPool] = useState([]);

  useEffect(() => {
    setPool([...firstQuestionPool, ...secondQuestionPool, ...thirdQuestionPool]);
  }, [firstQuestionPool, secondQuestionPool, thirdQuestionPool]);

  return (
    <>
      <div className={styles.flexbox}>
        <div className={styles.kanas}>
          <h1>Main Kana</h1>
          <OptionButton
            onChange={(values) => {
              setFirstQuestionPool(values);
            }}
            options={[
              {
                text: 'a i u e o | あ い う え お',
                value: 'a/',
                maxPointsToGet: 5,
              },
              {
                text: 'ka ki ku ko | か き く こ',
                value: 'ka/',
                maxPointsToGet: 4,
              },
              {
                text: 'sa shi su se so | さ し す せ そ',
                value: 'sa/',
                maxPointsToGet: 5,
              },
              {
                text: ' na ni nu ne no | な に ぬ ね の',
                value: 'na/',
                maxPointsToGet: 5,
              },
              {
                text: 'ha hi fu he ho | は ひ ふ へ ほ',
                value: 'ha/',
                maxPointsToGet: 5,
              },
              {
                text: 'ma mi mu me mo | ま み む め も',
                value: 'ma/',
                maxPointsToGet: 5,
              },
              {
                text: 'ya yu yo | や ゆ よ',
                value: 'ya/',
                maxPointsToGet: 3,
              },
              {
                text: 'ra ri ru re ro | ら り る れ ろ',
                value: 'ra/',
                maxPointsToGet: 5,
              },
              {
                text: 'wa wo n | わ を ん',
                value: 'wa/',
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
                text: 'ga gi gu ge go | が ぎ ぐ げ ご',
                value: 'ga/',
                maxPointsToGet: 5,
              },
              {
                text: 'za ji zu ze zo | ざ じ ず ぜ ぞ',
                value: 'za/',
                maxPointsToGet: 5,
              },
              {
                text: 'da ji zu de do | だ じ で ど',
                value: 'da/',
                maxPointsToGet: 4,
              },
              {
                text: 'ba bi bu be bo | ば び ぶ べ ぼ',
                value: 'ba/',
                maxPointsToGet: 5,
              },
              {
                text: 'pa pi pu pe po | ぱ ぴ ぷ ぺ ぽ',
                value: 'pa/',
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
              { text: 'kya | きゃ', value: 'kya/', maxPointsToGet: 3 },
              { text: 'cha | ちゃ', value: 'cha/', maxPointsToGet: 3 },
              { text: 'hya |ひゃ', value: 'hya/', maxPointsToGet: 3 },
              { text: 'rya |りゃ', value: 'rya/', maxPointsToGet: 3 },
              { text: 'ja |じゃ', value: 'ja/', maxPointsToGet: 3 },
              { text: 'bya |びゃ', value: 'bya/', maxPointsToGet: 3 },
              { text: 'sha |しゃ', value: 'sha/', maxPointsToGet: 3 },
              { text: 'nya |にゃ', value: 'nya/', maxPointsToGet: 3 },
              { text: 'mya |みゃ', value: 'mya/', maxPointsToGet: 3 },
              { text: 'gya |ぎゃ', value: 'gya/', maxPointsToGet: 3 },
              { text: 'dya |ぢゃ', value: 'dya/', maxPointsToGet: 3 },
              { text: 'pya |ぴゃ', value: 'pya/', maxPointsToGet: 3 },
            ]}
          />
        </div>
      </div>

      <div style={{ position: "relative"}}>
        <button
          onClick={() => onConfirm(pool)}
          className={styles.button}
          disabled={!pool.length}
        >
          Start!
        </button>
      </div>
    </>
  );
};

const Quiz = ({pool, onSelect, onFinish}) => {
  const [answers, setAnswers] = useState({});

  return (
    <>
      <div className={styles.QuizFlexbox}>
        {pool
          .map((question) => { 
            const isCorrect = answers[question.pk];

            return (
              <div
                key={question.pk}
                className={
                  isCorrect === true ? styles.menuCorrect : isCorrect === false ? styles.menuWrong : styles.menu
                }
              >
                {question.question}

                <input
                  onBlur={(e) => {
                    const answer = e.target.value.toLowerCase();
                    if (!answer) return;
                  
                    const isCorrect = answer === question.good_answer;
                    setAnswers({...answers, [question.pk]: isCorrect});
                    onSelect && onSelect(question, isCorrect);
                  }}
                  key={question.pk}
                  className={
                    isCorrect === true ? styles.inputCorrect : isCorrect === false ? styles.inputWrong : styles.input
                  }
                  spellCheck="false"
                  type="text"
                  autoComplete="off"
                  disabled={
                    isCorrect === true
                  }
                />
              </div>
            )
          }
        )}
      </div>

      <div style={{ position: "relative"}}>
        <button
          className={styles.button}
          onClick={onFinish}
        >
          Finish
        </button>
      </div>
    </>
  );
};


const Summary = ({score, numCorrect, numTotal}) => {
  return (
    <div
      className={styles.finishBoxAppear}
    >
      <div className={styles.header}>Congratulations</div>
      <div className={styles.bottomText}>
        You got {numCorrect} out of {numTotal} questions! <br />
        Your score : {score}
      </div>

      <Button href="/" style={styles.buttonFinish}>
        Back
      </Button>
    </div>
  );
}

const Both = () => {
  const [questions, setQuestions] = useState([]);
  const [state, setState] = useState(States.init);
  const [categories, setCategories] = useState([]);
  const [pool, setPool] = useState([]);
  const [numCorrect, setNumCorrect] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:8000/api/questions")
    .then((response) => {
      setQuestions(response.data);
    });
  }, []);

  useEffect(() => {
    setPool(questions.filter(
      (question) =>
        categories.includes(question.category) &&
        question.is_active === true
    ));
  }, [categories]);

  return (
    <div className={state === States.finished ? styles.blurAppear : ""}>
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
            <QuestionSelection 
              onConfirm={(selection) => {
                setCategories(selection);
                setState(States.inProgress)
              }}
            />
          )}

          {state === States.inProgress && (
            <Quiz
              pool={pool}
              onFinish={() => setState(States.finished)}
              onSelect={(_, isCorrect) => isCorrect ? setNumCorrect(numCorrect += 1) : null}
            />
          )}

          {state === States.finished && (
            <Summary
              numTotal={pool.length}
              numCorrect={numCorrect} 
            />
          )}
          
        </Layout>
      </React.StrictMode>
    </div>
  );
};

export default Both;
