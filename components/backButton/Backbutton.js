import React from "react";
import styles from "./Backbutton.module.scss";
import Button from "../button/button";

const Backbutton = () => {
  
  return (
    <>
    
    <div className={styles.back}>
      <Button href="/" style={styles.button}>
        Back
       
      </Button>
    </div>
    
</>
  )
  
}
export default Backbutton;
