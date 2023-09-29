import { useState } from 'react'
import { createRoot } from 'react-dom/client'
const root = createRoot(document.getElementById('root'))

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Hello World</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

root.render(<App />)
