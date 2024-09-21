import React from 'react'
import { useState, useEffect } from 'react'
import { createContext, useContext } from 'react'
import { TaskDashboard } from './TaskDashboard';
import { Card } from './Card';

export const TasksArray = createContext();

function App() {
    const [taskArray, updateTaskArray] = useState([]);
    const [inputValue, setInputValue] = useState("");

    return (
        <TasksArray.Provider value={taskArray}>
            <input
                className="inpt" type="text" placeholder="Nueva tarea..."
                value={inputValue} onChange={e => setInputValue(e.target.value)}
            >
            </input>
            <button className="bttn" onClick={() => {
                updateTaskArray([
                    ...taskArray,
                    Card("Tarea", inputValue, "Eze", "18/09", "18/09")
                ])
                setInputValue("");
            }}>Agregar</button>
            <TaskDashboard></TaskDashboard>
        </TasksArray.Provider>
    );
}

export default App
