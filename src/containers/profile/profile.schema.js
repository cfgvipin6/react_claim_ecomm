import * as yup from "yup";

export const validate = () =>
  yup.object({
    fullName: yup
      .string()
      .min(2, "Must be more then one character")
      .required("This field is required"),
    address: yup
      .string()
      .min(10, "Must be more than 10 characters")
      .max(40, "should not be max 40 characters")
      .required("This field is required"),
    emailAddress: yup.string().email('Invalid email').required("This field is required"),
    contactNumber: yup
      .number()
      .positive("Must be more than 0")
      .min(10, "Must be min 10")
      // .max(11, "Must be max 10")
      .required("This field is required"),
    password: yup.string().min(6).required("This field is required"),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password"), null], "Password must be match"),
  });
