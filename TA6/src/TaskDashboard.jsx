import React from 'react'
import { useContext } from 'react'
import { TasksArray } from './App';

export function TaskDashboard() {
    const tasks = useContext(TasksArray);

    return (
        <>
            {tasks.map((task, idx) => { return <div key={idx}>{task}</div> })}
        </>
    );
}
