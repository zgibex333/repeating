import { useState } from "react";
import styles from "./index.module.scss";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <span className={styles.body}>{counter}</span>
      <button onClick={() => setCounter((prev) => prev + 1)}>increment</button>
    </>
  );
};
