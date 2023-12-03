// icon:basic_cup | Linea Iconset https://linea.io/ | Benjamin Sigidi
import * as React from "react";

function Cup(props) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="currentColor"
      height="2em"
      width="2em"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M16 27c0 4.418 6.059 8 16 8s16-3.582 16-8V1H16v26zM20 63h24M32 35v28M16 7H7s0 9 9 9M48 7h9s0 9-9 9"
      />
    </svg>
  );
}

export default Cup;
