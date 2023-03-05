import { Card, CardContent, Grid, Button } from '@mui/material'
import { Product } from 'utils/productsArray'
import DeleteIcon from '@mui/icons-material/Delete'
import Quantity from 'components/Quantity/Quantity'

type Props = {
    productCount: number
    product: Product
    removeProductFromCart: (id: number) => void
    changeProductQuantity: (id: number, count: number) => void
}

const CartProductListItemExtended = ({
    product,
    productCount,
    removeProductFromCart,
    changeProductQuantity,
}: Props) => {
    return (
        <Grid item xs={12} sm={4}>
            <Card variant="outlined">
                <CardContent>
                    <div className="product-image">
                        <img src={product.image} alt="" />
                    </div>
                    <div>{product.title}</div>
                    <p>Price for one item: {product.price}</p>
                    <p>Count: {productCount} </p>
                    <Quantity
                        count={productCount}
                        minCount={0}
                        onIncrement={() =>
                            changeProductQuantity(product.id, productCount + 1)
                        }
                        onDecrement={() =>
                            productCount <= 1
                                ? removeProductFromCart(product.id)
                                : changeProductQuantity(
                                      product.id,
                                      productCount - 1
                                  )
                        }
                    />
                    <br />
                    <Button
                        variant="outlined"
                        onClick={() => removeProductFromCart(product.id)}
                    >
                        <DeleteIcon />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}
export default CartProductListItemExtended
