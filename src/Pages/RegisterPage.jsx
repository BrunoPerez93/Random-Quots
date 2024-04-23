import { useState } from "react";
import useForm from "../hooks/useForm";
import { useNavigate } from "react-router-dom";
import InputComponent from "../component/Common/InputComponent";
import ButtonComponent from "../component/Common/ButtonComponent";

const RegisterPage = () => {

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('')

  const { formState, onInputChange } = useForm({
    username: '',
    password: '',
    confirmPass: '',
  })
  const {username, confirmPass, password } = formState;

  const handleRegister = (e) => {
    e.preventDefault();
    if (password === confirmPass) {
      localStorage.setItem('userData', JSON.stringify({username, password}));
      console.log(localStorage.getItem('userData'));
      navigate('/');
    } else {
      setErrorMessage('The passwords dosent match');
    }
  }


  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl text-c-white uppercase">Login</h1>
      <form onSubmit={handleRegister}>
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

        <div className="my-2">
          <InputComponent
            type='password'
            placeholder="Confirm Password"
            name='confirmPass'
            value={confirmPass}
            onChange={onInputChange}
          />
        </div>
        {errorMessage && <p className="text-c-white my-2">{errorMessage}</p>}
        <div className="flex justify-center items-center">
          <ButtonComponent title='Register' />

        </div>
      </form>
    </div>
  )
}
export default RegisterPage;