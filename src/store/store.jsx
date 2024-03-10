import { create, useStore } from "zustand";
import { nanoid } from "nanoid";
import { persist, createJSONStorage } from "zustand/middleware";

export const useTasks = create(
  persist(
    (set, get) => ({
      tasks: [],
      addTask: (value, timeStampStart, timeStampClose, status) => {
        const newTask = {
          id: nanoid(),
          value,
          timeStampStart,
          timeStampClose,
          status,
        };
        set({ tasks: [...get().tasks, newTask] });
      },
      closeTask: (id, timeStampClose) =>
        set({
          tasks: get().tasks.map((task) =>
            id === task.id
              ? { ...task, status: true, timeStampClose: timeStampClose }
              : task
          ),
        }),
    }),
    {
      name: "task-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
