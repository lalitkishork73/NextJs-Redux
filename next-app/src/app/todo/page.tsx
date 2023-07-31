'use client';
import React from 'react';
import Todos from '../compenetns/Todo';
import Lists from '../compenetns/List';
import { useCookies } from 'react-cookie';
import { useSelector, useDispatch } from 'react-redux';
import { addToken } from '../../redux/features/TodoSlice';

const Todo = () => {
  const cookies = useCookies(['token']);
  const cookie = cookies[0]?.token;
  const dispatch = useDispatch();
  dispatch(addToken(cookie))
  return (
    <>
      <div className="h-full">
        <Todos />
        <Lists />
      </div>
    </>
  );
};

export default Todo;
