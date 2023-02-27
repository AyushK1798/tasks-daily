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
`;
function Login() {
  return (
    <LoginWrapper>
      <header>
        <h2>Login</h2>
      </header>
      <main>
        <FormGroup>
          <label>Username</label>
          <input type="text" placeholder="username" />
          <label>Password</label>
          <input type="password" placeholder="password" />
          <button>Login</button>
        </FormGroup>
      </main>
    </LoginWrapper>
  );
}
export default Login;
