import React, { useState } from 'react';
import { NotesProvider } from './context/NotesContext.jsx'; // Updated to .jsx
import Header from './components/Header.jsx'; // Updated to .jsx
import AddNoteForm from './components/AddNoteForm.jsx'; // Updated to .jsx
import NotesList from './components/NotesList.jsx'; // Updated to .jsx
import ArchiveList from './components/ArchiveList.jsx'; // Updated to .jsx

function App() {
  const [showArchived, setShowArchived] = useState(false);

  // Function to toggle between active and archived views
  const toggleView = () => {
    setShowArchived(prev => !prev);
  };

  return (
    // NotesProvider wraps the entire application to provide context
    <NotesProvider>
      <div className='w-full bg-gray-700 py-8'>
      {/* Main application container: centered, max-width, padding, border, shadow, light background */}
      <div className="mx-auto my-5 p-5 max-w-4xl border border-white rounded-lg shadow-lg bg-indigo-100">
        {/* Header component, passing view state and toggle function */}
        <Header toggleView={toggleView} showArchived={showArchived} />
        {/* Form to add new notes */}
        <AddNoteForm />
        {/* Section for displaying notes, with top margin, border, and padding */}
        <div className="mt-8 pt-5 border-t border-gray-200">
          {/* Conditionally render Active Notes List or Archived Notes List */}
          {showArchived ? (
            <ArchiveList />
          ) : (
            <NotesList />
          )}
        </div>
      </div>
     </div> 
    </NotesProvider>
  );
}

export default App;