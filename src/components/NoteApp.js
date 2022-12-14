import React from 'react'
import { getInitialData } from '../utils/index';
import NoteHeader from './NoteHeader';
import NoteBody from './NoteBody';
import NoteInput from './NoteInput';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData()
    }

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
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

  onDeleteNoteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }

  onArchiveNoteHandler(id) {
    const notes = this.state.notes.map((note) => 
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    this.setState({ notes })
  }

  onSearchNoteHandler= (search) => {
    this.setState((prevState) => {
        return {
            ...prevState,
            search: search,
        };
    });
  }

  render() {
    return(
      <div>
        <NoteHeader searchNote={this.onSearchNoteHandler} />
        <NoteInput addNote={this.onAddNoteHandler}  />
        <NoteBody 
          notes={this.state.notes} 
          onDelete={this.onDeleteNoteHandler} 
          onArchive={this.onArchiveNoteHandler} 
          dataSearch={
            this.state.search
                ? this.state.notes.filter((note) =>
                    note.title
                        .toLowerCase()
                        .includes(this.state.search.toLowerCase())
                )
                : this.state.notes
        }
        />
      </div>
    )
  }
}

export default NoteApp;