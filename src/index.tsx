import React from 'react'
import ReactDOM from 'react-dom/client'

function List() {
    return (
        <>
            <ul>
                <li>List item 1</li>
                <li>List item 2</li>
                <li>List item 3</li>
            </ul>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti labore tenetur nemo perferendis, ut atque incidunt!
                Neque officia maxime, sed aperiam quod ratione similique
                veritatis nemo dolor exercitationem voluptas odit.
            </p>
        </>
    )
}

// інтерфейси можна наслідувати а типи ні
// interface ITitleProps {
//     name: string
// }

type TitleProps = {
    name: string
    text: string
    year?: number
}

const Title = ({name,text, year}: TitleProps) => {
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
            <Title name="App" text="text1" year={11} />
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
