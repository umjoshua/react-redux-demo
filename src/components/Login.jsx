import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/user';

function Login() {
  const dispatch = useDispatch();
  return (
    <div className='m-8'>
      <button className="bg-blue-200 border-solid text-2xl"
        onClick={() => { dispatch(login({ name: 'Joshua', age: 20, email: 'umjoshua@gmail.com' })) }}
      >
        Login
      </button>
    </div>
  )
}

export default Login