import { AnyAction, createSlice } from '@reduxjs/toolkit'

type State = {
    [id: number]: number
}

export const initialState: State = {
    1: 3,
    2: 3,
}

const cartReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_CART': {
            return {
                ...state,
                [action.id]: (state[action.id] || 0) + action.count,
            }
        }
        default:
            return state
    }
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
