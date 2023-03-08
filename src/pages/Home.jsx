import styled from "styled-components";
import logo from "../images/logo.png";
import bg from "..//images/bg.jpg";


const NavBar = styled.div`
  background-color: #8362e0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  border-radius: 10px;
  margin: 10px;
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

const Main= styled.div`
  display: flex;
  margin: 50px;
  justify-content: center;
  img{
    width: 500px;
    height: 300px;
    border: 50px solid #8362e0;
    border-radius: 20px;
  }
  p{
    margin-top: 50px;
    color: black;
    font-size: 30px;
    font-weight: 700;
   
  }
`;

function Home() {
  return (
    <div>
      <header>
        <NavBar className="navBar">
          <img src={logo} alt="logo" />
          <NavBarButtons>
            <a href="/home">Home</a>
            <a href="/login">Login</a>
            <a href="/home">Contacts</a>
            <a href="/about">About</a>
          </NavBarButtons>
        </NavBar>
      </header>
      <Main>
        <p>
          From Trains , Movies and hotels to tours and activities, we've got you covered.
          So why wait? Start planning your next adventure today and book with
          us!
        </p>
        <img src={bg} alt="bg"/>
          
      </Main>
    </div>
  );
}
export default Home;
