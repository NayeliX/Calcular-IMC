import React, { useState } from 'react';

const App = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const weightInKg = parseFloat(weight);
      const heightInM = parseFloat(height) / 100; // Convert height to meters
      const bmi = weightInKg / (heightInM * heightInM);

      setResult(bmi.toFixed(2));
      setError(null);
    } else {
      setResult(null);
      setError('Por favor, completa todos los campos.');
    }
  };

  const getBMIMessage = () => {
    if (result === null) {
      return null;
    }

    const bmi = parseFloat(result);

    if (bmi < 18.5) {
      return 'Tu peso está bajo. Debes considerar aumentar tu ingesta calórica.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return '¡Felicidades! Tu peso es saludable. ¡Sigue así!';
    } else {
      return 'Tu peso está por encima del rango saludable. Considera hablar con un profesional de la salud.';
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
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result !== null && (
        <div>
          <p>
            Tu Índice de Masa Corporal (IMC) es: <strong>{result}</strong>
          </p>
          <p>{getBMIMessage()}</p>
        </div>
      )}
    </div>
  );
};

export default App;
