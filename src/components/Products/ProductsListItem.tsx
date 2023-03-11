import { Button, Card, CardActions, CardContent } from '@mui/material'
import Quantity from 'components/Quantity/Quantity'
import { useState } from 'react'
import './ProductsListItem.scss'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

type Props = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
    id: number
    addProductToCart: (id: number, count: number) => void
    togleLikeState: (id: number) => void
    isLiked: boolean
}
const ProductsListItem = ({
    title,
    description,
    type,
    capacity,
    price,
    image,
    id,
    addProductToCart,
    isLiked,
    togleLikeState,
}: Props) => {
    const [count, setCount] = useState<number>(1)

    const onIncrement = () => {
        setCount((prevState) => prevState + 1)
    }
    const onDecrement = () => {
        setCount((prevState) => prevState - 1)
    }

    return (
        <Card className="product" variant="outlined">
            <CardContent>
                <Button variant="outlined" onClick={() => togleLikeState(id)}>
                    {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </Button>
                <div className="product-image">
                    <img src={image} alt="" />
                </div>
                <div className="product-title">{title}</div>
                <div className="product-description">This is {description}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacity: {capacity} Gb</div>

                <div className="product-price">{price}$</div>
                <Quantity
                    count={count}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                    minCount={1}
                />
            </CardContent>
            <CardActions className="btns-wrap">
                <Button
                    variant="outlined"
                    onClick={() => addProductToCart(id, count)}
                >
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    )
}
export default ProductsListItem
