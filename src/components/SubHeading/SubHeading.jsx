import React from "react";
import { images } from "../../constant";

const SubHeading = ({ title }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <div className="p__cormorant">{title}</div>
      <img src={images.spoon} alt="spoon" className="spoon__img" />
    </div>
  );
};

export default SubHeading;
