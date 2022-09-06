import { React, useState } from "react";
import styles from "../select/select.module.scss";
import clsx from "clsx";
import { useLanguageContext } from "../context.js";
function LanguageSelect() {
  const { language, setLanguage } = useLanguageContext();
  const [isVisible, setVisibility] = useState(false);

  return (
    <>
      <button
        className={styles.button}
        onClick={() => setVisibility(!isVisible)}
      >
        {language}
      </button>
      <div
        className={clsx(styles.HiddenList, { [styles.ActiveList]: isVisible })}
      >
        <div className={styles.button}>
          <button
            onClick={(event) => setLanguage(event?.target?.value)}
            value="polish"
            className={styles.listButton}
          >
            polish
          </button>
          <button
            onClick={(event) => setLanguage(event?.target?.value)}
            value="english"
            className={styles.listButton}
          >
            english
          </button>
        </div>
      </div>
    </>
  );
}

export default LanguageSelect;
