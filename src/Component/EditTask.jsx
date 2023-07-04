import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { editTask } from "../Redux/TaskSlice";
import { useDispatch } from "react-redux";

function Edit({ id, taskName }) {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [newTask, setNewTask] = useState();

  const editInput = (e) => {
    console.log(e.target.value);
    setNewTask(() => e.target.value);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit_ = (id) => {
    // console.log(id);
    const updatedTask = {
      task: newTask,
      id: id,
    };
    dispatch(editTask(updatedTask));
    setShow(false);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" defaultValue={taskName} onChange={editInput} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={() => handleEdit_(id)}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Edit;
