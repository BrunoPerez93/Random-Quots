import useForm from "../hooks/useForm";
import InputComponent from '../component/Common/InputComponent'
import ButtonComponent from "../component/Common/ButtonComponent";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

const LoginPage = () => {

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('')

  const { formState, onInputChange } = useForm({
    username: '',
    password: '',
  })

  const { username, password } = formState;

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem('userData'));
    const lowercaseUsername = username.toLowerCase();
    if (userData && userData.username.toLowerCase() === lowercaseUsername && userData.password === password) {

      localStorage.setItem('authenticated', 'true');
      navigate('/quotes');
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  const handleRegister = () => {
    navigate('/register');
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl text-c-white uppercase">Login</h1>
      <form onSubmit={handleLogin}>
        <div className="my-2">
          <InputComponent
            type='text'
            placeholder="Username"
            name='username'
            value={username}
            onChange={onInputChange}
          />
        </div>

        <div className="my-2">
          <InputComponent
            type='password'
            placeholder="Password"
            name='password'
            value={password}
            onChange={onInputChange}
          />
        </div>
        {errorMessage && <p className="text-c-white my-2">{errorMessage}</p>}
        <div className="flex justify-center items-center">
          <ButtonComponent title='Login' />
          <ButtonComponent title='Register' onClick={handleRegister} />

        </div>
      </form>
    </div>
  )
}

export default LoginPage;