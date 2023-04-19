import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedReducer from "./feedSlice";
import topicReducer from "./topicSlice";
import doubtReducer from "./doubtSlice";
import eventReducer from "./eventSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        feed: feedReducer,
        topic: topicReducer,
        doubt: doubtReducer,
        event: eventReducer
    }
})

export default store;