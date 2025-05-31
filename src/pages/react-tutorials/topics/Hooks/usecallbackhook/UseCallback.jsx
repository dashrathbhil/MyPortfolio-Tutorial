import React from "react";
import CodeBox from "../../../../../components/CodeBox";
import UseCallbackExample from "./examples/UseCallbackExample";

function UseCallback() {

  const useCallbackCode = `
import React, { useCallback, useState } from "react";
import Button from "./Button";

const Button = React.memo(({ handleClick, label }) => {
  console.log(\`Rendering \${label}\`);
  return <button className="btn btn-info mx-2" onClick={handleClick}>{label}</button>;
});

function UseCallbackExample() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  const incrementCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <>
      <h2>Count : {count}</h2>
      <h2>Other : {other}</h2>
      <Button handleClick={incrementCount} label="Increment Count" />
      <button className="btn btn-success" onClick={() => setOther(other + 1)}>Update Other</button>
    </>
  );
}

export default UseCallbackExample;
`;

  return (
    <>
    <div className="py-4 container ">
      <h2 className="text-primary fw-bold mb-4">useCallback Hook in React</h2>

      <p>
        The <strong>useCallback</strong> hook memoizes a callback function and returns a memoized version that only changes if one of its dependencies changes.
        This helps prevent unnecessary re-renders in child components that rely on reference equality.
      </p>

      <h5 className="fw-semibold mt-4">🔧 Code Example:</h5>
      <div style={{ overflowX: "auto" }}>
        <CodeBox language="javascript" code={useCallbackCode} />
      </div>

      <h6 className="fw-semibold mt-3">✅ Output:</h6>
      <UseCallbackExample
       />
    </div>

    </>
  );
}

export default UseCallback;
