const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    search: "",
  },
  reducer: {
    searchFilterChange: (state, action) => {
      state.search = action.payload;
    },
  },
});
const { reducer: filterReducer } = filtersSlice;
export default filterReducer;
