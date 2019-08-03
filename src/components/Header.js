import React from 'react'
import PropTypes from 'prop-types'
import NoteTextInput from './NoteTextInput'


const Header = ({ addNote }) => (
  <header className="header">
    <h2 className="new-header">New Note</h2>
    <NoteTextInput
      newNote
      onSave={(text) => {
        if (text.length !== 0) {
          addNote(text)
        }
      }}
      placeholder="What's on your mind?"
    />
  </header>
);

Header.propTypes = {
  addNote: PropTypes.func.isRequired
};

export default Header