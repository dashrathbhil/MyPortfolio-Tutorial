import React, { useMemo } from "react";

function FactorialCalculator({ number, setNumber, counter, setCounter }) {
  const factorial = useMemo(() => {
    console.log("Calculating factorial...");
    const computeFactorial = (n) => {
      if (typeof n !== "number" || isNaN(n) || n < 0) return 1;
      if (n <= 1) return 1;
      return n * computeFactorial(n - 1);
    };
    return computeFactorial(number);
  }, [number]);

  return (
    <>
      <h2>Factorial Calculator</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        className="form-control mb-3 " style={{maxWidth:"100px"}}
      />
      <p>
        Factorial of <strong>{number}</strong> is <strong>{factorial}</strong>
      </p>
      <button className="btn btn-primary" onClick={() => setCounter(counter + 1)}>
        Re-Render Counter : {counter}
      </button>
    </>
  );
}

export default FactorialCalculator;
