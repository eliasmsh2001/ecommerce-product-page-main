import { createSlice } from "@reduxjs/toolkit";




const sliderSlicer = createSlice({
    name: 'slider',
    initialState: {isOpen: true,},
    reducers: {
        onShow(state){
            state.isOpen = true
        },
        onHide(state){
            state.isOpen = false
        },

    }
})


export default sliderSlicer;
export const sliderActions = sliderSlicer.actions;