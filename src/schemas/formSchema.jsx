import * as Yup from "yup";

export const formSchema = Yup.object({
  username: Yup.string().min(5).max(10).required("Please Enter your Username"),
  password: Yup.string().min(4).required("Please Enter Your Password"),
  firstname: Yup.string().min(5).max(10).required("Please Enter your Username"),
  lastname: Yup.string().min(5).max(10).required("Please Enter your Username"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password Must Match"),
});
