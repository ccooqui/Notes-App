import React from 'react'
import PropTypes from 'prop-types'
import NoteItem from './NoteItem'

const NoteList = ({ filteredNotes, actions }) => (
  <ul className="note-list">
    {filteredNotes.map(note =>
      <NoteItem key={note.id} note={note} {...actions} />
    ).reverse()}
  </ul>
);

NoteList.propTypes = {
  filteredNotes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  actions: PropTypes.object.isRequired
};

export default NoteList