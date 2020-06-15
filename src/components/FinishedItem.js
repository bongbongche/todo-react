import React from "react";
import styled from "styled-components";

const FinishedItem = (props) => {
  const { toDoList } = props;
  const list = toDoList
    .filter((item) => item.finished)
    .sort((a, b) => b.finishedTime - a.finishedTime)
    .map((item) => (
      <Li key={item.id} id={item.id}>
        {item.text}
        <button onClick={(e) => props.handleBack(e)}>Back</button>
        <button onClick={(e) => props.handleDelete(e)}>Del</button>
      </Li>
    ));
  return <ul>{list}</ul>;
};

const Li = styled.li`
  list-style: none;
  button {
    margin-left: 10px;
  }
`;

export default FinishedItem;
