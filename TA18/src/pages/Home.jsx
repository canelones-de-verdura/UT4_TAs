import { Routes, Route, Link } from 'react-router-dom'
import { useContext, useState } from "react";
import { UserContext } from '../Contexts/UserContext';

function Home() {
    const log = useContext(UserContext);

    function HideSecret({ children }) {
        if (log.logged)
            return (children);

        return null;
    }

    return (
        <>
            <h1>Home</h1>

            <HideSecret >
                <Link to="/secret">Secret</Link>
            </HideSecret>

            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Log in</Link>

            <HideSecret >
                <button onClick={() => log.logout()}>Log out</button>
            </HideSecret>

        </>
    );
}

export default Home;
