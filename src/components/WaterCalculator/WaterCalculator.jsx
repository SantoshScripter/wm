import React, { useState } from "react";

function WaterCalculator() {
    const [previousReading, setPreviousReading] = useState("");
    const [currentReading, setCurrentReading] = useState("");
    const [rate, setRate] = useState("");
    const [result, setResult] = useState("");

    const calculate = () => {
        const prev = parseFloat(previousReading);
        const curr = parseFloat(currentReading);
        const costPerLiter = parseFloat(rate);

        if (prev >= 0 && curr >= 0 && costPerLiter >= 0 && curr > prev) {
            const waterConsumed = curr - prev; // Water consumed in m³
            const waterConsumedLiters = waterConsumed * 1000; // Convert to liters
            const totalAmount = waterConsumedLiters * costPerLiter; // Calculate total cost

            setResult(`
        Water Consumed: ${waterConsumedLiters.toFixed(2)} liters
        Total Cost: ₹${totalAmount.toFixed(2)}
      `);
        } else {
            setResult("Please enter valid positive numbers. Current reading must be greater than previous reading.");
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Water Consumption Calculator</h1>
            <div style={styles.form}>
                <label style={styles.label}>Previous Reading (m³):</label>
                <input
                    type="number"
                    value={previousReading}
                    onChange={(e) => setPreviousReading(e.target.value)}
                    style={styles.input}
                    placeholder="e.g., 0433.35"
                />

                <label style={styles.label}>Current Reading (m³):</label>
                <input
                    type="number"
                    value={currentReading}
                    onChange={(e) => setCurrentReading(e.target.value)}
                    style={styles.input}
                    placeholder="e.g., 0437.43"
                />

                <label style={styles.label}>Cost per Liter (₹):</label>
                <input
                    type="number"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    style={styles.input}
                    placeholder="e.g., 0.15"
                />

                <button onClick={calculate} style={styles.button}>
                    Calculate
                </button>

                {result && <div style={styles.result}>{result}</div>}
            </div>
        </div>
    );
}

const styles = {
    container: {
        fontFamily: "Arial, sans-serif",
        margin: "20px auto",
        padding: "20px",
        maxWidth: "400px",
        backgroundColor: "#ffffff",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    },
    title: {
        fontSize: "22px",
        textAlign: "center",
        marginBottom: "20px",
        color: "#333",
    },
    form: {
        display: "flex",
        flexDirection: "column",
    },
    label: {
        marginBottom: "5px",
        fontWeight: "bold",
    },
    input: {
        padding: "8px",
        marginBottom: "15px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        fontSize: "14px",
    },
    button: {
        padding: "10px",
        fontSize: "16px",
        color: "#fff",
        backgroundColor: "#007bff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
    buttonHover: {
        backgroundColor: "#0056b3",
    },
    result: {
        marginTop: "20px",
        fontSize: "18px",
        fontWeight: "bold",
        textAlign: "center",
        color: "#2c3e50",
    },
};

export default WaterCalculator;
