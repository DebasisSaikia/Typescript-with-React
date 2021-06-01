import React from "react";
import { isState as isProps } from "../App";

const Lists: React.FC<isProps> = ({ people }) => {
  const listData = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className="List">
          <div className="List-header">
            <img src={person.url} alt={person.name} />
            <h2>{person.name}</h2>
          </div>
          <p>Age is {person.age} </p>
          <p className="List-note">{person.note}</p>
        </li>
      );
    });
  };
  return <ul>{listData()}</ul>;
};

export default Lists;
