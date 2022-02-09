import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😘": "Kiss",
  "🥰": "Smiling Face with Hearts",
  "🤩": "Star-Struck",
  "😡": "Engred Face",
  "💓": "Beating Heart",
  "🥕": "Carrot",
  "🎂": "Birthday",
  "🎁": "Wrapped Gift"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler() {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we dont have this in our database";
    }
    // console.log(event.target.value);
    // console.log(meaning);
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> inside outtt! </h1>
      <input
        placeholder="put an emoji here to know the meaning"
        onChange={emojiInputHandler}
      />
      <h2>{meaning}</h2>

      <h3> emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.3rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
