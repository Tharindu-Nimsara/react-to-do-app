import React from "react";

export default function TodoItem({ task, onToggleComplete, onDeleteTask }) {
  return (
    <li className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-200">
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleComplete(task.id)}
        className="w-5 h-5 cursor-pointer"
      />

      {/* Task Text */}
      <span
        className={`flex-1 text-lg ${
          task.completed ? "line-through text-gray-400" : "text-gray-800"
        }`}
      >
        {task.text}
      </span>

      {/* Delete Button */}
      <button
        onClick={() => onDeleteTask(task.id)}
        className="bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-2 rounded-lg transition duration-200"
      >
        Delete
      </button>
    </li>
  );
}
