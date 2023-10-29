import axios from "axios";
import React, { useEffect, useState } from "react";
import Karakter from "./components/Karakter";
import Header from "./components/Header";
import styled from "styled-components";

const Menu = styled.div`
  display: border-box;
  border: 1px solid lime;
  margin: 0 1rem;

  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState(null);
  const [menuVisible, SetMenuvisible] = useState(false);

  const toggleVisibility = () => {
    SetMenuvisible(!menuVisible);
  };

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people")
      .then((res) => {
        setCharacters(res.data.results);
        console.log("Data", res.data);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);

  return (
    <div className="App">
      <Header toggleVisibility={toggleVisibility} />

      <Menu visible={menuVisible}>
        {characters ? (
          characters.map((char) => (
            <Karakter character={char} key={char.name} />
          ))
        ) : (
          <h3>Yükleniyor</h3>
        )}
      </Menu>
    </div>
  );
};

export default App;
