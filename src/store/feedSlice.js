import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import feedService from "../apiFeature/feedApi";

const initialState = {
    data: [],
    isLoading: false,
    success: false,
    isError: false,
    errorCode: null,
    message: '',
}

export const getFeedData = createAsyncThunk(
    'feed/initialdata',
    async (_, thunkAPI) => {
        try {
            return await feedService.getFeedData();
        } catch (error) {
            console.log(error);
            const message = (error.response && error.response.data && error.response.data.error) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
)

const feedSclice = createSlice({
    name: 'feed',
    initialState,
    reducers: {
        resetFeedState: (state) => {
            state = initialState
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getFeedData.pending, (state, action) => {
                state.isLoading = true
                state.isError = false
                state.success = false
                state.message = ''
            })
            .addCase(getFeedData.fulfilled, (state, action)=>{
                state.isLoading = false
                state.success = true
                state.isError = false
                state.data = action.payload
                state.message = ''
            })
            .addCase(getFeedData.rejected, (state, action)=>{
                state.isLoading = false
                state.success = false
                state.isError = true
                state.data = []
                state.message = action.payload 
            })
    }
})

export default feedSclice.reducer;