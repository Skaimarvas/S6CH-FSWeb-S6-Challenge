import React from "react";
import styled from "styled-components";

const Karakter = ({ character }) => {
  console.log("Karakter", character.name);
  const SearchInput = styled.input`
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 250px;
    font-size: 16px;
  `;
  const SearchButton = styled.button`
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    margin-left: 10px;
    cursor: pointer;
  `;

  return (
    <div>
      <h2>{character.name}</h2>
      {console.log("Karakter", character.name)}
    </div>
  );
};

export default Karakter;
