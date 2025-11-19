import { useState } from "react";
import Note from "./components/Note";
import NoteForm from "./components/NoteForm";

export default function App() {
  const [notes, setNotes] = useState([
    { id: 1, text: "Learn React basics" },
    { id: 2, text: "Understand JSX and components" },
  ]);

  const addNote = (text) => {
    if (!text.trim()) return;
    const newNote = { id: Date.now(), text };
    setNotes([newNote, ...notes]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">📝 Quick Notes</h1>
      <NoteForm addNote={addNote} />
      <div className="w-full max-w-md mt-6 space-y-2">
        {notes.length === 0 ? (
          <p className="text-gray-500 text-center">No notes yet. Add one!</p>
        ) : (
          notes.map((note) => (
            <Note key={note.id} note={note} deleteNote={deleteNote} />
          ))
        )}
      </div>
    </div>
  );
}
