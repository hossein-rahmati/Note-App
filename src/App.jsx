import { useEffect, useState } from "react";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";
import { useTranslation } from "react-i18next";
import { Toaster } from "react-hot-toast";
import { NotesProvider } from "./context/NotesContext";

function App() {
  const [sortBy, setSortBy] = useState("latest");
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "light"
  );
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const dir = i18n.dir(i18n.language);
    document.documentElement.dir = dir;
  }, [i18n, i18n.language]);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const handleTranslate = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem("lang", code);
  };
  const handlethemeToggle = (theme) => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <NotesProvider>
      <div className={`font-sans ${theme === "light" ? "" : "dark"}`}>
        {theme === "light" ? (
          <Toaster />
        ) : (
          <Toaster
            toastOptions={{
              duration: 3000,
              style: {
                backgroundColor: "#1f2937",
                color: "#fff",
              },
            }}
          />
        )}

        <NoteHeader
          sortBy={sortBy}
          onSort={(e) => setSortBy(e.target.value)}
          onTranslate={handleTranslate}
          translate={t}
          theme={theme}
          onThemeToggle={handlethemeToggle}
        />
        <div
          className={`container m-auto max-w-3xl min-h-screen flex flex-col justify-center gap-16 p-4 lg:flex-row `}
        >
          <div>
            <AddNewNote translate={t} theme={theme} />
          </div>
          <div className="flex-1 max-w-3xl">
            <NoteStatus translate={t} />
            <NoteList sortBy={sortBy} theme={theme} />
          </div>
        </div>
      </div>
    </NotesProvider>
  );
}

export default App;
