import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

import './App.css'
import Protected from './protected/Protected'
import Secret from './protected/Secret'
import { UserContextManager } from "./Contexts/UserContext"
import LogIn from './pages/LogIn'

function App() {
    return (
        <>
            <UserContextManager>
                <Routes>
                    <Route element={<Protected />}>
                        <Route path="/secret" element={<Secret />} exact />
                    </Route>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<LogIn />} />
                </Routes>
            </UserContextManager>
        </>
    )
}

export default App
