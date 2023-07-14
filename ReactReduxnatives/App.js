import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Auth from '../ReactReduxnatives/screens/auth'
import Todo from '../ReactReduxnatives/screens/todo'
import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducer/authReducer';
import TodoReducer from './reducer/todoReducer';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { addToken } from './reducer/authReducer';

const store = configureStore({
  reducer: {
    user: authReducer,
    todos: TodoReducer
  }
})

function App() {
  const token = useSelector(state => state.user.token)
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

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}


const styles = StyleSheet.create({
  container: {

  },

});
