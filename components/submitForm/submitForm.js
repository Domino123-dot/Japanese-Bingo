import styles from "../submitForm/submitForm.module.scss";
import Line from "../line";

const SubmitForm = () => {
  return (
    <>
      <div className={styles.flexbox}>
        <input type="hidden" name="_gotcha" className={styles.hp} />
        <form
          action="https://getform.io/f/1527b947-9829-4a2f-bdca-14465f975342"
          method="POST"
          className={styles.form}
          autoComplete="off"
        >
          <h1 className={styles.text}>I'll enjoy your opinion!</h1>
          <input
            type="email"
            name="email"
            required
            placeholder="Place your e-mail"
            className={styles.element}
          />
          <Line color="#433a1f" margin="0 0 0 0" />
          <textarea
            name="feedback"
            placeholder="leave your feedback <3"
            className={styles.textArea}
            spellCheck="false"
            maxLength="460"
            rows="15"
            required
          />
          <Line color="#433a1f" margin="0 0 0 0" />
          <div
            class="h-captcha"
            data-sitekey="5abc6e43-005f-4d57-84d1-290f596902d6"
            className={styles.capatcha}
            required
          />
          <input className={styles.button} type="submit" />
        </form>
      </div>
    </>
  );
};

export default SubmitForm;
