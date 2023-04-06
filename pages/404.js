import react from "react";
import styles from "../pages/404.module.scss";
import Image from "next/image";
import kumamon from "../pages/kumamon.png";
const noFound = () => {
  return (
    <>
      <div className={styles.flex}>
        <h1 className={styles.forOFor}>Wha...?!</h1>
        <div>
          <Image src={kumamon} width={200} height={200} />
        </div>
        <h2 className={styles.text}>Looks like you caught くまモン off guard!</h2>
        <a className={styles.a} href="/"><button className={styles.button}>Take me back!</button></a>
      </div>
    </>
  );
};

export default noFound;
