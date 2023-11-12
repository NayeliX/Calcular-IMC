import React, { useState } from 'react';

const App = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const weightInKg = parseFloat(weight);
      const heightInM = parseFloat(height) / 100; // Convert height to meters
      const bmi = weightInKg / (heightInM * heightInM);

      setResult(bmi.toFixed(2));
    } else {
      setResult(null);
    }
  };

  return (
    <div>
      <h1>Calculadora de IMC</h1>
      <label>
        Peso (kg):
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </label>
      <br />
      <label>
        Altura (cm):
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </label>
      <br />
      <button onClick={calculateBMI}>Calcular IMC</button>
      {result !== null && (
        <p>
          Tu Índice de Masa Corporal (IMC) es: <strong>{result}</strong>
        </p>
      )}
    </div>
  );
};

export default App;