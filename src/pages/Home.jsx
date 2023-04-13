import styled from "styled-components";
import bg from "..//images/bg.jpg";

const Main = styled.div`
  display: flex;
  margin: 50px;
  justify-content: center;
  img {
    width: 500px;
    height: 300px;
    border: 50px solid #8362e0;
    border-radius: 20px;
  }
  p {
    margin-top: 50px;
    color: black;
    font-size: 30px;
    font-weight: 700;
  }
`;

function Home() {
  return (
    <Main>
      <p>
        From Trains , Movies and hotels to tours and activities, we've got you
        covered. So why wait? Start planning your next adventure today and book
        with us!
      </p>
      <img src={bg} alt="bg" />
    </Main>
  );
}
export default Home;
