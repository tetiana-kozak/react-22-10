import { Product } from 'utils/productsArray'
import { Typography } from '@mui/material'
import CartTotal from 'components/CartTotal/CartTotal'
import CartProductList from 'components/CartProductList/CartProductList'
import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtended'
import Grid from '@mui/material/Grid'
import { useAppSelector } from 'redux/hooks'
import { Link } from 'react-router-dom'

type Props = {
    productsInCart?: {
        [id: number]: number
    }
}

const CartPage = (props: Props) => {
    const productsInCart = useAppSelector((state) => state.productsInCart)
    return (
        <div>
            <Typography
                variant="h4"
                component="h1"
                sx={{
                    marginBottom: '30px',
                    textAlign: 'center',
                }}
            >
                Cart
            </Typography>
            <Grid
                container
                spacing={4}
                sx={{
                    marginTop: 0,
                }}
            >
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                />
            </Grid>
            <br />
            <CartTotal productsInCart={productsInCart} />
            <br />
            <Link to="/checkout"> Proceed to checkout</Link>
        </div>
    )
}
export default CartPage
