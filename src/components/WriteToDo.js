import React from "react";
import styled from "styled-components";

class WriteToDo extends React.Component {
  render() {
    return (
      <Container>
        <h1>ToDo List</h1>
        <form onSubmit={(e) => this.props.onSubmit(e)}>
          <Input placeholder="Write a to do..." />
        </form>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  border: 1px solid #b5b5b5;
  border-radius: 10px;
  padding: 10px;
  color: #3d3d3d;
  font-size: 15px;
  &:focus {
    outline: none;
  }
`;

export default WriteToDo;
