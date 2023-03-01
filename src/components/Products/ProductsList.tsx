import { Grid, Typography } from '@mui/material'
import ProductsListItem from './ProductsListItem'
import productsArray from 'utils/productsArray'

type Props = {
    addProductToCart: (id: number, count: number) => void
}

const ProductsList = ({ addProductToCart }: Props) => {
    return (
        <>
            <Typography
                variant="h3"
                component="h2"
                align="center"
                sx={{
                    marginBottom: '30px',
                }}
            >
                List of products
            </Typography>
            <Grid container spacing={4}>
                {productsArray.map(
                    ({
                        title,
                        description,
                        type,
                        capacity,
                        price,
                        id,
                        image,
                    }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductsListItem
                                image={image}
                                title={title}
                                description={description}
                                type={type}
                                capacity={capacity}
                                price={price}
                                addProductToCart={addProductToCart}
                                id={id}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ProductsList
