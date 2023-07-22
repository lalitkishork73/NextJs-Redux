'use client';
import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

interface InitialVal {
  todo: string;
}
const TodoSchema = Yup.object().shape({
  todo: Yup.string().required('email Required')
});

const Todo = () => {
  const initialValues: InitialVal = {
    todo: ''
  };
  return (
    <>
      <div className=" w-full sm:min-w-min text-black">
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={TodoSchema}
            onSubmit={(values, { resetForm }) => {
              // same shape as initial values
              console.log(values);
              resetForm();
            }}
          >
            <Form className="flex flex-col sm:flex-row sm:justify-center bg-orange-100 w-full p-2">
              <div className="flex flex-col sm:flex-row sm:items-center ">
                <label
                  htmlFor="todo"
                  className="text-sm text-orange-400 p-2 text-center"
                >
                  Todo
                </label>
                <Field
                  className="border-orange-400 border-2 p-2 rounded-lg m-1 "
                  name="todo"
                />
              </div>
              <div className="flex justify-center mt-1">
                <button className="bg-orange-300 text-orange-50 p-2 rounded-lg hover:bg-orange-400">
                  Add ToDo
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Todo;
