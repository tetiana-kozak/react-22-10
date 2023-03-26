import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { Product } from 'utils/productsArray'

const initialState: Product[] = []

export const fetchProducts = createAsyncThunk<Product[], undefined>(
    'products/fetchProducts',
    async () => {
        const response = await axios.get(
            'https://run.mocky.io/v3/00a03da1-2f23-4482-8a70-2f4dfff9ce1f'
        )
        return response.data.products
    }
)

export const productsSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(
            fetchProducts.fulfilled,
            (state, action) => (state = action.payload)
        )
    },
})

export default productsSlice.reducer
