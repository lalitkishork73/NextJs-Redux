import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { fetchName } from '../actions/action'
import { updateAge, updateName, updateStatus, FetchUser } from '../reducer/userReducer';

function OnlineProf() {

    const [count, setCount] = useState(0);

    const { name, age, status } = useSelector(state => state)

    const dispatch = useDispatch();

    const ChangeName = (c) => {
        // dispatch(fetchName(c));
        /*  const res = await fetch('https://jsonplaceholder.typicode.com/users')
         const result = await res.json()
         dispatch(updateName(result[c].name)); */
        dispatch(FetchUser(c))

    }

    return (
        <>
            <div>
                <h1>Online Data Fetching using Redux tool-kit</h1>

                <div>
                    <h1>My name is {name}</h1>
                    <h1>my age is {age}</h1>
                    <h1>my status is {status}</h1>
                    <input type="number" placeholder='Add number 0-9'
                        value={count}
                        onChange={(e) => {
                            setCount(e.target.value)
                        }} />
                    <button onClick={() => {
                        ChangeName(count)
                    }}>Change name</button>
                    <button>Change age</button>
                    <button>Change status</button>
                </div>
            </div>
        </>
    )
}

export default OnlineProf