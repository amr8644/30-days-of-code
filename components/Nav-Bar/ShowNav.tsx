import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Logo from "../../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ShowNav = ({ setShow }: any) => {
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
               <aside>
                  Home
                  <div className={styles.drop}>
                     <li>Home 1</li>
                     <li>Home 2</li>
                  </div>
               </aside>

               <aside>
                  Pages
                  <div className={styles.drop}>
                     <li>About Us</li>
                     <li>Services</li>
                     <li>Team</li>
                     <li>FAQ</li>
                  </div>
               </aside>

               <aside>Contact Us</aside>
               <aside>
                  Blogs
                  <div className={styles.drop}>
                     <li>About Us</li>
                     <li>Services</li>
                     <li>Team</li>
                     <li>FAQ</li>
                  </div>
               </aside>
            </ul>
         </nav>
      </>
   );
};

export default ShowNav;
