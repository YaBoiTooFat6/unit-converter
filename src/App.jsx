import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'


function App() {
  const [akapit, setAkapit] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    if(akapit.length > 10){
      setError("Przekroczyłeś ilość znaków");
    } else {
      setError(null);
    }
  },[akapit])

  return (
    <>
      <h1>Hello react {akapit}</h1>

      <input onChange={(e) => setAkapit(e.target.value)} />

      <p>{akapit}</p>

      <Header content={akapit}/>

      {error && <div style={{
        color: 'red',
        backgroundColor: "yellow"
      }}>{error}</div>}
    </>
  )
}

export default App
