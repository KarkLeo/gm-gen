import React from "react";
import { parseFateChart } from "../../utils/parceFateChart";
import data from "../../data/fateChart.json";
import { FateChartProbability } from "./FateChartProbability";
import { FateChartValue } from "./FateChartValue";
import { FateChartChaos } from "./FateChartChaos";
import "./FateChart.css";

const fateChart = parseFateChart(data);
const chaosList = [9, 8, 7, 6, 5, 4, 3, 2, 1];

export const FateChart = () => {
  const [probability, setProbability] = React.useState(5);
  const [chaos, setChaos] = React.useState(5);
  const [roll, setRoll] = React.useState(0);

  const value = React.useMemo(
    () => (fateChart[probability] ? fateChart[probability][chaos as 1] : null),
    [probability, chaos]
  );
  return (
    <div className="fate">
      <FateChartProbability
        probability={probability}
        setProbability={setProbability}
        fateChart={fateChart}
      />
      <FateChartValue value={value} setRoll={setRoll} roll={roll} />

      <FateChartChaos chaos={chaos} setChaos={setChaos} chaosList={chaosList} />
    </div>
  );
};
