import React from "react";
import { Checkbox, FormControlLabel, FormGroup, ListItem } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

let ToDoItems = (props) => {
  const items = props.data.map((item) => (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => props.deleteItem(item.id)}
        >
          <DeleteIcon />
        </IconButton>
      }
      key={item.id}
    >
      <FormControlLabel
        control={
          <Checkbox
            checked={item.completed}
            onChange={() => props.handle_change(item.id)}
          />
        }
        label={item.text}
      />
    </ListItem>
  ));
  return (
    <FormGroup sx={{ alignContent: "center", width: "30rem" }}>
      {items}
    </FormGroup>
  );
};

export default ToDoItems;
