import React from "react";
import Header from "../../components/header/header";
import Button from "../../components/button/button";
import styles from "../../pages/Writing/writing.module.scss";
import Layout from "../../components/layout/layout";
import Backbutton from "../../components/backButton/Backbutton";
const both = () => {
  return (
    <>
    <Backbutton />
      <Layout>
        <Header title="Practice writing">
          In "Practice writing" you're going to write some simple japanese words
          in kanas, it is a good exercise to practice, visualising
          which kana characters to use while translating a word is a good next
          step in your japanese course!
        </Header>

       
      </Layout>
    </>
  );
};

export default both;
