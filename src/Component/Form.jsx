import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/TaskSlice";
import Button from "react-bootstrap/Button";
import "./Form.css";
import Header from "./Header";
import ShowList from "./ShowList";

export default function Form() {
  const despatch = useDispatch();

  // const [newTask, setNewTask] = useState(null);
  const [inputvalue, setinputvalue] = useState("");

  console.log(inputvalue);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputvalue.trim() !== "") {
      const task = {
        id: Date.now(),
        text: inputvalue,
        complited: false,
      };

      despatch(addTask(task));
      setinputvalue("");
    }
  };

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <div className="form">
            <input
              type="text"
              name="task"
              placeholder="Enter here..."
              value={inputvalue}
              onChange={(e) => setinputvalue(e.target.value)}
            />
            <Button
              style={{ padding: "10px", width: "80px" }}
              variant="success"
              type="submit"
              onClick={handleSubmit}
            >
              ADD
            </Button>
          </div>
        </div>
        <div>
          <ShowList />
        </div>
      </div>
    </div>
  );
}
