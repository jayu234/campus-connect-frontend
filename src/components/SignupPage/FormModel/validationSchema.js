import * as Yup from 'yup';
import moment from 'moment';
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
    interest
  }
} = model;

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const pwdRegExp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export default [
  Yup.object().shape({
    [firstName.name]: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required(`${firstName.requiredErrorMsg}`),
    [lastName.name]: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required(`${lastName.requiredErrorMsg}`),
    [username.name]: Yup.string().min(3, 'Too Short!').max(15, 'Too Long!').required(`${lastName.requiredErrorMsg}`),
    [gender.name]: Yup.string().required(`${gender.requiredErrorMsg}`),
    [age.name]: Yup.number().positive().integer().required(`${age.requiredErrorMsg}`),
    
  }),
  Yup.object().shape({
    [phone.name]: Yup.string().length(10, 'Invalid contanct no.').matches(phoneRegExp, 'Invalid contanct no.').required(`${phone.requiredErrorMsg}`),
    [email.name]: Yup.string().matches(emailRegExp, 'Invalid email').required(`${email.requiredErrorMsg}`),
    [password.name]: Yup.string().matches(pwdRegExp, password.invalidErrorMsg).required(`${password.requiredErrorMsg}`),
    [confirmPassword.name]: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match.'),
  }),
  Yup.object().shape({
    [college.name]: Yup.string().required(`${college.requiredErrorMsg}`),
    [course.name]: Yup.string().required(`${course.requiredErrorMsg}`),
    [city.name]: Yup.string().nullable().required(`${city.requiredErrorMsg}`),
  })
];
