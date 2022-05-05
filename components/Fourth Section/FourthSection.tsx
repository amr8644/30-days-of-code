import React from "react";
import styles from "./Fourth.module.css";
import Image from "next/image";
import Chef from "../../assets/chef.png";
import Sign from "../../assets/sign.png";
const FourthSection = () => {
   return (
      <section className={styles.container}>
         <article className={styles.image_container}>
            <Image src={Chef} alt="Chef" />
         </article>
         <article className={styles.quote_container}>
            <p className={styles.word}>Chefs Word</p>
            <h2>What We Belive In</h2>
            <p className={styles.quote}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor
               sit .auctor sit iaculis in arcu. Vulputate nulla lobortis mauris
               eget sit. Nulla scelerisque scelerisque congue ac consequat,
               aliquam molestie lectus eu. Congue iaculis integer curabitur
               semper sit nunc.
            </p>
            <div className={styles.about}>
               <h4>Kevin Luo</h4>
               <p>Chef & Founder</p>
            </div>
            <div className={styles.sign}>
               <Image src={Sign} alt="Signature" />
            </div>
         </article>
      </section>
   );
};

export default FourthSection;
