import React, { useState, useEffect } from 'react';

function CounterTimer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <div>{count}</div>;
}

export default CounterTimer;
