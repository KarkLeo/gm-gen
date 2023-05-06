import React, { FC } from "react";
import { rollD100 } from "../../utils/rollD100";
import { getRollResult } from "../../utils/getRollResult";
import { IFateChartValue } from "../../utils/parceFateChart";

interface FateChartValueProps {
  value: IFateChartValue | null;
  setRoll: (value: number) => void;
  roll: number | null;
}

export const FateChartValue: FC<FateChartValueProps> = ({
  value,
  setRoll,
  roll,
}) => {
  return (
    <div className="value">
      {value && (
        <div className="value__text">
          <span>{value.min}</span>
          <span className="value__text-main">{value.value}</span>
          <span>{value.max}</span>
        </div>
      )}
      <div>
        <button onClick={() => setRoll(rollD100())}>Кубик</button>
      </div>
      {!!roll && (
        <h2 className="value__result">
          {roll && value && getRollResult(roll, value)} <span>({roll})</span>
        </h2>
      )}
    </div>
  );
};
