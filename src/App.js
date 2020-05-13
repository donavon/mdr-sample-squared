import React, { useState } from 'react';
import { load } from 'marauder';
import { Thinking } from './Thinking';

// Dynamically load the Squared "data component" and specify a
// `fallback` to render while the data and the component is loaded.
// You pass `load` an import callback and an optional config object.
// Unlike `lazy`, the import does not need to export `default`.
// You can specify a `methodName` in the `config` object. `load`
// returns a component that you can use just like any statically
// loaded component. Think of Marauder's `load` as `React.lazy`
// on steroids.

const Squared = load(() => import('./Squared'), { fallback: <Thinking /> });

function App() {
  const [num, setNum] = useState(2);

  return (
    <div className="container">
      <h2>
        What is {num} x {num}?
      </h2>
      <Squared className="answer" num={num} />
      <nav>
        <button onClick={() => setNum((c) => c - 1)}>←</button>
        <button onClick={() => setNum((c) => c + 1)}>→</button>
      </nav>
    </div>
  );
}

export default App;
