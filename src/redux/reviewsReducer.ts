import { createSlice } from '@reduxjs/toolkit'

type Review = {
    name: string
    text: string
}

export const initialState: Review[] = [
    {
        name: 'Голо Митни',
        text: 'Звичайний монік 75гц. Пікселі цілі ще (купував в 20 році). Стильно) Модно) Молодіжно)',
    },
    {
        name: 'Uggi',
        text: 'Після поганішого думав що кращей тепер бачу з часом недоліки, але працює не підводить і на тому дякую, краще подивитись іншого як на мене.',
    },
    {
        name: 'Андрій',
        text: 'все добре, монітор працює вже 2 роки)',
    },
]

export const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        addReview: (state, action) => [...state, action.payload],
    },
})

export const { addReview } = reviewsSlice.actions

export default reviewsSlice.reducer
