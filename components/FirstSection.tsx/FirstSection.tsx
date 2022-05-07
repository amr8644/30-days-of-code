import React, { useCallback, useEffect, useState } from "react";
import styles from "./First.module.css";
import Image from "next/image";
import image from "../../public/assets/welcome.png";

const FirstSection = () => {
   const data = [
      "Love The Original Taste",

      "Food That Surprise You",

      "The Key To Fine Dining",
   ];

   const [index, setIndex] = useState(0);
   const random = useCallback(() => {
      const index = Math.floor(Math.random() * data.length);
      setIndex(index);
   }, []);

   useEffect(() => {
      const inter = setInterval(random, 1500);

      return () => clearInterval(inter);
   }, [random]);
   const headers = data[index];

   return (
      <section className={styles.container}>
         <article className={styles.text}>
            <h3>Chase The New Flavour</h3>
            <h2>{headers}</h2>
            <p>
               Sit tellus lobortis sed senectus vivamus molestie. Condimentum
               volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
               aliquam amet tellus
            </p>

            <button className={styles.button}>
               <span>Explore Menu</span>
            </button>
         </article>
         <article className={styles.images}>
            <Image src={image} alt="Gallery-1" className={styles.image} />
         </article>
      </section>
   );
};

export default FirstSection;
