import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  status: 'Ok',
};

export const fetchUsers = createAsyncThunk(
  'fetchUsers',
  async () => {
    const response = await axios.get('http://jsonplaceholder.typicode.com/users');
    return response.data;
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addCase: (state, action) => {
      state.status = action.payload;
    },
    listCase: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export const { addCase, listCase } = usersSlice.actions;
export default usersSlice.reducer;
