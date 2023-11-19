import './App.css';
import { useState, useEffect } from 'react';
function App() {

const [bots, setBots] = useState([])
const apiURL = "http://localhost:3000/bots"
useEffect(() => {
  fetch(apiURL)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    setBots(data)
  })
}, [])

  return (
   <>
   </>
  )
}

export default App;

