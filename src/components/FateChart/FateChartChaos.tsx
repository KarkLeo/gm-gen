import React, { FC } from "react";

interface FateChartChaosProps {
  chaos: number;
  setChaos: (value: number) => void;
  chaosList: number[];
}
export const FateChartChaos: FC<FateChartChaosProps> = ({
  chaos,
  setChaos,
  chaosList,
}) => {
  return (
    <div className="chaos">
      <div className="chaos__range">
        <input
          type="range"
          min={1}
          max={9}
          value={chaos}
          step="1"
          list="values"
          onChange={(e) => {
            setChaos(Number(e.target.value));
          }}
        />
      </div>
      <div className="chaos__buttons">
        {chaosList.map((item) => (
          <button
            key={item}
            onClick={() => setChaos(item)}
            className={chaos === item ? "active" : ""}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="chaos__title">Уровень Хаоса</div>
    </div>
  );
};
