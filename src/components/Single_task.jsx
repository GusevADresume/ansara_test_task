import React from "react";
import { useState, useEffect, useRef } from "react";
import { useTasks } from "../store/store";

export default function Single_task({ taskObject }) {
  const clTask = useTasks((state) => state.closeTask);
  let [timerData, setTimerData] = useState("");
  let [timeSpent, setTimeSpent] = useState("");
  const [closeStatus, setCloseStatus] = useState(false);

  useEffect(() => {
    const taskStartDate = new Date(taskObject.timeStampStart);
    if (taskObject.status === false) {
      setInterval(() => {
        const timeNow = new Date();
        const mill = timeNow - taskStartDate;
        const seconds = String(Math.floor((mill / 1000) % 60)).padStart(2, "0");
        const minutes = String(Math.floor((mill / (1000 * 60)) % 60)).padStart(
          2,
          "0"
        );
        const hours = String(
          Math.floor((mill / (1000 * 60 * 60)) % 24)
        ).padStart(2, "0");
        setTimerData(`${hours}:${minutes}:${seconds}`);
      }, 1000);
    } else {
      const mill =
        new Date(taskObject.timeStampClose) -
        new Date(taskObject.timeStampStart);
      const minutes = String(Math.floor((mill / (1000 * 60)) % 60)).padStart(
        2,
        "0"
      );
      const hours = String(Math.floor((mill / (1000 * 60 * 60)) % 24)).padStart(
        2,
        "0"
      );
      setTimeSpent(`${hours} Ч: ${minutes} М`);
      setCloseStatus(true);
    }
  }, [taskObject]);

  const closeTask = () => {
    if (taskObject.status === false) {
      if (Number(timerData.split(":")[1]) > 0) {
        clTask(taskObject.id, new Date());
      } else {
        alert("Задачи длительностью менее 1 минуты не сохраняются!");
      }
    } else {
      alert("Эта задача закрыта");
    }
  };

  return (
    <div onClick={closeTask} className="Single_task_wraper">
      <div className="Single_task_text">{taskObject.value}</div>
      <div className="Single_task_timer">
        {closeStatus ? timeSpent : timerData}
      </div>
    </div>
  );
}
