import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import BotCollection from './components/BotCollection';
import Mybotarmy from './components/Mybotarmy';


function App() {

const [bots, setBots] = useState([]);
const[myBots, setMyBots] = useState([]);

const apiURL = "http://localhost:3000/bots"
useEffect(() => {
  fetch(apiURL)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    setBots(data)
  })
}, []);

const myBotCollection = ((bots) => {
  if(!myBots.some(myBot => myBot.id === bots.id)){
  setMyBots([...myBots, bots])
}  
});

const removeBotFromMyCollection = ((bots) => {
  const newBotCollection = myBots.filter(myBot => myBot.id !== bots.id);
  setMyBots(newBotCollection);
})
  return (
   <>
     <Header />
     <Mybotarmy myBots={myBots} removeBotFromMyCollection={removeBotFromMyCollection} /><br></br>
     <BotCollection bots={bots} myBotCollection={myBotCollection} />
   </>
  )
}

export default App;

