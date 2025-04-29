import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory(categories[0]);
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label htmlFor="task-text">Task Details</label>
      <input
        id="task-text"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New task text"
      />
      <label htmlFor="category">Category</label>
      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <input type="submit" value="Add task" disabled={!text} />
    </form>
  );
}

export default NewTaskForm;
