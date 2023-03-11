import ProductsList from 'components/Products/ProductsList'
import Reviews from 'components/Reviews/Reviews'

type Props = {
    addProductToCart: (id: number, count: number) => void
    productsLike: { [id: number]: boolean }
    togleLikeState: (id: number) => void
}
const Home = ({ addProductToCart, productsLike, togleLikeState }: Props) => {
    return (
        <>
            <ProductsList
                addProductToCart={addProductToCart}
                productsLike={productsLike}
                togleLikeState={togleLikeState}
            />
            <Reviews />
        </>
    )
}
export default Home
