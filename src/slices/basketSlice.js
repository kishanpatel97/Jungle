import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        // Actions
        addToBasket: (state, action) => {
            state.items = [...state.items, action.payload];
        },
        removeFromBasket: (state, action) => {
            const index = state.items.findIndex(
                (basketItem) => basketItem.id === action.payload.id
            );

            let newBasket = [...state.items];

            if (index >= 0) {
                // Case 1: item exists in basket, so remove it
                newBasket.splice(index, 1);
            } else {
                // Case 2: item does not exist in basket, so throw warning
                console.warn(
                    `Cannot remove product (id: ${action.payload.id})) since it's not in the basket.`
                );
            }
            state.items = newBasket;
        },
    },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) =>
    state.basket.items.reduce((total, item) => total + item.price, 0);

export default basketSlice.reducer;
