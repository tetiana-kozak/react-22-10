import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import { Container } from '@mui/material'
import Home from 'pages/Home/Home'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { createContext, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import CartPage from 'pages/CartPage/CartPage'
import AboutPage from 'pages/AboutPage/AboutPage'
import ShippingPage from 'pages/ShippingPage/ShippingPage'
import PaymentPage from 'pages/PaymentPage/PaymentPage'
import { omit } from 'lodash'

type Props = {}

type productsInCartType = {
    [id: number]: number
}

type productsLikeType = {
    [id: number]: boolean
}

type Context = {
    productsLike: productsLikeType
    removeProductFromCart: (id: number) => void
}

export const MyContext = createContext<Context | null>(null)

const App = (props: Props) => {
    const [productsInCart, setProductsInCart] = useState<productsInCartType>({})

    const [productsLike, setProductsLike] = useState<productsLikeType>({
        1: true,
        3: true,
    })

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    const removeProductFromCart = (id: number) => {
        setProductsInCart((prevState) => omit(prevState, id))
    }

    const changeProductQuantity = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: count,
        }))
    }

    const togleLikeState = (id: number) => {
        setProductsLike((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }))
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <MyContext.Provider value={{ productsLike, removeProductFromCart }}>
                <Header productsInCart={productsInCart} />
                <Container sx={{ padding: '60px 0' }}>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Home
                                    addProductToCart={addProductToCart}
                                    productsLike={productsLike}
                                    togleLikeState={togleLikeState}
                                />
                            }
                        />

                        <Route path="/about" element={<AboutPage />} />

                        <Route path="/shipping" element={<ShippingPage />} />

                        <Route path="/payment" element={<PaymentPage />} />

                        <Route
                            path="/cart"
                            element={
                                <CartPage
                                    productsInCart={productsInCart}
                                    changeProductQuantity={
                                        changeProductQuantity
                                    }
                                />
                            }
                        />
                    </Routes>
                </Container>
                <Footer />
            </MyContext.Provider>
        </StyledEngineProvider>
    )
}
export default App
