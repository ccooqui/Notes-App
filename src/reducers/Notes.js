import {
  ADD_NOTE,
  DELETE_NOTE,
  EDIT_NOTE,
} from '../constants/ActionTypes'

const initialState = [];

export default function notes(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...state,
        {
          id: state.reduce((maxId, note) => Math.max(note.id, maxId), -1) + 1,
          text: action.text
        }
      ]

    case DELETE_NOTE:
      return state.filter(note =>
        note.id !== action.id
      )

    case EDIT_NOTE:
      return state.map(note =>
        note.id === action.id ?
          { ...note, text: action.text } : note
      )

    default:
      return state.map(note =>
        note.id === action.id ?
          { ...note, text: action.text } : note
      )
  }
}