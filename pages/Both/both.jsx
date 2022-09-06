import React from "react";
import Header from "../../components/header/header";
import Button from "../../components/button/button";
import styles from "../../pages/Both/both.module.scss";
import Layout from "../../components/layout/layout";
import Backbutton from "../../components/backButton/Backbutton";
const both = () => {
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

        <div className={styles.buttons}>
          <Button href="/Hiragana" style={styles.menu}>
            Hiragana <br />
            （ひらがな）
          </Button>
          <Button href="/Katakana" style={styles.menu}>
            Katakana
            <br /> （カタカナ）
          </Button>
          <Button href="/Both" style={styles.menuClicked}>
            Hiragana and Katakana <br />
            （ひらがなとカタカナ）
          </Button>
        </div>

        <div className={styles.kanas}>
          <h1>Main kana</h1>
          <Button style={styles.options}>All</Button>
          <Button style={styles.options}>a i u e o | あ い う え お</Button>
          <Button style={styles.options}>ka ki ku ko | か き く こ</Button>
          <Button style={styles.options} href="/kana">
            sa shi su se so | さ し す せ そ
          </Button>
          <Button style={styles.options} href="/kana">
            ta chi tsu te to | た ち つ て と
          </Button>
          <Button style={styles.options} href="/kana">
            na ni nu ne no | な に ぬ ね の
          </Button>
          <Button style={styles.options} href="/kana">
            ha hi fu he ho | は ひ ふ へ ほ
          </Button>
          <Button style={styles.options} href="/kana">
            ma mi mu me mo | ま み む め も
          </Button>
          <Button style={styles.options} href="/kana">
            ya yu yo | や ゆ よ
          </Button>
          <Button style={styles.options} href="/kana">
            ra ri ru re ro | ら り る れ ろ
          </Button>
          <Button style={styles.options} href="/kana">
            wa wo n | わ を ん
          </Button>
        </div>
        <div className={styles.kanas}>
          <h1>Dakuten</h1>
          <Button style={styles.options} href="/kana">
            All
          </Button>
          <Button style={styles.options} href="/kana">
            ga gi gu ge go | が ぎ ぐ げ ご
          </Button>
          <Button style={styles.options} href="/kana">
            za ji zu ze zo | ざ じ ず ぜ ぞ
          </Button>
          <Button style={styles.options} href="/kana">
            da ji zu de do | だ じ で ど
          </Button>
          <Button style={styles.options} href="/kana">
            ba bi bu be bo | ば び ぶ べ ぼ
          </Button>
          <Button style={styles.options} href="/kana">
            pa pi pu pe po | ぱ ぴ ぷ ぺ ぽ
          </Button>
        </div>
        <div className={styles.kanas}>
          <h1>Combination</h1>
          <Button style={styles.options} href="/kana">
            All
          </Button>
          <Button style={styles.options} href="/kana">
            kya | きゃ
          </Button>
          <Button style={styles.options} href="/kana">
            cha | ちゃ
          </Button>
          <Button style={styles.options} href="/kana">
            hya |ひゃ
          </Button>
          <Button style={styles.options} href="/kana">
            rya |りゃ
          </Button>
          <Button style={styles.options} href="/kana">
            ja |じゃ
          </Button>
          <Button style={styles.options} href="/kana">
            bya |びゃ
          </Button>
          <Button style={styles.options} href="/kana">
            sha |しゃ
          </Button>
          <Button style={styles.options} href="/kana">
            nya |にゃ
          </Button>
          <Button style={styles.options} href="/kana">
            mya |みゃ
          </Button>
          <Button style={styles.options} href="/kana">
            gya|ぎゃ
          </Button>
          <Button style={styles.options} href="/kana">
            dya|ぢゃ
          </Button>
          <Button style={styles.options} href="/kana">
            pya|ぴゃ
          </Button>
        </div>

        <Header title="Katakana"></Header>

        <div className={styles.kanas}>
          <h1>Main kana</h1>
          <Button style={styles.options}>All</Button>
          <Button style={styles.options}>a i u e o | ア イ ウ エ オ</Button>
          <Button style={styles.options}>ka ki ku ko |カ キ ケ コ</Button>
          <Button style={styles.options} href="/kana">
            sa shi su se so |サ シ ス セ ソ
          </Button>
          <Button style={styles.options} href="/kana">
            ta chi tsu te to |タ チ ツ テ ト
          </Button>
          <Button style={styles.options} href="/kana">
            na ni nu ne no |ナ ニ ヌ ネ ノ
          </Button>
          <Button style={styles.options} href="/kana">
            ha hi fu he ho |ハ ヒ フ ヘ ホ
          </Button>
          <Button style={styles.options} href="/kana">
            ma mi mu me mo |マ ミ ム メ モ
          </Button>
          <Button style={styles.options} href="/kana">
            ya yu yo |ヤ ユ ヨ
          </Button>
          <Button style={styles.options} href="/kana">
            ra ri ru re ro |ラ リ ル レ ロ
          </Button>
          <Button style={styles.options} href="/kana">
            wa wo n |ワ ヲ ン
          </Button>
        </div>
        <div className={styles.kanas}>
          <h1>Dakuten</h1>
          <Button style={styles.options} href="/kana">
            All
          </Button>
          <Button style={styles.options} href="/kana">
            ga gi gu ge go |ガ ギ グ ゲ ゴ
          </Button>
          <Button style={styles.options} href="/kana">
            za ji zu ze zo |ザ ジ ズ ゼ ゾ
          </Button>
          <Button style={styles.options} href="/kana">
            da ji zu de do |ダ ジ ヅ デ ド
          </Button>
          <Button style={styles.options} href="/kana">
            ba bi bu be bo |バ ビ ブ ベ ボ
          </Button>
          <Button style={styles.options} href="/kana">
            pa pi pu pe po | パ ピ プ ペ ポ
          </Button>
        </div>
        <div className={styles.kanas}>
          <h1>Combination</h1>
          <Button style={styles.options} href="/kana">
            All
          </Button>
          <Button style={styles.options} href="/kana">
            kya | キャ
          </Button>
          <Button style={styles.options} href="/kana">
            cha | チャ
          </Button>
          <Button style={styles.options} href="/kana">
            hya |ヒャ
          </Button>
          <Button style={styles.options} href="/kana">
            rya |リャ
          </Button>
          <Button style={styles.options} href="/kana">
            ja |ジャ
          </Button>
          <Button style={styles.options} href="/kana">
            bya |ビャ
          </Button>
          <Button style={styles.options} href="/kana">
            sha |シャ
          </Button>
          <Button style={styles.options} href="/kana">
            nya |ニャ
          </Button>
          <Button style={styles.options} href="/kana">
            mya |ミャ
          </Button>
          <Button style={styles.options} href="/kana">
            gya|ギャ
          </Button>
          <Button style={styles.options} href="/kana">
            dya|ヂャ
          </Button>
          <Button style={styles.options} href="/kana">
            pya|ピャ
          </Button>
        </div>
      </Layout>
    </>
  );
};

export default both;
