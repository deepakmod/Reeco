import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
    name: 'orders',
    initialState: {
        data: [],
    },
    reducers: {
        setOrders: (state, action) => {
            state.data = action.payload;
        },
        updateStatus: (state, action) => {
            const { index, status } = action.payload;
            state.data[index].status = status;
        },
    },
});

export const { setOrders, updateStatus } = orderSlice.actions;
export default orderSlice.reducer;