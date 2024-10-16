import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(5);

  const handleClick = () => {
    const newcount = count + 2;
    setCount(newcount);
  };

  const handleRemove = () => {
    const removeCount = count - 1;
    setCount(removeCount);
  };

  return (
    <div>
      <button onClick={handleClick}>count now</button>
      <button onClick={handleRemove}>Count remove</button>
      <h3>Count : {count}</h3>
    </div>
  );
};
