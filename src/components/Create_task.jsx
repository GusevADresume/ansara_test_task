import React from "react";
import play from "../assets/play.png";
import { useTasks } from "../store/store";
import { useRef } from "react";

export default function Create_task() {
  const inputValue = useRef(null);
  const addTasks = useTasks((state) => state.addTask);
  const createTask = () => {
    const taskObject = {
      value: inputValue.current.value,
      timeStampStart: String(new Date()),
      timeStampClose: null,
      status: false,
    };
    if (taskObject.value === "") {
      alert("null");
    } else {
      addTasks(
        taskObject.value,
        taskObject.timeStampStart,
        taskObject.timeStampClose,
        taskObject.status
      );
      inputValue.current.value = null;
    }
  };
  return (
    <div className="Create_task_wraper">
      <input ref={inputValue} className="Create_task_input"></input>
      <div onClick={createTask} className="Create_task_button">
        <img className="Create_task_button_img" src={play} alt="=>>"></img>
      </div>
    </div>
  );
}
