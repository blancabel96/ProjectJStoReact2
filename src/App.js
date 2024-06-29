// src/App.js
import React, { useState } from "react";
import Title from "./components/Title";
import ConverterForm from "./components/ConverterForm";
import Result from "./components/Result";
import Message from "./components/Message";
import styles from "./styles/App.module.css";

const App = () => {
  const [result, setResult] = useState("0");
  const [message, setMessage] = useState("");

  const handleConvert = async (amount, currency) => {
    setMessage("");
    if (!amount || amount <= 0) {
      setMessage("Please enter an amount greater than zero.");
      return;
    }

    try {
      const response = await fetch(
        `https://api.nbp.pl/api/exchangerates/rates/a/${currency}/?format=json`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      if (!data || !data.rates || !data.rates[0] || !data.rates[0].mid) {
        throw new Error("Invalid data received from API");
      }

      const rate = data.rates[0].mid;
      const conversionResult = amount * rate;
      setResult(conversionResult.toFixed(2));
    } catch (error) {
      setMessage("There was a problem with the conversion: " + error.message);
    }
  };

  return (
    <div className={styles.container}>
      <Title />
      <ConverterForm onConvert={handleConvert} />
      <Result result={result} />
      <Message message={message} />
    </div>
  );
};

export default App;
