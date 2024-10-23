import { createSlice } from "@reduxjs/toolkit";



const menuSlicer = createSlice({
    name: 'menu',
    initialState: {isOpen: false},
    reducers: {
        onToggleNavMenu(state){
            state.isOpen = !state.isOpen
        }
    }
})


export default menuSlicer
export const navMenuActions = menuSlicer.actions