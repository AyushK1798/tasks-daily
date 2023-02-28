import { useState } from "react";
import styled from "styled-components";

const LoginWrapper = styled.div`
  background-color: black;
  margin: auto;
  margin-top: 19px;
  height: 650px;
  width: 350px;
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
const GenderSelector = styled.div`
  display: flex;
  flex-direction: column;
  select {
    margin-top: 9px;
    width: 50%;
    background-color: transparent;
    color: whitesmoke;
    border-radius: 5px;
    height: 35px;
    border: 1px solid #54525278;
  }
`;
function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [cnfPass, setCnfPass] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userErr, setUserErr] = useState("");
  const [passErr, setPassErr] = useState("");
  const [cnfPassErr, setCnfPassErr] = useState("");
  const [firstNameErr, setFirstNameErr] = useState("");
  const [lastNameErr, setLastNameErr] = useState("");

  const onChangeUserHandler = (e) => {
    const value = e.target.value;
    setUser(value);
    console.log(setUser);
    setUserErr("");
  };
  const onChangePassHandler = (e) => {
    const value = e.target.value;
    setPass(value);
    setPassErr("");
  };
  const onChangeFirstNameHandler = (e) => {
    const value = e.target.value;
    setFirstName(value);
    setFirstNameErr("");
  };
  const onChangeCnfPassHandler = (e) => {
    const value = e.target.value;
    setCnfPass(value);
    setCnfPassErr("");
  };
  const onChangeLastNameHandler = (e) => {
    const value = e.target.value;
    setLastName(value);
    setLastNameErr("");
  };
  const onSubmitHandler = (e) => {
    const isUser = user.trim() === "";
    const isPass = pass.trim() === "";
    const isFirstName = firstName.trim() === "";
    const isLastName = lastName.trim() === "";
    const isCnfPass = cnfPass.trim() === "";

    if (isUser) {
      setUserErr("Please Enter Your Username");
    }
    if (isFirstName) {
      setFirstNameErr("please Enter Your Firstname");
    }
    if (isLastName) {
      setLastNameErr("Please Enter Your Lastname");
    }
    if (isPass) {
      setPassErr("Please Enter New Password");
    }
    if (isCnfPass) {
      setCnfPassErr("Please confirm Password");
    }

    e.preventDefault();
  };
  return (
    <LoginWrapper>
      <header>
        <h2>Register</h2>
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
        <label for="firstname">Firstname</label>
        <input
          type="text"
          placeholder="firstname"
          id="firstname"
          value={firstName}
          onChange={onChangeFirstNameHandler}
        />
        {firstNameErr.length > 0 && (
          <span style={{ color: "#EB455F", fontSize: 10 }}>{firstNameErr}</span>
        )}
        <label for="lastname">Lastname</label>
        <input
          type="text"
          placeholder="lastname"
          id="lastname"
          value={lastName}
          onChange={onChangeLastNameHandler}
        />
        {lastNameErr.length > 0 && (
          <span style={{ color: "#EB455F", fontSize: 10 }}>{lastNameErr}</span>
        )}
        <GenderSelector>
          <label>Gender</label>
          <select name="Gender">
            <option className="option" value="Male">
              Male
            </option>
            <option className="option" value="Female">
              Female
            </option>
            <option className="option" value="Others">
              Others
            </option>
          </select>
        </GenderSelector>

        <label for="password">Password</label>
        <input
          type="passowrd"
          placeholder="password"
          id="password"
          value={pass}
          onChange={onChangePassHandler}
        />
        {passErr.length > 0 && (
          <span style={{ color: "#EB455F", fontSize: 10 }}>{passErr}</span>
        )}
        <label for="cnfPassword">Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm Password"
          id="cnfPassword"
          value={cnfPass}
          onChange={onChangeCnfPassHandler}
        />
        {cnfPassErr.length > 0 && (
          <span style={{ color: "#EB455F", fontSize: 10 }}>{cnfPassErr}</span>
        )}
        <button>Login</button>
      </FormGroup>
    </LoginWrapper>
  );
}
export default Login;
