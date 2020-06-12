import React from "react";
import styled from "styled-components";
import ToDoItem from "./ToDoItem";
import FinishedItem from "./FinishedItem";

const TaskList = (props) => {
  const { toDoList } = props;
  return (
    <Container>
      <ListContainer>
        <h3>To Do</h3>
        <ToDoItem toDoList={toDoList} onClick={(e) => props.onClick(e)} />
      </ListContainer>
      <ListContainer>
        <h3>Finished</h3>
        <FinishedItem />
      </ListContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const ListContainer = styled.div`
  width: 200px;
  border: 1px solid grey;
  display: flex;
  flex-direction: column;
  h3 {
    margin: 0 auto;
  }
  &:first-child {
    margin-right: 30px;
  }
`;

export default TaskList;
