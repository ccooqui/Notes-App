import notes from './Notes'
import * as types from '../constants/ActionTypes'

describe('notes reducer', () => {
  it('should be handling the start state', () => {
    expect(
      notes(undefined, {})
    ).toEqual([])
  });

  it('should handle ADD_NOTE', () => {
    expect(
      notes([], {
        type: types.ADD_NOTE,
        text: 'Run test'
      })
    ).toEqual([
      {
        text: 'Run test',
        id: 0
      }
    ])
  });
});
