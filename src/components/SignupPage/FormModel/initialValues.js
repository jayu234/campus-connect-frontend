import model from './model';
const {
  formField: {
    firstName,
    lastName,
    username,
    gender,
    age,
    phone,
    email,
    city,
    password,
    confirmPassword,
    college,
    course,
  }
} = model;

export default {
  [firstName.name]: '',
  [lastName.name]: '',
  [username.name]: '',
  [gender.name]: '',
  [age.name]: '',
  [phone.name]: '',
  [email.name]: '',
  [city.name]: '',
  [password.name]: '',
  [confirmPassword.name]: '',
  [college.name]: '',
  [course.name]: '',
};
