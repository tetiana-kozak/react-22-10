import { AnyAction, createSlice } from '@reduxjs/toolkit'

type State = {
    [id: number]: number
}

export const initialState: State = {
    1: 3,
    2: 3,
}

const cartReducer = (state = initialState, action: AnyAction) => {
    return state
}

export default cartReducer

// export const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         cartItems: (state, action) => ({
//             ...state,
//         }),
//     },
// })

// export const { cartItems } = cartSlice.actions

// export default cartSlice.reducer
