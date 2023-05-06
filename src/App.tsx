import React from "react";
import "./App.css";
import { FateChart } from "./components/FateChart/FateChart";
import { EventFocus } from "./components/EventFocus/EventFocus";
import { Actions } from "./components/Actions/Actions";
import { Phenomena } from "./components/Phenomena/Phenomena";
import { FateChartDescription } from "./components/FateChart/FateChartDescription";

function App() {
  return (
    <div className="App">
      <div className="root">
        <div
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <FateChart />
          <FateChartDescription />
        </div>

        <EventFocus />
        <Actions />
        <Phenomena />
      </div>
    </div>
  );
}

export default App;
