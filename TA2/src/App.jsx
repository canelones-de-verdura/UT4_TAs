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
            <Card>
                <p className="card-title">Tarea 1</p>
                <div className="card-content">
                    <p className="desc">{desc}</p>
                </div>
                <div className="card-info">
                    <div className="assigned-to">
                        <span className="material-symbols-outlined">account_circle</span>
                        <p>Ezequiel González</p>
                    </div>
                    <p className="date">11/09/2024 - 13/09/24</p>
                </div>
            </Card>
            <Card>
                <p className="card-title">Tarea 2</p>
                <div className="card-content">
                    <p className="desc">{desc}</p>
                </div>
                <div className="card-info">
                    <div className="assigned-to">
                        <span className="material-symbols-outlined">account_circle</span>
                        <p>Ezequiel González</p>
                    </div>
                    <p className="date">12/09/2024 - 14/09/2024</p>
                </div>
            </Card>
            <Card>
                <p className="card-title">Tarea 3</p>
                <div className="card-content">
                    <p className="desc">{desc}</p>
                </div>
                <div className="card-info">
                    <div className="assigned-to">
                        <span className="material-symbols-outlined">account_circle</span>
                        <p>Ezequiel González</p>
                    </div>
                    <p className="date">13/09/2024 - 15/09/2024</p>
                </div>
            </Card>
        </>
    )
}

export default App
