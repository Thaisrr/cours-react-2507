import {createSlice} from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: function (counter) {
            counter.value++;
            localStorage.setItem('counter', counter.value)
        },
        decrement: function (counter) {
            counter.value--;
            localStorage.setItem('counter', counter.value)
        },
        incrementByAmount: function (counter, action) {
            counter.value += action.payload;
            localStorage.setItem('counter', counter.value)
        },
        init: function (counter) {
            const val = localStorage.getItem('counter');
            if(counter) {
                counter.value = val;
            } else {
                counter.value = 0;
            }
        }
    }
})


export const {increment, decrement, incrementByAmount, init} = counterSlice.actions;
export default counterSlice.reducer;