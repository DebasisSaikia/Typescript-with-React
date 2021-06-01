import React from "react";

interface isProps {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

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
