import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useNotes } from "../context/NotesContext";

const languages = [
  { code: "en", native: "English" },
  { code: "fa", native: "فارسی" },
];

function NoteHeader({ onTranslate, translate, theme, onThemeToggle }) {
  const { notes } = useNotes();
  return (
    <div
      className={`w-full shadow-md ${
        theme === "light" ? "bg-white" : "bg-gray-700"
      }`}
    >
      <div className=" max-w-[100rem] m-auto flex flex-col items-center gap-4 py-6 sm:flex-row sm:justify-evenly">
        <h2 className="text-xl font-bold sm:order-2">
          {translate("myNotes")} ({notes.length})
        </h2>
        <div className="flex gap-2 sm:order-1">
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
        <div className="flex gap-2 sm:order-3">
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
        </div>
      </div>
    </div>
  );
}

export default NoteHeader;
