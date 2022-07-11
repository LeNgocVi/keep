import trashApi from "../api/trashApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getTrash = createAsyncThunk(
  "trash/getTrash",
  async (params, thunkAPI) => {
    // thunkAPI.dispatch(...)
    const currentUser = await trashApi.getTrash();
    return currentUser;
  }
);

export const addTrash = createAsyncThunk("trash/addTrash", async (newTrash) => {
  // thunkAPI.dispatch(...)
  const currentUser = await trashApi.addTrash(newTrash);
  return currentUser;
});

export const deleteTrash = createAsyncThunk(
  "trash/deleteTrash",
  async (Trash) => {
    // thunkAPI.dispatch(...)
    const currentUser = await trashApi.deleteTrash(Trash);
    return currentUser;
  }
);
const trashSlice = createSlice({
  name: "trashs",
  initialState: {
    current: [],
  },
  reducers: {
    addTrashs: (state, action) => {
      // const newPhoto = action.payload;
      state.push(action.payload);
      console.log(action.payload);
    },
  },
  extraReducers: {
    [getTrash.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [addTrash.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [deleteTrash.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { reducer: trashReducer } = trashSlice;
export default trashReducer;
