import React from "react";
import styles from "../styles/Result.module.css";

const Result = ({ result }) => (
  <h2 className={styles.subtitle}>
    TO <span id="result">{result} PLN</span>
  </h2>
);

export default Result;
