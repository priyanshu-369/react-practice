import React, { useState } from 'react';
import { useNotes } from '../context/NotesContext.jsx'; // Updated to .jsx

function AddNoteForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState(''); // Comma-separated tags
  const { addNote } = useNotes(); // Get addNote from context

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert('Title and content cannot be empty!'); // Consider a custom modal/toast
      return;
    }
    // TODO: Call the `addNote` function from context, passing title, content, and tags.
    // Your code here:

    addNote(title, content, tags)
    setTitle('');
    setContent('');
    setTags('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-8 p-5 border border-gray-200 rounded-lg bg-white shadow-sm">
      <input
        type="text"
        placeholder="Note Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <textarea
        placeholder="Note Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows="4"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
        required
      ></textarea>
      <input
        type="text"
        placeholder="Tags (comma-separated, e.g., work, ideas)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="w-full py-3 bg-green-600 text-white rounded-md cursor-pointer text-lg
                   hover:bg-green-700 transition-colors duration-200 ease-in-out"
      >
        Add Note
      </button>
    </form>
  );
}

export default AddNoteForm;