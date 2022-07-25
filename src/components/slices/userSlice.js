import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "userInfo",
  initialState: {
    user: {
      name: "Asif k.",
      email: "asif@asif.com",
      location: "asif's home",
      phone: "0123130123120",
    },
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      console.log("logout");
      state.user = {};
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
