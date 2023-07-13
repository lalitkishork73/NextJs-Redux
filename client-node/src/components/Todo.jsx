import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { TodoAdd, TodoGet, TodoRemove } from '../reducer/todoReducer'
import { logout } from '../reducer/authReducer'


const Todo = () => {
    const dispatch = useDispatch();
    const [todo, setTodo] = useState('');
    const set = useSelector(state => state?.todo?.data)

    useEffect(() => {
        dispatch(TodoGet())
        console.log("a")
    }, [])
    const addTodo = () => {
        dispatch(TodoAdd({ todo }))
    }

    const removeTodo = (id) => {
        dispatch(TodoRemove(id))
    }


    const list = set?.map((item) => {
        return <li key={item?._id} id={item?._id} onClick={(e) => {
            e.preventDefault()
            removeTodo(item?._id)
        }}>{item?.todo}</li>
    })

    const logOut = () => {
        dispatch(logout())
    }

    return (
        <>
            <div className='container'>
                <h1>Todo</h1>
                <button className='btn' onClick={() => {
                    logOut()
                }}>Logout</button>
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