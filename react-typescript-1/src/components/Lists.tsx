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
  return (
    <div>
      <h1>List</h1>
    </div>
  );
};

export default Lists;
