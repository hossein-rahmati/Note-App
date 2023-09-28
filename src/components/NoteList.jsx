import {
  CheckCircleIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { useDispatchNotes, useNotes } from "../context/NotesContext";
import { useState } from "react";
import toast from "react-hot-toast";

function NoteList({ sortBy, theme, translate }) {
  const { notes } = useNotes();
  let sortedNotes = notes;

  if (sortBy === "earliest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

  if (sortBy === "latest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );

  if (sortBy === "completed")
    sortedNotes = [...notes].sort(
      (a, b) => Number(b.completed) - Number(a.completed)
    );

  return (
    <div className="space-y-5">
      {sortedNotes.map((n) => (
        <NoteItem key={n.id} note={n} theme={theme} translate={translate} />
      ))}
    </div>
  );
}

export default NoteList;

function NoteItem({ note, theme, translate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedNote, setUpdatedNote] = useState(note);
  const { dispatch } = useDispatchNotes();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const handleEdit = () => {
    if (!updatedNote.title || !updatedNote.description) {
      toast.error(translate("addNewNote.toastInfo"), { id: 1 });
      return;
    }
    setIsEditing((prev) => !prev);
    dispatch({ type: "edit", payload: updatedNote });
  };

  return (
    <div
      className={`flex flex-col gap-2 p-4 rounded-lg  ${
        theme === "dark" ? "bg-gray-700" : "bg-white"
      }`}
    >
      {/* note item header */}
      <div className="flex justify-between items-start gap-2 border-b pb-2 basis-5/6">
        {/* note detail section */}
        <div
          className={`flex flex-col gap-2 w-full ${
            note.completed ? "line-through opacity-50" : ""
          }`}
        >
          {/* title */}
          {isEditing ? (
            <input
              className={`font-medium sm:text-lg rounded-sm px-2 w-full focus:outline-blue-600 ${
                theme === "dark" ? "bg-gray-800" : "bg-gray-300"
              }`}
              value={updatedNote.title}
              onChange={(e) =>
                setUpdatedNote({ ...updatedNote, title: e.target.value })
              }
            />
          ) : (
            <p className="font-medium sm:text-lg break-words px-2">
              {note.title}
            </p>
          )}
          {/* description */}
          {isEditing ? (
            <textarea
              className={`resize-none min-h-[6rem] rounded-sm px-2 focus:outline-blue-600 ${
                theme === "dark" ? "bg-gray-800" : "bg-gray-300"
              }`}
              value={updatedNote.description}
              onChange={(e) =>
                setUpdatedNote({ ...updatedNote, description: e.target.value })
              }
            />
          ) : (
            <p className="opacity-60 break-words px-2 ">{note.description}</p>
          )}
        </div>

        {/* action section */}
        <div className="flex flex-col-reverse sm:flex-row pt-1 items-center gap-4 basis-1/6 rounded-lg">
          <button
            onClick={() => dispatch({ type: "delete", payload: note.id })}
          >
            <TrashIcon className="w-6 h-6 text-red-400" />
          </button>
          {isEditing ? (
            <button onClick={() => handleEdit()}>
              <CheckCircleIcon className="w-6 h-6 text-green-400" />
            </button>
          ) : (
            <button onClick={() => setIsEditing((prev) => !prev)}>
              <PencilSquareIcon className="w-6 h-6 text-blue-400" />
            </button>
          )}
          <input
            className="w-5 h-5"
            type="checkbox"
            id={note.id}
            checked={note.completed}
            value={note.id}
            onChange={(e) => {
              const noteId = Number(e.target.value);
              dispatch({ type: "check", payload: noteId });
            }}
          />
        </div>
      </div>
      {/* note item footer */}
      <div className="text-center opacity-60">
        {new Date(note.createdAt).toLocaleDateString("en-US", options)}
      </div>
    </div>
  );
}
