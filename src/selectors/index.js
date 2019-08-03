import { createSelector } from 'reselect'

const getNotes = state => state.notes;

export const getVisibleNotes = createSelector(
  [getNotes],
  (notes) => {
    return notes;
  }
);
