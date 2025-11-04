import React, { useEffect, useState } from "react";

export default function TodoInput({ onAddTask, editingText, setEditingText  }) {
  const [inputValue, setInputValue] = useState("");

   // When editingText changes, update input
  useEffect(() => {
    if (editingText) {
      setInputValue(editingText);
      setEditingText(""); // Clear editingText after setting
    }
  }, [editingText, setEditingText]);

  const handleAdd = () => {
    if (inputValue.trim() !== "") {
      onAddTask(inputValue);
      setInputValue("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };


  return (
    <div className="bg-white rounded-lg shadow-2xl p-6 mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="What do you need to do?"
          className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 text-gray-700"
        />
        <button
          onClick={handleAdd}
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold px-6 py-3 rounded-lg transition duration-200"
        >
          Add
        </button>
      </div>
    </div>
  );
}