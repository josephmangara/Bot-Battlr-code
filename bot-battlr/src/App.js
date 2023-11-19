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
});{permanentlyDeleteBot()}

const removeBotFromMyCollection = ((bots) => {
  const newBotCollection = myBots.filter(myBot => myBot.id !== bots.id);
  setMyBots(newBotCollection);
})

function permanentlyDeleteBot(botObjects){
  fetch("http://localhost:3000/bots", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body:JSON.stringify(botObjects)
  })
  .then(res => res.json())
  .then(botObjects => console.log(botObjects))
};

  return (
   <div id='body'>
     <Header />
     <Mybotarmy myBots={myBots} removeBotFromMyCollection={removeBotFromMyCollection} /><br></br>
     <BotCollection bots={bots} myBotCollection={myBotCollection} permanentlyDeleteBot={permanentlyDeleteBot}/>
   </div>
  )
}

export default App;

