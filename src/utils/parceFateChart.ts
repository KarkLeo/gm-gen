export interface IFateChartValue {
  min: number;
  value: number;
  max: number;
}

export interface IFateChartItem {
  name: string;
  9: IFateChartValue;
  8: IFateChartValue;
  7: IFateChartValue;
  6: IFateChartValue;
  5: IFateChartValue;
  4: IFateChartValue;
  3: IFateChartValue;
  2: IFateChartValue;
  1: IFateChartValue;
}

export type TFateChart = IFateChartItem[];
export const parseFateChart = (data: Record<string, string>[]): TFateChart => {
  return data.map((row): IFateChartItem => {
    const item: IFateChartItem = {
      name: "",
      9: { min: 0, value: 0, max: 0 },
      8: { min: 0, value: 0, max: 0 },
      7: { min: 0, value: 0, max: 0 },
      6: { min: 0, value: 0, max: 0 },
      5: { min: 0, value: 0, max: 0 },
      4: { min: 0, value: 0, max: 0 },
      3: { min: 0, value: 0, max: 0 },
      2: { min: 0, value: 0, max: 0 },
      1: { min: 0, value: 0, max: 0 },
    };

    if (row.NAME) item.name = row.NAME;
    for (let i = 1; i <= 9; i++) {
      const value = row[i] || "";
      const parsedValue = value.trim().split(" ");
      if (parsedValue.length === 3) {
        item[i as 1] = {
          min: parseFloat(parsedValue[0]) || 0,
          value: parseFloat(parsedValue[1]) || 0,
          max: parseFloat(parsedValue[2]) || 0,
        };
      }
    }
    return item;
  });
};
