import react from "react";

const Line = ({ color, margin }) => {
  return (
    <hr
      style={{
        backgroundColor: color,
        borderStyle: "none",
        margin: margin,
        borderRadius: "15px",
        height: "2px",
        
        
      }}
    />
  );
};

export default Line;
