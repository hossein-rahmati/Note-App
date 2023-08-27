import { useState } from "react";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";

function App() {
  const [notes, setNotes] = useState([]);
  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };
  const handleDeleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
  };
  const handleCheckNote = (e) => {
    const noteId = Number(e.target.value);
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === noteId ? { ...note, completed: !note.completed } : note
      )
    );
  };

  return (
    <div className="container m-auto min-h-screen">
      {/* Header component */}
      <div></div>

      {/* body components */}
      <div className="flex flex-col justify-center gap-16 p-4 lg:flex-row">
        {/* new note form */}
        <div>
          <AddNewNote onAddNote={handleAddNote} />
        </div>
        {/* note list container */}
        <div className="flex-1 max-w-3xl">
          <NoteStatus notes={notes} />
          <NoteList
            notes={notes}
            onDelete={handleDeleteNote}
            onCheck={handleCheckNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
