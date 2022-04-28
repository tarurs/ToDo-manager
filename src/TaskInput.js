import React from "react";
import { TextField, Button } from "@mui/material";

function TaskInput(props) {
  return (
    <div className="inputWrapper">
      <TextField
        id="outlined-basic"
        label="New task..."
        variant="outlined"
        onChange={props.habdleInput}
        value={props.inputVal}
      />
      <Button variant="outlined" onClick={props.addNewTask}>
        Add task
      </Button>
    </div>
  );
}

export default TaskInput;
