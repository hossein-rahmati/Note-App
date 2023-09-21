import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const languages = [
  { code: "en", native: "English" },
  { code: "fa", native: "فارسی" },
];

function NoteHeader({
  notes,
  sortBy,
  onSort,
  onTranslate,
  translate,
  theme,
  onThemeToggle,
}) {
  return (
    <div
      className={`w-full shadow-md ${
        theme === "light" ? "bg-white" : "bg-gray-700"
      }`}
    >
      <div className=" max-w-[120rem] m-auto py-4 flex flex-col gap-6 items-center justify-around sm:flex-row sm:gap-0">
        <div className="flex gap-2">
          {languages.map((language, i) => {
            const { code, native } = language;
            return (
              <button
                className="border-2 py-1 px-3 rounded-lg lg:hover:bg-blue-600 lg:hover:text-white transition-all"
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
        <button
          className="border-2 p-1 rounded-lg"
          onClick={() => onThemeToggle(theme)}
        >
          {theme === "dark" ? (
            <SunIcon className="w-6 h-6 text-yellow-300" />
          ) : (
            <MoonIcon className="w-6 h-6 " />
          )}
        </button>
        <select
          className={`border-2 border-gray-300  rounded-lg focus:ring-blue-500 p-2 ${
            theme === "dark"
              ? "bg-gray-700 text-zinc-50"
              : "bg-white text-gray-900"
          }`}
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
