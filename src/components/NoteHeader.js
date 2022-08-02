import React from 'react';

function NoteHeader() {
  return (
    <div className='note-app__header'>
      <h1>Notes</h1>
      <input className='note-search' placeholder='Cari catatan'></input>
    </div>
  )
}

export default NoteHeader;