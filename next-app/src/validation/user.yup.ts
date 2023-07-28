import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('email Required'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(15, 'Too Long!')
    .required('password Required')
});

export const TodoSchema = Yup.object().shape({
  todo: Yup.string().required('ToDo Field Should not be Empty')
});
