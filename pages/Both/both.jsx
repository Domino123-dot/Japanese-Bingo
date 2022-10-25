import React, { useEffect, useState } from "react";
import Header from "../../components/header/header";
import Button from "../../components/button/button";
import styles from "../../pages/Both/both.module.scss";
import Layout from "../../components/layout/layout";
import Backbutton from "../../components/backButton/Backbutton";
import axios from "axios";
const both = () => {
  const [questions, setQuestions] = useState([]);
  const [category, setCategory] = useState("");
  const getProducts = () => {
    axios.get("http://localhost:8000/api/questions").then((response) => {
      setQuestions(response.data);
    });
  };

  useEffect(() => {
    getProducts();
    console.log(questions);
  }, []);

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

        {
  
        questions.map((question,index) => (
          <div key={index}>
            <div key={index} className={styles.menu}>
              {" "}
              <p key={index}>{question.question}</p>
              <p>
                <input key={index}
                  className={styles.input}
                  spellCheck="false"
                  type="text"
                  input="answer"
                ></input>
              </p>
            </div>
          </div>
        ))}
      </Layout>
    </>
  );
};

export default both;
