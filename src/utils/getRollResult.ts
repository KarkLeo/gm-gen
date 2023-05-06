import { IFateChartValue } from "./parceFateChart";

const results = {
  "yes+": "Супер да",
  yes: "Да",
  no: "Нет",
  "no+": "Супер нет",
};

export const getRollResult = (
  roll: number,
  fateChart: IFateChartValue
): string => {
  if (roll < fateChart.min) return results["yes+"];
  if (roll < fateChart.value) return results["yes"];
  if (roll < fateChart.max) return results["no"];
  return results["no+"];
};
