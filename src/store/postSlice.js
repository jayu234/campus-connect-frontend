import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import postService from "../apiFeature/postApi";

const init = {
    data: [],
    isLoading: false,
    success: false,
    isError: false,
    message: ''
}

const initialState = {
    myPosts: init
}

export const getMyPosts = createAsyncThunk(
    'post/myPosts',
    async (id, thunkAPI) => {
        try {
            return await postService.getMyPosts(id);
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
)

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        resetState: (state) => {
            state = initialState

        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMyPosts.pending, (state)=>{
                state.myPosts.isLoading = true
                state.myPosts.success = false
                state.myPosts.isError = false
                state.myPosts.message = ''
            })
            .addCase(getMyPosts.fulfilled, (state, action)=>{
                state.myPosts.isLoading = false
                state.myPosts.success = true
                state.myPosts.data = action.payload.result
                state.myPosts.isError = false
                state.myPosts.message = ''
            })
            .addCase(getMyPosts.rejected, (state, action)=>{
                state.myPosts.isLoading = false
                state.myPosts.success = false
                state.myPosts.data = []
                state.myPosts.isError = true
                state.myPosts.message = action.payload
            })
    }
})

export default postSlice.reducer