import React from "react";
import styles from "./Second.module.css";
import Image from "next/image";
import image from "../../assets/knife.png";
import G from "../../assets/G.png";

const SecondSection = () => {
   return (
      <section className={styles.container}>
         <article className={styles.text_one}>
            <h2>About Us</h2>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
               pharetra adipiscing ultrices vulputate posuere tristique. In sed
               odio nec aliquet eu proin mauris et.
            </p>
            <button className={styles.button}>Know More</button>
         </article>

         <article className={styles.G_image}>
            <Image src={G} alt="G" />
         </article>
         <article className={styles.knife_image}>
            <Image src={image} alt="Knife" />
         </article>

         <article className={styles.text_two}>
            <h2>Our History</h2>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
               pharetra adipiscing ultrices vulputate posuere tristique. In sed
               odio nec aliquet eu proin mauris et.
            </p>
            <button className={styles.button}>Know More</button>
         </article>
      </section>
   );
};

export default SecondSection;
