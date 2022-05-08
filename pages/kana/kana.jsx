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
        between japanese hiragana, katakana their combinations or you can select
        all kana where you'll be able to quiz yourself from literally everything
        (except for kanji).
      </Header>

      <div className={styles.buttons}>
        <Button style={styles.button1} href="/kana">Hiragana <br/>（ひらがな）</Button>
        <Button style={styles.button1}>Katakana<br/> （カタカナ）</Button>
        <Button style={styles.button1}>Hiragana and Katakana <br/>（ひらがなとカタカナ）</Button>
      </div>

      <div className={styles.kanas}>
          <h1>Main kana</h1>
        <Button style={styles.button2} href="/kana">All</Button>
        <Button style={styles.button2} href="/kana">a i u e o | ア イ ウ エ オ</Button>
        <Button style={styles.button2} href="/kana">ka ki ku ko |カ キ ケ コ</Button>
        <Button style={styles.button2} href="/kana">sa shi su se so |サ シ ス セ ソ</Button>
        <Button style={styles.button2} href="/kana">ta chi tsu te to |タ チ ツ テ ト</Button>
        <Button style={styles.button2} href="/kana">na ni nu ne no |ナ ニ ヌ ネ ノ</Button>
        <Button style={styles.button2} href="/kana">ha hi fu he ho |ハ ヒ フ ヘ ホ</Button>
        <Button style={styles.button2} href="/kana">ma mi mu me mo |マ ミ ム メ モ</Button>
        <Button style={styles.button2} href="/kana">ya yu yo |ヤ ユ ヨ</Button>
        <Button style={styles.button2} href="/kana">ra ri ru re ro |ラ リ ル レ ロ</Button>
        <Button style={styles.button2} href="/kana">wa wo n |ワ ヲ ン</Button>
      </div>
      <div className={styles.kanas}>
      <h1>Dakuten</h1>
      <Button style={styles.button2} href="/kana">All</Button>
        <Button style={styles.button2} href="/kana">a i u e o | ア イ ウ エ オ</Button>
        <Button style={styles.button2} href="/kana">ka ki ku ko |カ キ ケ コ</Button>
        <Button style={styles.button2} href="/kana">sa shi su se so |サ シ ス セ ソ</Button>
        <Button style={styles.button2} href="/kana">ta chi tsu te to |タ チ ツ テ ト</Button>
        <Button style={styles.button2} href="/kana">na ni nu ne no |ナ ニ ヌ ネ ノ</Button>
        <Button style={styles.button2} href="/kana">ha hi fu he ho |ハ ヒ フ ヘ ホ</Button>
        <Button style={styles.button2} href="/kana">ma mi mu me mo |マ ミ ム メ モ</Button>
        <Button style={styles.button2} href="/kana">ya yu yo |ヤ ユ ヨ</Button>
        <Button style={styles.button2} href="/kana">ra ri ru re ro |ラ リ ル レ ロ</Button>
        <Button style={styles.button2} href="/kana">wa wo n |ワ ヲ ン</Button>
      </div>
      <div className={styles.kanas}>
      <h1>Combination</h1>
      <Button style={styles.button2} href="/kana">All</Button>
        <Button style={styles.button2} href="/kana">a i u e o | ア イ ウ エ オ</Button>
        <Button style={styles.button2} href="/kana">ka ki ku ko |カ キ ケ コ</Button>
        <Button style={styles.button2} href="/kana">sa shi su se so |サ シ ス セ ソ</Button>
        <Button style={styles.button2} href="/kana">ta chi tsu te to |タ チ ツ テ ト</Button>
        <Button style={styles.button2} href="/kana">na ni nu ne no |ナ ニ ヌ ネ ノ</Button>
        <Button style={styles.button2} href="/kana">ha hi fu he ho |ハ ヒ フ ヘ ホ</Button>
        <Button style={styles.button2} href="/kana">ma mi mu me mo |マ ミ ム メ モ</Button>
        <Button style={styles.button2} href="/kana">ya yu yo |ヤ ユ ヨ</Button>
        <Button style={styles.button2} href="/kana">ra ri ru re ro |ラ リ ル レ ロ</Button>
        <Button style={styles.button2} href="/kana">wa wo n |ワ ヲ ン</Button>
      </div>
      </Layout>
    </>
  );
};

export default kana;
