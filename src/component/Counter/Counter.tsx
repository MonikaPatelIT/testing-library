import { useState } from "react";

export interface CouterProps {
  description: string;
  defaultCounter: number;
}

const Counter = ({ description, defaultCounter }: CouterProps) => {
  const [count, setCount] = useState(defaultCounter);
  const [incrementor, setIncrementor] = useState(1);
  return (
    <div>
      <h2>
        DEsc : {description} - DC {defaultCounter}
      </h2>
      <label>
        Incrementor:
        <input
          aria-label="Increment"
          value={incrementor}
          onChange={(evt) => {
            setIncrementor(parseInt(evt.target.value) || 1);
          }}
          type="number"
        />
      </label>
      <button
        aria-label="Subtract form counter"
        onClick={() => setCount(count - incrementor)}
      >
        -
      </button>
      Current Count : {count}
      <button
        aria-label="Add to Counter"
        onClick={() => setCount(count + incrementor)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
