import { createSlice } from "@reduxjs/toolkit";


const initialState = {}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const{id, name, price, weight, image } = action.payload
            if(state[id]){
                state[id].quantity += 1
            }else{
                state[id] = {id, name, price, quantity: 1, weight, image}
            }
        },
        addAmount: (state, action) => {
            const {id} = action.payload
            state[id].quantity++
        },
        reduceAmount: (state, action) => {
            const {id} = action.payload
            if(state[id].quantity <= 1){
                state[id].quantity = 1
            }else{
                state[id].quantity--
            }
        },
        removeItem: (state, action) => {
            const {id} = action.payload
            delete state[id]
        }
    }
});

export const {
    addToCart,
    addAmount,
    reduceAmount,
    removeItem
} = cartSlice.actions;
export default cartSlice.reducer;