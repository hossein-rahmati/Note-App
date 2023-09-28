import { createContext, useContext, useEffect, useReducer } from "react";

const NotesContext = createContext(null);
const NotesDispatchContext = createContext(null);
const INITIAL_STATE = JSON.parse(localStorage.getItem("notes")) || [];

function noteReducer(state, action) {
  switch (action.type) {
    case "add": {
      return [...state, action.payload];
    }

    case "edit": {
      return state.map((note) => {
        if (note.id === action.payload.id) {
          return action.payload;
        } else {
          return note;
        }
      });
    }

    case "delete": {
      return state.filter((n) => n.id !== action.payload);
    }

    case "check": {
      return state.map((note) =>
        note.id === action.payload
          ? { ...note, completed: !note.completed }
          : note
      );
    }

    default: {
      throw new Error("unknown action " + action.type);
    }
  }
}

export function NotesProvider({ children }) {
  const [notes, dispatch] = useReducer(noteReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesContext.Provider value={{ notes }}>
      <NotesDispatchContext.Provider value={{ dispatch }}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}

export function useNotes() {
  return useContext(NotesContext);
}

export function useDispatchNotes() {
  return useContext(NotesDispatchContext);
}
