import axios from "axios";
import React, { useEffect, useState } from "react";
import Karakter from "./components/Karakter";
import Header from "./components/Header";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((res) => {
        setCharacters(res.data);
        console.log("Data", res.data);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);

  return (
    <div className="App">
      <Header />
      {characters ? (
        characters.map((char) => <Karakter character={char} key={char.name} />)
      ) : (
        <h3>Yükleniyor</h3>
      )}
    </div>
  );
};

export default App;
