import ProductsList from 'components/Products/ProductsList'

type Props = {
    addProductToCart: (id: number, count: number) => void
}
const Home = ({ addProductToCart }: Props) => {
    return (
        <>
            <ProductsList addProductToCart={addProductToCart} />
        </>
    )
}
export default Home
