import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import BotCollection from './components/BotCollection';

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
     <Header />
     <BotCollection bots={bots} />
   </>
  )
}

export default App;

