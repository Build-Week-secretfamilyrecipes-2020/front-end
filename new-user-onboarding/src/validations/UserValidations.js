import * as Yup from "yup";

export const formSchema = Yup.object().shape({
  username: Yup.string()
    .required("Must include a username")
    .min(4, "Username must be at least 4 characters long."),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password must be at least 4 characters long."),
});

export const recipeSchema = Yup.object().shape({
  title: Yup.string().required("Must include a title"),

  materials: Yup.string().required("Must include ingredients"),
  instructions: Yup.string(),

  description: Yup.string().required("Please describe your dish"),
  video: Yup.string(),
});
