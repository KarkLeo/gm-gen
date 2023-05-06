import React, { FC } from "react";
import { TFateChart } from "../../utils/parceFateChart";

interface FateChartProbabilityProps {
  fateChart: TFateChart;
  probability: number;
  setProbability: (value: number) => void;
}

export const FateChartProbability: FC<FateChartProbabilityProps> = ({
  fateChart,
  probability,
  setProbability,
}) => {
  return (
    <div className="probability">
      <div className="probability__title">Шансы</div>
      <div className="probability__buttons">
        {fateChart.map((item, index) => (
          <button
            key={item.name}
            className={probability === index ? "active" : ""}
            onClick={() => setProbability(index)}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="probability__range">
        <input
          type="range"
          min="0"
          max={fateChart.length - 1}
          value={probability}
          step="1"
          list="values"
          onChange={(e) => {
            setProbability(Number(e.target.value));
          }}
        />
        <span className="range" />
      </div>
    </div>
  );
};
