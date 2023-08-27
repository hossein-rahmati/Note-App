function NoteStatus({ notes }) {
  const allNotes = notes.length;
  const completedNotes = notes.filter((n) => n.completed).length;
  const openNotes = allNotes - completedNotes;

  if (!allNotes)
    return (
      <h2 className="text-center font-semibold text-xl lg:text-2xl">
        No note has been added yet
      </h2>
    );

  return (
    <ul className="flex items-center justify-between py-2 px-6 w-full opacity-50 font-semibold mb-4 text-xs sm:text-base">
      <li>
        All{" "}
        <span className="bg-slate-600 text-white px-2 py-0.5 rounded-full">
          {allNotes}
        </span>
      </li>
      <li>
        Completed{" "}
        <span className="bg-slate-600 text-white px-2 py-0.5 rounded-full">
          {completedNotes}
        </span>
      </li>
      <li>
        Open{" "}
        <span className="bg-slate-600 text-white px-2 py-0.5 rounded-full">
          {openNotes}
        </span>
      </li>
    </ul>
  );
}

export default NoteStatus;
