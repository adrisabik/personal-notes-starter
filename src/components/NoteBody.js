import React from 'react';
import NoteInput from './NoteInput';

function NoteBody({ addNote }) {
  return (
    <div className='note-app__body'>
      <NoteInput addNote={addNote}  />
      <h2>Catatan Aktif</h2>
    </div>
  )
}

export default NoteBody;