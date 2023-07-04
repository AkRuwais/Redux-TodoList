import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/TaskSlice";
import Button from "react-bootstrap/Button";

export default function Form() {

    const despatch=useDispatch()
  const [newTask, setNewTask] = useState(null);

  const onchangeHandler=(e)=>{
      setNewTask(()=>e.target.value)
    //   console.log(newTask);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    const task={
        name:newTask,
        id:Date.now(),
        complete:false
    }

    despatch(addTask(task))
  };

  return (
    <form onSubmit={submitHandler}>
      <input className="mb-3" onChange={onchangeHandler} type="text" name="task" placeholder="Enter here..." />
      <Button variant="success" type="submit">ADD</Button>
    </form>
  );
}
