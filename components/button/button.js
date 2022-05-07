import React from "react";
import styles from "../button/button.module.scss"


const Button = ({children,href}) =>{
return(
<a href={href}><button className={styles.button}> {children}</button></a>

)
}
export default Button