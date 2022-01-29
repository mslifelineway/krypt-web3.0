import React from "react";
import "../styles/rounded_icon.css";

const RoundedIcon = ({ icon, iconBgColor, style = {}, onClick }) => {
  return (
    <div
      className="rounded__icon flex-full-center"
      style={{ backgroundColor: iconBgColor || "#000", ...style }}
      onClick={onClick}
    >
      {icon}
    </div>
  );
};

export default RoundedIcon;
