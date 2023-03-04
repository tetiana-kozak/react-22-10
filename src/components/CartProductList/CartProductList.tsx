import productsArray, { getProductsObject, Product } from 'utils/productsArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
}

const CartProductList = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <div>
            {Object.keys(productsInCart).map((productId) => (
                <div key={productId}>
                    <div>
                        <div>{productsObject[parseInt(productId)].title}</div>
                        <div>
                            Price per product :{' '}
                            {productsObject[parseInt(productId)].price} $
                        </div>
                    </div>
                    <div>
                        <div>count: {productsInCart[parseInt(productId)]}</div>
                        <div>
                            {productsObject[parseInt(productId)].price *
                                productsInCart[parseInt(productId)]}{' '}
                            $
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default CartProductList
