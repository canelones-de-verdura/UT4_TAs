import { Routes, Route } from 'react-router-dom'
import Products from './Products'
import './App.css'

function App() {
    return (
        <>
            <Routes>
                <Route path="/product">
                    <Route path=":id" element={<Products />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
