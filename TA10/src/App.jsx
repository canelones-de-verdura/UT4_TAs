import { useEffect, useState } from 'react'
import './App.css'

function User() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        async function fun() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                setUser(await response.json());
            } catch (e) {
                console.error("User(): ", e);
            }
        }

        fun();
    }, [])

    console.log(user);

    return (
        <>
            {user.map(usr => {
                { return <div><b>Usuario:</b> {usr.username}, <b>Email:</b>{usr.email}</div> }
            })}
        </>
    );
}

function App() {
    return (
        <>
            <User />
        </>
    );
}

export default App
