import {configureStore} from '@reduxjs/toolkit'
import imagesSlicer from './imagesSlicer'
import cartSlicer from './cartSlicer'
import sliderSlicer from './sliderSlicer'
import menuSlicer from './menuSlicer'

const store = configureStore({
    reducer: {
        images: imagesSlicer.reducer,
        cart: cartSlicer.reducer,
        slider: sliderSlicer.reducer,
        menu: menuSlicer.reducer
    }
})


export default store