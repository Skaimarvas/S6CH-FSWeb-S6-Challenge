import React from "react";
import styled from "styled-components";

const Header = () => {
  const Menusec = styled.div`
    background-color: black;
    margin: 1rem;
    opacity: 0.5;
    border-radius: 1rem;
  `;

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

  const Navbar = styled.nav`
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
    color: white;
    vertical-align: middle;
  `;

  const Button1 = styled.button`
    font-size: 1 rem;
  `;
  return (
    <div>
      <Menusec>
        <Navbar>
          <Button1>
            <i class="fa fa-bars" aria-hidden="true"></i>
          </Button1>

          <SearchInput type="text" placeholder="Arama..." />
          <SearchButton>Search</SearchButton>
          <h1 className="Header">Star Wars Evreni</h1>
          <h2> May The Force Be With You! </h2>
        </Navbar>
      </Menusec>
    </div>
  );
};

export default Header;
