import React, { useState, useCallback } from "react";
import Button from "./Button";

function UseCallbackExample() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  // memoized callback
  const incrementCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <>
      <h2>Count : {count}</h2>
      <h2>Other : {other}</h2>
      <Button handleClick={incrementCount} label="Increment Count" />
      <button className="btn btn-success" onClick={() => setOther(other + 1)}>
        Update Other
      </button>
    </>
  );
}

export default UseCallbackExample;
