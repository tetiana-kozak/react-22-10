import axios from 'axios'
import Title from 'components/Title/Title'
import { useState } from 'react'

type Props = {}

type Order = {
    name: string
    adress: string
}

const CheckoutPage = (props: Props) => {
    const [isOrderSend, setIsOrderSend] = useState<boolean>(false)

    const [orderData, setOrderData] = useState<Order>({
        name: '',
        adress: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }
    const handleAdress = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState) => ({
            ...prevState,
            adress: e.target.value,
        }))
    }

    const setOrder = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        axios
            .post(
                'https://my-json-server.typicode.com/kznkv-skillup/server/orders',
                {
                    name: orderData.name,
                    adress: orderData.adress,
                }
            )
            .then((res) => res.data)
            .then(({ name, adress }) => {
                setOrderData({
                    name,
                    adress,
                })
                setIsOrderSend(true)
            })
    }

    const renderForm = () => {
        return (
            <form onSubmit={setOrder}>
                <div>
                    <input
                        type="text"
                        placeholder="Your name"
                        value={orderData.name}
                        onChange={handleName}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Your adress"
                        value={orderData.adress}
                        onChange={handleAdress}
                    />
                </div>
                <button type="submit">Send</button>
            </form>
        )
    }
    const renderMessage = () => {
        return (
            <div>
                <div>Dear, {orderData.name} thanks for your order!</div>
                <p>Adress: {orderData.adress}</p>
            </div>
        )
    }
    return (
        <>
            <Title>Checkout</Title>
            {isOrderSend ? renderMessage() : renderForm()}
        </>
    )
}
export default CheckoutPage
