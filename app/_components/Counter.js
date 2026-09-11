"use client";

import { useState } from "react";

export default function Counter({ users }) {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setCounter((c) => c + 1)}>{counter}</button>
      <p>There are {users.length} users</p>
    </div>
  );
}
