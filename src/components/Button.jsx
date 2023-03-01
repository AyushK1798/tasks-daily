import styled from "styled-components";

const Btn = styled.div`
  button {
    width: 95%;
    margin-left: 9px;
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
`;

function Button(props) {
  return (
    <Btn>
      <button>{props.btnName}</button>
    </Btn>
  );
}
export default Button;
