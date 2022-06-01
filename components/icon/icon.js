import react from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../icon/icon.module.scss";
const Icon = ({icon,children}) =>{
return(
<>
<div>
<FontAwesomeIcon className={styles.icon} icon={icon} /> {children} 

</div>

</>
)
}


export default Icon;