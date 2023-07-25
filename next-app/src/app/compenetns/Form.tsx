'use client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
  useSignUpUserMutation,
  useLoginUserMutation
} from '../../redux/services/api';
import { redirect } from 'next/navigation';
import { Spin } from './subComponents/Spin';
import type { FormValues } from '@/models/user.model';
import { LoginSchema } from '@/validation/user.yup';

const Forms = (props: any) => {
  const initialValues: FormValues = {
    email: '',
    password: ''
  };

  const [updatePost, result] = useSignUpUserMutation();
  const [loginPost, { data, ...results }] =
    useLoginUserMutation();

  console.log(data, results);

  const loginF = async (val: any) => {
    await loginPost(val);
  };

  return (
    <>
      <div className="text-black flex flex-col justify-center items-center h-[79vh] mb-2 w-full p-2">
        <h1 className="text-xl text-orange-400 font-extrabold">
          {props.title}
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={(values: FormValues, { resetForm }) => {
            // same shape as initial values
            if (props.title === 'SignUp') {
              updatePost({ ...values });
            } else {
              loginF(values);
            }
            resetForm();
          }}
        >
          <Form className="w-fit p-1">
            <div className="w-full p-1">
              <div className="flex flex-col mb-2">
                <label htmlFor="email" className="text-xs p-1">
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  className="border-2 border-orange-300 p-2 rounded-md placeholder:text-xs"
                  placeholder="Email"
                />
                <div className="p-1">
                  <ErrorMessage
                    component="div"
                    name="email"
                    className="text-red-500 text-xs"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-2">
                <label
                  htmlFor="password"
                  className="text-xs p-1"
                >
                  Password
                </label>
                <Field
                  name="password"
                  type="password"
                  className="border-2 border-orange-300 p-2 rounded-md placeholder:text-xs"
                  placeholder="Password"
                />
                <div className="p-1">
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-xs"
                  />
                </div>
              </div>
              {results.isLoading ? (
                <Spin />
              ) : results.isSuccess ? (
                redirect('/todo')
              ) : results.isError ? (
                <h1 className="text-red-500 text-xs text-center   ">
                  "Please Enter Valid Credentials"
                </h1>
              ) : null}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-orange-300 rounded-lg text-orange-50 hover:bg-orange-400 p-2"
                >
                  {props.title}
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Forms;
