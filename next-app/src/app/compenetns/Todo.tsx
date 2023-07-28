'use client';
import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useCreateTodoMutation } from '../../redux/services/api';
import { TodoType } from '@/models/user.model';
import { TodoSchema } from '@/validation/user.yup';

const Todo = () => {
  const initialValues: TodoType = {
    todo: ''
  };

  const [AddTodoRedux, result] = useCreateTodoMutation();

  const AddTodo = (data: TodoType) => {
    AddTodoRedux(data);
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
