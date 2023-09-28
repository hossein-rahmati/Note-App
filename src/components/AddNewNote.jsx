import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatchNotes } from "../context/NotesContext";
import { useTheme } from "../context/ThemeContext";
import { useTranslate } from "../context/TranslateContext";

function AddNewNote() {
  const { dispatch } = useDispatchNotes();
  const { theme } = useTheme();
  const { t } = useTranslate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      toast.error(t("addNewNote.toastInfo"), { id: 1 });
      return;
    }
    const newNote = {
      title,
      description,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    dispatch({ type: "add", payload: newNote });
    setDescription("");
    setTitle("");
    toast.success(t("addNewNote.toastSuccess"), { id: 2 });
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-xl font-bold sm:text-2xl">
        {t("addNewNote.header")}
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={t("addNewNote.titlePlaceHolder")}
          className={`p-2 rounded-md font-medium ${
            theme === "dark" ? "bg-gray-700" : ""
          }`}
          type="text"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder={t("addNewNote.descritptionPlaceHolder")}
          className={`p-2 rounded-md font-medium ${
            theme === "dark" ? "bg-gray-700" : ""
          }`}
          type="text"
        />
        <button type="submit" className="btn-primary">
          {t("addNewNote.addButton")}
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
