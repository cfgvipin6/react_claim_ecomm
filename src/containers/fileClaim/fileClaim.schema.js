import * as yup from "yup";

// const validate = () =>
//  Yup.object({
//   name: Yup.string()
//    .min(2, "Must be more then one character")
//    .required("This field is required"),
//   description: Yup.string()
//    .min(10, "Must be more than 10 characters")
//    .required("This field is required"),
//   category: Yup.string().required("This field is required"),
//   price: Yup.number()
//    .positive("Must be more than 0")
//    .integer("Must be more than 0")
//    .required("This field is required"),
//   numberInStock: Yup.number()
//    .integer("Must be more than 0")
//    .required("This field is required")
//  })
export const fileClaimValidate = yup.object({
  purchaseDate: yup
    .date()
    // .default(function () {
    //   return new Date();
    // }),
    .required("required"),
  damagedDevice: yup.string().required("required"),
  brand: yup.string().required("required"),
  deviceType: yup.string().required("required"),
  deviceNickName: yup.string().required("required"),
  modal: yup.string().required("required"),
  purchasePrice: yup
    .number()
    .positive("Must be more than 0")
    .integer("Must be more than 0")
    .required("required"),
  serialNo: yup.string().required("required"),
  stillPossession: yup.string().required("required"),
});
