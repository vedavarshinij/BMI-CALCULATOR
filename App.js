import './App.css';
import { useState } from 'react';

function App() {
  const [num, setnum] = useState({
    name: "Your"
  });
  const [height, setheight] = useState("");
  const [weight, setweight] = useState("");

  function calculate() {
    let bmi = (weight / ((height / 100) ** 2)).toFixed(1);
    let result = '';

    if (bmi < 18.5) {
      result = 'Underweight';
    } else if (18.5 <= bmi && bmi <= 24.9) {
      result = 'Healthy';
    } else if (25 <= bmi && bmi <= 29.9) {
      result = 'Overweight';
    } else if (30 <= bmi && bmi <= 34.9) {
      result = 'Obese';
    } else if (35 <= bmi) {
      result = 'Extremely obese';
    }

    setnum(prev =>
      ({ ...prev, height: height, weight: weight, bmi: bmi, result: result }));
  }

  function reset() {
    setheight("");
    setweight("");
    setnum({ name: "Your" });
  }

  return (
    <div className="App">
      <div className="wrapper">
        <h1>BMI Calculator</h1>
        <h3>Height</h3>
        <input
          type='text'
          placeholder='enter height in cm'
          value={height}
          onChange={(e) => setheight(e.target.value)}
        />
        <h3>Weight</h3>
        <input
          type='text'
          placeholder='enter weight in kg'
          value={weight}
          onChange={(e) => setweight(e.target.value)}
        />
        <br />
        <br />
        <button onClick={calculate}>Calculate</button>
        <button onClick={reset}>Reset</button>
        {num.result && <h1>{num.name} BMI is {num.bmi} and your status is {num.result}</h1>}
      </div>
    </div>
  );
}

export default App;
