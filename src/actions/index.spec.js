import * as types from '../constants/ActionTypes'
import * as actions from './index'

describe('note actions', () => {
  it('addNote should activate ADD_NOTE action', () => {
    expect(actions.addNote('Add Note')).toEqual({
      text: 'Add Note',
      type: types.ADD_NOTE
    })
  });

  it('deleteNote should activate DELETE_NOTE action', () => {
    expect(actions.deleteNote(1)).toEqual({
      type: types.DELETE_NOTE,
      id: 1
    })
  });

  it('editNote should activate EDIT_NOTE action', () => {
    expect(actions.editNote(1, 'Edit Note')).toEqual({
      type: types.EDIT_NOTE,
      id: 1,
      text: 'Edit Note'
    })
  });
});