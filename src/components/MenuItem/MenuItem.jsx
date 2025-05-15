import React from "react";
import "./MenuItem.css";

const MenuItem = ({ price, title, tag }) => {
  return (
    <div className="app__menuItem">
      <div className="app__menuItem-head">
        <div className="app__menuItem-title">
          <p className="p__cormorant" style={{ color: "#DCCA87" }}>
            {title}
          </p>
        </div>
        <div className="app__menuItem-dash" />

        <div className="app__menuItem-price">
          <p className="p__cormorant">{price}</p>
        </div>
      </div>

      <div className="app__menuItem-sub">
        <p className="opensans" style={{ color: "#AAA" }}>
          {tag}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
