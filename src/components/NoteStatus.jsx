import { useNotes } from "../context/NotesContext";
import { useTheme } from "../context/ThemeContext";
import { useTranslate } from "../context/TranslateContext";
import Message from "./Message";

function NoteStatus({ sortBy, onSort }) {
  const { notes } = useNotes();
  const { theme } = useTheme();
  const { t } = useTranslate();
  const allNotes = notes.length;
  const completedNotes = notes.filter((n) => n.completed).length;
  const openNotes = allNotes - completedNotes;

  if (!allNotes) return <Message>{t("status.empty")}</Message>;

  return (
    <div className="flex flex-col pb-4">
      <ul className="flex items-center justify-between py-2 px-2 w-full opacity-50  mb-4 text-xs sm:text-base">
        <li>
          {t("status.all")}{" "}
          <span className="bg-slate-600 text-white px-2 py-0.5 rounded-full">
            {allNotes}
          </span>
        </li>
        <li>
          {t("status.completed")}{" "}
          <span className="bg-slate-600 text-white px-2 py-0.5 rounded-full">
            {completedNotes}
          </span>
        </li>
        <li>
          {t("status.incomplete")}{" "}
          <span className="bg-slate-600 text-white px-2 py-0.5 rounded-full">
            {openNotes}
          </span>
        </li>
      </ul>
      <select
        className={`rounded-lg focus:ring-blue-500 py-2 border-x-8 border-transparent ${
          theme === "dark"
            ? "bg-gray-700 text-zinc-50"
            : "bg-white text-gray-900"
        }`}
        value={sortBy}
        onChange={onSort}
      >
        <option value="latest">{t("sort.earliest")}</option>
        <option value="earliest">{t("sort.latest")}</option>
        <option value="completed">{t("sort.completed")}</option>
      </select>
    </div>
  );
}

export default NoteStatus;
