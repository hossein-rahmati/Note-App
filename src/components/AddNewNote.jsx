import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddNewNote({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      toast.info("لطفا هردو فیلد را پر کنید");
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
    toast.success("!یادداشت با موفقیت اضافه شد");
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="font-bold text-2xl">اضافه کردن یادداشت جدید</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="عنوان"
          className="p-2 rounded-md font-medium"
          type="text"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="متن یادداشت..."
          className="p-2 rounded-md font-medium"
          type="text"
        />
        <button type="submit" className="btn-primary">
          افزودن
        </button>
        <ToastContainer autoClose={2500} />
      </form>
    </div>
  );
}

export default AddNewNote;
