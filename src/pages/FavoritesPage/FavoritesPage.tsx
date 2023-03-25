import { Button, Card, CardContent, Grid } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { toggleLike } from 'redux/likeReducer'
import productsArray, { getProductsObject, Product } from 'utils/productsArray'
import Title from 'components/Title/Title'

type Props = {
    productsObject?: {
        [id: number]: Product
    }
}

const FavoritesPage = ({
    productsObject = getProductsObject(productsArray),
}: Props) => {
    const productsLike = useAppSelector((state) => state.productsLike)
    const dispatch = useAppDispatch()

    const filteredObject = Object.fromEntries(
        Object.entries(productsLike).filter((item) => item[1] === true)
    )

    return (
        <>
            <Title>Favorites</Title>
            <Grid container spacing={4}>
                {Object.keys(filteredObject).map((id) => (
                    <Grid item xs={12} sm={4} key={id}>
                        <Card variant="outlined">
                            <CardContent>
                                <Button
                                    variant="outlined"
                                    onClick={() => dispatch(toggleLike(id))}
                                >
                                    {filteredObject[id] ? (
                                        <FavoriteIcon />
                                    ) : (
                                        <FavoriteBorderIcon />
                                    )}
                                </Button>
                                <div className="product-image">
                                    <img
                                        src={productsObject[parseInt(id)].image}
                                        alt=""
                                    />
                                </div>
                                <div>{productsObject[parseInt(id)].title}</div>
                                <div>
                                    {productsObject[parseInt(id)].description}
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
export default FavoritesPage
