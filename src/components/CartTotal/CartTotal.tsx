import { useAppSelector } from 'redux/hooks'
import productsArray, { getProductsObject, Product } from 'utils/productsArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

type productsObjectType = {
    [id: number]: Product
}

const CartTotal = ({ productsInCart }: Props) => {
    const productsArray = useAppSelector((state) => state.products)
    const productsObject: productsObjectType = getProductsObject(productsArray)
    return (
        <div>
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
    )
}
export default CartTotal
