import { useFormik } from "formik";
import styled from "styled-components";
// import Wrapper from "../components/Wrapper";
import FormField from "../components/FormField";
import Button from "../components/ButtonWrapper";
import "../pages/register.css";
import { formSchema } from "../schemas/formSchema";

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

const initialValues = {
  username: "",
  firstname: "",
  lastname: "",
  confirmPassword: "",
  password: "",
};
function Login() {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema:formSchema,
      onSubmit: (values) => {
        console.log(values)
      },
    });
  return (
    <RegisterWrapper>
      <header>
        <h2>Register</h2>
      </header>
      <form onSubmit={handleSubmit}>
        <FormField
          title="Username"
          type="text"
          placeholder="Username"
          id="username"
          name="username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.username}
          touch={touched.username}
        />
        <FormField
          title="Firstname"
          type="text"
          placeholder="Firstname"
          id="Firstname"
          name="firstname"
          value={values.firstname}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.firstname}
          touch={touched.firstname}
        />
        <FormField
          title="Lastname"
          type="text"
          placeholder="Lastname"
          id="lastname"
          name="lastname"
          value={values.lastname}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.lastname}
          touch={touched.lastname}
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
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.password}
          touch={touched.password}
        />
        <FormField
          title="Confirm Password"
          type="password"
          placeholder="Re-Enter your Password"
          id="confirmPassword"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.confirmPassword}
          touch={touched.confirmPassword}
        />
        <Button title="Register" />
      </form>
    </RegisterWrapper>
  );
}
export default Login;
