import React from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";
import Logo from "../../assets/logo.svg";

const NavBar = () => {
   return (
      <section className={styles.header}>
         <header className={styles.logo}>
            <Image src={Logo} alt="Logo" />
         </header>
         <nav className={styles.nav}>
            <ul>
               <li>Home</li>
               <li>Pages</li>
               <li>Contact Us</li>
               <li>Blogs</li>
            </ul>
         </nav>
         <div className={styles.input}>
            <input type="text" placeholder="Search for website" />
         </div>
      </section>
   );
};

export default NavBar;
