import React from "react";
import styled from "react-emotion";

const List = props => {
  return (
    <ul>
      {props.items.map((item, i) => (
        <li key={i}>
          <Item
            onClick={() => props.toggle && props.toggle(item.id)}
            isComplete={item.complete}
          >
            {item.name}
          </Item>
          <button onClick={() => props.remove(item)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default List;

const Item = styled.span`
  text-decoration: ${props => (props.isComplete ? "line-through" : "none")};
`;
