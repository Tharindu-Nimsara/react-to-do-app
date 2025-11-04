import React, { useState } from "react";
import TodoInput from "../../components/TodoInput";
import TodoList from "../../components/TodoList";

export default function HomePage() {
  const [tasks, setTasks] = useState([]);
  const [editingText, setEditingText] = useState("");

  // Add a new task
  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle task completion
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  // Edit task function
  const editTask = (id, text) => {
    // Delete the task
    deleteTask(id);
    // Put text in input box
    setEditingText(text);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-2xl p-8 mb-6">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-2">
            My To-Do List
          </h1>
          <p className="text-gray-600 text-center">
            Stay organized and get things done!
          </p>
        </div>

        {/* Input Component */}
        <TodoInput
          onAddTask={addTask}
          editingText={editingText}
          setEditingText={setEditingText}
        />

        {/* List Component */}
        <TodoList
          tasks={tasks}
          onToggleComplete={toggleComplete}
          onDeleteTask={deleteTask}
          onEditTask={editTask}
        />
      </div>
    </div>
  );
}
