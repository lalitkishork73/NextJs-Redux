import React, { useState } from 'react'
import { signupUser, loginUser } from '../reducer/authReducer'
import { useDispatch, useSelector } from 'react-redux'

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [auth, setAuth] = useState('signup')
  const dispatch = useDispatch()

  const { loading, error } = useSelector(state => state.user)


  const authenticate = () => {
    if (auth === 'signup') {
      dispatch(signupUser({ email, password }))
      setEmail('');
      setPassword('');
    } else {
      dispatch(loginUser({ email, password }))
      setEmail('');
      setPassword('');
    }
  }
  return (
    <>
      <div className='container'>

        <h1>Please {auth}</h1>
        <form className='col s6'>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              className='input-field col s12' />
          </div>
          <div>
            <label htmlFor="pass">Password</label>
            <input type="password" name="password" id="pass"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }} />
          </div>
          {
            auth === 'login' ?
              <h6 onClick={() => setAuth('signup')}>Don't have an account?</h6> :
              <h6 onClick={() => setAuth('login')}>Already have an account?</h6>
          }
          {
            loading &&
            <div className="progress">
              <div className="indeterminate"></div>
            </div>

          }
          {
            error &&
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          }
          <div>
            <button className='btn' onClick={(e) => {
              e.preventDefault()
              authenticate()
            }}>{auth}</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Auth