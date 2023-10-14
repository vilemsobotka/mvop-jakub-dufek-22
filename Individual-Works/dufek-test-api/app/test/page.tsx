import * as React from 'react';

const App = () => {
  const [count, setCount] = React.useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button type="button" onClick={handleIncrease}>
        Increase
      </button>

      <div>{count}</div>
    </div>
  );
};

export default App;