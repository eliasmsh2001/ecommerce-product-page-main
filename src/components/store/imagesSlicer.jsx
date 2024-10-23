
import {createSlice} from '@reduxjs/toolkit'
import { imagesArray } from './imagesData'



const imagesSlicer = createSlice({
    name: 'images',
    initialState: {image: imagesArray[0], index: 0},
    reducers: {
        onSelectImage(state, action) {
            const image = action.payload
            state.image = image
        },
        onChangeIndex(state, action){
            state.index = action.payload
            state.image =  imagesArray[action.payload]
        },
        onNextIndex(state){
            if(state.index === 3){
                state.index = 0
            }else {
                state.index++
            }
            state.image = imagesArray[state.index]
        },
        onPreviousIndex(state){
            if(state.index === 0){
                state.index = 3
            }else {
                state.index--
            }
            state.image = imagesArray[state.index]
        },

    }
})


export default imagesSlicer;
export const imagesActions = imagesSlicer.actions;