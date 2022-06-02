import react from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../icon/icon.module.scss";
const Icon = ({icon,children , link}) =>{
return(
<>
<div >
<a href={link} className={styles.a}><FontAwesomeIcon icon={icon} /> {children} </a>

</div>

</>
)
}


export default Icon;