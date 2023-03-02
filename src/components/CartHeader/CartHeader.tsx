import productsArray, { getProductsObject, Product } from 'utils/productsArray'
import './CartHeader.scss'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
}
const CartHeader = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <div>
            <div className="header-total-count">
                {Object.keys(productsInCart).reduce(
                    (total, productId) =>
                        total + productsInCart[parseInt(productId)],
                    0
                )}
            </div>
        </div>
    )
}

export default CartHeader
