import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalAmount: 0,
    },
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);

            if (!existingItem) {
                state.items.push({
                    ...newItem,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
                state.totalQuantity += 1;
                state.totalAmount += newItem.price;
            }
        },
        incrementItem: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.items.find(item => item.id === itemId);

            if (existingItem) {
                existingItem.quantity += 1;
                existingItem.totalPrice += existingItem.price;
                state.totalQuantity += 1;
                state.totalAmount += existingItem.price;
            }
        },
        decrementItem: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.items.find(item => item.id === itemId);

            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1;
                existingItem.totalPrice -= existingItem.price;
                state.totalQuantity -= 1;
                state.totalAmount -= existingItem.price;
            } else if (existingItem && existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== itemId);
                state.totalQuantity -= 1;
                state.totalAmount -= existingItem.price;
            }
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.items.find(item => item.id === itemId);

            if (existingItem) {
                state.totalQuantity -= existingItem.quantity;
                state.totalAmount -= existingItem.totalPrice;
                state.items = state.items.filter(item => item.id !== itemId);
            }
        },
    },
});

export const { addItem, incrementItem, decrementItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
