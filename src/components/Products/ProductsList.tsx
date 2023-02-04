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
                    <ProductsListItem
                        title="iPhone 14 Pro"
                        description="iPhone 14 Pro"
                        type="phone"
                        capacity="256"
                        price={1500}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        title="iPhone 13 Pro"
                        description="iPhone 13 Pro"
                        type="phone"
                        capacity="128"
                        price={1000}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        title="iPhone 12 Pro"
                        description="iPhone 12 Pro"
                        type="phone"
                        capacity="512"
                        price={1000}
                    />
                </Grid>
            </Grid>
        </>
    )
}
export default ProductsList
