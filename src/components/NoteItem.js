import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import NoteTextInput from './NoteTextInput'

const fontStyle = {
  fontFamily: 'Lato, Arial, sans-serif'
};


export default class NoteItem extends Component {
  static propTypes = {
    note: PropTypes.object.isRequired,
    editNote: PropTypes.func.isRequired,
    deleteNote: PropTypes.func.isRequired
  };

  state = {
    editing: false
  };

  handleEdit = () => {
    this.setState({ editing: true })
  };

  handleSave = (id, text) => {
    if(text.length === 0) {
      this.props.deleteNote(id)
    } else {
      this.props.editNote(id, text)
    }
    this.setState({ editing: false })
  };

  render() {
    const { note, deleteNote } = this.props;
    let element;

    if (this.state.editing) {
      element = (
        <NoteTextInput text={note.text}
                       editing={this.state.editing}
                       onSave={(text) => this.handleSave(note.id, text)} />
      )
    } else {
      element = (
        <div className="view" style={fontStyle}>
          <button className="destroy-btn"
                  onClick={() => deleteNote(note.id)} />
          <button className="edit-btn"
                  onClick={this.handleEdit} />
          <p>
            {note.text}
          </p>
        </div>
      )
    }

    return (
      <div className={ classnames({
        editing: this.state.editing
      })}>
        { element }
      </div>
    )
  }
}
