import React, { useState } from "react";
import CodeBox from "../../../../../components/CodeBox";
import FactorialCalculator from "./examples/FactorialCalculator";


function UseMemo() {
  const [number, setNumber] = useState(1);
  const [counter, setCounter] = useState(0);

  return (
    <div className="py-4">
      <h2 className="text-primary fw-bold mb-4">useMemo Hook in React</h2>

      <p>
        The <strong>useMemo</strong> hook is used for performance optimization by memoizing
        the result of a calculation. It takes a function and an array of dependencies. If the dependencies haven’t changed between renders, it skips recalculating and returns the cached result.
      </p>

      <h5 className="text-dark fw-semibold mt-4">🎯 Why useMemo?</h5>
      <ul>
        <li>✅ Avoids unnecessary recalculations of expensive functions.</li>
        <li>✅ Optimizes performance in large applications.</li>
        <li>✅ Ideal for heavy computations based on stable dependencies.</li>
      </ul>

      <h5 className="text-dark fw-semibold mt-4">🔧 Syntax:</h5>
      <div style={{ overflowX: "auto" }}>
        <CodeBox
          language="javascript"
          code={`const memoizedValue = useMemo(() => computeValue(a, b), [a, b]);`}
        />
      </div>

      <h3 className="mt-5 mb-3 border-bottom pb-1">Example: Factorial Calculator</h3>
      <div style={{ overflowX: "auto" }}>
        <CodeBox
          language="javascript"
          code={`import React, { useMemo } from "react";
          
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
          `}
        />
      </div>

      <h6 className="fw-semibold mt-3">✅ Output:</h6>

      {/* Render factorial component with props */}
      <FactorialCalculator number={number} setNumber={setNumber} counter={counter} setCounter={setCounter} />
    </div>
  );
}

export default UseMemo;
