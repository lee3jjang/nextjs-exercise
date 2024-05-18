"use client";

import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";

type TTask = { id: number | string; title: string };

function Task({ task }: { task: TTask }) {
  const { attributes, setNodeRef, listeners, transform, transition } =
    useSortable({
      id: task.id,
    });

  const style = { transition, transform: CSS.Transform.toString(transform) };

  return (
    <div
      className="
      bg-mainBackgroundColor
      m-3
      p-3
      text-white
      rounded-md
      font-semibold
      font-md
      text-lg
      "
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      {task.title}
    </div>
  );
}

export default function Dnd() {
  const [tasks, setTasks] = useState<TTask[]>([
    { id: 1, title: "task1" },
    { id: 2, title: "task2" },
    { id: 3, title: "task3" },
    { id: 4, title: "task4" },
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((task) => (
          <Task task={task} />
        ))}
      </SortableContext>
    </DndContext>
  );

  function handleDragEnd({ active, over }) {
    if (active.id !== over.id) {
      setTasks((tasks) => {
        const oldIndex = tasks.find((task) => task.id === active.id);
        const newIndex = tasks.find((task) => task.id === over.id);
        console.log("oldIndex", oldIndex);
        console.log("newIndex", newIndex);

        const newTasks = arrayMove(tasks, oldIndex, newIndex);
        console.log("tasks", tasks);
        console.log("newTasks", newTasks);
        return newTasks;
      });
    }
  }
}
