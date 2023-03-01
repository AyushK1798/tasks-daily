import { useState } from "react";
import Button from "../components/Button";
import FormField from "../components/FormField";
import Wrapper from "../components/Wrapper";

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
    <Wrapper pageName="Login">
      <form onSubmit={onSubmitHandler}>
        <FormField
          title="Username"
          type="text"
          placeholder="Username"
          value={user}
          id="userName"
          onChange={onChangeUserHandler}
          error={userErr}
        />
        <FormField
          title="Password"
          type="password"
          placeholder="Password"
          value={pass}
          id="password"
          onChange={onChangePassHandler}
          error={passErr}
        />
        <Button btnName="Login" />
      </form>
      <p>
        Don't Have an Account <a href="/register"> Register</a>
      </p>
    </Wrapper>
  );
}
export default Login;
