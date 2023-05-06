import React, { useMemo, useState } from "react";
import data from "../../data/actions.json";
import { IActions } from "../../utils/types/actions";
import { ActionsTable } from "./ActionsTable";
import { rollD100 } from "../../utils/rollD100";
import "./Actions.css";

const list = (data as IActions).actions;

export const Actions = () => {
  const [roll, setRoll] = useState(0);
  const value = useMemo(() => list[roll - 1] || null, [roll]);

  return (
    <div className="actions">
      <h1>Значение событий - Действия</h1>
      <h3>В виде глаголов:</h3>
      <button onClick={() => setRoll(rollD100())}>Кубик</button>
      {value && (
        <h2 className="actions__value">
          {value} <span>({roll})</span>
        </h2>
      )}
      <ActionsTable list={list} active={value} />
    </div>
  );
};
