import { useState } from "react";

export const Count2 = () => {
  const [count, setCount] = useState(5);
  const handleAddCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const handleRemoveCount = () => {
    if (count <= 0) {
      alert("shona moni ohhu ohhu");
    } else {
      const newCount = count - 1;
      setCount(newCount);
    }
  };
  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={handleAddCount}>add</button>
      <button onClick={handleRemoveCount}>remove</button>
    </div>
  );
};
