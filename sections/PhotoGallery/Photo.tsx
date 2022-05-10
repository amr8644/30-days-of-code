import React from "react";
import styles from "./Photo.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Slider from "react-slick";
import Button from "../../componets/Button";
import { data } from "./PhotoData";

const Photho = () => {
   const settings = {
      infinite: true,
      slidesToShow: 3,
      swipeToSlide: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
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
            },
         },
         {
            breakpoint: 950,
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
         <article className={styles.text_container}>
            <p>Instagram</p>
            <h2>Photo Gallery</h2>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
               mattis ipsum turpis elit elit scelerisque egestas mu.
            </p>
            <Button name={"View More"} />
         </article>

         <Slider {...settings} className={styles.image_container}>
            {data.map((picture: any) => {
               const { id, image } = picture;

               return (
                  <aside key={id}>
                     <div className={styles.image}>
                        <Image src={image} alt="pic" width={300} height={411} />
                     </div>
                  </aside>
               );
            })}
         </Slider>
      </section>
   );
};

export default Photho;
