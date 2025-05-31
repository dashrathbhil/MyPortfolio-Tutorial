import React from "react";

const Button = React.memo(({ handleClick, label }) => {
  console.log(`Rendering ${label}`);
  return (
    <button className="btn btn-info mx-2" onClick={handleClick}>
      {label}
    </button>
  );
});

export default Button;
