import react from "react";
import styles from "../feedback/feedback.module.scss";
import Line from "../../components/line";
import Layout from "../../components/layout/layout";
import Backbutton from "../../components/backButton/Backbutton";
const main = () => {
  return (
    <>
      <Layout>
        <Backbutton />
        <div className={styles.flexbox}>
          <form
            action="https://formsubmit.co/2451052fb78deffad0c6a4699a57f992"
            method="POST"
          >
            <h1 className={styles.text}>I'll enjoy your opinion!</h1>
            <input
              type="email"
              name="email"
              placeholder="e-mail"
              className={styles.element}
              spellCheck="false"
              required
              autoFocus="true"
            />
            <Line color="#433a1f" margin="0 0 0 0" />
            <textarea
              name="feedback"
              placeholder="leave your feedback <3"
              className={styles.textArea}
              spellCheck="false"
              maxLength="460"
              cols="60"
              rows="15"
              required
            />
            <Line color="#433a1f" margin="0 0 0 0" />
            <input className={styles.button} type="submit" />
          </form>
        </div>
      </Layout>
    </>
  );
};

export default main;
