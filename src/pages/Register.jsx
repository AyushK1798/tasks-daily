import { useState } from "react";
import styled from "styled-components";
// import Wrapper from "../components/Wrapper";
import FormField from "../components/FormField";
import Button from "../components/Button";
import "../pages/register.css";

const RegisterWrapper = styled.div`
  background-color: black;
  margin: auto;
  margin-top: 19px;
  height: 700px;
  width: 400px;
  border-radius: 5px;
  header {
    text-align: center;
    font-size: 20px;
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
    // const isUser = user.trim() === "";
    // const isPass = pass.trim() === "";
    // const isFirstName = firstName.trim() === "";
    // const isLastName = lastName.trim() === "";
    // const isCnfPass = cnfPass.trim() === "";

    if (!user) {
      setUserErr("Please Enter Your Username");
    } else if (user.length < 5) {
      setUserErr("Username should have at least 5 characters");
    }
    if (!firstName) {
      setFirstNameErr("please Enter Your Firstname");
    }
    if (!lastName) {
      setLastNameErr("Please Enter Your Lastname");
    }
    if (!pass) {
      setPassErr("Please Enter New Password");
    } else if (user.length < 5) {
      setPassErr("Password Should have at least 5 characters");
    }
    if (!cnfPass) {
      setCnfPassErr("Please Re-Enter Password");
    } else if (pass !== cnfPass) {
      setCnfPassErr("Password Doesn't Match");
    }

    e.preventDefault();
  };
  return (
    <RegisterWrapper>
      <header>
        <h2>Register</h2>
      </header>
      <form onSubmit={onSubmitHandler}>
        <FormField
          title="Username"
          type="text"
          placeholder="Username"
          id="username"
          value={user}
          onChange={onChangeUserHandler}
          error={userErr}
        />
        <FormField
          title="Firstname"
          type="text"
          placeholder="Firstname"
          id="Firstname"
          value={firstName}
          onChange={onChangeFirstNameHandler}
          error={firstNameErr}
        />
        <FormField
          title="Lastname"
          type="text"
          placeholder="Lastname"
          id="Lastname"
          value={lastName}
          onChange={onChangeLastNameHandler}
          error={lastNameErr}
        />
        <div className="select">
          <select name="slct" id="slct">
            <option value="0">Gender:</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Others</option>
          </select>
        </div>

        <FormField
          title="Password"
          type="Password"
          placeholder="Password"
          id="Password"
          value={pass}
          onChange={onChangePassHandler}
          error={passErr}
        />
        <FormField
          title="Confirm Password"
          type="password"
          placeholder="Re-Enter your Password"
          id="Password"
          value={cnfPass}
          onChange={onChangeCnfPassHandler}
          error={cnfPassErr}
        />
        <Button btnName="Register" />
      </form>
    </RegisterWrapper>
  );
}
export default Login;
