import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
   return (
      <>
         <footer className={styles.container}>
            <aside className={styles.contact}>
               <h5>Contact Us</h5>
               <p>9 W 53rd St, New York, NY 10019, USA</p>
               <p>+1 212-344-1230</p>
               <p>+1 212-555-1230</p>
            </aside>
            <aside className={styles.header}>
               <h2>Gericht</h2>
               <p>
                  The best way to find yourself is to lose yourself in the
                  services others.
               </p>
               <div className={styles.social_media}>
                  <FontAwesomeIcon
                     icon={faFacebook}
                     className={styles.social}
                  />
                  <FontAwesomeIcon
                     icon={faInstagram}
                     className={styles.social}
                  />
                  <FontAwesomeIcon icon={faTwitter} className={styles.social} />
               </div>
            </aside>
            <aside className={styles.working}>
               <h5>Working hours</h5>
               <p>
                  Monday-Friday: <br />
                  08:00 am -12:00 am
               </p>
               <p>
                  Saturday-Sunday: <br />
                  07:00am -11:00 pm
               </p>
            </aside>
         </footer>
         <section className={styles.copy}>
            <p>© 2021 Geritcht. All Rights Reserved.</p>
         </section>
      </>
   );
};

export default Footer;
