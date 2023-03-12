import { createSlice } from '@reduxjs/toolkit'

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
    reducers: {},
})

export default likeSlice.reducer
