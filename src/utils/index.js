import * as yup from "yup";
export const validationSchema = yup.object().shape({
    title: yup.string().required("Title is Required!"),
    date: yup.string().required("Date is Required!"),
    discription: yup.string().required("Discription is Required!"),
  });