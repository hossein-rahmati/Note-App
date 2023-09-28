import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useNotes } from "../context/NotesContext";

function NoteHeader({ onTranslate, translate, theme, onThemeToggle }) {
  const { notes } = useNotes();
  return (
    <div
      className={`w-full shadow-md ${
        theme === "light" ? "bg-white" : "bg-gray-700"
      }`}
    >
      <div className=" max-w-6xl m-auto flex flex-row items-center gap-4 py-6 lg:px-8 justify-around lg:justify-between">
        <h2 className="font-bold sm:text-xl">
          {translate("myNotes")} ({notes.length})
        </h2>
        <div className="flex gap-2">
          <select
            onChange={(e) => onTranslate(e.target.value)}
            className={`border-2 p-1 rounded-lg outline-0 ${
              theme === "light" ? "bg-white" : "bg-gray-700"
            }`}
          >
            <option value="en">English</option>
            <option value="fa">فارسی</option>
          </select>
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
