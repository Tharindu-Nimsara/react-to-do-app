import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ tasks, onToggleComplete, onDeleteTask }) {
  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <div className="bg-white rounded-lg shadow-2xl p-6">
      {tasks.length === 0 ? (
        <p className="text-gray-400 text-center py-8">
          No tasks yet. Add one above! 👆
        </p>
      ) : (
        <>
          <ul className="space-y-3">
            {tasks.map((task) => (
              <TodoItem
                key={task.id}
                task={task}
                onToggleComplete={onToggleComplete}
                onDeleteTask={onDeleteTask}
              />
            ))}
          </ul>

          {/* Task Counter */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-gray-600 text-center">
              Total Tasks: <span className="font-bold">{tasks.length}</span> |
              Completed:{" "}
              <span className="font-bold text-green-600">{completedCount}</span>
            </p>
          </div>
        </>
      )}
    </div>
  );
}