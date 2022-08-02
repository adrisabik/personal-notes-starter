import React from 'react'
import { getInitialData } from '../utils/index';
import NoteHeader from './NoteHeader';
import NoteBody from './NoteBody';
import NotesList from './NotesList';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData()
    }
  }

  render() {
    return(
      <div>
        <NoteHeader />
        <NoteBody />
        <h2>Catatan Aktif</h2>
        <NotesList />
      </div>
    )
  }
}

export default NoteApp;