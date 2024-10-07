import { Routes, Route, Link } from 'react-router-dom'
import { useContext, useState } from "react";
import { UserContext } from '../Contexts/UserContext';

function LogIn() {
    const log = useContext(UserContext);
    const [value, setValue] = useState("");

    function login(passwd) {
        let aux = log.authenticate(passwd);
        return aux;
    }

    return (
        <>
            <h1>Log in</h1>
            <input onChange={(event) => setValue(event.target.value)}></input>
            <button onClick={() => login(value)}>Continue</button>
            <Link to="/home">Go back</Link>
        </>
    );
}

export default LogIn;
