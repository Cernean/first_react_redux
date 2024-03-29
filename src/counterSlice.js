import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducer: {
    increment: state => ({ value: state.value +1}),
    decrement: state => ({ value: state.value -1}),
    incrementByAmount: (state, action) => ({ value: state.value + action.payload}),
    }
});
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;