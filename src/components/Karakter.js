import React from "react";
import styled from "styled-components";

const Karakter = ({ character }) => {
  console.log("Karakter", character.name);
  return (
    <div>
      <h2>Deneme</h2>
      <p>{character.name}</p>
      {console.log("Karakter", character.name)}
    </div>
  );
};

export default Karakter;
