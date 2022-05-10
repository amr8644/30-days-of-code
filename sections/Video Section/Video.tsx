import React, { useState } from "react";

import styles from "./Video.module.css";
// import meal from "../../public/meal.mp4";
import ReactPlayer from "react-player";

const Video = () => {
   return (
      <div>
         <video
            // className={styles.container}
            autoPlay
            muted
            loop
            style={{ width: "500px", height: "500px" }}
         >
            <source
               src="https://www.youtube.com/watch?v=ZRnIn8IS2JA"
               type="video/mp4"
            />
         </video>
      </div>
   );
};

export default Video;
