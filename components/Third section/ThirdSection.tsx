import React, { useState } from "react";
import styles from "./Third.module.css";
import Alchohol from "../../assets/ALchohol.jpg";
import Egg from "../../assets/eggs.png";
import Dessert from "../../assets/Dessert.png";
import Image from "next/image";

const ThirdSection = () => {
   const [picture, setPicture] = useState(Alchohol);
   return (
      <section className={styles.container}>
         <div className={styles.menu}>
            <Image src={picture} alt="menu" className={styles.menu} />
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
