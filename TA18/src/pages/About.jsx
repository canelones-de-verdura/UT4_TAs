import { Routes, Route, Link } from 'react-router-dom'

function About() {
    return (
        <>
            <h1>About</h1>
            <Link to="/home">Go back</Link>
        </>
    );
}

export default About;
