import React from 'react';
import NoteItem from './NoteItem';

function NotesList({ notes, onDelete, onArchive }) {
  let noteArchived = [];
  let noteNotArchived = [];

  notes.map((note) => {
    if(note.archived) {
      noteArchived.push(note);
    }
    else {
      noteNotArchived.push(note);
    }
  })

  return (  
    <>
      <h2>Catatan Aktif</h2>
      <div className='notes-list'>
        {
          noteNotArchived.map((note) => (
            <NoteItem 
              key={note.id}
              id={note.id}
              onDelete={onDelete}
              onArchive={onArchive}
              {...note}
            />
          ))
        }
      </div>

      <h2>Arsip</h2>
      <div className='notes-list'>
      { 
        noteArchived.map((note) => (
          <NoteItem 
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onArchive={onArchive}
            {...note}
          />
        ))
      }
      </div>
    </>
  )
}

export default NotesList;