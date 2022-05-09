import React, { useState } from "react";
import styles from "./Blog.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Slider from "react-slick";
import { data } from "./blogData";

const Blogs = () => {
   const [mouseOver, setMouseOver] = useState(false);

   const settings = {
      infinite: true,
      slidesToShow: 3,
      swipeToSlide: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      lazytoad: true,
      speed: 600,
      cssEase: "linear",
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
         },
         {
            breakpoint: 850,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   };

   return (
      <section className={styles.container}>
         <header className={styles.header}>
            <h3>Blogs</h3>
            <h2>Gerichet Updates</h2>
         </header>
         <Slider {...settings} className={styles.main_blog_container}>
            {data.map((blog: any) => {
               const { header, image, category, id } = blog;
               return (
                  <aside key={id} className={styles.blog_container}>
                     <div className={styles.image_container}>
                        <Image src={image} alt="Blog" />
                     </div>
                     <div className={styles.text_container}>
                        <p>{category}/ Admin</p>
                        <h4>{header}</h4>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit. Volutpat mattis ipsum turpis elit elit
                           scelerisque egestas mus in.
                        </p>
                     </div>
                     <aside className={styles.read_container}>
                        <div
                           className={styles.line}
                           style={{ width: `${mouseOver ? 22 : 0}px` }}
                        ></div>

                        <p
                           className={styles.read}
                           onMouseOver={() => setMouseOver(true)}
                           onMouseLeave={() => setMouseOver(false)}
                        >
                           Read More
                        </p>
                     </aside>
                  </aside>
               );
            })}
         </Slider>
      </section>
   );
};

export default Blogs;

// export const getStaticProps = async () => {
//    const res = await fetch(data as any);
//    const blogs = await res.json();

//    return {
//       props: {
//          blogs,
//       },
//    };
// };
