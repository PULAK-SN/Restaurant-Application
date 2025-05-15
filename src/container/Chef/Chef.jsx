import React from "react";

import { images } from "../../constant";
import "./Chef.css";
import { SubHeading } from "../../components";

const Chef = () => {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img_reverse">
        <img src={images.chef} alt="chef" />
      </div>

      <div className="app__wrapper_info">
        <SubHeading title="Chef’s Word" />
        <h1 className="headtext__cormorant">What we believe in</h1>

        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote" />
            <p className="p__opensans">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus, voluptates!
            </p>
          </div>
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel iste
            libero sint consequuntur quis dignissimos perspiciatis, dicta cum
            voluptate voluptates molestiae? Nostrum fuga voluptatem quasi quod
            ducimus id, quas, ratione, est animi quo vitae voluptatibus
            deleniti? Id dicta ab quia
          </p>
        </div>

        <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="sign" />
        </div>
      </div>
    </div>
  );
};

export default Chef;
