import React from 'react'

function NoteInput() {
  return (
    <div className='note-input'>
      <h2>Buat catatan</h2>
      <form>
        <p className='note-input__title__char-limit' placeholder='Ini adalah judul ...'>Sisa Karakter : </p>
        <input className='note-input__title' placeholder='Tuliskan catatanmu disini ...' />
        <textarea className='note-input__body' />
        <button type='submit'>Buat</button>
      </form>
    </div>
  )
}

export default NoteInput;