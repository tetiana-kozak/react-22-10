import productsArray, { getProductsObject, Product } from 'utils/productsArray'
import { Typography } from '@mui/material'
import './CartPage.scss'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
}

const CartPage = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
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
                <div>
                    {Object.keys(productsInCart).map((productId) => (
                        <div key={productId} className="cart-card">
                            <div>
                                <div>
                                    {productsObject[parseInt(productId)].title}{' '}
                                    : {productsInCart[parseInt(productId)]}
                                </div>
                                <div className="price">
                                    Price per product :{' '}
                                    {productsObject[parseInt(productId)].price}{' '}
                                    $
                                </div>
                            </div>
                            <div>
                                <div className="count">
                                    count: {productsInCart[parseInt(productId)]}
                                </div>
                                <div className="sum">
                                    {productsObject[parseInt(productId)].price *
                                        productsInCart[
                                            parseInt(productId)
                                        ]}{' '}
                                    $
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cart-total">
                    Total:{' '}
                    {Object.keys(productsInCart).reduce(
                        (total, productId) =>
                            total +
                            productsObject[parseInt(productId)].price *
                                productsInCart[parseInt(productId)],
                        0
                    )}{' '}
                    $
                </div>
            </div>
        </div>
    )
}
export default CartPage
