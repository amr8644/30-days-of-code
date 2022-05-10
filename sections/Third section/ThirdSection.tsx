import React, { useState } from "react";
import styles from "./Third.module.css";
import Alchohol from "../../public/assets/ALchohol.jpg";
import Egg from "../../public/assets/eggs.png";
import Dessert from "../../public/assets/Dessert.png";
import Image from "next/image";

const ThirdSection = () => {
   const [picture, setPicture] = useState(Alchohol);
   return (
      <section className={styles.container}>
         <div className={styles.menu}>
            <Image
               src={picture}
               alt="menu"
               width="100%"
               height="100%"
               layout="fill"
            />
         </div>
         <article className={styles.tabs}>
            <p onMouseMove={() => setPicture(Alchohol)}>Bar Menu</p>
            <p onMouseMove={() => setPicture(Egg)}>Food Menu</p>
            <p onMouseMove={() => setPicture(Dessert)}>Desserts Menu</p>
         </article>
      </section>
   );
};

export default ThirdSection;
