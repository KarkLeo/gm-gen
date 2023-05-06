import React, { FC } from "react";

interface PhenomenaTableProps {
  list: string[];
  active: string | null;
}

export const PhenomenaTable: FC<PhenomenaTableProps> = ({ list, active }) => {
  return (
    <div className="phenomena-table">
      {list.map((text, index) => (
        <div
          key={text}
          className={
            active === text
              ? "phenomena-table__item active"
              : "phenomena-table__item"
          }
        >
          <span className="actions-table__number">{index + 1}.</span>
          <span className="actions-table__name">{text}</span>
        </div>
      ))}
    </div>
  );
};
