import axios from "axios";
import React, { useEffect, useState } from "react";
import Karakter from "./components/Karakter";
import Header from "./components/Header";
import styled from "styled-components";
import Ozellik from "./components/Ozellik";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState(null);

  const Row = styled.div`
    display: flex;
    flex-direction: row;
  `;
  const Col = styled.div`
    display: flex;
    flex: 0.22;
    flex-direction: column;
    color: black;
    background-color: grey;
    opacity: 0.4;
    padding: 1rem;
    margin: 1rem;
    border-radius: 4px;
    visibility: hidden;
  `;
  const Col2 = styled.div`
    display: flex;
    flex: 0.78;
    flex-direction: column;
    color: black;
    background-color: grey;
    opacity: 0.4;
    padding: 1rem;
    margin: 1rem;
    border-radius: 1rem;
  `;

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people")
      .then((res) => {
        setCharacters(res.data);
        console.log("Data", res.data.results);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);

  return (
    <div className="App">
      <Header />

      <Row>
        <Col>
          {/* {characters ? (
            characters.map((char) => (
              <Karakter character={char} key={char.name} />
            ))
          ) : (
            <h3>Yükleniyor</h3>
          )} */}
        </Col>
        <Col2>
          {/* <Ozellik ozellik={characters ? characters[0] : null} /> */}
        </Col2>
      </Row>
    </div>
  );
};

export default App;
