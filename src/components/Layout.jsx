import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  min-height: 100%;
  margin: auto;
`;

function Layout() {
  return (
    <Container>
      <NavBar />
      <Outlet />
      <Footer />
    </Container>
  );
}

export default Layout;
