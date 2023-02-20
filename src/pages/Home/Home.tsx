import ProductsList from 'components/Products/ProductsList'

type Props = {
    addProductToCart: (count: number, price: number) => void
}
const Home = ({ addProductToCart }: Props) => {
    return (
        <>
            <ProductsList addProductToCart={addProductToCart} />
        </>
    )
}
export default Home
