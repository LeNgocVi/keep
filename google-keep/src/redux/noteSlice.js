import noteApi from "../api/noteApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getNote = createAsyncThunk(
  "note/getNote",
  async (params, thunkAPI) => {
    // thunkAPI.dispatch(...)
    const currentUser = await noteApi.getNote();
    return currentUser;
  }
);

export const addNote = createAsyncThunk("note/addNote", async (newNote) => {
  // thunkAPI.dispatch(...)
  const currentUser = await noteApi.addNote(newNote);
  return currentUser;
});

export const updateNote = createAsyncThunk("note/updateNote", async (note) => {
  
  const currentUser = await noteApi.updateNote(note);
  return currentUser;
});

export const RehibiliTrash = createAsyncThunk(
  "note/RehibiliTrash",
  async (note) => {
    const currentUser = await noteApi.RehibiliTrash(note);
    return currentUser;
  }
);
export const deleteNote = createAsyncThunk("note/deleteNote", async (Note) => {
  // thunkAPI.dispatch(...)
  const currentUser = await noteApi.deleteNote(Note);
  return currentUser;
});
const noteSlice = createSlice({
  name: "notes",
  initialState: {
    current: [],
  },
  reducers: {
    // addNotes: (state, action) => {
    //   // const newPhoto = action.payload;
    //   state.push(action.payload);
    //   console.log(action.payload);
    // },
  },
  extraReducers: {
    [getNote.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [addNote.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [updateNote.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [deleteNote.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { reducer: noteReducer } = noteSlice;
export default noteReducer;
