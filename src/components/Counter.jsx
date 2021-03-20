import { useCallback, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount(prevState => prevState + 1);
  }, []);

  return (
    <div>
      <h2>{count}</h2>
      <button
        type="button"
        onClick={handleIncrement}
      >
        Incrementar
      </button>
    </div>
  );
};

export default Counter;