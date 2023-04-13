import React from "react";
import styled from "styled-components";

const FooterStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: whitesmoke;
  background-color: #8362e0;
  width: auto;
  position: sticky;
  bottom: 0;
  height: 40px;
  margin: 10px;
  border-radius: 10px;
`;

function Footer() {
  return <FooterStyle>Copyright @ 2023</FooterStyle>;
}

export default Footer;
