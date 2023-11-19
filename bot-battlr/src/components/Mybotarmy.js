import React from "react";

function Mybotarmy({myBots, removeBotFromMyCollection}){

return(
    <div id="myBots">
      <h2>My collection</h2>
      <ul id="my-collection">
      {myBots.map(bots => (
        <li key={bots.id} className="newbots">
            <img onClick={() => removeBotFromMyCollection(bots)} src={bots.avatar_url} alt="bot avatar" id="mybots"></img>
            <p>Name: {bots.name}</p>
            <p>Health: {bots.health}</p>
            <p>Armor: {bots.armor}</p>
            <p>Damage: {bots.damage}</p>
            <p>Class: {bots.bot_class}</p>
            <p>Catchphrase: {bots.catchphrase}</p>
            {/* <button onClick={() => removeBotFromMyCollection(bots)}>Remove</button> */}
        </li>
      ))}
      </ul>
    </div>
)
}

export default Mybotarmy;