import api from "@api";

const existByEmail = async (email) => {
  const response = await api.user.getUserByEmail(email);
  const data = [...response.data];

  if (data.length > 0) {
    return true;
  } else {
    return false;
  }
};

export const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  checkPolicy: true,
};

export const signUpFormValid = async (values) => {
  const errors = {};
  let isExist = await existByEmail(values.email.toLowerCase());

  if (!values.firstName) {
    errors.firstName = "Required";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  } else if (isExist) {
    errors.email = "The email is registered";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 6) {
    errors.password = "The password at least 6 character";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (values.confirmPassword.length < 6) {
    errors.confirmPassword = "The password at least 6 character";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "The confirm password is incorrect";
  }

  return errors;
};
