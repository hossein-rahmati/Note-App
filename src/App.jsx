import { useEffect, useReducer, useState } from "react";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";

let INITIAL_STATE;
function noteReducer(state, { type, payload }) {
  switch (type) {
    case "add":
      return [...state, payload];
      break;
    case "delete":
      return state.filter((n) => n.id !== payload);
      break;
    case "check":
      return state.map((note) =>
        note.id === payload ? { ...note, completed: !note.completed } : state
      );
      break;
    default:
      throw new Error("unknown action " + type);
  }
}

function App() {
  const [notes, dispatch] = useReducer(noteReducer, INITIAL_STATE);
  const [sortBy, setSortBy] = useState("latest");

  useEffect(() => {
    INITIAL_STATE = localStorage.getItem("NOTES") || [];
  }, []);

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

  return (
    <div>
      {/* Header component */}
      <NoteHeader
        notes={notes}
        sortBy={sortBy}
        onSort={(e) => setSortBy(e.target.value)}
      />

      {/* body components */}
      <div className="container m-auto max-w-3xl min-h-screen flex flex-col justify-center gap-16 p-4 lg:flex-row">
        {/* new note form */}
        <div>
          <AddNewNote onAddNote={handleAddNote} />
        </div>
        {/* note list container */}
        <div className="flex-1 max-w-3xl">
          <NoteStatus notes={notes} />
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
