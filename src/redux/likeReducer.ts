import { AnyAction, createSlice } from '@reduxjs/toolkit'

type ProductsLikeType = {
    [id: number]: boolean
}

export const initialState: ProductsLikeType = {
    1: true,
    2: true,
}

export const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
        addLike: (state, action) => ({
            ...state,
            [action.payload]: true,
        }),
        removeLike: (state, action) => ({
            ...state,
            [action.payload]: false,
        }),
    },
})

export const { addLike, removeLike } = likeSlice.actions

export default likeSlice.reducer
