import React from 'react'
import ReactDOM from 'react-dom/client'

// without jsx
// const title = React.createElement('h1', {id: 'title'}, "hello react js")
// console.log(title);

// jsx => js extended
const title = <h1 id="title">Hello js</h1>
console.log(title)

const content = (
    <div>
        {title}
        {10 + 10}
        <ul className="list">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{content}</React.StrictMode>)
