import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

const stores = configureStore({
    reducer: {
        counter: counterSlice
    }
})

export default stores;