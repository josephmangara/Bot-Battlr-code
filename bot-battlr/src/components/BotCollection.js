
export default function BotCollection({bots}){


return (
    <>
      <ul>
        {bots.map(bots => (
            <li key={bots.id}>
              <p>{bots.name}</p>
              <p>{bots.health}</p>
              <p>{bots.armor}</p>
              <p>{bots.damage}</p>
              <p>{bots.bot_class}</p>
              <p>{bots.catchphrase}</p>
              <img src={bots.avatar_url} alt="bot avatar"></img>
            </li>
        ))}
      </ul>
    </>
)
}