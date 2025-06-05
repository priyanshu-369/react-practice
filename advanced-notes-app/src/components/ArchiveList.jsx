import React from 'react';
import { useNotes } from '../context/NotesContext.jsx'; // Updated to .jsx
import NoteItem from './NoteItem.jsx'; // Updated to .jsx

function ArchiveList() {
  const { notes } = useNotes(); // Get notes array from context

  // TODO: Filter notes to show only archived notes.
  // Your code here:
  const archivedNotes = notes.filter((note)=>note.isArchived === true); // Placeholder, replace with your filtering logic

  return (
    <div className="mt-5">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4 pb-2 border-b-2 border-gray-500">Archived Notes</h2>
      {archivedNotes.length === 0 ? (
        <p className="text-center text-gray-500 text-lg py-8 border-2 border-dashed border-gray-300 rounded-lg">
          No notes in the archive.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {archivedNotes.map(note => (
            <NoteItem key={note.id} note={note} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ArchiveList;