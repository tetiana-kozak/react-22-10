import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartReducer'
import likeReducer from './likeReducer'
import productsReducer from './productsReducer'
import reviewsReducer from './reviewsReducer'

export const store = configureStore({
    reducer: {
        productsLike: likeReducer,
        productsInCart: cartReducer,
        reviews: reviewsReducer,
        products: productsReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
