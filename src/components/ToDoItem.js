import React from "react";
import styled from "styled-components";

const ToDoItem = (props) => {
  const { toDoList } = props;
  const list = toDoList.map((item) => (
    <Li key={item.id} id={item.id}>
      {item.text}
      <button>Del</button>
    </Li>
  ));
  console.log(list.length !== 0);
  return <ul>{list}</ul>;
};

const Li = styled.li`
  list-style: none;
  button {
    margin-left: 10px;
  }
`;

export default ToDoItem;
