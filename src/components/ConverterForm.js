// src/components/ConverterForm.js
import React, { useState } from "react";
import styles from "../styles/ConverterForm.module.css";

const ConverterForm = ({ onConvert }) => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("eur");

  const handleSubmit = (e) => {
    e.preventDefault();
    onConvert(amount, currency);
  };

  return (
    <form id="converter-form" onSubmit={handleSubmit} className={styles.form}>
      <input
        type="number"
        id="amount"
        name="amount"
        placeholder="100"
        min="0"
        step="0.01"
        className={styles.input}
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select
        id="selected-currency"
        name="currency"
        className={styles.select}
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      >
        <option value="eur">EUR</option>
        <option value="usd">USD</option>
        <option value="chf">CHF</option>
      </select>
      <button type="submit" className={styles.button}>
        Convert
      </button>
    </form>
  );
};

export default ConverterForm;
