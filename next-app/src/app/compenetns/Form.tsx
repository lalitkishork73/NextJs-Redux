'use client';
import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

interface FormValues {
  email: string;
  password: string;
}

interface OtherProps {
  message: string;
}

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('email Required'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(15, 'Too Long!')
    .required('password Required')
});

const Forms = (props: any) => {
  const initialValues: FormValues = {
    email: '',
    password: ''
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
          onSubmit={(values, { resetForm }) => {
            // same shape as initial values
            console.log(values);
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
