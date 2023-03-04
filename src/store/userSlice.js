import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authServise from "../apiFeature/userApi";

const userData = localStorage.getItem('user');

const initialState = {
  user: userData || null,
  isLoading: false,
  success: false,
  isError: false,
  message: '',
  isAuthenticated: false
}

export const userSignup = createAsyncThunk(
  'user/signup',
  async (user, thunkAPI) => {
    try {
      return await authServise.signup(user)
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
)

export const userLogin = createAsyncThunk(
  'user/login',
  async (user, thunkAPI) => {
    try {
      return await authServise.login(user)
    }
    catch (error) {
      const message = (error.response && error.response.data && error.response.data.error) || error.message || error.toString();

      return thunkAPI.rejectWithValue(message)
    }
  }
)
export const userLogout = createAsyncThunk(
  'user/logout',
  async (user, thunkAPI) => {
    try {
      return await authServise.logout(user)
    }
    catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

      return thunkAPI.rejectWithValue(message)
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetAuth: (state) => {
      state = initialState
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(userSignup.pending, (state) => {
        state.user = null
        state.isLoading = true
        state.success = false
        state.isError = false
        state.message = ''
      })
      .addCase(userSignup.fulfilled, (state, action) => {
        state.isLoading = false
        state.success = true
        state.user = action.payload
        state.isError = false
        state.message = ''
      })
      .addCase(userSignup.rejected, (state, action) => {
        state.user = null
        state.isLoading = false
        state.success = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(userLogin.pending, (state) => {
        state.isLoading = true
        state.success = false
        state.isError = false
        state.message = ''
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.success = true
        state.user = action.payload
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isLoading = false
        state.success = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      .addCase(userLogout.pending, (state) => {
        state.isLoading = true
        state.success = false
        state.isError = false
        state.message = ''
      })
      .addCase(userLogout.fulfilled, (state) => {
        state.isLoading = false
        state.isError = false
        state.success = true
        state.user = null
      })
      .addCase(userLogout.rejected, (state, action) => {
        state.isLoading = false
        state.success = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
  }
})

export default userSlice.reducer;