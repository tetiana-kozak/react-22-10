import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import './ProductsListItem.scss'
import { Component, ReactNode } from 'react'

type Props = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

type State = {
    count: number
    color: string
    show: boolean
}

class ProductsListItem extends Component<Props, State> {
    state = {
        count: 0,
        color: 'red',
        show: false,
    }

    onIncrementClick = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }))
    }

    onDecrementClick = () => {
        // if (this.state.count > 0) {
        this.setState((prevState) => ({
            count: prevState.count - 1,
        }))
        // }
    }

    changeColor = () => {
        this.setState((prevState) => ({
            color: prevState.color === 'red' ? 'blue' : 'red',
        }))
    }

    showDescription = () => {
        this.setState((prevState) => ({
            show: !prevState.show,
        }))
    }

    render() {
        const { title, description, type, capacity, price, image } = this.props
        return (
            <Card className="product" variant="outlined">
                <CardContent>
                    <div className="product-image">
                        <img src={image} alt="" />
                    </div>
                    <div className="product-title">{title}</div>
                    <div className="product-description">
                        This is {description}
                    </div>
                    <div className="product-features">Type: {type}</div>
                    <div className="product-features">
                        Capacity: {capacity} Gb
                    </div>

                    <div>
                        Color:{' '}
                        <span className={this.state.color}>
                            {this.state.color}
                        </span>
                    </div>
                    <button onClick={() => this.changeColor()}>
                        Change color
                    </button>
                    <br />

                    {this.state.show && (
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Non sunt adipisci dolorum temporibus
                            cupiditate quibusdam assumenda laborum, placeat
                            doloribus, ad ea a! Quam ab provident incidunt
                            consequatur deleniti facilis sit et ex atque
                            cupiditate unde nulla omnis cumque, mollitia illo
                            error sed odit illum ea adipisci! Cumque aspernatur
                            sed vitae!
                        </p>
                    )}

                    <button
                        onClick={() => {
                            this.showDescription()
                        }}
                    >
                        Show full description
                    </button>

                    <div className="product-price">{price}$</div>
                    <div className="product-quantity">
                        <Button
                            variant="outlined"
                            onClick={() => {
                                this.onDecrementClick()
                            }}
                            disabled={this.state.count <= 1}
                        >
                            -
                        </Button>
                        <TextField size="small" value={this.state.count} />
                        <Button
                            variant="outlined"
                            onClick={() => this.onIncrementClick()}
                            disabled={this.state.count >= 10}
                        >
                            +
                        </Button>
                    </div>
                </CardContent>
                <CardActions className="btns-wrap">
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </Card>
        )
    }
}
export default ProductsListItem
