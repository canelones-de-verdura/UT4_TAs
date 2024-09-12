import { Card } from './Card.jsx'

import './App.css'

function App() {
    const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed \
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim \
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliq\
        uip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in \
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur \
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserun\
        t mollit anim id est laborum."

    return (
        <>
            <Card
                title="Tarea 1" description={desc} assignedTo="Ezequiel González"
                startDate="11/09/2024" endDate="13/09/24"
            />
            <Card
                title="Tarea 2" description={desc} assignedTo="Ezequiel González"
                startDate="12/09/2024" endDate="14/09/24"
            />
            <Card
                title="Tarea 3" description={desc} assignedTo="Ezequiel González"
                startDate="13/09/2024" endDate="16/09/24"
            />
        </>
    )
}

export default App
