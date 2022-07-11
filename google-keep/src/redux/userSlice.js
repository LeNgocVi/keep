import userApi from "../api/userApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getUser = createAsyncThunk(
  "user/getUser",
  async (params, thunkAPI) => {
    // thunkAPI.dispatch(...)
    const currentUser = await userApi.getUser();
    return currentUser;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    current: {},
  },
  reducers: {},
  extraReducers: {
    [getUser.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { reducer: userReducer } = userSlice;
export default userReducer;
