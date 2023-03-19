import { useParams } from 'react-router-dom'
import productsArray, { getProductsObject, Product } from 'utils/productsArray'
import { Typography } from '@mui/material'

type Props = {
    productsObject?: {
        [id: number]: Product
    }
}

const ProductPage = ({
    productsObject = getProductsObject(productsArray),
}: Props) => {
    const { id } = useParams()

    const product = productsObject[parseInt(id!)]
    return (
        <>
            <Typography variant="h4" component={'h1'}>
                {product.title}
            </Typography>
            <p
                dangerouslySetInnerHTML={{
                    __html: product.fullDescription!,
                }}
            ></p>
        </>
    )
}

export default ProductPage
