import React from "react";
import styles from "./Fifth.module.css";
import Image from "next/image";
import Robert from "../../assets/Robert.png";
import Wade from "../../assets/Wade.png";
import Jade from "../../assets/Jane.png";
import Brook from "../../assets/Brookyln.png";

const FifthSection = () => {
   return (
      <section className={styles.container}>
         <header className={styles.title}>
            <h3>Testimony</h3>
            <h2>Happy Customers</h2>
         </header>
         <div className={styles.wrapper}>
            <article className={styles.batch_one}>
               {/* Robert Testimony */}
               <aside>
                  <div className={styles.image_container}>
                     <Image
                        src={Robert}
                        alt="Robert"
                        width={110}
                        height={110}
                     />
                  </div>
                  <div className={styles.text}>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing sit.
                        auctor sit iaculis in arcu. Vulputate nulla lobortis
                        mauris eget sit. Nulla scelerisque scelerisque congue.
                     </p>
                     <h4>Robert Fox</h4>
                     <p>Chef</p>
                  </div>
               </aside>
               {/* Wade Testimony */}
               <aside>
                  <div className={styles.image_container}>
                     <Image src={Wade} alt="Wade" width={110} height={110} />
                  </div>
                  <div className={styles.text}>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing sit.
                        auctor sit iaculis in arcu. Vulputate nulla lobortis
                        mauris eget sit. Nulla scelerisque scelerisque congue.
                     </p>
                     <h4>Wade Warrent</h4>
                     <p>Sommelier</p>
                  </div>
               </aside>
            </article>
            <article className={styles.batch_two}>
               {/* Jane Testimony */}
               <aside>
                  <div className={styles.image_container}>
                     <Image src={Jade} alt="Robert" width={110} height={110} />
                  </div>
                  <div className={styles.text}>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing sit.
                        auctor sit iaculis in arcu. Vulputate nulla lobortis
                        mauris eget sit. Nulla scelerisque scelerisque congue.
                     </p>
                     <h4>Jade Cooper</h4>
                     <p>Chef</p>
                  </div>
               </aside>
               {/* Wade Testimony */}
               <aside>
                  <div className={styles.image_container}>
                     <Image src={Brook} alt="Wade" width={110} height={110} />
                  </div>
                  <div className={styles.text}>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing sit.
                        auctor sit iaculis in arcu. Vulputate nulla lobortis
                        mauris eget sit. Nulla scelerisque scelerisque congue.
                     </p>
                     <h4>Brooklyn Simmons</h4>
                     <p>Caterer</p>
                  </div>
               </aside>
            </article>
         </div>
      </section>
   );
};

export default FifthSection;
