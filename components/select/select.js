import { React, useState } from "react";
import styles from "../select/select.module.scss";
import clsx from "clsx";
function LanguageSelect() {
  const [isVisible, setVisibility] = useState(false);

  return (
    <>
      <button
        className={styles.button}
        onClick={() => setVisibility(!isVisible)}
      >
        Language
      </button>
      <div
        className={clsx(styles.HiddenList, { [styles.ActiveList]: isVisible })}
      >
        <ul>
          <li>Polish</li>
          <li>English</li>
        </ul>
      </div>
    </>
  );
}

export default LanguageSelect;
