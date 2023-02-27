import { useState } from "react";
import styled from "styled-components";

const LoginWrapper = styled.div`
  background-color: black;
  margin: auto;
  margin-top: 180px;
  height: 325px;
  width: 22%;
  border-radius: 5px;
  header {
    text-align: center;
    font-size: 20px;
  }
`;
const FormGroup = styled.form`
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
  button {
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
function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [userErr, setUserErr] = useState("");
  const [passErr, setPassErr] = useState("");

  const onChangeUserHandler = (e) => {
    const value = e.target.value;

    setUser(value);
    console.log(setUser);
    setUserErr("");
  };
  const onChangePassHandler = (e) => {
    const value = e.target.value;
    setPass(value);
    console.log(setPass);
    setPassErr("");
  };
  const onSubmitHandler = (e) => {
    const isUser = user.trim() === "";
    const isPass = pass.trim() === "";
    if (isUser) {
      setUserErr("Please enter Your Username");
    }
    if (isPass) {
      setPassErr("please Enter Your Password");
    }
    e.preventDefault();
  };
  return (
    <LoginWrapper>
      <header>
        <h2>Login</h2>
      </header>

      <FormGroup onSubmit={onSubmitHandler}>
        <label For="username">Username</label>
        <input
          type="text"
          placeholder="username"
          value={user}
          id="username"
          onChange={onChangeUserHandler}
        />
        {userErr.length > 0 && (
          <span style={{ color: "#EB455F", fontSize: 10 }}>{userErr}</span>
        )}
        <label for="password">Password</label>
        <input
          type="password"
          placeholder="password"
          id="password"
          value={pass}
          onChange={onChangePassHandler}
        />
        {passErr.length > 0 && (
          <span style={{ color: "#EB455F", fontSize: 10 }}>{passErr}</span>
        )}
        <button>Login</button>
      </FormGroup>
    </LoginWrapper>
  );
}
export default Login;
