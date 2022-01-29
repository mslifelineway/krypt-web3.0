import React from "react";

const TextIconButton = ({ link, text, onClick, style = {} }) => {
  return (
    <a
      href={link}
      className="text__iconButton bg__blue ml10"
      onClick={onClick}
      style={style}
    >
      {text}
    </a>
  );
};

export default TextIconButton;
