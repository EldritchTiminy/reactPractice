export default function Note({ note, deleteNote }) {
  return (
    <div className="flex justify-between items-center bg-white shadow p-3 rounded-lg">
      <p>{note.text}</p>
      <button
        onClick={() => deleteNote(note.id)}
        className="text-red-500 hover:text-red-700 font-bold"
      >
        ✖
      </button>
    </div>
  );
}
