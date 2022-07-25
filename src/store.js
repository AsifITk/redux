import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./components/slices/userSlice";
import themeReducer from "./components/slices/themeSlice";

const store = configureStore({
  reducer: {
    userInfo: userReducer,
    theme: themeReducer,
  },
});
export default store;
