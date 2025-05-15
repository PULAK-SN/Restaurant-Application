import React from "react";
import { SubHeading, MenuItem } from "../../components";

import { data, images } from "../../constant";
import "./SpecialMenu.css";

const SpecialMenu = () => {
  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits you palatte" />
        <h1 className="headtext__cormorant">Today's Specil</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__scepialMenu-menu_wine flex__center">
          <p className="app__specialMenu-menu_heading">Wine & Beer</p>
          <div className="app__specialMenu-menu_items">
            {data.wines.map((wine, index) => (
              <MenuItem
                key={wine.title + index}
                title={wine.title}
                price={wine.price}
                tag={wine.tags}
              />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu" />
        </div>

        <div className="app__scepialMenu-menu_cocktails flex__center">
          <p className="app__specialMenu-menu_heading">Wine & Beer</p>
          <div className="app__specialMenu-menu_items">
            {data.cocktails.map((cocktail, index) => (
              <MenuItem
                key={cocktail.title + index}
                title={cocktail.title}
                price={cocktail.price}
                tag={cocktail.tags}
              />
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: "1.5rem" }}>
        <button className="custom__button">View More</button>
      </div>
    </div>
  );
};

export default SpecialMenu;
