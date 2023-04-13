import React from "react";
import styled from "styled-components";
import logo from "../images/logo.png";

const NavBarStyle = styled.header`
  background-color: #8362e0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  border-radius: 10px;
  margin: 10px;
  position: sticky;
  top: 0;
  img {
    width: 84px;
    height: 25px;
  }
`;
const NavBarButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  a {
    margin-left: 60px;
    font-weight: 600;
    text-decoration: none;
    color: white;
  }
`;

function NavBar() {
  return (
    <NavBarStyle>
      <img src={logo} alt="logo" />
      <NavBarButtons>
        <a href="/home">Home</a>
        <a href="/login">Login</a>
        <a href="/home">Contacts</a>
        <a href="/about">About</a>
      </NavBarButtons>
    </NavBarStyle>
  );
}

export default NavBar;
