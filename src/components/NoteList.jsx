function NoteList({ notes, onDelete, onCheck }) {
  return (
    <div className="space-y-5">
      {notes.map((n) => (
        <NoteItem key={n.id} note={n} onDelete={onDelete} onCheck={onCheck} />
      ))}
    </div>
  );
}

export default NoteList;

function NoteItem({ note, onDelete, onCheck }) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className="flex flex-col gap-2 w-full bg-white p-4 rounded-lg">
      {/* note item header */}
      <div className="flex justify-between items-center border-b pb-2">
        <div className={`${note.completed ? "line-through opacity-50" : ""}`}>
          {/* title */}
          <p className="font-bold text-lg break-words">{note.title}</p>
          {/* description */}
          <p className="opacity-60 break-words">{note.description}</p>
        </div>
        <div className="space-x-4 flex items-center">
          <button onClick={() => onDelete(note.id)}>❌</button>
          <input
            onChange={onCheck}
            className="w-5 h-5 cursor-pointer"
            type="checkbox"
            id={note.id}
            checked={note.completed}
            value={note.id}
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
