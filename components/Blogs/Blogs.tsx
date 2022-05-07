import React from "react";
import styles from "./Blog.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import image from "../../public/assets/blog 3.png";

const Blogs = () => {
   return (
      <section className={styles.container}>
         <header className={styles.header}>
            <h3>Blogs</h3>
            <h2>Gerichet Updates</h2>
         </header>
         <article className={styles.blog_container}>
            <div className={styles.image_container}>
               <Image src={image} alt="" />
            </div>
            <div className={styles.text_container}>
               <p>Food / Admin</p>
               <h4>The Guide On Food Restaurant To Help You Get Rich </h4>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Volutpat mattis ipsum turpis elit elit scelerisque egestas mus
                  in.
               </p>
            </div>
         </article>
         <aside>
            <button>Read More</button>
         </aside>
      </section>
   );
};

export default Blogs;
