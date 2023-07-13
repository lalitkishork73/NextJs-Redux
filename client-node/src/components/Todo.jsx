import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { TodoAdd,TodoGet } from '../reducer/todoReducer'

const Todo = () => {
    const dispatch = useDispatch();
    const [todo, setTodo] = useState('');

    useEffect(()=>{

    },[])
    const addTodo = () => {
        dispatch(TodoAdd({ todo }))
    }

    const set = useSelector(state => state.todo.data)

    /*  const fruits = [
         'Apple',
         'Mango',
         'Banana',
         'GFG'
     ]; */
    const list = set.map((i) => {
        return <li key={1}>{JSON.stringify(i)}</li>
    })
    return (
        <>
            <div className='container'>
                <h1>Todo</h1>
                <div>
                    <label htmlFor="todo">Todo</label>
                    <input type="text" name="todo" id="todo"
                        placeholder='Enter Your todo'
                        value={todo}
                        onChange={(e) => {
                            setTodo(e.target.value)
                        }} />
                </div>
                <div>
                    <button className='btn' onClick={() => {
                        addTodo()
                    }}>Add Todo</button>
                </div>
                <div>
                    {list}
                </div>
            </div>
        </>
    )
}

export default Todo