import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {updateStatus} from '../actions/action'

const Profile = () => {

    const { name, age, status } = useSelector((state) => {
        return state
    })

    const dispatch = useDispatch();

    const updateAge = (age) => {
        dispatch({
            type: 'UPDATE_AGE',
            payload: age
        })
    }

    const updateName = (name) => {
        dispatch({
            type: 'UPDATE_NAME',
            payload: name
        })
    }

    const updateState = (status) => {
        dispatch(updateStatus(status))
    }
    return (
        <>
            <div>
                <h1> I am {name}</h1>
                <h1> My age is {age}</h1>
                <h1> Status is {status}</h1>
                <button onClick={() => {
                    updateAge(20)
                }}>Update Age</button>
                <button onClick={() => {
                    updateName("Vingo")
                }}>Update Name</button>
                <button onClick={() => {
                    updateState("AI")
                }}>Update Status</button>
            </div>
        </>
    )
}

export default Profile