import { useFormik } from "formik";
import styled from "styled-components";
// import Wrapper from "../components/Wrapper";
import FormField from "../components/Form_Components/FormField";
import Button from "../components/Form_Components/ButtonWrapper";
import CardStyle from "../components/Form_Components/CardStyle";
import { formSchema } from "../schemas/formSchema";

const GenderField = styled.div`
  margin: 10px;

  div {
    display: flex;
    label,
    input {
      margin-top: 9px;
      cursor: pointer;
    }
    input {
      margin-right: 30px;
      font-size: 50px;
      height: 1.2rem;
      width: 1.2rem;
    }
    label {
      margin-right: 5px;
      font-size: 13px;
    }
  }
`;

const Footer = styled.footer`
  margin: 11px;
  display: flex;
  justify-content: center;
  font-size: 10px;
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
      validationSchema: formSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  return (
    <CardStyle pageName="Register" fullWidth>
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

        <GenderField>
          <p style={{ margin: "16px 0 0" }}>Gender</p>
          <div>
            <label for="male">Male</label>
            <input type="radio" name="gender" id="male" value="male" />

            <label for="female">Female</label>
            <input type="radio" name="gender" id="female" value="female" />

            <label for="others">Others</label>
            <input type="radio" name="gender" id="others" value="others" />
          </div>
        </GenderField>

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
        <Button href="/login" title="Register" />
      </form>
      <Footer>
        Already have An Account ? <a href="/login"> Login</a>
      </Footer>
    </CardStyle>
  );
}
export default Login;
