import { connect } from 'react-redux'
import Header from '../components/Header'
import { addNote } from '../actions'

export default connect(null, { addNote })(Header);