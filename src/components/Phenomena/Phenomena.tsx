import React, { useMemo, useState } from "react";
import data from "../../data/phenomena.json";
import { PhenomenaTable } from "./PhenomenaTable";
import { rollD100 } from "../../utils/rollD100";
import "./Phenomena.css";
import { IPhenomena } from "../../utils/types/phenomena";

const list = (data as IPhenomena).phenomena;

export const Phenomena = () => {
  const [roll, setRoll] = useState(0);
  const value = useMemo(() => list[roll - 1] || null, [roll]);

  return (
    <div className="phenomena">
      <h1>Значение событий - Явления</h1>
      <button onClick={() => setRoll(rollD100())}>Кубик</button>
      {value && (
        <h2 className="actions__value">
          {value} <span>({roll})</span>
        </h2>
      )}
      <PhenomenaTable list={list} active={value} />
    </div>
  );
};
