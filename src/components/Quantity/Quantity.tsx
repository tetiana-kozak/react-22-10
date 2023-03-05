import { Button, TextField } from '@mui/material'

type Props = {
    count: number
    onIncrement: () => void
    onDecrement: () => void
    minCount: number
}

const Quantity = ({ count, onIncrement, onDecrement, minCount }: Props) => {
    return (
        <div className="product-quantity">
            <Button
                variant="outlined"
                onClick={() => onDecrement()}
                disabled={count <= minCount}
            >
                -
            </Button>
            <TextField size="small" value={count} />
            <Button
                variant="outlined"
                onClick={() => onIncrement()}
                disabled={count >= 10}
            >
                +
            </Button>
        </div>
    )
}
export default Quantity
