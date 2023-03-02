import styled from "styled-components";

const LoginWrapper = styled.div`
  background-color: black;
  margin: auto;
  margin-top: 180px;
  height: 400px;
  width: 22%;
  border-radius: 5px;
  header {
    text-align: center;
    font-size: 20px;
  }
  p {
    margin: 15px;
    font-size: 10px;
  }
`;

function Wrapper(props) {
  return (
    <LoginWrapper>
      <header>
        <h2> {props.pageName} </h2>
      </header>
      {props.children}
    </LoginWrapper>
  );
}
export default Wrapper;
