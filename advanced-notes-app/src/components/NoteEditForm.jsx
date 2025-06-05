import React, { useState } from 'react';
import { useNotes } from '../context/NotesContext.jsx'; // Updated to .jsx

function NoteEditForm({ note, onSave, onCancel }) {
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedContent, setEditedContent] = useState(note.content);
  const [editedTags, setEditedTags] = useState(note.tags.join(', ')); // Convert array back to string
  // TODO: Get `editNote` from `useNotes()` context.
  // Your code here:
  // const editNote = () => {}; // Placeholder
  const { editNote} = useNotes()
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editedTitle.trim() || !editedContent.trim()) {
      alert('Title and content cannot be empty!');
      return;
    }
    // TODO: Call the `editNote` function from context, passing note.id and updated data.
    // Your code here:
    editNote(editedTitle, editedContent, editedTags)
    onSave(); // Call the onSave prop to hide the form
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-4 border border-gray-300 rounded-lg bg-white shadow-inner">
      <input
        type="text"
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
        required
      />
      <textarea
        value={editedContent}
        onChange={(e) => setEditedContent(e.target.value)}
        rows="4"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 resize-y"
        required
      ></textarea>
      <input
        type="text"
        placeholder="Tags (comma-separated)"
        value={editedTags}
        onChange={(e) => setEditedTags(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
      />
      <div className="flex gap-2 mt-2">
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded-md cursor-pointer text-sm
                     hover:bg-green-600 transition-colors duration-200 ease-in-out flex-1"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-500 text-white rounded-md cursor-pointer text-sm
                     hover:bg-gray-600 transition-colors duration-200 ease-in-out flex-1"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default NoteEditForm;