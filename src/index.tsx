import React from 'react'
import ReactDOM from 'react-dom/client'
import {List} from './List'



// інтерфейси можна наслідувати а типи ні
// interface ITitleProps {
//     name: string
// }

type TitleProps = {
    name?: string
    text: string
    year?: number
}

const Title = ({name = "Jack",text, year}: TitleProps) => {
    // console.log(props);
    return (
        <>
            <h1>Hello {name}</h1>
            <p>{text}</p>
            <div>{year}</div>
        </>
    )
}

const App = () => {
    return (
        <div className="app">
            <Title text="text1" year={11} />
            <Title name="React" text="text2" />
            <Title name="TS" text="text3" year={13} />
            <List />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
