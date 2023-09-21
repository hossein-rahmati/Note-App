import React, { useState } from "react";
import toast from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";

function AddNewNote({ onAddNote, translate, theme }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      toast.error(translate("addNewNote.toastInfo"));
      return;
    }
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
    toast.success(translate("addNewNote.toastSuccess"));
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="font-bold text-2xl">{translate("addNewNote.header")}</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={translate("addNewNote.titlePlaceHolder")}
          className={`p-2 rounded-md font-medium ${
            theme === "dark" ? "bg-gray-700" : ""
          }`}
          type="text"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder={translate("addNewNote.descritptionPlaceHolder")}
          className={`p-2 rounded-md font-medium ${
            theme === "dark" ? "bg-gray-700" : ""
          }`}
          type="text"
        />
        <button type="submit" className="btn-primary">
          {translate("addNewNote.addButton")}
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
