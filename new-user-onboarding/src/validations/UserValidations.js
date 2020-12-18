import * as Yup from "yup";

export const formSchema = Yup.object().shape({
  username: Yup.string()
    .required("Must include a username")
    .min(4, "Username must be at least 4 characters long."),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password must be at least 4 characters long."),
});
