"use client";

import { useEffect, useState } from "react";

const Counter = ({ users }) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);

  return (
    <div>
      <p>we have {users.length} in our app</p>
      <button onClick={increment}>{count}</button>
    </div>
  );
};

export default Counter;
