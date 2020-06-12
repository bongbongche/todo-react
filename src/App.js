import React, { Fragment } from "react";
import WriteToDo from "./components/WriteToDo";
import TaskList from "./components/TaskList";
import styled, { createGlobalStyle } from "styled-components";

class App extends React.Component {
  state = {
    toDos: [],
  };

  handleSubmit(e) {
    const { toDos } = this.state;
    e.preventDefault();
    const toDoInput = document.querySelector("input");
    const toDoText = toDoInput.value;
    toDoInput.value = "";
    this.setState({
      toDos: toDos.concat({ id: Date.now(), text: toDoText }),
    });
  }

  handleDelete(e) {
    const {
      target: {
        parentNode: { id },
      },
    } = e;
    const { toDos } = this.state;
    this.setState({
      toDos: toDos.filter((toDo) => toDo.id !== parseInt(id, 10)),
    });
  }

  componentDidUpdate() {}

  render() {
    const { toDos } = this.state;
    return (
      <Fragment>
        <GlobalStyle />
        <ToDoContainer>
          <WriteToDo onSubmit={(e) => this.handleSubmit(e)} />
          <TaskList toDoList={toDos} onClick={(e) => this.handleDelete(e)} />
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
