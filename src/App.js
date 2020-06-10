import React, { Fragment } from "react";
import WriteToDo from "./components/WriteToDo";
import TaskList from "./components/TaskList";
import styled, { createGlobalStyle } from "styled-components";

class App extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const toDoInput = document.querySelector("input");
    const toDoText = toDoInput.value;
    console.log(toDoText);
    toDoInput.value = "";
  }

  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <ToDoContainer>
          <WriteToDo onSubmit={(e) => this.handleSubmit(e)} />
          <TaskList />
        </ToDoContainer>
      </Fragment>
    );
  }
}

const GlobalStyle = createGlobalStyle`
body {  
  padding: 0;
  margin: 0;
  }
`;

const ToDoContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

export default App;
