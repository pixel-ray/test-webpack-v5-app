import React from "react";
import _ from "lodash";

import "./App.css";

function App() {
  return (
    <div>
      <header className="header">
        Hi! I'm the app which created to test v5 of webpack.
        <p className="hint">
          Today is 23 March and we want to check if v5 is working for us and fix
          couple of {_.join(["things", "in", "docs"], " ")}
        </p>
      </header>
    </div>
  );
}

export default App;
