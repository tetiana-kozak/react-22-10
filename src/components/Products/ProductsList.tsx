import { Grid, Typography } from '@mui/material'
import ProductsListItem from './ProductsListItem'
import productsArray from 'utils/productsArray'

type Props = {}
type Product = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
}

const ProductsList = (props: Props) => {
    return (
        <>
            <Typography variant="h3" component="h2" align="center">
                List of products
            </Typography>
            <Grid container spacing={4}>
                {productsArray.map((product: Product) => (
                    <Grid item xs={12} sm={6} md={4}>
                        <ProductsListItem
                            title={product.title}
                            description={product.description}
                            type={product.type}
                            capacity={product.capacity}
                            price={product.price}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
export default ProductsList
