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
            // lógica para añadir al carrito
        },
        incrementItem: (state, action) => {
            // lógica para incrementar
        },
        decrementItem: (state, action) => {
            // lógica para decrementar
        },
        removeItem: (state, action) => {
            // lógica para remover
        },
    },
});

export const { addItem, incrementItem, decrementItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
