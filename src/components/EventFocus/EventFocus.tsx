import React, { useMemo, useState } from "react";
import { EventFocusTable } from "./EventFocusTable";
import data from "../../data/eventFocus.json";
import { IEventFocuses } from "../../utils/types/eventFocus";
import { getRollEventFocus } from "../../utils/getRollEvetnFocus";
import { rollD100 } from "../../utils/rollD100";
import "./EventFocus.css";

const list = (data as IEventFocuses).events;

export const EventFocus = () => {
  const [roll, setRoll] = useState(0);

  const value = useMemo(() => getRollEventFocus(roll, list), [roll]);

  return (
    <div className="event-focus">
      <h1>Таблица фокуса событий (базовая)</h1>
      <button onClick={() => setRoll(rollD100())}>Кубик</button>
      {value && (
        <h2 className="event-focus__value">
          {value.text} <span>({roll})</span>
        </h2>
      )}
      <EventFocusTable list={list} active={value} />
    </div>
  );
};
