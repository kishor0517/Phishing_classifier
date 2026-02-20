import React, { useState } from "react";
import "./App.css";

const Scanner = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");

  const handleScan = async () => {
    if (!url) return;

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: url }),
      });

      const data = await response.json();
      setResult(data.prediction);
    } catch (error) {
      setResult("Error connecting to backend");
    }
  };

  return (
    <div className="scanner-container">

      <h1>Phishing Detection</h1>
      <p>Paste a URL to check if it's safe or fake.</p>

      <input
        type="text"
        placeholder="https://example.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleScan()}
      />

      <button onClick={handleScan}>Scan URL</button>

      {result && (
        <div style={{ marginTop: "20px", fontSize: "18px" }}>
          Result: <strong>{result}</strong>
        </div>
      )}

      <footer className="footer">
        DEVELOPED BY Mayank | Manish | Kishor
      </footer>

    </div>
  );
};

export default Scanner;
