import React from "react";
import { useTasks } from "../store/store";
import Single_task from "./Single_task";
import { nanoid } from "nanoid";

export default function Current_tasks() {
  const tasks = useTasks((state) => state.tasks);
  return (
    <div className="Current_taskt_area">
      {tasks.map((element) => {
        return <Single_task key={nanoid()} taskObject={element} />;
      })}
    </div>
  );
}
