import { useState } from "react";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";
import { NotesProvider } from "./context/NotesContext";
import { ThemeProvider } from "./context/ThemeContext";
import Main from "./components/Main";
import { TranslateProvider } from "./context/TranslateContext";

function App() {
  const [sortBy, setSortBy] = useState("latest");

  return (
    <NotesProvider>
      <ThemeProvider>
        <TranslateProvider>
          <Main>
            <NoteHeader />
            <div
              className={`container m-auto max-w-6xl min-h-screen flex flex-col justify-center gap-16 p-4 md:flex-row `}
            >
              <div className="basis-2/5">
                <AddNewNote />
              </div>
              <div className="basis-3/5 max-w-3xl">
                <NoteStatus
                  sortBy={sortBy}
                  onSort={(e) => setSortBy(e.target.value)}
                />
                <NoteList sortBy={sortBy} />
              </div>
            </div>
          </Main>
        </TranslateProvider>
      </ThemeProvider>
    </NotesProvider>
  );
}

export default App;
