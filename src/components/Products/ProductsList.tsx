import { Grid, Typography } from '@mui/material'
import ProductsListItem from './ProductsListItem'

type Props = {}
const ProductsList = (props: Props) => {
    return (
        <>
            <Typography variant="h3" component="h2" align="center">
                List of products
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem />
                </Grid>
            </Grid>
        </>
    )
}
export default ProductsList
