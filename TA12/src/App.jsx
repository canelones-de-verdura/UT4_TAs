import { createContext, useContext, useEffect, useState, useSyncExternalStore } from 'react'
import './App.css'

const userName = createContext();

function Componente() {
    const name = useContext(userName);
    return name;
}

function App() {
    return (
        <userName.Provider value={"nombre_de_usuario"}>
            <Componente />
        </userName.Provider >
    );
}

export default App
