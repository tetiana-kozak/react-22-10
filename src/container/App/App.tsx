import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'

type Props = {}

type productsInCartType = {
    [id: number]: number
}

const App = (props: Props) => {
    const [productsInCart, setProductsInCart] = useState<productsInCartType>({
        1: 5,
        2: 6,
    })

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: prevState[id] + count,
        }))
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            {/* <button onClick={() => addProductToCart(2, 5)}>Add to cart</button> */}
            <Main addProductToCart={addProductToCart} />
            {/* <Main addProductToCart={addProductToCart} /> */}
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
