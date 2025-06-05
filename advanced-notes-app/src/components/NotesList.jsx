import React from 'react';
import { useNotes } from '../context/NotesContext.jsx'; // Updated to .jsx
import NoteItem from './NoteItem.jsx'; // Updated to .jsx

function NotesList() {
  const { notes } = useNotes(); // Get notes array from context

  // TODO: Filter notes to show only active (non-archived) notes.
  // Your code here:
  const activeNotes = notes.filter((note)=>(note.isArchived === false) ); // Placeholder, replace with your filtering logic
  console.log(activeNotes)
  return (
    <div className="mt-5">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4 pb-2 border-b-2 border-blue-500">Active Notes</h2>
      {activeNotes.length === 0 ? (
        <p className="text-center text-gray-500 text-lg py-8 border-2 border-dashed border-gray-300 rounded-lg">
          No active notes yet. Add one!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeNotes.map(note => (
            <NoteItem key={note.id} note={note} />
          ))}
        </div>
      )}
    </div>
  );
}

export default NotesList;