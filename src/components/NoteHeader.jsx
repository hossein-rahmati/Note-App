import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useNotes } from "../context/NotesContext";
import { useTheme } from "../context/ThemeContext";
import { useTranslate } from "../context/TranslateContext";

function NoteHeader() {
  const { notes } = useNotes();
  const { theme, setTheme } = useTheme();
  const { t, i18n } = useTranslate();

  const handlethemeToggle = (theme) => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const handleTranslate = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem("lang", code);
  };

  return (
    <div
      className={`w-full shadow-md ${
        theme === "light" ? "bg-white" : "bg-gray-700"
      }`}
    >
      <div className=" max-w-6xl m-auto flex flex-row items-center gap-4 py-6 lg:px-8 justify-around lg:justify-between">
        <h2 className="font-semibold sm:text-xl">
          {t("myNotes")} ({notes.length})
        </h2>
        <div className="flex gap-2">
          <select
            onChange={(e) => handleTranslate(e.target.value)}
            className={`border-2 p-1 rounded-lg outline-0 ${
              theme === "light" ? "bg-white" : "bg-gray-700"
            }`}
          >
            <option disabled selected>
              {t("language")}
            </option>
            <option className="hover:bg-blue-500" value="en">
              English
            </option>
            <option className="hover:bg-blue-500" value="fa">
              فارسی
            </option>
          </select>
          <button
            className="border-2 p-1 rounded-lg"
            onClick={() => handlethemeToggle(theme)}
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
