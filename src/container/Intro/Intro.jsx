import React from "react";
import { meal } from "../../constant";

import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();

  const handelVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) vidRef.current.pause();
    else vidRef.current.play();
  };

  return (
    <div className="app__video">
      <video
        src={meal}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />

      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handelVideo}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={27} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={27} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
