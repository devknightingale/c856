import React from "react";
import styles from "./Footer.module.css";
import { getImageUrl } from "../../utils";

export const Footer = () => {
  return (
    <section className={styles.container}>
      <div className={styles.horizontalDivider}></div>
      <div className={styles.categoryContainer}>
        <div className={styles.category}>
          <h1 className={styles.categoryHeader}>Trip Planning</h1>
          <ul className={styles.links}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#stay">Stay</a>
            </li>
            <li>
              <a href="#dining">Dining</a>
            </li>
            <li>
              <a href="#events">Events</a>
            </li>
          </ul>
        </div>

        <div className={styles.category}>
          <h1 className={styles.categoryHeader}>About Us</h1>
          <ul className={styles.links}>
            <li>
              <a href="#blank">C856 Task 1</a>
            </li>
            <li>
              <a href="#blank">Katrina Roland</a>
            </li>
            <li>
              <a href="#blank">July 2024</a>
            </li>
            <li>
              <a href="#blank">WGU</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.horizontalDivider}></div>
    </section>
  );
};
