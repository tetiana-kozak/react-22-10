import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom'

type Props = {}
const Menu = (props: Props) => {
    return (
        <>
            <Button color="inherit">
                <NavLink to="/">Home</NavLink>
            </Button>
            <Button color="inherit">
                <NavLink to="/about">About</NavLink>
            </Button>
            <Button color="inherit">
                <NavLink to="/shipping">Shipping</NavLink>
            </Button>
            <Button color="inherit">
                <NavLink to="/payment">Payment</NavLink>
            </Button>
            <Button color="inherit">
                <NavLink to="/cart">Cart</NavLink>
            </Button>
        </>
    )
}
export default Menu
