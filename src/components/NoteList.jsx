import { useDispatchNotes, useNotes } from "../context/NotesContext";

function NoteList({ sortBy, theme }) {
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
        <NoteItem key={n.id} note={n} theme={theme} />
      ))}
    </div>
  );
}

export default NoteList;

function NoteItem({ note, theme }) {
  const { dispatch } = useDispatchNotes();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div
      className={`flex flex-col gap-2 w-full  p-4 rounded-lg ${
        theme === "dark" ? "bg-gray-700" : "bg-white"
      }`}
    >
      {/* note item header */}
      <div className="flex justify-between items-start border-b pb-2">
        <div className={`${note.completed ? "line-through opacity-50" : ""}`}>
          {/* title */}
          <p className="font-bold text-lg max-w-[12rem] sm:max-w-lg md:max-w-xl md:mr-4 break-words">
            {note.title}
          </p>
          {/* description */}
          <p className="opacity-60 max-w-[12rem] sm:max-w-lg md:max-w-xl md:mr-4 break-words ">
            {note.description}
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => dispatch({ type: "delete", payload: note.id })}
          >
            ❌
          </button>
          <input
            className="w-5 h-5 cursor-pointer"
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
