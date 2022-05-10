import React from "react";
import styles from "./Button.module.css";

const Button = ({ name }: { name: any }) => {
   return (
      <button className={styles.button}>
         <span>{name}</span>
      </button>
   );
};

export default Button;
