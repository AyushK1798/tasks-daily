import * as Yup from "yup";

export const registerSchema = Yup.object({
    username: Yup.string().min(5).max(10).required("Please Enter your Username"),
    firstname: Yup.string().min(5).max(10).required("Please Enter your Username"),
    lastname: Yup.string().min(5).max(10).required("Please Enter your Username"),
    password: Yup.string().min(4).required("Please Enter Your Password"),
    confirmPassword: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "Password Must Match"),
  });
  