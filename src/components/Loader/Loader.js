import "./loader.css";
import React from "react";

const Loader = () => (
  <div className="loader-wrap">
    <div className="dots">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="dot"
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </div>
  </div>
);

console.log("loader imported");

export default Loader;
