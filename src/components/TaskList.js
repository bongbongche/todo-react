import React from "react";
import styled from "styled-components";
import ToDoItem from "./ToDoItem";
import FinishedItem from "./FinishedItem";

class TaskList extends React.Component {
  render() {
    return (
      <Container>
        <ListContainer>
          <h3>To Do</h3>
          <ItemList>
            <ToDoItem />
          </ItemList>
        </ListContainer>
        <ListContainer>
          <h3>Finished</h3>
          <ItemList>
            <FinishedItem />
          </ItemList>
        </ListContainer>
      </Container>
    );
  }
}

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

const ItemList = styled.ul``;

export default TaskList;
