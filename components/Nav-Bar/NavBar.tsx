import React, { useState } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";
import Logo from "../../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignRight } from "@fortawesome/free-solid-svg-icons";
import ShowNav from "./ShowNav";

const NavBar = () => {
   const [show, setShow] = useState(false);

   return (
      <>
         <section className={styles.header}>
            <header className={styles.logo}>
               <Image src={Logo} alt="Logo" />
            </header>
            {show ? (
               <ShowNav setShow={setShow} />
            ) : (
               <nav className={styles.nav}>
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
            )}
            <div className={styles.input}>
               <input type="text" placeholder="Search for website" />
            </div>
            <button className={styles.nav_toggle} onClick={() => setShow(true)}>
               <FontAwesomeIcon icon={faAlignRight} />
            </button>
         </section>
      </>
   );
};

export default NavBar;
