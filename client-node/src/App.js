import React, { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Auth from './components/auth';
import Todo from './components/Todo';
import { addToken } from './reducer/authReducer';

function App() {
  const token = useSelector((state) => state.user.token)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(addToken())
  }, [])

  return (
    <>
      {
        token ? <Todo /> : <Auth />
      }
    </>
  );
}

export default App;
