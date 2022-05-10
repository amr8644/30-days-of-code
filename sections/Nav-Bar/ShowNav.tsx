import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Logo from "../../public/assets/logo1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ShowNav = ({ setShow }: any) => {
   const [showHomeDrop, setshowHomeDrop] = useState(false);
   const [showPagesDrop, setshowPagesDrop] = useState(false);
   const [showBlogsDrop, setshowBlogsDrop] = useState(false);

   const openHome = () => {
      setshowHomeDrop(true);
      setshowPagesDrop(false);
      setshowBlogsDrop(false);
   };
   const openPages = () => {
      setshowHomeDrop(false);
      setshowPagesDrop(true);
      setshowBlogsDrop(false);
   };

   const openBlogs = () => {
      setshowHomeDrop(false);
      setshowPagesDrop(false);
      setshowBlogsDrop(true);
   };

   return (
      <>
         <nav className={styles.show_nav}>
            <header className={styles.logo_nav}>
               <Image src={Logo} alt="Logo" />
               <button className={styles.close} onClick={() => setShow(false)}>
                  <FontAwesomeIcon icon={faTimes} />
               </button>
            </header>
            <ul>
               <aside onClick={openHome}>
                  Home
                  {showHomeDrop && (
                     <div className={styles.drop}>
                        <li>Home 1</li>
                        <li>Home 2</li>
                     </div>
                  )}
               </aside>

               <aside onClick={openPages}>
                  Pages
                  {showPagesDrop && (
                     <div className={styles.drop}>
                        <li>Home 1</li>
                        <li>Home 2</li>
                     </div>
                  )}
               </aside>

               <aside>Contact Us</aside>
               <aside onClick={openBlogs}>
                  Blogs
                  {showBlogsDrop && (
                     <div className={styles.drop}>
                        <li>Home 1</li>
                        <li>Home 2</li>
                     </div>
                  )}
               </aside>
            </ul>
         </nav>
      </>
   );
};

export default ShowNav;
