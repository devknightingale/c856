import React from "react";
import styles from "./Home.module.css";
import { getImageUrl } from "../../utils";

export const Home = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Find new things to do</h1>
        <h2 className={styles.subtitle}>Summer Events</h2>
        <div className={styles.more}>Read More ➜</div>
      </div>
    </section>
  );
};
