import "./App.css";
import { useState } from "react";

const message = ["Learn HTML & CSS", "Learn React JS", "Learn Node JS"];
function App() {
  const [step, setStep] = useState(1);
  const [open, setOPen] = useState(true);
  const [count, setCount] = useState(0);

  function handleNext() {
    if (step <= 2) {
      setStep(step + 1);
    }
  }
  function handlePreview() {
    if (step > 1) {
      setStep(step - 1);
    }
  }
  function hanleCount() {
    if (step === count) {
      setCount(count + step);
    } else {
      setCount(count + 1);
    }
  }

  return (
    <>
      <div className="btn-cont">
        <button
          className="btn"
          onClick={() => {
            setOPen(!open);
          }}
        >
          &times;
        </button>
      </div>
      {open && (
        <div className="steps">
          <div className="numbers">
            <div className={step === 1 ? "active" : ""}>1</div>
            <div className={step === 2 ? "active" : ""}>2</div>
            <div className={step === 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {message[step - 1]}
          </p>
          <p>{count}</p>
          <div className="buttons">
            <button onClick={handlePreview}>Preview</button>
            <button onClick={handleNext}>Next</button>
            <button onClick={hanleCount}>Add</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;