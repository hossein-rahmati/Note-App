import React, { useState } from "react";

function AddNewNote({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    const newNote = {
      title,
      description,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    onAddNote(newNote);
    setDescription("");
    setTitle("");
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="font-bold text-2xl">Add new note</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note title"
          className="p-2 rounded-md font-medium"
          type="text"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Note description..."
          className="p-2 rounded-md font-medium"
          type="text"
        />
        <button type="submit" className="btn-primary">
          Add Note
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
