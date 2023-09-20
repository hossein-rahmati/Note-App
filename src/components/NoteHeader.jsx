const languages = [
  { code: "en", native: "English" },
  { code: "fa", native: "Persian" },
];

function NoteHeader({ notes, sortBy, onSort, onTranslate, translate }) {
  return (
    <div className="w-full bg-white shadow-md">
      <div className=" max-w-[120rem] m-auto py-4 flex flex-col gap-6 items-center justify-around sm:flex-row sm:gap-0">
        <div className="flex gap-6">
          {languages.map((language, i) => {
            const { code, native } = language;
            return (
              <button
                className="border-2 py-1 px-3 rounded-lg"
                key={i}
                onClick={() => onTranslate(code)}
              >
                {native}
              </button>
            );
          })}
        </div>
        <h2 className="text-xl font-bold">
          {translate("myNotes")} ({notes.length})
        </h2>
        <select
          className="border border-gray-300 bg-white text-gray-900 rounded-lg focus:ring-blue-500 p-2"
          value={sortBy}
          onChange={onSort}
        >
          <option value="latest">{translate("sort.earliest")}</option>
          <option value="earliest">{translate("sort.latest")}</option>
          <option value="completed">{translate("sort.completed")}</option>
        </select>
      </div>
    </div>
  );
}

export default NoteHeader;
