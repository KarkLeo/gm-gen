import React, { FC } from "react";

interface ActionsTableProps {
  list: string[];
  active: string | null;
}

export const ActionsTable: FC<ActionsTableProps> = ({ list, active }) => {
  return (
    <div className="actions-table">
      {list.map((text, index) => (
        <div
          key={text}
          className={
            active === text
              ? "actions-table__item active"
              : "actions-table__item"
          }
        >
          <span className="actions-table__number">{index + 1}.</span>
          <span className="actions-table__name">{text}</span>
        </div>
      ))}
    </div>
  );
};
