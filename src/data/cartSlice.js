import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({ 
    name: 'cart',
    initialState: {
        cartProductsIds: []
    },
    reducers: {
        addToCart: (state, action) => { 
            state.cartProductsIds = [action.payload, ...state.cartProductsIds]
        },
        removeFromCart: (state, action) => { 
            const indexOfId = state.cartProductsIds.indexOf(action.payload)
            state.cartProductsIds.splice(indexOfId, 1)
        },
        clearAllItems: (state) => {
            state.cartProductsIds = []
        }
        /* addToCart(state, action) {
            state.cartProductsIds.push(action.payload)
        },
        removeFromCart(state, action) {
            state.cartProductsIds = state.cartProductsIds.filter(id => id !== action.payload)
        } */
    }
})

export default cartSlice