import styled from "styled-components";

const ButtonStyle = styled.div`
  button {
    width: 95%;
    margin:10px;
    height: 35px;
    background-color: #222222;
    border-radius: 3px;
    color: whitesmoke;
    margin-top: 20px;
    font-size: 15px;
    border: none;
  }
  button:hover {
    background-color: #000;
    border: 1px solid #fff;
  }
  button a{
    color: white;
    text-decoration: none;
  }
`;

function ButtonWrapper(props) {
  return (
    <ButtonStyle>
      <button type="submit" onClick={props.onClick}><a href={props.href}>{props.title}</a></button>
    </ButtonStyle>
  );
}
export default ButtonWrapper;
