import { useEffect, useState } from 'react'
import './App.css'

function Time() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const tictoc = setInterval(() => {
            setSeconds(seconds + 1);
        }, 1000);

        return () => clearInterval(tictoc);
    }, [seconds])

    console.log(seconds);

    return (
        <>
            {seconds}
        </>
    );
}

function App() {
    return (
        <>
            <Time />
        </>
    );
}

export default App
