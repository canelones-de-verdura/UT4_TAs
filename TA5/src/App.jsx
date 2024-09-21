import React from 'react'
import { useState } from 'react'

function App() {
  const [invis, setVis] = useState(false)

  const hide = () => {
    setVis(!invis);
  }

  return (
    <div>
      <span hidden={invis} > Texto visible </span>
      <button onClick={hide}> botón </button>
    </div>
  )
}

export default App
