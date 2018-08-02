import React from "react";

const List = props => {
  return (
    <ul>
      {props.items.map((item, i) => (
        <li key={i}>
          <span>{item.name}</span>
          <button onClick={() => props.remove(item)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default List;
