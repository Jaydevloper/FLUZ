import { createSlice } from "@reduxjs/toolkit";
import { IAuth } from "./auth.type";

const initialState: IAuth = {
  isLogin: false,
  token: null,
  role: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LogIn: (state, action) => {
      localStorage.setItem("token", action.payload.token || "");
      state.isLogin = true;
      state.token = action.payload.token;
      state.role = action.payload.user.role;
      localStorage.setItem("persist", JSON.stringify(state));
      window.location.href = "/";
    },
    SignOut: (state) => {
      localStorage.clear();
      state.isLogin = false;
      state.token = null;
      state.role = null;
      window.location.href = "/";
    },
  },
});

export const { LogIn, SignOut } = authSlice.actions;
export default authSlice.reducer;
