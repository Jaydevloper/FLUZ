import { createSlice } from "@reduxjs/toolkit";
import { IAuth } from "./auth.type";

const initialState: IAuth = {
  isLogin: false,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SignIn: (state, action) => {
      localStorage.setItem("token", action.payload || "");
      state.isLogin = true;
      state.token = action.payload;
    },
    SignUp: (state, action) => {
      localStorage.setItem("token", action.payload || "");
      state.isLogin = true;
      state.token = action.payload;
    },
    SignOut: (state) => {
      localStorage.clear();
      state.isLogin = false;
      state.token = null;
    },
  },
});

export const { SignIn, SignUp, SignOut } = authSlice.actions;
export default authSlice.reducer;
