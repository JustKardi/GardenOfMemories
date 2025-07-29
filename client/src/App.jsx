import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [msg, setMsg] = useState('Loading...')

  useEffect(() => {
    fetch('/api/test')
      .then((res) => res.json())
      .then((data) => setMsg(data.message))
      .catch((err) => setMsg('Error connecting to backend'))
  }, [])

  return (
    <div className="App">
      <h1>{msg}</h1>
    </div>
  )
}

export default App
