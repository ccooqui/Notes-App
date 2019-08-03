import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as NoteActions from '../actions'
import NoteList from '../components/NoteList'
import { getVisibleNotes } from '../selectors/index'

const mapStateToProps = state => ({
  filteredNotes: getVisibleNotes(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(NoteActions, dispatch)
});

const VisibleNoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteList);

export default VisibleNoteList;
