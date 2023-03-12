import { configureStore } from '@reduxjs/toolkit'
import likeReducer from './likeReducer'

export const store = configureStore({
    reducer: {
        productsLike: likeReducer,
    },
})
