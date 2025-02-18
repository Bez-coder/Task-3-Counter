import React, { useState } from 'react';

const App = () => {
 
  const [count, setCount] = useState(0);

 
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',   
        backgroundColor: '#f2f2f2',
      }}
    >
      <div 
        style={{
          backgroundColor: '#fff',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          textAlign: 'center',
          width: '300px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <h1>Counter Application</h1>
        <h2>{count}</h2>

        {/* Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <button onClick={increment}>Increment</button>
          <button 
            onClick={decrement} 
            disabled={count === 0}   // Disable if count is 0
          >
            Decrement
          </button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
