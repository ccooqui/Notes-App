import React from 'react'
import PropTypes from 'prop-types'
import VisibleNoteList from '../containers/VisibleNoteList'
import fileIcon from '../assets/FileIcon2.png'

const MainSection = ({notesCount, actions}) => (
  <section className="main">
      <div>
        <img className="file-icon" alt="file icon" src={fileIcon}/>
        <h1 className="main-header">Quick Notes</h1>
      </div>
    {

    }
      <VisibleNoteList />
  </section>
);

MainSection.propTypes = {
  notesCount: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};

export default MainSection;