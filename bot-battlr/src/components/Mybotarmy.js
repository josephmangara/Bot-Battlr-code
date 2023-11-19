import React from "react";

function Mybotarmy({myBots, removeBotFromMyCollection}){

return(
    <>
      <h2 id="my-collection">My collection</h2>
      {myBots.map(bots => (
        <div key={bots.id}>
            <p>{bots.name}</p>
            <img src={bots.avatar_url} alt="bot avatar" id="mybots"></img>
            <button onClick={() => removeBotFromMyCollection(bots)}>Release</button>
        </div>
      ))}
    </>
)
}

export default Mybotarmy;