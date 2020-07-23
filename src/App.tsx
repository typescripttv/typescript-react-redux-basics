import React from "react";
import CounterControls from "./CounterControls";
import CounterDisplay from "./CounterDisplay";

const App: React.FC = () => {
  return (
    <div className="App">
      <p>
        <CounterControls />
      </p>
      <p>
        <CounterDisplay />
      </p>
    </div>
  );
};

export default App;
