import { createSlice } from "@reduxjs/toolkit";




const cartSlicer = createSlice({
    name: 'cart',
    initialState: {show: false, item: undefined, quantity: 0, iconShow: false},
    reducers: {
        toggleCart(state){
            state.show = !state.show;
        },
        onIncrease(state){
            state.show = false;
            state.quantity++
            },
        onDecrease(state){
            state.show = false;
            if(state.quantity === 0){
                state.quantity === 0
                state.item = undefined
            }else {
                state.quantity--
            }
        },
        onAddItem(state, action){
            const newItem = action.payload;
            state.item = {
                id: newItem.title,
                image: newItem.image,
                title: newItem.title,
                price: newItem.price,
            }
        },
        onDelete(state){
            state.item = undefined
            state.quantity = 0
            state.iconShow = false
        },
        onCheckout(state){
            state.show = false
            state.item = undefined
            state.quantity = 0
        },
        onShowIcon(state){
            state.iconShow = true
        }
        
    }
})

export default cartSlicer;
export const cartActions = cartSlicer.actions;