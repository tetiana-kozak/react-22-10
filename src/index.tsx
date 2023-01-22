import React from 'react'
import ReactDOM from 'react-dom/client'

function Title() {
    return <h1>Hello TS</h1>
}

function List() {
    return (
        <React.Fragment>

            <ul>
                <li>List item 1</li>
                <li>List item 2</li>
                <li>List item 3</li>
            </ul>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti labore tenetur nemo perferendis, ut atque incidunt! Neque officia maxime, sed aperiam quod ratione similique veritatis nemo dolor exercitationem voluptas odit.</p>
        </React.Fragment>
    )
}

const App = () => {
    return (
        <div className='app'>
            <Title />
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
