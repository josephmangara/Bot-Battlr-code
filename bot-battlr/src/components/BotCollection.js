
export default function BotCollection({bots, myBotCollection, permanentlyDeleteBot}){


return (
    <>
      <div id="bots-display">
      <ul id="columns">
        {bots.map(bots => (
            <li key={bots.id} className="bots">
              <img onClick={() => myBotCollection(bots)} src={bots.avatar_url} alt="bot avatar" id="mybots"></img>
              <p>Name: {bots.name}</p>
              <p>Health: {bots.health}</p>
              <p>Armor: {bots.armor}</p>
              <p>Damage: {bots.damage}</p>
              <p>Class: {bots.bot_class}</p>
              <h6 id="discharge-bot">
                <button id="btn" onClick={() => permanentlyDeleteBot(bots)}>X</button>
                <p>Discharge bot from service</p>
              </h6>
              {/* <button onClick={() => myBotCollection(bots)}>Add to my collection</button> */}
            </li>
        ))}
      </ul>
      </div>
    </>
)
}