import React from "react";
import styles from "../styles/Message.module.css";

const Message = ({ message }) => (
  <p id="message" className={styles.message}>
    {message}
  </p>
);

export default Message;
