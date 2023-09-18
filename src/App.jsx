import { useEffect, useReducer, useState } from "react";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";
import { useTranslation } from "react-i18next";

const INITIAL_STATE = JSON.parse(localStorage.getItem("notes")) || [];
function noteReducer(state, action) {
  switch (action.type) {
    case "add": {
      return [...state, action.payload];
    }

    case "delete":
      return state.filter((n) => n.id !== action.payload);

    case "check":
      return state.map((note) =>
        note.id === action.payload
          ? { ...note, completed: !note.completed }
          : note
      );
      break;

    default:
      throw new Error("unknown action " + type);
  }
}

function App() {
  const [notes, dispatch] = useReducer(noteReducer, INITIAL_STATE);
  const [sortBy, setSortBy] = useState("latest");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = (newNote) => {
    dispatch({ type: "add", payload: newNote });
  };
  const handleDeleteNote = (id) => {
    dispatch({ type: "delete", payload: id });
  };
  const handleCheckNote = (e) => {
    const noteId = Number(e.target.value);
    dispatch({ type: "check", payload: noteId });
  };
  const handleTranslate = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem("lang", code);
  };

  return (
    <div>
      {/* Header component */}
      <NoteHeader
        notes={notes}
        sortBy={sortBy}
        onSort={(e) => setSortBy(e.target.value)}
        onTranslate={handleTranslate}
        translate={t}
      />

      {/* body components */}
      <div className="container m-auto max-w-3xl min-h-screen flex flex-col justify-center gap-16 p-4 lg:flex-row">
        {/* new note form */}
        <div>
          <AddNewNote onAddNote={handleAddNote} translate={t} />
        </div>
        {/* note list container */}
        <div className="flex-1 max-w-3xl">
          <NoteStatus notes={notes} translate={t} />
          <NoteList
            notes={notes}
            sortBy={sortBy}
            onDelete={handleDeleteNote}
            onCheck={handleCheckNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
