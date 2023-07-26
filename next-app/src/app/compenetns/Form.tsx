'use client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginPost } from '@/api/api';
import { Spin } from './subComponents/Spin';
import type { FormValues } from '@/models/user.model';
import { LoginSchema } from '@/validation/user.yup';
import { useState } from 'react';
import { redirect } from 'next/navigation';

const Forms = (props: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const initialValues: FormValues = {
    email: '',
    password: ''
  };

  const loginF = async (val: any) => {
    const res = await loginPost(val);

    if (res.status) {
      setIsLoading(false);
      setIsSuccess(true);
      setIsError(false);
    } else {
      setIsError(true);
    }
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
            } else {
              setIsLoading(true);
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
              {isLoading ? <Spin /> : null}
              {isSuccess ? redirect('/todo') : null}
              {isError ? (
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
