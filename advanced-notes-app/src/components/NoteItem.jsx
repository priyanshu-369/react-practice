import React, { useState } from 'react';
import { useNotes } from '../context/NotesContext.jsx'; // Updated to .jsx
import NoteEditForm from './NoteEditForm.jsx'; // Updated to .jsx
import ArchiveList from './ArchiveList.jsx';

function NoteItem({ note }) {
  // TODO: Get `deleteNote` and `toggleArchive` from `useNotes()` context.
  const {deleteNote, toggleArchive} = useNotes()
  // Your code here:
  const deleteNoteHandle = (id) => {
    deleteNote(id)
  }; // Placeholder
  const toggleArchiveHandle = (id) => {
    toggleArchive(id)
  }; // Placeholder

  const [isEditing, setIsEditing] = useState(false);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <div
      className={`
        ${note.isArchived ? 'bg-gray-100 border-gray-300' : 'bg-white border-gray-200'}
        border rounded-lg p-4 shadow-md flex flex-col justify-between
      `}
    >
      {isEditing ? (
        <NoteEditForm note={note} onSave={() => setIsEditing(false)} onCancel={handleCancelEdit} />
      ) : (
        <>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{note.title}</h3>
          <p className="text-sm text-gray-600 mb-3 flex-grow">{note.content}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {note.tags.map((tag, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-xs text-gray-500 mb-3">Created: {formatDate(note.createdAt)}</p>
          <div className="flex gap-2 mt-auto pt-3 border-t border-gray-200">
            <button
              onClick={handleEditClick}
              className="px-3 py-2 bg-blue-500 text-white rounded-md cursor-pointer text-sm
                         hover:bg-blue-600 transition-colors duration-200 ease-in-out flex-1"
            >
              Edit
            </button>
            <button
              onClick={() => toggleArchiveHandle(note.id)}
              className="px-3 py-2 bg-yellow-500 text-white rounded-md cursor-pointer text-sm
                         hover:bg-yellow-600 transition-colors duration-200 ease-in-out flex-1"
            >
              {note.isArchived ? 'Restore' : 'Archive'}
            </button>
            <button
              onClick={() => deleteNoteHandle(note.id)}
              className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer text-sm
                         hover:bg-red-600 transition-colors duration-200 ease-in-out flex-1"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default NoteItem;