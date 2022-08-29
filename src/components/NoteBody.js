import React from 'react';
import NoteInput from './NoteInput';
import NotesList from './NotesList';

function NoteBody({ addNote, notes, onDelete, onArchive, dataSearch }) {
  return (
    <>
      <div className='note-app__body'>
        <NotesList notes={notes} onDelete={onDelete} onArchive={onArchive} dataSearch={dataSearch} />
      </div>

      <div className='note-app__body'>
        <NotesList notes={notes} type="archive" onDelete={onDelete} onArchive={onArchive} dataSearch={dataSearch} />
      </div>
    </>
  )
}

export default NoteBody;