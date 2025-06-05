import React, { createContext, useContext, useState, useEffect } from 'react';

// 1. Create the Context
const NotesContext = createContext();

// Helper to get data from Local Storage
const getInitialNotes = () => {
  // Corrected logic for loading notes from localStorage
  const storedNotes = localStorage.getItem("notes");
  return storedNotes ? JSON.parse(storedNotes) : [];
};

// 2. Create the Provider Component
export const NotesProvider = ({ children }) => {
  // Use a function for initial state to prevent re-running getInitialNotes on every render
  const [notes, setNotes] = useState(getInitialNotes);

  // Effect to save notes to Local Storage whenever 'notes' state changes.
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]); // Dependency array is correct

  // --- Implement your CRUD functions here ---

  // Add a new note
  const addNote = (title, content, tags) => {
    // Process tags from comma-separated string to array, filter out empty strings
    const tagsArray = tags.split(',').map(tag => tag.trim()).filter(tag => tag !== '');

    setNotes((prev) => [
      ...prev,
      {
        id: Date.now(), // Unique ID, using 'id' for consistency across functions
        title,
        content,
        tags: tagsArray,
        createdAt: new Date().toLocaleString(), // Stores a readable date string
        isArchived: false,
      },
    ]);
  };

  
  const deleteNote = (noteId) => {
    setNotes((prev) => prev.filter((prevNote) => prevNote.id !== noteId)); 
  };

  
  const toggleArchive = (noteId) => {
    setNotes((prev) =>
      prev.map((prevNote) =>
        prevNote.id === noteId ? { ...prevNote, isArchived: !prevNote.isArchived } : prevNote 
      )
    );
  };

  
  const editNote = (noteId, updatedTitle, updatedContent, updatedTags) => {
    
    const updatedTagsArray = updatedTags.split(',').map(tag => tag.trim()).filter(tag => tag !== '');

    setNotes((prev) =>
      prev.map((prevNote) =>
        prevNote.id === noteId // Use 'id' for consistency
          ? { ...prevNote, title: updatedTitle, content: updatedContent, tags: updatedTagsArray }
          : prevNote
      )
    );
  };

  
  const contextValue = {
    notes,
    addNote,
    deleteNote,
    toggleArchive,
    editNote,
  };

  return (
    <NotesContext.Provider value={contextValue}>
      {children}
    </NotesContext.Provider>
  );
};


export const useNotes = () => {
  const context = useContext(NotesContext);
  if (context === undefined) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
};