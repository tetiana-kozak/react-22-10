import { Product } from 'utils/productsArray'
import { Typography } from '@mui/material'
import CartTotal from 'components/CartTotal/CartTotal'
import CartProductList from 'components/CartProductList/CartProductList'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
}

const CartPage = ({ productsInCart }: Props) => {
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
            <div>
                <CartProductList productsInCart={productsInCart} />

                <CartTotal productsInCart={productsInCart} />
            </div>
        </div>
    )
}
export default CartPage
