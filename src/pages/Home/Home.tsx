import ProductsList from 'components/Products/ProductsList'
import Reviews from 'components/Reviews/Reviews'

type Props = {}
const Home = (props: Props) => {
    return (
        <>
            <ProductsList />
            <Reviews />
        </>
    )
}
export default Home
