import React from "react";
import "./App.css";
import Header from "./Header";
import TaskInput from "./TaskInput";
import toDoData from "./toDoData";
import ToDoItems from "./ToDoItems";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDoData: toDoData,
      inputField: "",
    };
    this.handle_change = this.handle_change.bind(this);
    this.addNewTask = this.addNewTask.bind(this);
    this.habdleInput = this.habdleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  //handle checkbox change and setting to state
  handle_change(id) {
    this.setState((prevState) => {
      const mappedData = prevState.toDoData.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      });
      return {
        toDoData: mappedData,
      };
    });
  }

  //handle input text and save to inputField key in state
  habdleInput(event) {
    const { value } = event.target;
    this.setState({
      inputField: value,
    });
  }

  //handle click on delete button, delete obj from arr and set in state
  deleteItem(id) {
    this.setState((prevState) => {
      prevState.toDoData.splice(id - 1, 1);
      return {
        toDoData: prevState.toDoData,
      };
    });
  }

  //handle AddButton event and add new task to state
  addNewTask() {
    this.setState((prevState) => {
      if (prevState.inputField) {
        const toDoArr = prevState.toDoData;
        toDoArr.push({
          id: prevState.toDoData[prevState.toDoData.length - 1].id + 1,
          text: prevState.inputField,
          completed: false,
        });
        return {
          toDoData: toDoArr,
          inputField: "",
        };
      }
    });
  }

  render() {
    return (
      <div className="content">
        <Header />
        <ToDoItems
          data={this.state.toDoData}
          handle_change={this.handle_change}
          deleteItem={this.deleteItem}
        />
        <TaskInput
          data={this.state.toDoData}
          inputVal={this.state.inputField}
          addNewTask={this.addNewTask}
          habdleInput={this.habdleInput}
        />
      </div>
    );
  }
}

export default App;
