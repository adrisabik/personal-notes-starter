import React from 'react';
import NoteInput from './NoteInput';
import NotesList from './NotesList';

function NoteBody({ addNote, notes, onDelete, onArchive, dataSearch }) {
  return (
    <div className='note-app__body'>
      <NoteInput addNote={addNote} />
      <NotesList notes={notes} onDelete={onDelete} onArchive={onArchive} dataSearch={dataSearch} />
    </div>
  )
}

export default NoteBody;