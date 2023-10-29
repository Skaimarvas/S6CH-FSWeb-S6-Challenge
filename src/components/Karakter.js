import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Row = styled.div`
  display: flex;
  align-items: flex-start;
`;
const Col1 = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.22;
  background-color: grey;
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  width: 100%;
  margin-left: 0;
  border-radius: 4px;
`;
const Col2 = styled.div`
  display: flex;
  flex: 0.77;
  color: black;
  background-color: grey;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  padding: 1rem;
  margin: 1rem;
  height: 70vh;
  border-radius: 1rem;
  display: ${(props) => (props.visible ? "block" : "none")};
`;
const Button1 = styled.button`
  border-radius: 1rem;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  &:hover {
    background-color: #e0e0e0;
    color: black;
  }
`;

const Karakter = ({ character }) => {
  const [menuVisible, SetMenuvisible] = useState(false);
  const toggleVisibility = () => {
    SetMenuvisible(!menuVisible);
  };
  return (
    <div>
      <Row>
        <Col1>
          <Col>
            <Button1 onClick={toggleVisibility}>
              {" "}
              <h2>{character.name}</h2>{" "}
            </Button1>
          </Col>
        </Col1>
        <Col2 visible={menuVisible}>
          <Row>
            <Col1>
              <h3>Height: {character.height}</h3>
              <h3>Mass: {character.mass}</h3>
              <h3>Hair Color: {character.hair_color}</h3>
              <h3>Skin Color: {character.skin_color}</h3>
              <h3>Eye Color: {character.eye_color}</h3>
              <h3>Birth Year: {character.birth_year}</h3>
              <h3>Gender: {character.gender}</h3>
            </Col1>

            <p>Films</p>
          </Row>
        </Col2>
      </Row>
    </div>
  );
};

export default Karakter;
