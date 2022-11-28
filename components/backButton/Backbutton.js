import React from "react";
import styles from "./Backbutton.module.scss";
import Button from "../button/button";
import Icon from "../icon/icon";
import {faArrowCircleLeft} from "@fortawesome/free-solid-svg-icons";
const Backbutton = () => {
  
  return (
    <>
    
    <div className={styles.back}>
      <Button href="/" style={styles.button}>
        Back
       
      </Button>
    </div>
    <div className={styles.backMinimalized}>
      <Button href="/" style={styles.buttonMinimalized}>
         <Icon icon={faArrowCircleLeft} />
      </Button>
    </div>
</>
  )
  
}
export default Backbutton;
