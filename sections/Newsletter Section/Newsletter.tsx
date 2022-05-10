import React from "react";
import Button from "../../componets/Button";
import Footer from "../Footer/Footer";
import styles from "./news.module.css";
const Newsletter = () => {
   return (
      <section className={styles.container}>
         <div className={styles.wrapper}>
            <article className={styles.text_container}>
               <p>Newsletter</p>
               <h2>Subscribe to our Channel</h2>
               <p>And never miss our updates</p>
            </article>
            <article className={styles.input_container}>
               <input type="email" placeholder="Email Address" />
               <button>Subscribe</button>
            </article>
         </div>
         <Footer />
      </section>
   );
};

export default Newsletter;
