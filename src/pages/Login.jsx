import FormField from "../components/Form_Components/FormField";
import CardStyle from "../components/Form_Components/CardStyle";
import { useFormik } from "formik";
import ButtonWrapper from "../components/Form_Components/ButtonWrapper";
import { formSchema } from "../schemas/formSchema";
import styled from "styled-components";

const Footer = styled.footer`
  margin: 11px;
  display: flex;
  justify-content: center;
  font-size: 10px;
`;

const initialValues = {
  username: "",
  password: "",
};

function Login() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: formSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  return (
    <CardStyle pageName="Login">
      <form onSubmit={handleSubmit}>
        <FormField
          title="Username"
          type="text"
          placeholder="Username"
          value={values.username}
          id="username"
          onChange={handleChange}
          onBlur={handleBlur}
          name="username"
          error={errors.username}
          touch={touched.username}
        />
        <FormField
          title="Password"
          type="password"
          placeholder="Password"
          value={values.password}
          id="password"
          onChange={handleChange}
          onBlur={handleBlur}
          name="password"
          error={errors.password}
          touch={touched.password}
        />
        <ButtonWrapper href="/home" title="Login" />
      </form>
      <Footer>
        Don't Have an Account <a href="/register"> Register</a>
      </Footer>
    </CardStyle>
  );
}
export default Login;
