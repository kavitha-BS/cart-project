import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'carts',
  initialState: {
    cart : 0,
    products: []
  },
  reducers: {
    updateCart: (state, action) => {
    //  console.log(action);
    state.cart = action.payload+1;
  },
  cartProduct: (state, action) => {
    console.log(action);
    state.products.push(action.payload);
  },
  removefromCart: (state, action) => {
    // console.log(action);
    // let index1 = state.products.indexOf(action.payload);
            state.quantity -= action.payload
            state.products.splice(action.payload, 1)
            
  }
}});

// this is for dispatch
export const { updateCart, cartProduct, removefromCart } = cartSlice.actions;

// this is for configureStore
export default cartSlice.reducer;