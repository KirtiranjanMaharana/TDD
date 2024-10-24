import React, { useState } from "react";
import { add } from "../utils/calculater";

const StringCalculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | string>("");

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
    } catch (error) {
      if (error instanceof Error) {
        setResult(error.message);
      } else {
        setResult("An unknown error occurred.");
      }
    }
  };

  return (
    <div className="calculator-container">
      <h1>String Calculator </h1>
      <textarea
        rows={5}
        cols={40}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers (use commas or new lines)..."
      />
      <br />
      <button onClick={handleCalculate}>Click for Calculation</button>
      <h2>Result: {result}</h2>
    </div>
  );
};

export default StringCalculator;
