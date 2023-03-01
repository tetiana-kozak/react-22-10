import { Container } from '@mui/material'
import Home from 'pages/Home/Home'

type Props = {
    addProductToCart: (id: number, count: number) => void
}
const Main = ({ addProductToCart }: Props) => {
    return (
        <Container sx={{ padding: '60px 0' }}>
            <Home addProductToCart={addProductToCart} />
        </Container>
    )
}
export default Main
