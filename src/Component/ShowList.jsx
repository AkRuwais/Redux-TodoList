import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTask } from "../Redux/TaskSlice";
import { editTask } from "../Redux/TaskSlice";
import Edit from "./EditTask";
import Button from "react-bootstrap/Button";

export default function ShowList() {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState();

  const editInput = (e) => {
    // console.log(e.target.value);
    setNewTask(() => e.target.value);
  };

  const task = useSelector((store) => store.todo.tasks);
  console.log(task, "+++++++++++++++++++++");
  const handleRemove = (id) => {
    dispatch(deleteTask(id));
  };

  const handleEdit = (id) => {
    // console.log(id);
    const updatedTask = {
      task: newTask,
      id: id,
    };
    dispatch(editTask(updatedTask));
  };

  return (
    <>
      {task.map((element) => {
        return (
          <div key={element.id}>
            <h3
              style={{
                color: "#e0d5d5",
                textAlign: "center",
                margin: "30px 0",
                textShadow: "5px 7px 4px #01262e",
              }}
            >
              {element.text}
            </h3>
            <Button
              variant="danger"
              onClick={() => handleRemove(element.id)}
              type="button"
            >
              Remove
            </Button>

            <Edit id={element.id} taskName={element.text} />
          </div>
        );
      })}
    </>
  );
}
