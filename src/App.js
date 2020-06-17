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
      toDos: toDos.concat({ id: Date.now(), text: toDoText, finished: false }),
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

  handleFinished(e) {
    const {
      target: {
        parentNode: { id },
      },
    } = e;
    const { toDos } = this.state;
    const elementIndex = toDos.findIndex(
      (toDo) => toDo.id === parseInt(id, 10)
    );
    let newToDos = [...toDos];
    newToDos[elementIndex].finished = true;
    newToDos[elementIndex].finishedTime = Date.now();
    this.setState({
      toDos: newToDos,
    });
  }

  handleBack(e) {
    const {
      target: {
        parentNode: { id },
      },
    } = e;
    const { toDos } = this.state;
    const elementIndex = toDos.findIndex(
      (toDo) => toDo.id === parseInt(id, 10)
    );
    let newToDos = [...toDos];
    newToDos[elementIndex].finished = false;
    newToDos[elementIndex].finishedTime = null;
    this.setState({
      toDos: newToDos,
    });
  }

  componentDidMount() {
    const { toDos } = this.state;
    const loadedTodos = localStorage.getItem("TODOS");
    const parsedLoadedTodos = JSON.parse(loadedTodos);
    this.setState({
      toDos: parsedLoadedTodos.concat(...toDos),
    });
  }

  componentDidUpdate() {
    const { toDos } = this.state;
    localStorage.setItem("TODOS", JSON.stringify(toDos));
  }

  render() {
    const { toDos } = this.state;
    return (
      <Fragment>
        <GlobalStyle />
        <ToDoContainer>
          <WriteToDo onSubmit={(e) => this.handleSubmit(e)} />
          <TaskList
            toDoList={toDos}
            handleDelete={(e) => this.handleDelete(e)}
            handleFinished={(e) => this.handleFinished(e)}
            handleBack={(e) => this.handleBack(e)}
          />
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
