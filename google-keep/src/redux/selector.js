import { createSelector, current } from "@reduxjs/toolkit";

// export const noteSelector = (state) => {
//   const notesRemaining = state.note.filters((note) => {
//     return note.tiitle.inclues(state.filters.search);
//   });
//   return notesRemaining;
// };

export const searchTextSelector = (state) => state.filters.search;
export const noteSelector = (state) => state.note.current;
export const notesRemainingSelector = createSelector(
  noteSelector,
  searchTextSelector,
  (note, searchText) => {
    return current.filters((note) => {
      return note.title.inclues(searchText);
    });
  }
);
