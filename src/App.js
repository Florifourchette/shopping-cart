import React from "react";
import Eshop from "./components/Eschop";
import Instructions from "./Instructions";
import "./index.css";

const App = () => {
  return (
    <div className="container">
      <Instructions />
      <div className="block">
        <Eshop />
      </div>
    </div>
  );
};

export default App;
