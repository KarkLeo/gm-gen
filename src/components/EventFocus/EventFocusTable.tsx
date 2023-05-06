import React, { FC } from "react";
import { IEventFocus } from "../../utils/types/eventFocus";

interface EventFocusTableProps {
  list: IEventFocus[];
  active: IEventFocus | null;
}

export const EventFocusTable: FC<EventFocusTableProps> = ({ list, active }) => {
  return (
    <div className="event-focus-table">
      {list.map(({ min, max, text }) => (
        <div
          key={text}
          className={
            active?.text === text
              ? "event-focus-table__item active"
              : "event-focus-table__item"
          }
        >
          <span className="event-focus-table__number">
            {min} - {max}
          </span>
          <span className="event-focus-table__name">{text}</span>
        </div>
      ))}
    </div>
  );
};
