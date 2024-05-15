import React from "react";
import "./card.style.css";

export default function Card({img, follow, title}) {
  return (
    <>
      <div className="profileBg">
        <div className="setSize">
          <img
            className="profile"
            src={img}
            alt="img"
          />
        </div>
        <div className="followSection">
          <p className="followText">{follow}</p>
        </div>
      </div>
        <p className="bottomtext">{title}</p>
    </>
  );
}
