export default function validation(data) {
  let errors = {};

  if (!data.username) {
    errors.username = "Name is required";
  } else if (data.username.length < 3) {
    errors.username = "Name must be more than 3 characters.";
  }

  if (!data.email) {
    errors.email = "email is required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "email is invalid";
  }

  if (!data.cell) {
    errors.cell = "cell is required";
  } else if (!/^\d{10}$/.test(data.cell)) {
    errors.cell = "cell number must have 10 digits only";
  }

  if (!data.password) {
    errors.password = "password is required";
  } else if (data.password.length < 8) {
    errors.password = "password must be more than 8 characters.";
  } else if (!/[A-Z]/.test(data.password)) {
    errors.password = "password must have at least one uppercase character";
  } else if (!/[a-z]/.test(data.password)) {
    errors.password = "password must have at least one lowercase character";
  } else if (!/[0-9]/.test(data.password)) {
    errors.password = "password must have at least one number";
  } else if (!/[!@#$%^&*()<>,.?;:'"]/.test(data.password)) {
    errors.password = "password must have at least one special character";
  }

  if (!data.confirmpassword) {
    errors.confirmpassword = "confirmpassword is required";
  } else if (!(data.confirmpassword === data.password)) {
    errors.confirmpassword = "confirmpassword and password must match";
  }

  if (!data.specialist) {
    errors.specialist = "specialist is required";
  }

  if (!data.problem) {
    errors.problem = "enter reson for appointment";
  } else if (data.problem.length < 3) {
    errors.problem = "reson must be more than 3 characters.";
  }

  if (!data.doctorName) {
    errors.doctorName = "select a doctor";
  }

  if (!data.date) {
    errors.date = "select appointment date";
  }

  return errors;
}
