import { createContext, useContext, useEffect, useState } from 'react'
import './App.css'

const userName = createContext();

function Componente() {
    const name = useContext(userName)[0];
    return (
        <div>Nombre de usuario: {name}</div>
    );
}

function Input() {
    const [inputValue, setInputValue] = useState("");
    const changeName = useContext(userName);

    return (
        <>
            <input
                className="inpt" type="text" placeholder="Nuevo nombre..."
                value={inputValue} onChange={e => setInputValue(e.target.value)}
            >
            </input>
            <button className="bttn" onClick={() => {
                changeName[1](inputValue);
                setInputValue("");
            }}>Cambiar</button>

        </>
    );
}

function App() {
    const [user, setUser] = useState("nombre_de_usuario");

    return (
        <userName.Provider value={[user, setUser]}>
            <Componente />
            <Input />
        </userName.Provider >
    );
}

export default App
