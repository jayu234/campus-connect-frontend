import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import eventService from "../apiFeature/eventApi";

const init = {
    data: [],
    isLoading: false,
    success: false,
    isError: false,
    message: ''
}

const initialState = {
    nearbyEvents: init
}

export const getNearbyEvents = createAsyncThunk(
    'event/nearbyEvents',
    async (_, thunkApi) => {
        try {
            return await eventService.getNearbyEvents();
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

            return thunkApi.rejectWithValue(message);
        }
    }
)

const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        resetEventState(state) {
            state = initialState
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getNearbyEvents.pending, (state) => {
                state.nearbyEvents.isLoading = true
                state.nearbyEvents.success = false
                state.nearbyEvents.isError = false
                state.nearbyEvents.message = ''
            })
            .addCase(getNearbyEvents.fulfilled, (state, action) => {
                state.nearbyEvents.isLoading = false
                state.nearbyEvents.success = true
                state.nearbyEvents.data = action.payload.result
                state.nearbyEvents.isError = false
                state.nearbyEvents.message = ''
            })
            .addCase(getNearbyEvents.rejected, (state, action) => {
                state.nearbyEvents.isLoading = false
                state.nearbyEvents.success = false
                state.nearbyEvents.data = []
                state.nearbyEvents.isError = true
                state.nearbyEvents.message = action.payload
            })
    }
})

export default eventSlice.reducer