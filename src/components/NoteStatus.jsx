import Message from "./Message";

function NoteStatus({ notes }) {
  const allNotes = notes.length;
  const completedNotes = notes.filter((n) => n.completed).length;
  const openNotes = allNotes - completedNotes;

  if (!allNotes) return <Message>هیچ یادداشتی در حال حاضر وجود ندارد</Message>;

  return (
    <ul className="flex items-center justify-between py-2 px-6 w-full opacity-50 font-semibold mb-4 text-xs sm:text-base">
      <li>
        تکمیل نشده{" "}
        <span className="bg-slate-600 text-white px-2 py-0.5 rounded-full">
          {openNotes}
        </span>
      </li>
      <li>
        تکمیل شده{" "}
        <span className="bg-slate-600 text-white px-2 py-0.5 rounded-full">
          {completedNotes}
        </span>
      </li>
      <li>
        همه{" "}
        <span className="bg-slate-600 text-white px-2 py-0.5 rounded-full">
          {allNotes}
        </span>
      </li>
    </ul>
  );
}

export default NoteStatus;
