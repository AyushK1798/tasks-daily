import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  input {
    height: 35px;
    background-color: transparent;
    border: 1px solid #54525278;
    margin-top: 9px;
    border-radius: 3px;
    color: whitesmoke;
  }
  label {
    margin-top: 15px;
  }
`;
function FormField(props) {
  return (
    <Div>
      <label>{props.title}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        id={props.id}
        onChange={props.onChange}
        name= {props.name}
        onBlur={props.onBlur}
      />
      {props.error && props.touch ? (
        <span style={{ color: "#EB455F", fontSize: 10 }}>{props.error}</span>
      ): null }
    </Div>
  );
}
export default FormField;
