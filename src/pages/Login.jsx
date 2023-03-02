import FormField from "../components/FormField";
import Wrapper from "../components/Wrapper";
import { useFormik } from "formik";
import ButtonWrapper from "../components/ButtonWrapper";
import { formSchema } from "../schemas/formSchema";

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
    <Wrapper pageName="Login">
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
        <ButtonWrapper title="Login" />
      </form>
      <p>
        Don't Have an Account <a href="/register"> Register</a>
      </p>
    </Wrapper>
  );
}
export default Login;
