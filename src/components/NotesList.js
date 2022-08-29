import React from 'react';
import NoteItem from './NoteItem';

function NotesList({ notes, type, onDelete, onArchive, dataSearch }) {
  let noteArchived = [];
  let noteNotArchived = [];

  if(type === 'archive') {
    noteArchived = dataSearch.filter((note) => note.archived === true);
    if(noteArchived.length === 0){
      return (
        <>
          <h2>Catatan Aktif</h2>
          <h2 className='notes-list__empty-message'>Tidak ada catatan</h2>
        </>
      )
    }
    return (
      <>
        <h2>Catatan Aktif</h2>
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
  else {
    noteNotArchived = dataSearch.filter((note) => note.archived === false);
    if(noteNotArchived.length === 0){
      return (
        <>
          <h2>Arsip</h2>
          <h2 className='notes-list__empty-message'>Tidak ada catatan</h2>
        </>
      )
    }
    return (
      <>
        <h2>Arsip</h2>
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
      </>
    )
  }

  // if(dataSearch.length !== 0){
  //   dataSearch.map((note) => {
  //     if(note.archived) {
  //       noteArchived.push(note);
  //     }
  //     else {
  //       noteNotArchived.push(note);
  //     }
  //   })
  // } else{
  //   notes.map((note) => {
  //     if(note.archived) {
  //       noteArchived.push(note);
  //     }
  //     else {
  //       noteNotArchived.push(note);
  //     }
  //   })
  // }

  // return (  
  //   <>
  //     <h2>Catatan Aktif</h2>
  //     <div className='notes-list'>
  //       {
  //         noteNotArchived.map((note) => (
  //           <NoteItem 
  //             key={note.id}
  //             id={note.id}
  //             onDelete={onDelete}
  //             onArchive={onArchive}
  //             {...note}
  //           />
  //         ))
  //       }
  //     </div>

  //     <h2>Arsip</h2>
  //     <div className='notes-list'>
  //     { 
  //       noteArchived.map((note) => (
  //         <NoteItem 
  //           key={note.id}
  //           id={note.id}
  //           onDelete={onDelete}
  //           onArchive={onArchive}
  //           {...note}
  //         />
  //       ))
  //     }
  //     </div>
  //   </>
  // )
}

export default NotesList;