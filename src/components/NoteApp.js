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

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false
          }
        ]
      }
    })
  }

  render() {
    return(
      <div>
        <NoteHeader />
        <NoteBody addNote={this.onAddNoteHandler} />
        <NotesList notes={this.state.notes} />
      </div>
    )
  }
}

export default NoteApp;