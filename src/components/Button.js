import React from "react";

const Button = ({ id, href, word }) => {
  return (
    <a href={href} target="_blank">
      <button id={id}>{word}</button>
    </a>
  );
};

export default Button;
