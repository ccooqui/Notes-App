import { connect } from 'react-redux'
import * as NoteActions from '../actions'
import { bindActionCreators } from 'redux'
import MainSection from '../components/MainSection'

const mapStateToProps = state => ({
  notesCount: state.notes.length
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(NoteActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSection)