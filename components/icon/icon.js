import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ icon, children, link , style }) => {
  return (
    <>
      <div>
        <a href={link} className={style}>
          <FontAwesomeIcon icon={icon} /> {children}{" "}
        </a>
      </div>
    </>
  );
};

export default Icon;
