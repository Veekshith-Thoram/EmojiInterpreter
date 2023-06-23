import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🤣": "Smile",
  "😥": "Sad",
  "😉": "Wink",
  "❣️": "Love",
  "🤩": "Excited"
};

export default function App() {
  // const [likeCounter, setLikeCounter] = useState(0);
  const [name, setName] = useState("");

  const inputClickHandler = (event) => {
    const inputEmoji = event.target.value;
    if (inputEmoji in emojiDictionary) {
      setName(emojiDictionary[inputEmoji]);
    } else {
      setName("We dont have this in our database");
    }
  };

  var emojisWeKnow = Object.keys(emojiDictionary);
  // console.log(emojisWeKnow)
  const clickHandler = (item) => {
    setName(emojiDictionary[item]);
  };

  return (
    <div className="App">
      <h1>Interpreter</h1>
      <input type="text" onChange={inputClickHandler} />
      <div>
        {emojisWeKnow.map((item) => {
          return (
            <span
              key={item}
              style={{ cursor: "pointer" }}
              onClick={() => clickHandler(item)}
            >
              {item}
            </span>
          );
        })}
      </div>
      <div>{name}</div>
    </div>
  );
}
