import React from 'react';
import NoteInput from './NoteInput';
import NotesList from './NotesList';

function NoteBody({ addNote, notes, onDelete, onArchive }) {
  return (
    <div className='note-app__body'>
      <NoteInput addNote={addNote} />
      <NotesList notes={notes} onDelete={onDelete} onArchive={onArchive} />
    </div>
  )
}

export default NoteBody;