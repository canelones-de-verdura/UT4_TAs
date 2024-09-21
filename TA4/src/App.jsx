import React from 'react'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={increment}> +1 </button>
      <button onClick={decrement}> -1 </button>
    </div>
  )
}

export default App
