import { useState } from "react";

function Header(props) {
  return <h1>{createTitle(props.title)}</h1>;
}

export default function HomePage() {
  const [likes, setLikes] = useState(0);
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  function handleClick() {
    setLikes(likes + 1);
    console.log("Likes: ", likes);
  }

  return (
    <main>
      <Header title="React 💙" />
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Likes ({likes})</button>
    </main>
  );
}

function createTitle(title) {
  if (title) {
    return title;
  } else {
    return "Default title";
  }
}
