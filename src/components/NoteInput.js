import React from 'react'

class NoteInput extends React.Component {
  constructor(props) {
    super(props); 

    this.state = {
      title: '',
      body: ''
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    if (this.state.title.length >= 50) {
      event.target.value = event.target.value.slice(0, event.target.maxLength)
    }
    this.setState((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
      }
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState((prevState,) => {
      return {
        ...prevState,
        body: event.target.value,
      }
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render(){
    return (
      <div className='note-input'>
        <h2>Buat catatan</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <p className='note-input__title__char-limit' placeholder='Ini adalah judul ...'>Sisa Karakter : {this.state.title.length}/50 </p>
          <input className='note-input__title' placeholder='Tuliskan catatanmu disini ...' value={this.state.title} onChange={this.onTitleChangeEventHandler} />
          <textarea className='note-input__body' value={this.state.body} onChange={this.onBodyChangeEventHandler} />
          <button type='submit'>Buat</button>
        </form>
      </div>
    )
  }
}

export default NoteInput;