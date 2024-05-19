import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "0",
    name: "Sadia Jabeen",
  },
  {
    id: "1",
    name: "Nadeem Abbas",
  },
  {
    id: "2",
    name: "Sohail Abbas",
  },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
