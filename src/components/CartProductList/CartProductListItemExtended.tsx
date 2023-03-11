import { Card, CardContent, Grid, Button } from '@mui/material'
import { Product } from 'utils/productsArray'
import DeleteIcon from '@mui/icons-material/Delete'
import Quantity from 'components/Quantity/Quantity'
import { useContext } from 'react'
import { MyContext } from 'container/App/App'

type Props = {
    productCount: number
    product: Product
    changeProductQuantity: (id: number, count: number) => void
}

const CartProductListItemExtended = ({
    product,
    productCount,
    changeProductQuantity,
}: Props) => {
    const data = useContext(MyContext)
    console.log(data?.productsLike[product.id])

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
                                ? data?.removeProductFromCart(product.id)
                                : changeProductQuantity(
                                      product.id,
                                      productCount - 1
                                  )
                        }
                    />
                    <br />
                    <Button
                        variant="outlined"
                        onClick={() => data?.removeProductFromCart(product.id)}
                    >
                        <DeleteIcon />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}
export default CartProductListItemExtended
