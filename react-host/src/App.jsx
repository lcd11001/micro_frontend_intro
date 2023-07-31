import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import CounterWrapper from "remote/CounterWrapper";

const App = () =>
{
  const divRef = useRef(null);

  useEffect(() => {
    CounterWrapper(divRef.current);
  }, []);

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: react-host</div>
      <div ref={divRef}></div>
    </div>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));
