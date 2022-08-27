import React from 'react';

class NoteHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    }

    this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this);
    this.onSearchSubmitEventHandler = this.onSearchSubmitEventHandler.bind(this);
  }

  onSearchChangeEventHandler(event) {
    this.setState(() => {
      return {
        search: event.target.value
      }
    })
  }

  onSearchSubmitEventHandler(event) {
    event.preventDefault();
    this.props.searchNote(this.state);
  }

  render(){
    return (
      <div className='note-app__header'>
        <h1>Notes</h1>
        <input 
          type='text' 
          className='note-search' 
          placeholder='Cari catatan'
          value={this.state.search}
          onChange={this.onSearchChangeEventHandler}
          onKeyUp={() => this.onSearchSubmitEventHandler(this.state.search)}
        ></input>
      </div>
    )
  }
}

export default NoteHeader;